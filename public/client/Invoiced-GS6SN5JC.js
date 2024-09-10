import{a}from"./chunk-RNJ664U5.js";import{e as u,f as x,h as N}from"./chunk-TVJAXB4Y.js";import{a as s}from"./chunk-VAMN75EF.js";import{a as p}from"./chunk-EUB67SJ3.js";import{b as m}from"./chunk-7S4WJWCM.js";import{a as w,b as f}from"./chunk-LTFFWF27.js";import{c as i}from"./chunk-5TBO732O.js";var n=i(w(),1);var e=i(f(),1),C=({data:t,customer_additional_contacts:o})=>{let[b,g]=(0,n.useState)(!0);console.log("invoiced",o);let{amount_invoiced:c,original_contract_amount:r,remain_to_invoice:d,total_actual_cost:y,gross_profit:h}=t,T=(parseFloat(c)/parseFloat(r)*100).toFixed(0),k=(parseFloat(d)/parseFloat(r)*100).toFixed(0);(0,n.useEffect)(()=>{t&&o&&g(!1)},[]);let F=[{id:1,label:"Total Project Amount (no/Tax)",value:`${a(r)}
`,color:"text-emerald-600"},{id:2,label:"Invoiced to Date (no/Tax)",value:`${a(Number(c))}
`,color:"text-emerald-600"},{id:3,label:"Remaining to Invoice (no/Tax)",value:`${a(Number(d))}`,color:"text-emerald-600"},{id:4,label:"Total Actual Costs",value:`${a(Number(y))}`,color:"text-red-600"},{id:5,label:"Gross Profit",value:`${a(Number(h))}`,color:"text-emerald-600"}],S="flex justify-between items-center text-sm",v="bg-white border  rounded-md  hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 h-full";return(0,e.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,e.jsx)("div",{className:v,children:(0,e.jsxs)("div",{className:"flex justify-start items-center gap-3 w-full  ",children:[(0,e.jsx)("div",{className:"bg-[#ffe8d2dd] w-12 h-10 rounded-full flex justify-center items-center text-[#FB8056] ",children:(0,e.jsx)(m,{icon:x,className:"text-base"})}),(0,e.jsxs)("div",{className:" w-full",children:["Customer",(0,e.jsxs)("p",{className:"flex justify-between items-center  font-semibold hover:text-[#FB8056] hover:cursor-pointer hover:transition-colors hover:duration-700",children:[o[0]?.first_name+" "+o[0]?.last_name+` (${o[0]?.company_name})`," ",(0,e.jsx)("span",{className:"text-[#FB8056] font-semibold",children:(0,e.jsx)(m,{icon:N,className:"text-sm"})})]})]})]})}),(0,e.jsxs)("div",{className:v,children:[(0,e.jsx)(p,{icon:u,label:"Invoiced vs Actual",bgColor:"#F3ECF5",color:"#CE6698"}),b?(0,e.jsx)(I,{}):(0,e.jsx)("div",{className:"space-y-1 mt-3",children:F.map(l=>(0,e.jsxs)("p",{className:S,children:[l.label," ",(0,e.jsx)("span",{className:`${l.color} font-semibold`,children:l.value})]},l.id))})]})]})},D=C,I=()=>{let t=" w-6 h-2 rounded-xl",o="flex justify-between items-center text-sm";return(0,e.jsxs)("div",{className:"space-y-1 mt-3",children:[(0,e.jsxs)("p",{className:o,children:["Total Project Amount (no/Tax)"," ",(0,e.jsx)(s,{className:t})]}),(0,e.jsxs)("p",{className:o,children:["Invoiced to Date (no/Tax) (77%)"," ",(0,e.jsx)(s,{className:t})]}),(0,e.jsxs)("p",{className:o,children:["Remaining to Invoice (no/Tax) (23%)"," ",(0,e.jsx)(s,{className:t})]}),(0,e.jsxs)("p",{className:o,children:["Total Actual Costs ",(0,e.jsx)(s,{className:t})]}),(0,e.jsxs)("p",{className:o,children:["Gross Profit ",(0,e.jsx)(s,{className:t})]})]})};export{D as default};