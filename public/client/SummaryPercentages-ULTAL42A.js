import{d}from"./chunk-IGDJXKQZ.js";import{a as f}from"./chunk-HMOSGDKR.js";import{b,c as r}from"./chunk-ROUY3G55.js";import{a as C}from"./chunk-LIQWK7XC.js";import{c as n}from"./chunk-5TBO732O.js";var o=n(C(),1);var t=n(b(),1),w=({data:a,isLoading:l})=>{let[i,h]=(0,o.useState)();(0,o.useEffect)(()=>{import("./react-apexcharts.min-HOW35RKL.js").then(e=>h(()=>e.default))},[]);let m=a?.billing_vs_actual||{},s=a?.all_item_total||{},v=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(e),y=Number(s?.total?.commited_total)||0,c=Number(s?.total?.actual_total)||0,u=Number(s?.labor?.actual_total)||0,g=(Number(m?.amount_invoiced)||0)/100,N=Number(s?.total?.estimated_total)||0,x=(Number(m?.original_contract_amount)||0)/100,_={chart:{id:"chart1",toolbar:{show:!1}},grid:{show:!1},plotOptions:{bar:{horizontal:!1,columnWidth:"30%",dataLabels:{position:"top"}}},xaxis:{categories:["Committed","Actual","Labor","Invoiced"]},yaxis:{labels:{formatter:function(e){return`${e.toFixed(0)}%`}},min:0,max:1e3},dataLabels:{enabled:!1},stroke:{colors:["transparent"],width:5},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return v(Number(e))}}},colors:["#7989A9","#F9C75C"],legend:{show:!1,position:"top"}},A=[{name:"Invoiced to Date",data:[y,c,u,g]},{name:"Total Project Amount",data:[N,c,u,x]}];return a?(0,t.jsxs)("div",{className:"h-full",children:[(0,t.jsx)(f,{icon:d,label:"Summary Percentages",bgColor:"#FEF6E5",color:"#F8AB07",className:"text-base"}),i?(0,t.jsx)(o.Suspense,{fallback:(0,t.jsx)(p,{}),children:(0,t.jsx)(i,{type:"bar",options:_,series:A,height:250})}):(0,t.jsx)(p,{})]}):(console.log("<<<<<==== Data not Available ====>>>>>"),(0,t.jsx)("div",{children:"Loading Charts"}))},I=w,p=()=>(0,t.jsxs)("div",{className:"relative h-64 ",children:[(0,t.jsx)("div",{className:"absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2",children:[...Array(6)].map((a,l)=>(0,t.jsx)(r,{className:"w-10 h-2"},l))}),(0,t.jsx)("div",{className:"absolute left-14  right-0 top-0 bottom-8 flex justify-between items-end",children:[10,16,60,20,40].map((a,l)=>(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsx)(r,{className:`w-12 mb-1 h-${a}`}),(0,t.jsx)(r,{className:"w-16 h-2"})]},l))})]});export{I as default};
