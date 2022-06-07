# ALEC UI

## ALEC is a plugin

ALEC extends the OpenNMS UI by leveraging facilities exposed by the [Plugin API (OIA)](https://github.com/OpenNMS/opennms-integration-api).

ALEC is the first supported plugin to take advantage of these facilities and is intended to serve as a functional example of an externally managed plugin providing a sophisticated experience.

## Structure

The tree for the frontend (FeatherDS + Vue3) code, can be found is located in the `ui/` folder at the root of the repository.

REST APIs and integration code that exposes the static assets to the runtime are located in `features/ui/`.

A Karaf feature named `alec-ui` is provided to install the UI OSGi bundle.
This is installed automatically with `alec-opennms-standalone`.

## Running in OpenNMS (Horizon 30.x)

From terminal:
```
% ssh -p 8101 admin@localhost
Warning: Permanently added '[localhost]:8101' (RSA) to the list of known hosts.
Password authentication
(admin@localhost) Password: 

   ____                   _   _ __  __  _____  
  / __ \                 | \ | |  \/  |/ ____| 
 | |  | |_ __   ___ _ __ |  \| | \  / | (___   
 | |  | | '_ \ / _ \ '_ \| . ` | |\/| |\___ \  
 | |__| | |_) |  __/ | | | |\  | |  | |____) | 
  \____/| .__/ \___|_| |_|_| \_|_|  |_|_____/  
        | |                                    
        |_|                                    

  OpenNMS (30.0.0-SNAPSHOT) on Apache Karaf (4.3.6)

Hit '<tab>' for a list of available commands
and '[cmd] --help' for help on a specific command.
Hit '<ctrl-d>' to exit this console.
admin@opennms()>
```

In OpenNMS Karaf shell:
```
admin@opennms()> feature:repo-add mvn:org.opennms.alec/alec-karaf-features/3.0.0-SNAPSHOT/xml                                                                                                          
Adding feature url mvn:org.opennms.alec/alec-karaf-features/3.0.0-SNAPSHOT/xml
admin@opennms()> feature:install alec-opennms-standalone 
admin@opennms()> health-check                                                                                                                                                                          
Verifying the health of the container

Verifying installed bundles                    [ Success  ]
ALEC :: Driver                                 [ Success  ] => Tick duration (99 percentile): 0 ms
Connecting to ElasticSearch ReST API (Flows)   [ Success  ] => Not configured

=> Everything is awesome
admin@opennms()>                                                                                                   
```

## Updating the UI in OpenNMS

In OpenNMS Karaf shell:
```
admin@opennms()> bundle:watch *
Watched URLs/IDs: 
*                                                                                             
```

From terminal:
```
% cd ui/
% yarn build
yarn run v1.22.18
warning package.json: No license field
$ vue-tsc --noEmit && vite build

vite v2.9.5 building for production...
✓ 8 modules transformed.
dist/style.css           0.46 KiB / gzip: 0.27 KiB
dist/uiextension.es.js   745.10 KiB / gzip: 561.74 KiB
dist/uiextension.umd.js   742.92 KiB / gzip: 561.49 KiB
✨  Done in 15.34s.
% cp -R dist/* ../features/ui/src/main/resources/ui-ext
% cd ../features/ui
% mvn clean install
...
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  5.570 s
[INFO] Finished at: 2022-06-03T21:44:26-04:00
[INFO] ------------------------------------------------------------------------
```

In browser:
Refresh page

## Running UI standalone

Ensure CORS is configured in OpenNMS to be able to make API calls

```
% yarn dev
  vite v2.9.5 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 318ms.

```

In browser:
http://localhost:3000/

> This is currently broken, but worth fixing

## Enabling CORS

Uncomment this block in `jetty-webapps/opennms/WEB-INF/web.xml` and restart OpenNMS:
```
  <!--
  <filter-mapping>
    <filter-name>CORS Filter</filter-name>
    <url-pattern>/api/v2/*</url-pattern>
  </filter-mapping>
  <filter-mapping>
    <filter-name>CORS Filter</filter-name>
    <url-pattern>/rest/*</url-pattern>
  </filter-mapping>
  <filter-mapping>
    <filter-name>CORS Filter</filter-name>
    <url-pattern>/nrt/*</url-pattern>
  </filter-mapping>
  -->
```

## Updating UI artifacts during development

After running `yarn build` in `ui/`, copy the artifacts from `ui/dist/` to `features/ui/src/main/resources/ui-ext/`.

Then rebuild the `features/ui/` bundle and reload it in the runtime.

> Use `bundle:watch` in the Karaf shell for hot reloads.

## TODO

### Standalone UI

*Success criteria*

Be able to run the UI standalone outside of OpenNMS with `vite` or similar

### Integrate UI into build pipeline

*Success criteria*

We don't need to commit compile and minified UI artifacts to the tree

*Ideas*

We can integrate with the Maven build so that everything  builds cleanly when running `mvn clean install`

We use [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin) to do this in OpenNMS
