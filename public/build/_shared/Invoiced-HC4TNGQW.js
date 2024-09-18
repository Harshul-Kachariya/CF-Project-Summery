import{a as t}from"/build/_shared/chunk-X23RKJPD.js";import{e as i}from"/build/_shared/chunk-657A45VU.js";import{a as d}from"/build/_shared/chunk-Z2CLOVLV.js";import{c as a}from"/build/_shared/chunk-HFRXINCS.js";import"/build/_shared/chunk-L4JQJ63A.js";import{b as m}from"/build/_shared/chunk-BVJBT3X3.js";import{d as r}from"/build/_shared/chunk-T36URGAI.js";var e=r(m(),1),f=({data:o,isLoading:u})=>{let{amount_invoiced:s,original_contract_amount:n,remain_to_invoice:c,total_actual_cost:p,gross_profit:v}=o?.billing_vs_actual,g=(parseFloat(s)/parseFloat(n)*100).toFixed(0),T=(parseFloat(c)/parseFloat(n)*100).toFixed(0),x=[{id:1,label:"Total Project Amount (no/Tax)",value:`${t(n)}
`,color:"text-emerald-600"},{id:2,label:"Invoiced to Date (no/Tax)",value:`${t(Number(s))}
`,color:"text-emerald-600"},{id:3,label:"Remaining to Invoice (no/Tax)",value:`${t(Number(c))}`,color:"text-emerald-600"},{id:4,label:"Total Actual Costs",value:`${t(Number(p))}`,color:"text-red-600"},{id:5,label:"Gross Profit",value:`${t(Number(v))}`,color:"text-emerald-600"}],N="flex justify-between items-center text-sm";return(0,e.jsx)("div",{className:"flex flex-col gap-3",children:(0,e.jsxs)("div",{children:[(0,e.jsx)(d,{icon:i,label:"Invoiced vs Actual",bgColor:"#F3ECF5",color:"#CE6698"}),u?(0,e.jsx)(b,{}):(0,e.jsx)("div",{className:"space-y-1 mt-3",children:x.map(l=>(0,e.jsxs)("p",{className:N,children:[l.label," ",(0,e.jsx)("span",{className:`${l.color} font-semibold`,children:l.value})]},l.id))})]})})},I=f,b=()=>{let o="flex justify-between items-center text-sm";return(0,e.jsxs)("div",{className:"space-y-1 mt-3",children:[(0,e.jsxs)("p",{className:o,children:["Total Project Amount (no/Tax)"," ",(0,e.jsx)(a,{className:"w-12 h-2.5 rounded-xl"})]}),(0,e.jsxs)("p",{className:o,children:["Invoiced to Date (no/Tax) (77%)"," ",(0,e.jsx)(a,{className:"w-10 h-2.5 rounded-xl"})]}),(0,e.jsxs)("p",{className:o,children:["Remaining to Invoice (no/Tax) (23%)"," ",(0,e.jsx)(a,{className:"w-12 h-2.5 rounded-xl"})]}),(0,e.jsxs)("p",{className:o,children:["Total Actual Costs"," ",(0,e.jsx)(a,{className:"w-10 h-2.5 rounded-xl"})]}),(0,e.jsxs)("p",{className:o,children:["Gross Profit ",(0,e.jsx)(a,{className:"w-12 h-2.5 rounded-xl"})]})]})};export{I as default};