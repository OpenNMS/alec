export async function doHook() {
    const response = await fetch('/opennms/rest/alec/hook', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({})
    })
    return await response.json();
}
