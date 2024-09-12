import{a as l}from"/build/_shared/chunk-K3LLJEF6.js";import{a as y,b as d}from"/build/_shared/chunk-BVJBT3X3.js";import{d as c}from"/build/_shared/chunk-T36URGAI.js";var e=c(y(),1),a=c(d(),1),b=(0,e.lazy)(()=>import("/build/_shared/ProjectSummary-KLWJLAM6.js")),h=(0,e.lazy)(()=>import("/build/_shared/Invoiced-LEPKAUF7.js")),j=(0,e.lazy)(()=>import("/build/_shared/ActionItems-KYUGECJH.js")),w=(0,e.lazy)(()=>import("/build/_shared/SummaryPercentages-LU2EJ4PK.js")),N=(0,e.lazy)(()=>import("/build/_shared/WorkInprogress-BYPI2M5M.js")),x=(0,e.lazy)(()=>import("/build/_shared/RecentPhtotos-YBGVMFKO.js")),D=(0,e.lazy)(()=>import("/build/_shared/Schedular-IBUESDCL.js")),P=(0,e.lazy)(()=>import("/build/_shared/Top-Q26SQZEY.js")),I=()=>[{title:"Project Dashboard"},{name:"description",content:"Project management dashboard"}];function m(){let[n,p]=(0,e.useState)(null),[u,r]=(0,e.useState)(!0),f=async()=>{try{let s=localStorage.getItem("projectData");s&&(p(JSON.parse(s)),r(!1));let t=new FormData;t.append("op","get_project_detail"),t.append("project_id","137869"),t.append("is_refresh","0"),t.append("record_type","project"),t.append("version","web"),t.append("from","panel"),t.append("iframe_call","0"),t.append("tz","+5:30"),t.append("tzid","Asia/Calcutta"),t.append("curr_time",new Date().toISOString()),t.append("force_login","0"),t.append("global_project",""),t.append("user_id","50304"),t.append("company_id","408");let i=(await l.post("https://api-cfdev.contractorforeman.net/service.php?opp=get_project_detail&c=408&u=50304&p=manage_projects",t)).data.data;p(i),r(!1),localStorage.setItem("projectData",JSON.stringify(i))}catch(s){console.error("Error fetching data:",s),r(!1)}};if((0,e.useEffect)(()=>{setTimeout(()=>{f()},500)},[]),u)return(0,a.jsx)("div",{className:"flex justify-center items-center h-screen",children:"Loading..."});if(!n)return(0,a.jsx)("div",{className:"flex justify-center items-center h-screen",children:"No data available"});let{project_summary:g,wip_widget:v,customer_additional_contacts:_,billing_vs_actual:S}=n,o="bg-white border rounded-md hover:shadow-lg transition-shadow duration-500";return(0,a.jsxs)("div",{className:"space-y-4 p-4 overflow-y-auto sidebar",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(e.Suspense,{fallback:(0,a.jsx)("p",{children:"Loading Project topbar..."}),children:(0,a.jsx)(P,{data:S})})}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3",children:[(0,a.jsx)("div",{className:`${o} p-4`,children:(0,a.jsx)(e.Suspense,{fallback:(0,a.jsx)("p",{children:"Loading Project Summary..."}),children:(0,a.jsx)(b,{data:g})})}),(0,a.jsx)("div",{className:`${o} px-4 pt-4`,children:(0,a.jsx)(e.Suspense,{fallback:(0,a.jsx)("p",{children:"Loading Summary Percentages..."}),children:(0,a.jsx)(w,{data:n})})}),(0,a.jsx)("div",{className:`${o} px-4 pt-4`,children:(0,a.jsx)(e.Suspense,{fallback:(0,a.jsx)("p",{children:"Loading Action Items..."}),children:(0,a.jsx)(j,{})})}),(0,a.jsx)("div",{children:(0,a.jsx)(e.Suspense,{fallback:(0,a.jsx)("p",{children:"Loading Invoiced..."}),children:(0,a.jsx)(h,{data:n,customer_additional_contacts:_})})}),(0,a.jsx)("div",{className:`${o} px-4 pb-2 lg:pt-4`,children:(0,a.jsx)(e.Suspense,{fallback:(0,a.jsx)("p",{children:"Loading Work In Progress..."}),children:(0,a.jsx)(N,{data:v})})}),(0,a.jsx)("div",{className:`${o} p-4`,children:(0,a.jsx)(e.Suspense,{fallback:(0,a.jsx)("p",{children:"Loading Recent Photos..."}),children:(0,a.jsx)(x,{data:n})})})]}),(0,a.jsx)("div",{className:`${o} px-4 h-60`,children:(0,a.jsx)(e.Suspense,{fallback:(0,a.jsx)("p",{children:"Loading Scheduler..."}),children:(0,a.jsx)(D,{})})})]})}export{m as default,I as meta};