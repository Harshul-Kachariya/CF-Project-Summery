import{a as _}from"./chunk-XWTN2QSH.js";import{m as g}from"./chunk-TVJAXB4Y.js";import{a as v}from"./chunk-EUB67SJ3.js";import"./chunk-7S4WJWCM.js";import{a as w,b as p}from"./chunk-LTFFWF27.js";import{c as n}from"./chunk-5TBO732O.js";var o=n(w(),1);var h=n(p(),1),A=({projectId:f,userId:s,compId:i})=>{let[x,m]=(0,o.useState)([]),t=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let u=async()=>{try{let r=new FormData;r.append("op","get_schedule_calendar_events"),r.append("project_id",f),r.append("for","dashboard_summary"),r.append("start_date_range","2024-9-01 00:00:00"),r.append("version","web"),r.append("from","panel"),r.append("iframe_call","0"),r.append("tz","+5:30"),r.append("tzid","Asia/Calcutta"),r.append("curr_time","2024-08-31 15:50:38"),r.append("force_login","0"),r.append("global_project",""),r.append("user_id",s),r.append("company_id",i);let a=await _.post(`https://api-cfdev.contractorforeman.net/service.php?opp=get_schedule_calendar_events&c=${Number(i)}&u=${Number(s)}&p=manage_projects`,r);m(a?.data?.data?.modules)}catch(r){console.log("Error fetching data:",r)}},e=setTimeout(()=>{u()},500);return()=>{clearTimeout(e)}},[]),(0,o.useEffect)(()=>((async()=>{let e=(await import("./dhtmlxscheduler.es-LUEABIOB.js")).default;if(t.current){e.config.header=["date","prev","today","next"],e.config.multi_day=!1,e.config.first_hour=0,e.config.last_hour=24,e.config.scale_width=0,e.config.readonly=!0,e.config.drag_resize=!1,e.config.drag_move=!1,e.xy.scale_width=0,e.config.responsive=!0,e.config.left_border=!1;let r=()=>(window.innerWidth<768?(e.config.header=["prev","date","next"],e.xy.scale_width=40,e.templates.week_scale_date=function(d){return e.date.date_to_str("%D")(d)}):(e.config.header=["date","today","prev","next"],e.xy.scale_width=50,e.templates.week_scale_date=function(d){return e.date.date_to_str("%D, %F %j")(d)}),t.current&&e.updateView(),!0),a=new Date;e.init(t.current,a,"week"),e.parse(x),r(),e.attachEvent("onBeforeViewChange",r),e.attachEvent("onSchedulerResize",r),e.templates.event_class=function(d,c,l){return l.classname||""},e.ignore_week=function(d){if(d.getDay()===0||d.getDay()===6)return!0},e.templates.week_date=function(d){let c=e.date.add(d,6,"day"),l=b=>{let k=b.getDate()-1,y=b.toLocaleString("default",{month:"short"});return`${k} ${y}`};return`Sun, ${l(d)} ${d.getFullYear()} - Sat, ${l(c)} ${c.getFullYear()}`},window.addEventListener("resize",r)}})(),()=>{import("./dhtmlxscheduler.es-LUEABIOB.js").then(e=>e.default.clearAll())}),[x]),(0,h.jsxs)("div",{className:"w-full relative",children:[(0,h.jsx)("div",{className:"lg:absolute mt-4 lg:mt-0 lg:top-4 z-50 ",children:(0,h.jsx)(v,{icon:g,label:"Schedule",bgColor:"#ECF3FF",color:"#78AEFE"})}),(0,h.jsx)("div",{ref:t,style:{width:"100%",height:"100%"}})]})},q=A;export{q as default};