import{a as u}from"/build/_shared/chunk-K3LLJEF6.js";import{a as y}from"/build/_shared/chunk-5DNCLJX5.js";import{j as f}from"/build/_shared/chunk-OF7TX32X.js";import{a as i}from"/build/_shared/chunk-FZCUADOT.js";import{a as _}from"/build/_shared/chunk-GLL77XL4.js";import"/build/_shared/chunk-DGA7IYTA.js";import"/build/_shared/chunk-L4JQJ63A.js";import{a as g,b as d}from"/build/_shared/chunk-BVJBT3X3.js";import{d as c}from"/build/_shared/chunk-T36URGAI.js";var a=c(g(),1);var t=c(d(),1),C=()=>{let[r,b]=(0,a.useState)([]);(0,a.useEffect)(()=>{let m=async()=>{try{let e=new FormData;e.append("op","get_project_reference_detail"),e.append("project_id","147534"),e.append("need_more_data","0"),e.append("for_module_key",""),e.append("version","web"),e.append("from","panel"),e.append("iframe_call","0"),e.append("tz","+5:30"),e.append("tzid","Asia/Calcutta"),e.append("curr_time","2024-08-31 15:50:38"),e.append("force_login","0"),e.append("global_project",""),e.append("user_id","109871"),e.append("company_id","829");let v=await u.post("https://api-cfdev.contractorforeman.net/service.php?opp=get_project_reference_detail&c=829&u=109871&p=manage_projects",e);b(v?.data?.data?.modules)}catch(e){console.log("Error fetching data:",e)}},o=setTimeout(()=>{m()},500);return()=>{clearTimeout(o)}},[]);let l=y().default,h={chart:{id:"chart1",type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,dataLabels:{total:{enabled:!0,offsetX:0,style:{fontSize:"13px",fontWeight:900}}}}},xaxis:{categories:["OPEN","DUE","CLOSED"],tickPlacement:"on"},colors:["#684CC7","#e01f35","#282691"],legend:{show:!0,position:"top"}},n=r?.open_incomplete_item?.opnIncoInvoice[0]||{},p=r?.open_incomplete_item?.opnIncoBills[0]||{},s=r?.open_incomplete_item?.opnIncoPurchaseOrder[0]||{},N=[{name:"Invocies",data:[Number(n?.total_open)||0,Number(n?.total_due)||0,Number(n?.total_close)||0]},{name:"Bills",data:[Number(p?.total_open)||0,Number(p?.bill_count)||0,Number(p?.total_close)||0]},{name:"Bills",data:[Number(s?.total_open)||0,Number(s?.bill_count)||0,Number(s?.total_close)||0]}];return(0,t.jsxs)("div",{className:"h-full",children:[(0,t.jsx)(_,{icon:f,label:"Action-Items",bgColor:"#ECF3FE",color:"#7FB2FF"}),l?(0,t.jsx)(l,{type:"bar",responsive:!0,options:h,series:N,height:307}):(0,t.jsx)("div",{className:"space-y-4",children:[...Array(4)].map((m,o)=>(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)(i,{className:"w-8 h-4"}),(0,t.jsx)(i,{className:`h-14 ${o===1?"w-3/4":o===2?"w-full":"w-1/2"}`})]},o))})]})},E=C;export{E as default};
