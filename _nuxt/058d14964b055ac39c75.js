(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{200:function(e,t,r){var content=r(206);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("b0df697a",content,!0,{sourceMap:!1})},205:function(e,t,r){"use strict";var o=r(200);r.n(o).a},206:function(e,t,r){(t=r(27)(!1)).push([e.i,".h1x{color:red}#sidebar{position:absolute;box-sizing:border-box;top:0;bottom:0;left:0;width:50px;text-align:center;background-color:#eee;overflow-x:hidden;overflow-y:auto;z-index:1000}#sidebar .spacer{height:1px}#page.full #sidebar>#panelToggle>div{transform:scaleX(-1);transition-duration:.4s}#page.split #sidebar>#panelToggle>div{transform:scaleX(1);transition-duration:.4s}#panel{position:absolute;box-sizing:border-box;top:0;bottom:0;width:300px;padding:0 1em 2em;overflow-x:hidden;overflow-y:scroll}#page.full #panel{left:-250px;transition-duration:.4s;overflow-y:hidden}#page.split #panel{left:50px;transition-duration:.4s}.badge{padding-left:3px;padding-right:3px;border-radius:5px}.circle{box-sizing:border-box;margin:10px 5px;padding:0;height:40px;width:40px;line-height:40px;border-radius:20px;font-size:16px;font-weight:700;text-align:center;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#000;background-color:#ddd;cursor:pointer}.circle.button{font-size:32px}.circle.alert{font-size:22px;color:#000;background-color:#ff0}.circle.activeWatchZone{background-color:#0e0}@media (hover:hover){.circle.button:hover{background-color:#ccc}.circle.button.activeWatchZone:hover{background-color:#0d0}}.circle.reload{color:#000;background-color:#ddd}.circle.small{height:30px;width:30px;font-size:20px;line-height:30px;border-radius:15px;margin:10px}#panel ol{padding:0}#panel ol ol{padding:0 0 0 1em}#panel ol li{list-style:none}#panel ol.filterTree li{white-space:nowrap}input[type=checkbox],label{cursor:pointer}#panel ol li label{display:inline;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-transform:capitalize}span.show-all{color:#5094fd;cursor:pointer}@media (hover:hover){span.show-all:hover{color:#3b88fd}}#panel ol li.feature{box-sizing:border-box;margin:0;padding:0 .1em;border-top:1px solid transparent;border-bottom:1px solid grey;cursor:pointer}#panel ol li.selected{background-color:#ffffe0}@-webkit-keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.animate.rotate{-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite}.animate.paused{-webkit-animation-play-state:paused;animation-play-state:paused}.feature-incident{color:#fff;background-color:rgba(204,51,51,.87843);border:2px solid #c33}.feature-warning{color:#000;background-color:rgba(255,170,29,.87843);border:2px solid #ffaa1d}.feature-other{color:#fff;background-color:rgba(41,129,202,.87843);border:2px solid #2981ca}.feature-resources{color:#000;background-color:rgba(144,238,144,.87843);border:2px solid #90ee90}.feature-current-location{color:#000;background-color:rgba(0,238,0,.87843);border:2px solid #0e0}.feature-source{color:#fff;background-color:#000;border:2px solid #333}.feature-lightning{color:#7df9ff;background-color:hsla(0,0%,66.7%,.87843);border:2px solid #aaa;border-radius:10px!important}.ghost{color:#000;background-color:hsla(0,0%,86.7%,.87843);border:2px solid #ddd;opacity:.7}.mdi-fire-truck:before{transform:scaleX(-1)}.map-icon{display:block;box-sizing:border-box;width:20px;height:20px;font-size:14px;line-height:18px;text-align:center;border:0;border-radius:5px;overflow:hidden}.map-icon.op0{opacity:0}.map-icon.op1{opacity:.1}.map-icon.op2{opacity:.2}.map-icon.op3{opacity:.3}.map-icon.op4{opacity:.4}.map-icon.op5{opacity:.5}.map-icon.op6{opacity:.6}.map-icon.op7{opacity:.7}.map-icon.op8{opacity:.8}.map-icon.op9{opacity:.9}.blink,.map-icon.op10{opacity:1}.blink{-webkit-animation:blink 1s linear infinite;animation:blink 1s linear infinite}@-webkit-keyframes blink{0%,to{opacity:1}50%{opacity:.1}}@keyframes blink{0%,to{opacity:1}50%{opacity:.1}}.noselect{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),e.exports=t},208:function(e,t,r){"use strict";r.r(t);r(66),r(37),r(21),r(39),r(38),r(26),r(23),r(24);var o=r(34),n=r(207),l=(r(201),r(203),r(64),r(65),r(25),r(13),r(51),r(47)),c=r(204);function d(e,t,r){if("object"==typeof e){t in e&&(e[t]=r);for(const o in e)o!==t&&d(e[o],t,r)}}function f(e,t,r){if("object"==typeof e){if(t in e&&e[t]===r)return!0;for(const o in e)if(f(e[o],t,r))return!0}return!1}function h(e,t){try{if(window&&window.localStorage&&window.localStorage.setItem)return window.localStorage.setItem(e+"_v2",JSON.stringify(t))}catch(e){}return!1}function v(e,t){try{if(window.localStorage&&window.localStorage.getItem){const t=window.localStorage.getItem(e+"_v2");if(null!==t)return JSON.parse(t)}}catch(e){}return t}function _(e){try{if(window&&window.localStorage&&window.localStorage.removeItem)return window.localStorage.removeItem(e+"_v2")}catch(e){}return!1}var m={props:["obj","parents"],methods:{click:function(e){d(this.obj,"_show",e),e&&this.parents&&this.parents.forEach((function(p){p._show=!0}))}}},w=r(33),y=Object(w.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"show-all"},[r("span",{staticClass:"mdi mdi-playlist-check",on:{click:function(t){return t.preventDefault(),e.click(!0)}}},[e._v(" ")]),e._v(" "),r("span",{staticClass:"mdi mdi-playlist-remove",on:{click:function(t){return t.preventDefault(),e.click(!1)}}})])}),[],!1,null,null,null).exports,k={props:["obj","resources","cls"],computed:{count_hidden:function(){return(this.obj._count_all||0)-(this.obj._count||0)}}},A=Object(w.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e.obj._count?r("small",{class:"badge feature-"+e.cls},[e._v(e._s(e.obj._count))]):e._e(),e._v(" "),e.count_hidden?r("small",{class:"badge ghost"},[e._v(e._s(e.count_hidden))]):e._e(),e._v(" "),e.resources&&e.obj._resources?r("small",{staticClass:"badge feature-resources"},[e._v(e._s(e.obj._resources))]):e._e()])}),[],!1,null,null,null).exports;function T(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function S(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))){var i=0,t=function(){};return{s:t,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,n=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return n=e.done,e},e:function(e){l=!0,o=e},f:function(){try{n||null==r.return||r.return()}finally{if(l)throw o}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var C=c.latLngBounds({lat:-8.671039380459929,lng:156.18524544032667},{lat:-45.27710831357647,lng:110.48212044032667}),F=c.map("map",{center:C.getCenter(),zoom:5,scrollWheelZoom:!0,maxBounds:C}),R=!1,j=!1;F.on("zoomend",(function(){j?j=!1:R=!0}));var E=c.layerGroup().addTo(F),I=c.layerGroup().addTo(F),L={incident:{_show:!0,_color:"#CC3333",_icon:"fire-truck",category:{},status:{}},warning:{_show:!0,_color:"#FFAA1D",_icon:"alert",category:{},status:{}},other:{_show:!0,_color:"#2981CA",_icon:"information",category:{},status:{}}},B={components:{CheckboxToggles:y,FilterCounts:A},data:function(){return{showPanel:!0,feeds:{vic:{label:"Vic",link:"https://emergency.vic.gov.au",loading:!1,error:!1,features:[]},nsw:{label:"NSW",link:"https://www.rfs.nsw.gov.au",loading:!1,error:!1,features:[]},wa:{label:"WA incidents",link:"https://www.emergency.wa.gov.au",loading:!1,error:!1,features:[]},wa_warn:{label:"WA warnings",link:"https://www.emergency.wa.gov.au",loading:!1,error:!1,features:[]},sa_warn:{label:"SA warnings",link:"https://apps.geohub.sa.gov.au/CFSMap/index.html",loading:!1,error:!1,features:[]},sa_cfs:{label:"SA CFS",link:"https://apps.geohub.sa.gov.au/CFSMap/index.html",loading:!1,error:!1,type:"document",features:[]},sa_mfs:{label:"SA MFS",link:"https://apps.geohub.sa.gov.au/CFSMap/index.html",loading:!1,error:!1,type:"document",features:[]},tas:{label:"Tas",link:"http://www.fire.tas.gov.au/Show?pageId=colGMapBushfires",loading:!1,error:!1,type:"document",features:[]},tas_warn:{label:"Tas warnings",link:"http://www.fire.tas.gov.au/Show?pageId=colGMapBushfires",loading:!1,error:!1,type:"document",features:[]},qld:{label:"Qld",link:"https://www.ruralfire.qld.gov.au/map/Pages/default.aspx",loading:!1,error:!1,type:"document",features:[]}},feedsSelected:[],maxAge:24,fadeWithAge:!0,showResources:!1,sortBy:null,loadDefault:!0,filterTree:{},featureSelected:0,mapBounds:{watchZone:null,features:null},userLocation:null,shareableUrl:null,mapDelay:2e3,lightning:[]}},computed:{feedLoading:function(){var e=this;return Object.keys(e.feeds).reduce((function(t,r){return t||e.feeds[r].loading}),!1)},feedError:function(){var e=this;return Object.keys(e.feeds).reduce((function(t,r){return t||e.feeds[r].error}),!1)},filterTreeActive:function(e){for(var t in e.filterTree)if(f(e.filterTree[t].category,"_show",!0)&&f(e.filterTree[t].status,"_show",!0))return!0;return!1},filterTreeRootKeys:function(e){return e.getKeys(e.filterTree,["incident","warning","other"])},maxAge_ms:function(e){return 60*e.maxAge*60*1e3},lightningAgeFiltered:function(e){if(e.feedsSelected.includes("lightning")){var t=new Date;return e.lightning.filter((function(i){var r=t-e.$moment.unix(i.unixTime);return i._opacity=r>0?1-r/e.maxAge_ms/1.1:1,r<e.maxAge_ms}))}return[]},featuresAgeFiltered:function(e){return Object.keys(e.feeds).reduce((function(t,r){return t.concat(e.feeds[r].features.filter((function(t){var p=t.properties;return p._opacity=p._age>0?1-p._age/e.maxAge_ms/1.1:1,p._age<e.maxAge_ms})))}),[])},featuresSorted:function(e){var t=e.sortBy;return e.featuresFiltered.sort((function(a,b){return a=a.properties,b=b.properties,"_age"===t||a[t]===b[t]?a._age-b._age:t in a&&t in b?parseFloat(b[t])-parseFloat(a[t]):t in a?-1:1}))},featuresFilteredByProperty:function(e){return e.featuresAgeFiltered.filter((function(t){var p=t.properties;return e.feedsSelected.includes(p._feed_src)&&e.filterTree[p.feedType]._show&&e.filterTree[p.feedType].category[p.category]._show&&e.filterTree[p.feedType].category[p.category][p.subcategory]._show&&e.filterTree[p.feedType].status[p.status]._show}))},featuresFilteredByWatchZone:function(e){return e.featuresFilteredByProperty.filter((function(t){var p=t.properties;return"_geo_bounds"in p||(p._geo_bounds=Object.freeze(c.geoJSON(t).getBounds())),e.mapBounds.watchZone.intersects(p._geo_bounds)}))},featuresFiltered:function(e){return null===e.mapBounds.watchZone?e.featuresFilteredByProperty:e.featuresFilteredByWatchZone},totalResources:function(e){return e.featuresFiltered.reduce((function(e,t){"resources"in t.properties&&(e+=parseInt(t.properties.resources)||0);return e}),0)},maxResources:function(e){return e.featuresFiltered.reduce((function(e,t){if("resources"in t.properties){var r=parseInt(t.properties.resources)||0;if(r>e)return r}return e}),0)}},watch:{showPanel:function(e){var div=document.getElementById("page");e?(div.classList.remove("full"),div.classList.add("split")):(div.classList.remove("split"),div.classList.add("full")),this.mapDelay=750,this.updateMap()},filterTree:{deep:!0,handler:function(){this.saveFilterTree()}},featuresAgeFiltered:{deep:!1,handler:function(){this.updateFilterTree()}},featuresFiltered:{deep:!1,handler:function(){this.updateMap(),this.updateFilterTreeCounts()}},lightningAgeFiltered:{deep:!1,handler:function(){this.updateMap()}},fadeWithAge:function(e){this.updateMap(),h("fadeWithAge",e)},showResources:function(e){this.updateMap(),h("showResources",e)},maxAge:function(e){h("maxAge",e)},feedsSelected:function(e,t){var r,o=S(e);try{for(o.s();!(r=o.n()).done;){var n=r.value;t.includes(n)||this.fetchFeed(n)}}catch(e){o.e(e)}finally{o.f()}e.length===Object.keys(this.feeds).length?_("feedsSelected"):h("feedsSelected",e)},mapBounds:{deep:!0,handler:function(e){null===e.watchZone?_("watchZone"):h("watchZone",e.watchZone)}},sortBy:function(e){h("sortBy",e)}},methods:{debug:function(){},togglePanel:function(){this.showPanel=!this.showPanel},timestamps:function(e,dt){return dt.isValid()?{_age:e-dt,_date_f:dt.format("h:mma DD MMM YYYY z")}:{_age:0,_date_f:"Invalid date"}},fetchFeed:function(e){var t=this;if(t.mapDelay=2e3,void 0===e){var r,o=S(t.feedsSelected);try{for(o.s();!(r=o.n()).done;)e=r.value,t.fetchFeed(e)}catch(e){o.e(e)}finally{o.f()}}else e in t.feeds&&!t.feeds[e].loading&&(t.feeds[e].loading=!0,l.get("/data/".concat(e,".geo.json"),{responseType:"json"}).then((function(r){var o=new Date;"lightning"===e?t.lightning=Object.values(r.data).filter((function(i){return C.contains(c.latLng([i.lat,i.long]))})):t.feeds[e].features=r.data.features.map((function(r){var l=r.properties;return x(x({},Object(n.a)(r,["properties"])),{},{properties:x(x({_feed_src:e},t.timestamps(o,t.$moment(l.updated,t.$moment.ISO_8601))),l)})})),t.feeds[e].error=!1,t.feedLoaded(e)})).catch((function(){t.feeds[e].error=!0,t.feedLoaded(e)})))},feedLoaded:function(e){var t=this;window.setTimeout((function(){t.feeds[e].loading=!1}),2e3)},setObj:function(e,t,r){return t in e||this.$set(e,t,r),e[t]},setAdd:function(e,t,r){t in e?e[t]+=r:this.$set(e,t,r)},saveFilterTree:function(){var param=encodeURIComponent(JSON.stringify(function e(t,r,o){const n={};for(const l in t)"object"!=typeof t[l]||r in t[l]&&t[l][r]!==o||(n[l]=e(t[l],r,o));return n}(this.filterTree,"_show",!0)));param.length<1e3?this.shareableUrl=window.location.host+"?filter="+param:this.shareableUrl=null,h("filterTree",this.filterTree)},loadFilterTree:function(){var e=this,param=function(e){let i,t;e=encodeURIComponent(e);const r=window.location.search.substring(1).split("&");for(i=0;i<r.length;i++)if(t=r[i].split("="),t[0]===e)return decodeURIComponent(t[1]);return null}("filter");if(param){window.history.pushState("",document.title,"/");var t=JSON.parse(param);null!==t&&(e.loadDefault=!1,e.filterTree=L,d(e.filterTree,"_show",!1),function e(t,r,o){if("object"==typeof t&&"object"==typeof r)for(const n in t)o(t,r,n),e(t[n],r[n],o)}(t,e.filterTree,(function(source,t,r){"_show"===r?"_show"in t?t._show=!0:e.$set(t,"_show",!0):r in t?"_show"in t&&(t._show=!0):e.$set(t,r,{_show:!0})})))}else e.filterTree=v("filterTree",L)},updateFilterTree:function(){var e=this;d(e.filterTree,"_count_all",0),Object.values(e.feeds).forEach((function(t){e.setObj(t,"_count_all",0),t._count_all=0})),e.featuresAgeFiltered.forEach((function(t){var p=t.properties,r=e.filterTree[p.feedType],o=e.setObj(r.category,p.category,{_show:e.loadDefault&&r._show}),n=e.setObj(o,p.subcategory,{_show:e.loadDefault&&o._show}),l=e.setObj(r.status,p.status,{_show:e.loadDefault&&r._show});e.setAdd(e.feeds[p._feed_src],"_count_all",1),e.setAdd(r,"_count_all",1),e.setAdd(o,"_count_all",1),e.setAdd(n,"_count_all",1),e.setAdd(l,"_count_all",1)}))},updateFilterTreeCounts:function(){var e=this;d(e.filterTree,"_count",0),d(e.filterTree,"_resources",0),Object.values(e.feeds).forEach((function(t){e.setObj(t,"_count",0),t._count=0,e.setObj(t,"_resources",0),t._resources=0})),e.featuresFiltered.forEach((function(t){var p=t.properties,r=e.filterTree[p.feedType],o=r.category[p.category],n=o[p.subcategory],l=r.status[p.status];e.setAdd(e.feeds[p._feed_src],"_count",1),e.setAdd(r,"_count",1),e.setAdd(o,"_count",1),e.setAdd(n,"_count",1),e.setAdd(l,"_count",1);var c="resources"in p?parseInt(p.resources):0;e.filterTree._resources+=c,e.setAdd(e.feeds[p._feed_src],"_resources",c),e.setAdd(r,"_resources",c),e.setAdd(o,"_resources",c),e.setAdd(n,"_resources",c),e.setAdd(l,"_resources",c)}))},updateMap:function(){var e=this;window.clearTimeout(e._updateMapTimeout),e._updateMapTimeout=window.setTimeout((function(){e._updateMap()}),e.mapDelay)},_updateMap:function(){var e=this;if(e.mapDelay=500,F.invalidateSize(!0),E.clearLayers(),e.lightningAgeFiltered.forEach((function(i){var t=c.divIcon({className:"map-icon feature-lightning mdi mdi-flash op"+Math.round(10*(e.fadeWithAge?i._opacity:1)),iconSize:[20,20],iconAnchor:[10,10]});c.marker(c.latLng([i.lat,i.long]),{icon:t}).bindPopup("Lightning strike at "+e.$moment.unix(i.unixTime).format("h:mma DD MMM YYYY z")).addTo(E)})),null!==e.mapBounds.watchZone&&c.rectangle(e.mapBounds.watchZone,{weight:4,color:"#00EE00",opacity:.7,fillColor:"transparent"}).addTo(E),e.featuresFiltered.length>0){var t=c.geoJSON({type:"FeatureCollection",features:e.featuresFiltered,properties:{}},{pointToLayer:function(t,r){var p=t.properties,o=c.divIcon({className:"map-icon feature-"+p.feedType+" mdi mdi-"+e.filterTree[p.feedType]._icon+" op"+Math.round(10*(e.fadeWithAge?p._opacity:1)),iconSize:[20,20],iconAnchor:[10,10]});return c.featureGroup([c.marker(r,{icon:o})])},style:function(t){var p=t.properties;return{weight:2,color:e.filterTree[p.feedType]._color,opacity:.4*(e.fadeWithAge?p._opacity:1),fillOpacity:.2*(e.fadeWithAge?p._opacity:1)}},onEachFeature:function(t,r){r.on("click",(function(){e.selectFeature(t,!0,!1)})).bindPopup((function(){return e.fhtml(t,{Name:"sourceTitle",Updated:"_date_f",Location:"location",Resources:"resources",Category:"category",Subcategory:"subcategory",Status:"status",Size:"size"})}),{autoPan:!0,closeButton:!0,closeOnEscapeKey:!0,closeOnClick:!0});var p=t.properties;e.showResources&&"resources"in p&&"getBounds"in r&&0!==e.maxResources&&c.circleMarker(r.getBounds().getCenter(),{color:"#90EE90",radius:(parseInt(p.resources)||0)/e.maxResources*50+12,opacity:.9*(e.fadeWithAge?p._opacity:1),fillOpacity:.7*(e.fadeWithAge?p._opacity:1)}).addTo(r)}}).addTo(E);e.mapBounds.features=Object.freeze(t.getBounds()),R||(j=!0,F.stop(),e.zoomMap())}},zoomMap:function(){null!==this.mapBounds.features&&F.fitBounds(this.mapBounds.features,{padding:[20,20],maxZoom:10,animate:!0,duration:1})},resetZoom:function(){R=!1,this.zoomMap()},zoomToUserLocation:function(){R=!0,F.locate({setView:!0,maxZoom:10,duration:1})},updateWatchZone:function(){null===this.mapBounds.watchZone?this.mapBounds.watchZone=Object.freeze(F.getBounds()):confirm("Remove active watch zone?")&&(this.mapBounds.watchZone=null)},selectFeature:function(e,t,r){var o=this.fid(e);this.featureSelected=o;var n=c.geoJSON(e).getBounds();r&&F.flyToBounds(n,{maxZoom:8,padding:[20,20],animate:!0,duration:1}),I.clearLayers(),c.circleMarker(n.getCenter(),{radius:30,opacity:.4,color:"#FFFF00",fillColor:"transparent"}).addTo(I),t&&this.showPanel&&this.scrollTo("featureListItem"+o)},fid:function(e){var p=e.properties;return p._feed_src+p.id},fhtml:function(e,t){var s=[];for(var label in t){var r=t[label];r in e.properties&&s.push("<strong>"+label+"</strong>: "+e.properties[r])}return s.join("<br>")},scrollTo:function(e){this.showPanel=!0,window.setTimeout((function(){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}),100)},getKeys:function(e,t){return t.map((function(t){return{key:t,val:e[t]}}))},sortKeys:function(e){return Object.keys(e).sort().map((function(t){return{key:t,val:e[t]}}))},reloadApp:function(){window.location.reload()},clearLocalStorage:function(){window.localStorage.clear()},alert:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(s){alert(s)})),prompt:function(e){function t(t,r){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(s,e){prompt(s,e)})),feedErrorAlert:function(s){alert(s+Object.values(this.feeds).filter((function(i){return i.error})).map((function(i){return i.label})).join(", "))}},created:function(){var e=this;try{window.applicationCache.addEventListener("updateready",e.reloadApp),window.applicationCache.status===window.applicationCache.UPDATEREADY&&e.reloadApp()}catch(e){}try{e.showPanel=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||600)>=600}catch(e){}var t=v("watchZone",null);null!==t&&(e.mapBounds.watchZone=Object.freeze(c.latLngBounds(t._northEast,t._southWest))),e.maxAge=v("maxAge",24),e.fadeWithAge=v("fadeWithAge",!0),e.showResources=v("showResources",!1),e.sortBy=v("sortBy","_age"),e.loadFilterTree(),e.feedsSelected=v("feedsSelected",Object.keys(e.feeds)),window.setInterval((function(){e.fetchFeed()}),3e5),c.tileLayer("https://tile.emergencymap.info/{z}/{x}/{y}.png",{subdomains:"abc",attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(F);var r=c.layerGroup().addTo(F);F.on("locationfound",(function(t){e.userLocation=!0,r.clearLayers();var o=c.divIcon({className:"map-icon feature-current-location mdi mdi-home",iconSize:[20,20],iconAnchor:[10,10]});c.marker(t.latlng,{icon:o}).addTo(r)})),F.on("locationerror",(function(){e.userLocation=!1,r.clearLayers()}))}},D=(r(205),Object(w.a)(B,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"sidebar"}},[r("div",{staticClass:"circle button",attrs:{id:"panelToggle",title:"Menu"},on:{click:function(t){return t.preventDefault(),e.togglePanel()}}},[r("div",{staticClass:"mdi mdi-menu-open"})]),e._v(" "),r("div",{staticClass:"spacer"}),e._v(" "),e.filterTreeActive?r("div",[e.filterTree.incident._show?r("div",{staticClass:"circle feature-incident",attrs:{title:"Incidents"},on:{click:function(t){return t.preventDefault(),e.scrollTo("panelFilters-incident")}}},[e._v("\n                "+e._s(e.filterTree.incident._count||0)+"\n            ")]):e._e(),e._v(" "),e.showResources?r("div",{staticClass:"circle feature-resources",attrs:{title:"Resources"},on:{click:function(t){return t.preventDefault(),e.scrollTo("panelFilters-incident")}}},[e._v("\n                "+e._s(e.filterTree._resources||0)+"\n            ")]):e._e(),e._v(" "),e.filterTree.warning._show?r("div",{staticClass:"circle feature-warning",attrs:{title:"Warnings"},on:{click:function(t){return t.preventDefault(),e.scrollTo("panelFilters-warning")}}},[e._v("\n                "+e._s(e.filterTree.warning._count||0)+"\n            ")]):e._e(),e._v(" "),e.filterTree.other._show?r("div",{staticClass:"circle feature-other",attrs:{title:"Other"},on:{click:function(t){return t.preventDefault(),e.scrollTo("panelFilters-other")}}},[e._v("\n                "+e._s(e.filterTree.other._count||0)+"\n            ")]):e._e()]):r("div",{staticClass:"circle alert overlay",attrs:{title:"Warning, all filters are deselected!"},on:{click:function(t){return e.alert("Warning, all filters are deselected!")}}},[r("div",{staticClass:"mdi mdi-close-box-multiple blink"})]),e._v(" "),e.feedError?r("div",{staticClass:"circle alert",attrs:{title:"Some data failed to download"},on:{click:function(t){return e.feedErrorAlert("The following data source failed to download: ")}}},[r("div",{staticClass:"mdi mdi-alert"})]):e._e(),e._v(" "),r("div",{staticClass:"circle button",class:"animate rotate "+(e.feedLoading?"running":"paused"),attrs:{title:"Reload"},on:{click:function(t){return t.preventDefault(),e.fetchFeed()}}},[r("div",{staticClass:"mdi mdi-refresh"})]),e._v(" "),r("div",{staticClass:"spacer"}),e._v(" "),r("div",{staticClass:"circle button small",attrs:{title:"Zoom map to show all data"},on:{click:function(t){return t.preventDefault(),e.resetZoom()}}},[r("div",{staticClass:"mdi mdi-fit-to-page"})]),e._v(" "),r("div",{staticClass:"circle button small",attrs:{title:"Zoom map to current location"},on:{click:function(t){return t.preventDefault(),e.zoomToUserLocation()}}},[null===e.userLocation?r("div",{staticClass:"mdi mdi-map-marker"}):e._e(),e._v(" "),!0===e.userLocation?r("div",{staticClass:"mdi mdi-map-marker-check"}):e._e(),e._v(" "),!1===e.userLocation?r("div",{staticClass:"mdi mdi-map-marker-alert-outline"}):e._e()]),e._v(" "),r("div",{staticClass:"circle button small",class:null!==e.mapBounds.watchZone?"activeWatchZone":"",attrs:{title:"Set/remove watch zone"},on:{click:function(t){return t.preventDefault(),e.updateWatchZone()}}},[r("div",{staticClass:"mdi mdi-crop-free"})]),e._v(" "),r("div",{staticClass:"spacer"}),e._v(" "),r("div",{staticClass:"circle button small",attrs:{title:"Filters"},on:{click:function(t){return t.preventDefault(),e.scrollTo("panelFilters")}}},[r("div",{staticClass:"mdi mdi-checkbox-marked"})]),e._v(" "),r("div",{staticClass:"circle button small",attrs:{title:"List"},on:{click:function(t){return t.preventDefault(),e.scrollTo("panelList")}}},[r("div",{staticClass:"mdi mdi-view-list"})]),e._v(" "),r("div",{staticClass:"circle button small",attrs:{title:"Info"},on:{click:function(t){return t.preventDefault(),e.scrollTo("panelInfo")}}},[r("div",{staticClass:"mdi mdi-help-circle"})]),e._v(" "),e.shareableUrl?r("div",{staticClass:"circle button small",attrs:{title:"Share URL"},on:{click:function(t){return t.preventDefault(),e.prompt("Shareable URL for currently selected filters:",[e.shareableUrl])}}},[r("div",{staticClass:"mdi mdi-link-box-variant"})]):e._e()]),e._v(" "),r("div",{attrs:{id:"panel"}},[r("span",{attrs:{id:"panelTop"}}),e._v(" "),r("h1",{staticStyle:{"font-size":"120%"},on:{click:function(t){return t.preventDefault(),e.debug()}}},[e._v("Australian Emergency Map")]),e._v(" "),r("h2",{attrs:{id:"panelFilters"}},[e._v("Filters")]),e._v(" "),r("p",[e._v("\n            Max age:\n            "),r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.maxAge,expression:"maxAge",modifiers:{lazy:!0}}],staticStyle:{width:"3em"},attrs:{type:"number",min:"0",max:"200",step:"1"},domProps:{value:e.maxAge},on:{change:function(t){e.maxAge=t.target.value}}}),e._v("\n            hours\n        ")]),e._v(" "),r("p",[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.maxAge,expression:"maxAge",modifiers:{lazy:!0}}],attrs:{type:"range",min:"0",value:"10",max:"200",step:"1",title:"Max age (hours)"},domProps:{value:e.maxAge},on:{change:function(t){e.maxAge=t.target.value}}})]),e._v(" "),r("ol",[r("li",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fadeWithAge,expression:"fadeWithAge"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.fadeWithAge)?e._i(e.fadeWithAge,null)>-1:e.fadeWithAge},on:{change:function(t){var r=e.fadeWithAge,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=e._i(r,null);o.checked?l<0&&(e.fadeWithAge=r.concat([null])):l>-1&&(e.fadeWithAge=r.slice(0,l).concat(r.slice(l+1)))}else e.fadeWithAge=n}}}),e._v("\n                    Fade-out with age\n                ")])]),e._v(" "),r("li",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.showResources,expression:"showResources"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showResources)?e._i(e.showResources,null)>-1:e.showResources},on:{change:function(t){var r=e.showResources,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=e._i(r,null);o.checked?l<0&&(e.showResources=r.concat([null])):l>-1&&(e.showResources=r.slice(0,l).concat(r.slice(l+1)))}else e.showResources=n}}}),e._v("\n                    Show resources\n                ")]),e._v(" "),e.filterTree._resources?r("small",{staticClass:"badge feature-resources"},[e._v(e._s(e.filterTree._resources))]):e._e()])]),e._v(" "),r("p",[r("button",{class:null!==e.mapBounds.watchZone?"activeWatchZone":"",on:{click:function(t){return t.preventDefault(),e.updateWatchZone()}}},[null===e.mapBounds.watchZone?r("span",[e._v("Set")]):r("span",[e._v("Remove")]),e._v("\n                watch zone\n            ")])]),e._v(" "),r("ol",{staticClass:"filterTree"},[r("li",[e._m(0),e._v(" "),r("ol",e._l(e.sortKeys(e.feeds),(function(i){return r("li",{key:i.key},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.feedsSelected,expression:"feedsSelected"}],attrs:{type:"checkbox"},domProps:{value:i.key,checked:Array.isArray(e.feedsSelected)?e._i(e.feedsSelected,i.key)>-1:e.feedsSelected},on:{change:function(t){var r=e.feedsSelected,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=i.key,c=e._i(r,l);o.checked?c<0&&(e.feedsSelected=r.concat([l])):c>-1&&(e.feedsSelected=r.slice(0,c).concat(r.slice(c+1)))}else e.feedsSelected=n}}}),e._v("\n                            "+e._s(i.val.label)+"\n                        ")]),e._v(" "),r("small",[r("a",{attrs:{href:i.val.link,target:"_blank"}},[r("span",{staticClass:"mdi mdi-link-variant show-all"})])]),e._v(" "),r("filter-counts",{attrs:{obj:i.val,resources:e.showResources,cls:"source"}})],1)})),0)]),e._v(" "),e._l(e.filterTreeRootKeys,(function(t){return r("li",{key:t.key},["_"!=t.key[0]?r("div",[r("label",{attrs:{id:"panelFilters-"+t.key}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.val._show,expression:"feedType.val._show"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.val._show)?e._i(t.val._show,null)>-1:t.val._show},on:{change:function(r){var o=t.val._show,n=r.target,l=!!n.checked;if(Array.isArray(o)){var c=e._i(o,null);n.checked?c<0&&e.$set(t.val,"_show",o.concat([null])):c>-1&&e.$set(t.val,"_show",o.slice(0,c).concat(o.slice(c+1)))}else e.$set(t.val,"_show",l)}}}),e._v(" "),r("strong",[e._v(e._s(t.key))])]),e._v(" "),r("checkbox-toggles",{attrs:{obj:t.val}}),e._v(" "),r("filter-counts",{attrs:{obj:t.val,resources:e.showResources,cls:t.key}}),e._v(" "),r("ol",[r("li",[r("em",[e._v("Category")]),e._v(" "),r("checkbox-toggles",{attrs:{obj:t.val.category,parents:[t.val]}}),e._v(" "),r("ol",e._l(e.sortKeys(t.val.category),(function(o){return r("li",{key:t.key+o.key},["_"!=o.key[0]?r("div",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:o.val._show,expression:"category.val._show"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.val._show)?e._i(o.val._show,null)>-1:o.val._show},on:{change:[function(t){var r=o.val._show,n=t.target,l=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&e.$set(o.val,"_show",r.concat([null])):c>-1&&e.$set(o.val,"_show",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(o.val,"_show",l)},function(e){t.val._show=t.val._show||o.val._show}]}}),e._v("\n                                            "+e._s(o.key)+"\n                                        ")]),e._v(" "),r("checkbox-toggles",{attrs:{obj:o.val,parents:[t.val,o.val]}}),e._v(" "),r("filter-counts",{attrs:{obj:o.val,resources:e.showResources,cls:t.key}}),e._v(" "),r("ol",e._l(e.sortKeys(o.val),(function(n){return r("li",{key:t.key+o.key+n.key},["_"!=n.key[0]?r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:n.val._show,expression:"subcat.val._show"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.val._show)?e._i(n.val._show,null)>-1:n.val._show},on:{change:[function(t){var r=n.val._show,o=t.target,l=!!o.checked;if(Array.isArray(r)){var c=e._i(r,null);o.checked?c<0&&e.$set(n.val,"_show",r.concat([null])):c>-1&&e.$set(n.val,"_show",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(n.val,"_show",l)},function(e){t.val._show=o.val._show=t.val._show||o.val._show||n.val._show}]}}),e._v("\n                                                    "+e._s(n.key)+"\n                                                    "),r("filter-counts",{attrs:{obj:n.val,resources:e.showResources,cls:t.key}})],1):e._e()])})),0)],1):e._e()])})),0)],1),e._v(" "),r("li",[r("em",[e._v("Status")]),e._v(" "),r("checkbox-toggles",{attrs:{obj:t.val.status,parents:[t.val]}}),e._v(" "),r("ol",e._l(e.sortKeys(t.val.status),(function(o){return r("li",{key:t.key+o.key},["_"!=o.key[0]?r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:o.val._show,expression:"status.val._show"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.val._show)?e._i(o.val._show,null)>-1:o.val._show},on:{change:[function(t){var r=o.val._show,n=t.target,l=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&e.$set(o.val,"_show",r.concat([null])):c>-1&&e.$set(o.val,"_show",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(o.val,"_show",l)},function(e){t.val._show=t.val._show||o.val._show}]}}),e._v("\n                                        "+e._s(o.key)+"\n                                        "),r("filter-counts",{attrs:{obj:o.val,resources:e.showResources,cls:t.key}})],1):e._e()])})),0)],1)])],1):e._e()])}))],2),e._v(" "),r("h2",{attrs:{id:"panelList"}},[e._v("List")]),e._v(" "),r("p",[e._v("\n            Total Resources:\n            "),r("span",{staticClass:"badge feature-resources"},[r("span",{staticClass:"mdi mdi-fire-truck"}),e._v(e._s(e.filterTree._resources))])]),e._v(" "),r("p",[e._v("\n            Sort:\n            "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.sortBy,expression:"sortBy"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.sortBy=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"_age"}},[e._v("date-time")]),e._v(" "),r("option",[e._v("resources")]),e._v(" "),r("option",[e._v("size")])])]),e._v(" "),r("ol",e._l(e.featuresSorted,(function(t){return r("li",{key:e.fid(t),class:"feature "+(e.fid(t)==e.featureSelected?"selected":""),attrs:{id:"featureListItem"+e.fid(t)},on:{click:function(r){return e.selectFeature(t,!1,!0)}}},[r("h3",[e._v(e._s(t.properties.sourceTitle))]),e._v(" "),r("p",[e._v("\n                    "+e._s(t.properties._date_f)+"\n                ")]),e._v(" "),r("p",{domProps:{innerHTML:e._s(t.properties.location)}}),e._v(" "),t.properties.resources?r("p",[e._v("\n                    Resources:\n                    "),r("span",{staticClass:"badge feature-resources"},[r("span",{staticClass:"mdi mdi-fire-truck"}),e._v("\n                        "+e._s(t.properties.resources))])]):e._e(),e._v(" "),t.properties.size?r("p",[e._v("Size: "+e._s(t.properties.size))]):e._e(),e._v(" "),e.fid(t)==e.featureSelected?r("div",[t.properties.text?r("p",{domProps:{textContent:e._s(t.properties.text)}}):t.properties.description?r("p",{domProps:{innerHTML:e._s(t.properties.description)}}):e._e(),e._v(" "),r("p",[t.properties.link||t.properties.url?r("a",{attrs:{href:t.properties.link||t.properties.url,target:"_blank"}},[e._v("\n                            more information\n                        ")]):e._e()])]):e._e()])})),0),e._v(" "),0==e.featuresFiltered.length?r("p",[e._v("No items.")]):e._e(),e._v(" "),r("div",{attrs:{id:"panelInfo"}},[r("h2",[e._v("About This")]),e._v(" "),r("p",[e._v("\n                This map is in no way officially affiliated with any emergency services, state\n                government or data source.\n            ")]),e._v(" "),r("p",[e._v("\n                Do not use this app as a warning or alert service. Use it only as an analysis\n                tool for the raw data and for seeing a big-picture overview.\n            ")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("\n                The layout works best on desktop, but it is also great on tablet or mobile where\n                it can be added to the home screen.\n            ")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("Built with free, open-source, community-driven software:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),r("p",{staticStyle:{"font-size":"70%",color:"grey"}},[e._v('\n                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\n                FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\n                COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\n                IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\n                CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n            ')]),e._v(" "),r("p",[r("small",[r("button",{on:{click:function(t){return t.preventDefault(),e.reloadApp(t)}}},[e._v("Reload App")])])]),e._v(" "),r("p",[r("small",[r("button",{on:{click:function(t){return t.preventDefault(),e.clearLocalStorage(t)}}},[e._v("Clear Saved Settings")])])]),e._v(" "),r("br"),e._v(" "),r("br")])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),this._v(" "),t("strong",[this._v("Data Source")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n                This is a non-commercial, volunteer project.\n                "),t("a",{attrs:{href:"https://github.com/reillybeacom/aus-emergency-map"}},[this._v("Source code")]),this._v(" is\n                available and feedback or contributions welcome.\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n                For an overview of features please see the\n                "),t("a",{attrs:{href:"./user_guide/index.html",target:"_blank"}},[this._v("User Guide")]),this._v(".\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://leafletjs.com/"}},[this._v("Leaflet")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://www.openstreetmap.org/about"}},[this._v("OpenStreetMap")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://vuejs.org/"}},[this._v("Vue.js")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://www.mozilla.org/en-US/firefox/"}},[this._v("Firefox")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"noselect"},[this._v("\n                Contact:"),t("br"),this._v("\n                aem"),t("span",{staticClass:"mdi mdi-at"}),this._v("reillybeacom.net\n            ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticStyle:{"font-size":"70%",color:"grey"}},[this._v("\n                Map data ©\n                "),t("a",{attrs:{href:"https://www.openstreetmap.org/"}},[this._v("OpenStreetMap")]),this._v(" contributors,\n                "),t("a",{attrs:{href:"https://creativecommons.org/licenses/by-sa/2.0/"}},[this._v("CC-BY-SA")])])}],!1,null,null,null));t.default=D.exports}}]);