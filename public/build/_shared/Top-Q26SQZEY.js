import{a as i}from"/build/_shared/chunk-X23RKJPD.js";import{b as n,c,g as m,k as d,l as f}from"/build/_shared/chunk-OF7TX32X.js";import{b as t}from"/build/_shared/chunk-DGA7IYTA.js";import"/build/_shared/chunk-L4JQJ63A.js";import{b as a}from"/build/_shared/chunk-BVJBT3X3.js";import{d as s}from"/build/_shared/chunk-T36URGAI.js";var l=s(a(),1),_=({data:e})=>{console.log("121223",e);let g=[{id:1,label:"Gross Profit",label2:`(${Number(e?.gross_profit)>0?(e?.gross_profit*100/e?.amount_invoiced).toFixed(2):"0"}%)`,values:`${i(Number(e?.gross_profit))}`,icon:d,color:"#9ABA04",bgColor:"#F1F4E6"},{id:2,label:"Site Manager",label2:`${e.site_manager_name!==""?"-":e?.site_manager_name}`,values:"",icon:c,color:"#7FB2FF",bgColor:"#ECF3FE"},{id:3,label:"Project Manager",label2:`${e?.project_manager_name===""?e?.project_manager_name:"-"}`,values:"",icon:m,color:"#57A6EC",bgColor:"#EEF4FC"},{id:4,label:"Start/End Date",label2:`${e?.start_date&&e?.end_date===""?e?.start_date+"-"+e?.end_date:"-"}`,values:"",icon:f,color:"#A54BFF",bgColor:"#F4EAFF"},{id:5,label:" Schedule Completed",label2:`${e?.progress==="0"?e?.progress:"0"}%`,values:"",icon:n,color:"#9ABA04",bgColor:"#F1F4E6"}];return(0,l.jsx)("div",{className:"  grid grid-cols-1 lg:grid-cols-5 w-full h-full  gap-2 mt-3 ",children:g.map(({id:u,bgColor:o,icon:b,label:p,label2:v,values:F,color:r})=>(0,l.jsx)("div",{className:"col-span-1 rounded-lg border bg-white  hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 w-full",children:(0,l.jsxs)("div",{className:"flex justify-start items-center gap-3 w-full  ",children:[(0,l.jsx)("div",{style:{backgroundColor:o},className:`bg-[${o}] w-12  h-10 rounded-full flex justify-center items-center`,children:(0,l.jsx)(t,{icon:b,style:{color:r},className:`text-2xl text-[${r}]`})}),(0,l.jsxs)("div",{className:" w-full",children:[" ",p,(0,l.jsxs)("p",{className:"flex justify-between items-center text-sm font-semibold",children:[v,(0,l.jsx)("span",{className:"text-emerald-600 font-semibold",children:F})]})]})]})},u))})},y=_;export{y as default};
