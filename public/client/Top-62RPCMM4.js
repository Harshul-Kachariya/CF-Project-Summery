import{a as d}from"./chunk-A6SUGU7W.js";import{a as g}from"./chunk-RNJ664U5.js";import{b as s,c as t,g as i,l as n,m}from"./chunk-BRLBBIEX.js";import{c as a,d as c}from"./chunk-MYGIRSMY.js";import{c as r}from"./chunk-5TBO732O.js";var e=r(c(),1),N=({data:o,isLoading:f})=>{console.log("data from top",o);let{billing_vs_actual:l}=o,p=[{id:1,label:"Gross Profit",label2:`(${Number(l?.gross_profit)>0?(l?.gross_profit*100/l?.amount_invoiced).toFixed(2):"0"}%)`,values:`${g(Number(l?.gross_profit))}`,icon:n,color:"#9ABA04",bgColor:"#F1F4E6"},{id:2,label:"Site Manager",label2:`${o?.site_manager_name!==""?o?.site_manager_name:"-"}`,values:"",icon:t,color:"#7FB2FF",bgColor:"#ECF3FE"},{id:3,label:"Project Manager",label2:`${o?.project_manager_name!==""?o?.project_manager_name:"-"}`,values:"",icon:i,color:"#57A6EC",bgColor:"#EEF4FC"},{id:4,label:"Start/End Date",label2:`${o?.start_date&&o?.end_date!==""?o?.start_date+"-"+o?.end_date:"-"}`,values:"",icon:m,color:"#A54BFF",bgColor:"#F4EAFF"},{id:5,label:" Schedule Completed",label2:`${l?.progress==="0"?l?.progress:"0"}%`,values:"",icon:s,color:"#9ABA04",bgColor:"#F1F4E6"}];return(0,e.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 mt-3",children:p.map(({id:u,bgColor:b,icon:v,label:F,label2:_,values:x,color:C})=>(0,e.jsx)("div",{className:"rounded-lg border bg-white hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5",children:(0,e.jsxs)("div",{className:"flex items-center gap-3",children:[(0,e.jsx)("div",{style:{backgroundColor:b},className:"w-10 h-10 rounded-full flex justify-center items-center flex-shrink-0",children:(0,e.jsx)(a,{icon:v,style:{color:C},className:"text-lg"})}),(0,e.jsxs)("div",{className:"flex-grow min-w-0",children:[(0,e.jsx)("div",{className:"text-sm truncate",children:F}),f?(0,e.jsx)(d,{className:"rounded-xl h-3.5"}):(0,e.jsxs)("p",{className:"flex justify-between items-center text-sm ",children:[(0,e.jsx)("span",{className:"truncate font-medium",children:_}),(0,e.jsx)("span",{className:"text-emerald-600 font-semibold ml-1 text-green-500 ",children:x})]})]})]})},u))})},$=N;export{$ as default};