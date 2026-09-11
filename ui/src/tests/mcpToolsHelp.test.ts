import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import McpToolsHelp from '@/components/McpToolsHelp.vue'
import McpFlowDiagram from '@/components/McpFlowDiagram.vue'

test('McpFlowDiagram is an accessible SVG showing the endpoint path', () => {
	const wrapper = mount(McpFlowDiagram, {
		props: { endpointPath: '/opennms/rest/mcp' }
	})
	const svg = wrapper.find('svg[data-test="mcp-flow-diagram"]')
	expect(svg.exists()).toBe(true)
	expect(svg.attributes('role')).toBe('img')
	expect(svg.attributes('aria-label')).toContain('ALEC MCP tool loop')
	// No <title>: browsers render it as a hover tooltip over the diagram.
	expect(svg.find('title').exists()).toBe(false)
	expect(svg.text()).toContain('POST /opennms/rest/mcp')
	// The main actors are all drawn.
	for (const label of [
		'Root Cause Analysis',
		'LLM clustering',
		'Chat tool loop',
		'MCP tool registry',
		'LLM server',
		'External MCP client'
	]) {
		expect(svg.text()).toContain(label)
	}
})

test('McpFlowDiagram falls back to the default endpoint path', () => {
	const wrapper = mount(McpFlowDiagram)
	expect(wrapper.text()).toContain('POST /opennms/rest/mcp')
})

test('McpToolsHelp explains the flow and lists tools with availability', () => {
	const wrapper = mount(McpToolsHelp, {
		props: {
			endpointUrl: 'http://nms:8980/opennms/rest/mcp',
			status: {
				toolsEnabled: true,
				opennmsRestConfigured: false,
				opennmsUrl: 'http://localhost:8980/opennms',
				endpointPath: '/opennms/rest/mcp',
				nativeServerInstalled: true,
				tools: [
					{ name: 'get_node', description: 'Node inventory', available: true },
					{ name: 'get_metric_series', description: 'Metrics', available: false }
				],
				stats: {
					sinceMs: 0,
					toolCalls: 0,
					toolErrors: 0,
					rate1m: 0,
					rate5m: 0,
					byConsumer: {},
					byTool: {}
				}
			}
		}
	})
	const text = wrapper.text()
	expect(text).toContain('Model Context Protocol')
	expect(text).toContain('tool_choice: required')
	expect(text).toContain('report_suggestions')
	expect(wrapper.find('[data-test="llm-tools-endpoint"]').text()).toBe(
		'http://nms:8980/opennms/rest/mcp'
	)
	const list = wrapper.find('[data-test="llm-tools-list"]')
	expect(list.text()).toContain('get_node')
	expect(list.text()).toContain('get_metric_series')
	expect(list.text()).toContain('needs the OpenNMS login')
	expect(wrapper.findComponent(McpFlowDiagram).exists()).toBe(true)
})

test('McpToolsHelp renders without a status (bundle not installed yet)', () => {
	const wrapper = mount(McpToolsHelp, {
		props: { endpointUrl: 'http://x/opennms/rest/mcp', status: null }
	})
	expect(wrapper.find('[data-test="llm-tools-list"]').exists()).toBe(false)
	expect(wrapper.findComponent(McpFlowDiagram).exists()).toBe(true)
})

test('McpToolsHelp warns when the OpenNMS MCP server is not active and flags write tools', () => {
	const wrapper = mount(McpToolsHelp, {
		props: {
			endpointUrl: 'http://x/opennms/rest/mcp',
			status: {
				toolsEnabled: true,
				opennmsRestConfigured: true,
				opennmsUrl: 'http://localhost:8980/opennms',
				endpointPath: '/opennms/rest/mcp',
				nativeServerInstalled: false,
				tools: [
					{ name: 'get_situation', description: 'One situation', available: true, source: 'alec' },
					{
						name: 'acme_reboot_device',
						description: 'Reboot a device (third-party plugin)',
						available: false,
						writeAccess: true,
						source: 'com.acme.opennms.plugin'
					}
				],
				stats: { sinceMs: 0, toolCalls: 0, toolErrors: 0, rate1m: 0, rate5m: 0, byConsumer: {}, byTool: {} }
			}
		}
	})
	expect(wrapper.find('[data-test="llm-tools-native-missing"]').text()).toContain(
		'feature:install opennms-mcp-server'
	)
	const list = wrapper.find('[data-test="llm-tools-list"]').text()
	expect(list).toContain('never offered to the model')
	expect(list).toContain('[com.acme.opennms.plugin]')
	expect(list).not.toContain('[alec]')
})
