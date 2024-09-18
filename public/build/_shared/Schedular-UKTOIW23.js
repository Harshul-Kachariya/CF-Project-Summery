import{a as D}from"/build/_shared/chunk-K3LLJEF6.js";import{n as b}from"/build/_shared/chunk-VLLPV3E6.js";import{a as S}from"/build/_shared/chunk-Z2CLOVLV.js";import{c as _}from"/build/_shared/chunk-HFRXINCS.js";import"/build/_shared/chunk-L4JQJ63A.js";import{a as $,b as v}from"/build/_shared/chunk-BVJBT3X3.js";import{d as g}from"/build/_shared/chunk-T36URGAI.js";var o=g($(),1);var a=g(v(),1),k=({projectId:s,userId:l,compId:n})=>{let[f,p]=(0,o.useState)([]),[m,d]=(0,o.useState)(!0),c=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let y=async()=>{d(!0),console.log("Data fetching from Scheduler =====>>>>>.........");try{let t=new FormData;t.append("op","get_schedule_calendar_events"),t.append("project_id",s.toString()??"0"),t.append("for","dashboard_summary"),t.append("start_date_range","2024-9-01 00:00:00"),t.append("version","web"),t.append("from","panel"),t.append("iframe_call","0"),t.append("tz","+5:30"),t.append("tzid","Asia/Calcutta"),t.append("curr_time","2024-08-31 15:50:38"),t.append("force_login","0"),t.append("global_project",""),t.append("user_id",l.toString()??"0"),t.append("company_id",n.toString()??"0");let i=await D.post(`https://api-cfdev.contractorforeman.net/service.php?opp=get_schedule_calendar_events&c=${n?Number(n):0}&u=${l?Number(l):0}&p=manage_projects`,t);console.log("Data fetching Successfull from Scheduler  =====>>>>>",i?.data),p(i?.data?.data?.modules),d(!1)}catch(t){d(!1),console.log("Error fetching data:",t)}finally{d(!1)}},e=setTimeout(()=>{y()},300);return()=>{clearTimeout(e)}},[s,l,n]),(0,o.useEffect)(()=>((async()=>{let e=(await import("/build/_shared/dhtmlxscheduler.es-MI5VYV75.js")).default;if(c.current){e.config.header=["date","prev","today","next"],e.config.multi_day=!1,e.config.first_hour=0,e.config.last_hour=24,e.config.scale_width=0,e.config.readonly=!0,e.config.drag_resize=!1,e.config.drag_move=!1,e.xy.scale_width=0,e.config.left_border=!1;let t=()=>(typeof window<"u"&&window.innerWidth<768?(e.config.header=["prev","date","next"],e.xy.scale_width=40,e.templates.week_scale_date=function(r){return e.date.date_to_str("%D")(r)}):(e.config.header=["date","today","prev","next"],e.xy.scale_width=50,e.templates.week_scale_date=function(r){return e.date.date_to_str("%D, %F %j")(r)}),c.current&&e.updateView(),!0),i=new Date;e.init(c.current,i,"week"),e.parse(f),t(),e.attachEvent("onBeforeViewChange",t),e.attachEvent("onSchedulerResize",t),e.templates.event_class=function(r,h,u){return u.classname||""},e.ignore_week=function(r){if(r.getDay()===0||r.getDay()===6)return!0},e.templates.week_date=function(r){let h=e.date.add(r,6,"day"),u=w=>{let x=w.getDate()-1,N=w.toLocaleString("default",{month:"short"});return`${x} ${N}`};return`Sun, ${u(r)} ${r.getFullYear()} - Sat, ${u(h)} ${h.getFullYear()}`},window.addEventListener("resize",t)}})(),()=>{import("/build/_shared/dhtmlxscheduler.es-MI5VYV75.js").then(e=>e.default.clearAll())}),[f]),(0,a.jsxs)("div",{className:"w-full relative",children:[(0,a.jsx)("div",{className:`${!m&&"lg:absolute "} mt-4 lg:mt-0 lg:top-4 z-50`,children:(0,a.jsx)(S,{icon:b,label:"Schedule",bgColor:"#ECF3FF",color:"#78AEFE"})}),m?(0,a.jsx)("div",{className:"mt-3 h-full",children:(0,a.jsx)(E,{className:`${!m&&"min-h-48"}`})}):(0,a.jsx)("div",{ref:c,style:{width:"100%",height:"100%"}})]})},Y=k,E=({className:s})=>(0,a.jsxs)("table",{className:`w-full border-2 ${s}`,children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{className:"bg-black/10 h-7",children:[...Array(6)].map((l,n)=>(0,a.jsx)("th",{className:"font-normal",children:(0,a.jsx)(_,{className:"h-3 w-40 mx-auto rounded-xl bg-gray-300"})},n))})}),(0,a.jsx)("tbody",{children:[...Array(6)].map((l,n)=>(0,a.jsx)("tr",{children:[...Array(6)].map((f,p)=>(0,a.jsx)("td",{className:"py-1",children:(0,a.jsx)(_,{className:"h-2.5 rounded bg-gray-300 mx-auto",style:{width:`${Math.floor(Math.random()*40)+60}%`}})},p))},n))})]});export{Y as default};