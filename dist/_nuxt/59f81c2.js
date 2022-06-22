/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{428:function(t,e,n){"use strict";n.r(e);var r=n(377),o=n(77),c=n(18),l=n(83),m=n(67);n(379);const d="@firebase/performance",f="0.5.10",h=f,v="FB-PERF-TRACE-MEASURE",_="_wt_",E="_fcp",T="_fid",w="@firebase/performance/config",y="@firebase/performance/configexpire",I="Performance",S={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},A=new c.b("performance",I,S),M=new l.b(I);let N,k,R,O;M.logLevel=l.a.INFO;class U{constructor(t){if(this.window=t,!t)throw A.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){this.performance&&this.performance.mark&&this.performance.mark(t)}measure(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)}getEntriesByType(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]}getEntriesByName(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&Object(c.e)()?!!Object(c.C)()||(M.info("IndexedDB is not supported by current browswer"),!1):(M.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(t,e){if(!this.PerformanceObserver)return;new this.PerformanceObserver((t=>{for(const n of t.getEntries())e(n)})).observe({entryTypes:[t]})}static getInstance(){return void 0===N&&(N=new U(k)),N}}function C(){return R}function P(t,e){const n=t.length-e.length;if(n<0||n>1)throw A.create("invalid String merger input");const r=[];for(let i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}class B{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=P("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=P("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===O&&(O=new B),O}}var F;!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"}(F||(F={}));const j=["firebase_","google_","ga_"],D=new RegExp("^[a-zA-Z]\\w*$");function $(){const t=U.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}function L(){switch(U.getInstance().document.visibilityState){case"visible":return F.VISIBLE;case"hidden":return F.HIDDEN;default:return F.UNKNOWN}}function V(){const t=U.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function z(t){var e;const n=null===(e=t.options)||void 0===e?void 0:e.appId;if(!n)throw A.create("no app id");return n}const K="0.0.1",W={loggingEnabled:!0},x="FIREBASE_INSTALLATIONS_AUTH";function J(t,e){const n=function(){const t=U.getInstance().localStorage;if(!t)return;const e=t.getItem(y);if(!(e&&(n=e,Number(n)>Date.now())))return;var n;const r=t.getItem(w);if(!r)return;try{return JSON.parse(r)}catch(t){return}}();return n?(G(n),Promise.resolve()):function(t,e){return function(t){const e=t.getToken();return e.then((t=>{})),e}(t.installations).then((n=>{const r=function(t){var e;const n=null===(e=t.options)||void 0===e?void 0:e.projectId;if(!n)throw A.create("no project id");return n}(t.app),o=function(t){var e;const n=null===(e=t.options)||void 0===e?void 0:e.apiKey;if(!n)throw A.create("no api key");return n}(t.app),c=new Request(`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${o}`,{method:"POST",headers:{Authorization:`${x} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:z(t.app),app_version:h,sdk_version:K})});return fetch(c).then((t=>{if(t.ok)return t.json();throw A.create("RC response not ok")}))})).catch((()=>{M.info(H)}))}(t,e).then(G).then((t=>function(t){const e=U.getInstance().localStorage;if(!t||!e)return;e.setItem(w,JSON.stringify(t)),e.setItem(y,String(Date.now()+60*B.getInstance().configTimeToLive*60*1e3))}(t)),(()=>{}))}const H="Could not fetch config, will use default configs";function G(t){if(!t)return t;const e=B.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=W.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):W.logSource&&(e.logSource=W.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:W.logEndPointUrl&&(e.logEndPointUrl=W.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:W.transportKey&&(e.transportKey=W.transportKey),void 0!==n.fpr_vc_network_request_sampling_rate?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):void 0!==W.networkRequestsSamplingRate&&(e.networkRequestsSamplingRate=W.networkRequestsSamplingRate),void 0!==n.fpr_vc_trace_sampling_rate?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):void 0!==W.tracesSamplingRate&&(e.tracesSamplingRate=W.tracesSamplingRate),e.logTraceAfterSampling=Q(e.tracesSamplingRate),e.logNetworkAfterSampling=Q(e.networkRequestsSamplingRate),t}function Q(t){return Math.random()<=t}let X,Y=1;function Z(t){return Y=2,X=X||function(t){return function(){const t=U.getInstance().document;return new Promise((e=>{if(t&&"complete"!==t.readyState){const n=()=>{"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()}))}().then((()=>function(t){const e=t.getId();return e.then((t=>{R=t})),e}(t.installations))).then((e=>J(t,e))).then((()=>tt()),(()=>tt()))}(t),X}function tt(){Y=3}const et=1e4;let nt,it=3,ot=[],at=!1;function st(t){setTimeout((()=>{if(0!==it)return ot.length?void function(){const t=ot.splice(0,1e3),e=t.map((t=>({source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)})));(function(data,t){return function(data){const t=B.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(data)})}(data).then((t=>(t.ok||M.info("Call to Firebase backend failed."),t.json()))).then((e=>{const n=Number(e.nextRequestWaitMillis);let r=et;isNaN(n)||(r=Math.max(n,r));const o=e.logResponseDetails;Array.isArray(o)&&o.length>0&&"RETRY_REQUEST_LATER"===o[0].responseAction&&(ot=[...t,...ot],M.info("Retry transport request later.")),it=3,st(r)}))})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:B.getInstance().logSource,log_event:e},t).catch((()=>{ot=[...t,...ot],it--,M.info(`Tries left: ${it}.`),st(et)}))}():st(et)}),t)}function ct(t){return(...e)=>{!function(t){if(!t.eventTime||!t.message)throw A.create("invalid cc log");ot=[...ot,t]}({message:t(...e),eventTime:Date.now()})}}function lt(t,e){nt||(nt=ct(mt)),nt(t,e)}function ut(t){const e=B.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&U.getInstance().requiredApisAvailable()&&(t.isAuto&&L()!==F.VISIBLE||(3===Y?pt(t):Z(t.performanceController).then((()=>pt(t)),(()=>pt(t)))))}function pt(t){if(!C())return;const e=B.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&setTimeout((()=>lt(t,1)),0)}function mt(t,e){return 0===e?function(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:gt(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}(t):function(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);const n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);const r={application_info:gt(t.performanceController.app),trace_metric:e};return JSON.stringify(r)}(t)}function gt(t){return{google_app_id:z(t),app_instance_id:C(),web_app_info:{sdk_version:h,page_url:U.getInstance().getUrl(),service_worker_status:$(),visibility_state:L(),effective_connection_type:V()},application_process_state:0}}const ft=["_fp",E,T];class ht{constructor(t,e,n=!1,r){this.performanceController=t,this.name=e,this.isAuto=n,this.state=1,this.customAttributes={},this.counters={},this.api=U.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`FB-PERF-TRACE-START-${this.randomId}-${this.name}`,this.traceStopMark=`FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`,this.traceMeasure=r||`FB-PERF-TRACE-MEASURE-${this.randomId}-${this.name}`,r&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw A.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw A.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),ut(this)}record(t,e,n){if(t<=0)throw A.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw A.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(const t of Object.keys(n.metrics))isNaN(Number(n.metrics[t]))||(this.counters[t]=Math.floor(Number(n.metrics[t])));ut(this)}incrementMetric(t,e=1){void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)}putMetric(t,e){if(n=t,r=this.name,0===n.length||n.length>100||!(r&&r.startsWith(_)&&ft.indexOf(n)>-1)&&n.startsWith("_"))throw A.create("invalid custom metric name",{customMetricName:t});var n,r;this.counters[t]=function(t){const e=Math.floor(t);return e<t&&M.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}(null!=e?e:0)}getMetric(t){return this.counters[t]||0}putAttribute(t,e){const n=!(0===(r=t).length||r.length>40||j.some((t=>r.startsWith(t)))||!r.match(D));var r;const o=function(t){return 0!==t.length&&t.length<=100}(e);if(n&&o)this.customAttributes[t]=e;else{if(!n)throw A.create("invalid attribute name",{attributeName:t});if(!o)throw A.create("invalid attribute value",{attributeValue:e})}}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))}static createOobTrace(t,e,n,r){const o=U.getInstance().getUrl();if(!o)return;const c=new ht(t,_+o,!0),l=Math.floor(1e3*U.getInstance().getTimeOrigin());c.setStartTime(l),e&&e[0]&&(c.setDuration(Math.floor(1e3*e[0].duration)),c.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),c.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),c.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));if(n){const t=n.find((t=>"first-paint"===t.name));t&&t.startTime&&c.putMetric("_fp",Math.floor(1e3*t.startTime));const e=n.find((t=>"first-contentful-paint"===t.name));e&&e.startTime&&c.putMetric(E,Math.floor(1e3*e.startTime)),r&&c.putMetric(T,Math.floor(1e3*r))}ut(c)}static createUserTimingTrace(t,e){ut(new ht(t,e,!1,e))}}function bt(t,e){const n=e;if(!n||void 0===n.responseStart)return;const r=U.getInstance().getTimeOrigin(),o=Math.floor(1e3*(n.startTime+r)),c=n.responseStart?Math.floor(1e3*(n.responseStart-n.startTime)):void 0,l=Math.floor(1e3*(n.responseEnd-n.startTime));!function(t){const e=B.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,r=e.logEndPointUrl.split("?")[0],o=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==o&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout((()=>lt(t,0)),0)}({performanceController:t,url:n.name&&n.name.split("?")[0],responsePayloadBytes:n.transferSize,startTimeUs:o,timeToResponseInitiatedUs:c,timeToResponseCompletedUs:l})}function vt(t){C()&&(setTimeout((()=>function(t){const e=U.getInstance(),n=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");if(e.onFirstInputDelay){let o=setTimeout((()=>{ht.createOobTrace(t,n,r),o=void 0}),5e3);e.onFirstInputDelay((e=>{o&&(clearTimeout(o),ht.createOobTrace(t,n,r,e))}))}else ht.createOobTrace(t,n,r)}(t)),0),setTimeout((()=>function(t){const e=U.getInstance(),n=e.getEntriesByType("resource");for(const e of n)bt(t,e);e.setupObserver("resource",(e=>bt(t,e)))}(t)),0),setTimeout((()=>function(t){const e=U.getInstance(),n=e.getEntriesByType("measure");for(const e of n)_t(t,e);e.setupObserver("measure",(e=>_t(t,e)))}(t)),0))}function _t(t,e){const n=e.name;n.substring(0,v.length)!==v&&ht.createUserTimingTrace(t,n)}class Et{constructor(t,e){this.app=t,this.installations=e,this.initialized=!1}_init(t){this.initialized||(void 0!==(null==t?void 0:t.dataCollectionEnabled)&&(this.dataCollectionEnabled=t.dataCollectionEnabled),void 0!==(null==t?void 0:t.instrumentationEnabled)&&(this.instrumentationEnabled=t.instrumentationEnabled),U.getInstance().requiredApisAvailable()?Object(c.V)().then((t=>{t&&(at||(st(5500),at=!0),Z(this).then((()=>vt(this)),(()=>vt(this))),this.initialized=!0)})).catch((t=>{M.info(`Environment doesn't support IndexedDB: ${t}`)})):M.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){B.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return B.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){B.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return B.getInstance().dataCollectionEnabled}}const Tt=(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==n.name)throw A.create("FB not default");if("undefined"==typeof window)throw A.create("no window");!function(t){k=t}(window);const o=new Et(n,r);return o._init(e),o};Object(m._registerComponent)(new o.a("performance",Tt,"PUBLIC")),Object(m.registerVersion)(d,f),Object(m.registerVersion)(d,f,"esm2017");class wt{constructor(t,e){this.app=t,this._delegate=e}get instrumentationEnabled(){return this._delegate.instrumentationEnabled}set instrumentationEnabled(t){this._delegate.instrumentationEnabled=t}get dataCollectionEnabled(){return this._delegate.dataCollectionEnabled}set dataCollectionEnabled(t){this._delegate.dataCollectionEnabled=t}trace(t){return e=this._delegate,n=t,e=Object(c.u)(e),new ht(e,n);var e,n}}function yt(t){const e=t.getProvider("app-compat").getImmediate(),n=t.getProvider("performance").getImmediate();return new wt(e,n)}var It;(It=r.a).INTERNAL.registerComponent(new o.a("performance-compat",yt,"PUBLIC")),It.registerVersion("@firebase/performance-compat","0.1.10")}}]);