(this["webpackJsonpstore-frontend"]=this["webpackJsonpstore-frontend"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(8),a=n.n(i),u=(n(52),n(53),n(54),n(55),n(46)),l=n(9),o=n(38),d=n(39),s=n(14),j=n.n(s),b=function(){function e(){Object(o.a)(this,e),this.baseUrl="https://store-products-api.herokuapp.com/api/store/"}return Object(d.a)(e,[{key:"create",value:function(e){return j.a.post(this.baseUrl+"product/",e).then((function(e){return e.data}))}},{key:"readAll",value:function(){return j.a.get(this.baseUrl).then((function(e){return e.data}))}},{key:"update",value:function(e){return j.a.put(this.baseUrl+"product/"+e._id,e).then((function(e){return e.data}))}},{key:"delete",value:function(e){return j.a.delete(this.baseUrl+"product/"+e).then((function(e){return e.data}))}}]),e}(),f=n(1),O=Object(c.createContext)(),h=function(e){var t=new b,n=Object(c.useState)([]),r=Object(l.a)(n,2),i=r[0],a=r[1],o=Object(c.useState)(null),d=Object(l.a)(o,2),s=d[0],j=d[1];Object(c.useEffect)((function(){t.readAll().then((function(e){return a(e)}))}),[]);return Object(f.jsx)(O.Provider,{value:{createProduct:function(e){t.create(e).then((function(e){return a([].concat(Object(u.a)(i),[e]))}))},deleteProduct:function(e){t.delete(e).then((function(){return a(i.filter((function(t){return t._id!==e})))}))},findProduct:function(e){var t=i.find((function(t){return t._id===e}));j(t)},updateProduct:function(e){t.update(e).then((function(t){return a(i.map((function(n){return n._id===e._id?t:e})))})),j(null)},editProduct:s,products:i},children:e.children})},p=n(40),x=n(41),v=n(21),m=n(13),g=n(20),C=n(25),P=n(42),y=n(43),S=n(44),_=n(45),k=function(e){var t=e.isVisible,n=e.setIsVisible,r=Object(c.useContext)(O),i=r.createProduct,a=r.deleteProduct,u=r.editProduct,o=r.updateProduct,d={_id:null,name:"",price:0,expiry_date:null},s=Object(c.useState)(d),j=Object(l.a)(s,2),b=j[0],h=j[1];Object(c.useEffect)((function(){u&&h(u)}),[u]);var p=function(e,t){h(Object(C.a)(Object(C.a)({},b),{},Object(g.a)({},t,e))),console.log(b)},x=Object(f.jsxs)("div",{className:"ui-dialog-buttonpane p-clearfix",children:[Object(f.jsx)(m.Button,{label:"Delete",icon:"pi pi-times",onClick:function(){u&&(a(b._id),h(d)),n(!1)}}),Object(f.jsx)(m.Button,{label:"Save",icon:"pi pi-check",onClick:function(){u?o(b):i(b),h(d),n(!1)}})]});return Object(f.jsx)("div",{children:Object(f.jsx)(P.Dialog,{visible:t,modal:!0,style:{width:"420px"},contentStyle:{overflow:"visible"},header:"Detalles del Producto",onHide:function(){return n(!1),void h(d)},footer:x,children:Object(f.jsxs)("div",{className:"p-grid p-fluid",children:[Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"p-float-label",children:[Object(f.jsx)(y.InputText,{value:b.name,onChange:function(e){return p(e.target.value.trim(),"name")}}),Object(f.jsx)("label",{children:"Nombre:"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"p-float-label",children:[Object(f.jsx)(S.InputNumber,{value:b.price,onChange:function(e){return p(e.target.value,"price")},mode:"currency",currency:"PEN"}),Object(f.jsx)("label",{children:"Precio:"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"p-float-label",children:[Object(f.jsx)(_.Calendar,{value:b.expiry_date&&new Date(b.expiry_date+" "),onChange:function(e){return p(e.target.value.toISOString().substring(0,10),"expiry_date")},dateFormat:"yy-mm-dd"}),Object(f.jsx)("label",{children:"Fecha de caducidad:"})]}),Object(f.jsx)("br",{})]})})})},N=function(){var e=Object(c.useContext)(O),t=e.products,n=e.findProduct,r=Object(c.useState)(!1),i=Object(l.a)(r,2),a=i[0],u=i[1],o=Object(f.jsx)("div",{className:"p-clearfix",style:{width:"100%"},children:Object(f.jsx)(m.Button,{icon:"pi pi-plus",label:"Add",onClick:function(){return u(!0)}})});return Object(f.jsxs)("div",{children:[Object(f.jsx)(p.Panel,{header:"LISTA DE PRODUCTOS",style:{textAlign:"center"},children:Object(f.jsxs)(x.DataTable,{value:t,selectionMode:"single",onSelectionChange:function(e){return t=e.value._id,n(t),void u(!0);var t},footer:o,children:[Object(f.jsx)(v.Column,{field:"name",header:"Nombre"}),Object(f.jsx)(v.Column,{field:"price",header:"Precio"}),Object(f.jsx)(v.Column,{field:"expiry_date",header:"Fecha de Caducidad"})]})}),Object(f.jsx)(k,{isVisible:a,setIsVisible:u})]})};var D=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(h,{children:Object(f.jsx)(N,{})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root")),I()},52:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.7911302a.chunk.js.map