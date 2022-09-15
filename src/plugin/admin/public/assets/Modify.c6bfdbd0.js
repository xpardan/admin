var E=(u,I,F)=>new Promise((W,T)=>{var G=p=>{try{f(F.next(p))}catch(S){T(S)}},C=p=>{try{f(F.throw(p))}catch(S){T(S)}},f=p=>p.done?W(p.value):Promise.resolve(p.value).then(G,C);f((F=F.apply(u,I)).next())});import{aG as re,r as P,a as de,co as fe,a5 as k,aI as L,o as g,aJ as w,p as v,i as a,j as M,w as Y,v as z,b5 as x,q as i,x as pe}from"./index.e289dcd8.js";import{B as me}from"./BasicForm.5e329826.js";import{C as he}from"./index.e90269ea.js";import"./index.3786f1ff.js";import"./index.eb82b28a.js";import{B as be,a as ve}from"./index.d6a41360.js";import{defaultTableSchemas as ye,fieldSchemas as V,getDefaultFieldSchemas as Be,defaultKeySchemas as A,controlSelectOptions as _e,typeToControl as $e}from"./tableData.e0091893.js";import{T as Q}from"./table.0ba2e59f.js";import{a as Ce,b as ee}from"./common.c0183400.js";import"./index.feb7d840.js";import"./_baseIteratee.6d14cbb8.js";import"./index.d223a9f7.js";import"./index.03978f04.js";import"./index.4260c328.js";import"./index.dd651bf1.js";import"./index.91decc82.js";import"./index.f318367b.js";import"./index.530d1dcd.js";import"./uniqBy.3c476cc7.js";import"./download.88bac90d.js";import"./index.a0c8f05f.js";import"./useWindowSizeFn.b2708596.js";import"./FullscreenOutlined.32e221fd.js";const U=P(null),R=P(null),H=P(null),O=P(null);let $="",J=[],N=[],B={};const j=P(3),D=P(0),Ee=de({components:{BasicForm:me,Button:fe,Card:he,BasicModal:be},emits:["reload","register"],setup(u,{emit:I}){const[F,{closeModal:W}]=ve(t=>E(this,null,function*(){$=t?t.table:"";const o=$?yield Ce(Q.SCHEMA,{table:$}):{table:{}};J=[];for(let c of ye){let d=k(c);if(d.defaultValue=o.table[d.field]||"",$&&d.field=="name"){let m=k(d);m.field="old_name",m.componentProps={hidden:!0},m.colProps={span:0},m.label="",J.push(m)}J.push(d)}const e=U.value;if(e==null||e.resetSchema(J),N=[],$)for(let c in o.columns){let d=o.columns[c];for(let m in V){let r=k(V[m]),h=r.field;if(r.defaultValue=d[h],h==="field"){let s=k(r);s.field=`old_${h}[${c}]`,s.label="",s.colProps={span:0},s.componentProps={hidden:!0},N.push(s)}r.field=r.slot?`${c}`:`${h}[${c}]`,N.push(r),j.value=Number(c)+1}}else N=Be();const l=R.value;if(l==null||l.resetSchema(N),$)for(let c in o.forms){let d=o.forms[c];B[d.field]=d}const n=O.value;n==null||n.resetSchema([]);const _=[];if($)for(let c in o.keys){let d=o.keys[c];for(let m in A){let r=k(A[m]),h=r.field;if(r.defaultValue=d[h],$&&h==="name"){let s=k(r);s.field=`old_${h}[${c}]`,s.label="",s.colProps={span:0},s.componentProps={hidden:!0},_.push(s)}r.field=r.slot?`${c}`:`${h}[${c}]`,_.push(r),D.value=Number(c)+1}}if(n==null||n.resetSchema(_),n){const c=yield n.validate();Object.keys(c).length||q()}X()})),T=P("fieldTab"),{createMessage:G}=pe(),{success:C}=G,f=[{key:"fieldTab",tab:"\u5B57\u6BB5\u5C5E\u6027"},{key:"formTab",tab:"\u8868\u5355\u5C5E\u6027"},{key:"keyTab",tab:"\u7D22\u5F15"}];function p(t){return E(this,null,function*(){if(T.value=t,t==="formTab"){X();return}if(t=="keyTab"){const e=O.value;if(!e)return;const l=yield e.validate();Object.keys(l).length||q()}const o=yield K();for(let e of o)B[e.field]=e})}function S(){p("fieldTab")}function b(){return E(this,null,function*(){const t=R.value;if(!t)return[];const o=[];let e=-1;const l=yield t.validate();for(;e<Object.keys(l).length;)e++,l[`field[${e}]`]&&o.push({old_field:l[`old_field[${e}]`],field:l[`field[${e}]`],type:l[`type[${e}]`],comment:l[`comment[${e}]`]||null,length:l[`length[${e}]`]||null,default:l[`default[${e}]`]||null,nullable:l[`nullable[${e}]`]||!1,primary_key:l[`primary_key[${e}]`]||!1,auto_increment:l[`auto_increment[${e}]`]||!1});return o})}function K(){return E(this,null,function*(){const t=H.value;if(!t)return[];const o=[];let e=-1;const l=yield t.validate();for(;e<Object.keys(l).length;)e++,l[`field[${e}]`]&&o.push({field:l[`field[${e}]`],comment:l[`comment[${e}]`]||null,control:l[`control[${e}]`]||null,form_show:!!l[`form_show[${e}]`],list_show:!!l[`list_show[${e}]`],enable_sort:!!l[`enable_sort[${e}]`],readonly:!!l[`readonly[${e}]`],searchable:!!l[`searchable[${e}]`],search_type:l[`search_type[${e}]`]||"normal",control_args:l[`control_args[${e}]`]||null});return o})}function le(){return E(this,null,function*(){const t=O.value;if(!t)return[];const o=[];let e=-1;const l=yield t.validate();for(;e<Object.keys(l).length;)e++,l[`name[${e}]`]&&o.push({old_name:l[`old_name[${e}]`]||null,name:l[`name[${e}]`],columns:l[`columns[${e}]`]||null,type:l[`type[${e}]`]||null});return o})}function X(){var l,n,_,c,d,m,r,h;const t=H.value,o=R.value;if(!t||!o)return;const e=o.getFieldsValue();t.resetSchema([]);for(let s in e.field){let y=e.field[s],ie=e.comment[s],Z=e.type[s],ue=e.primary_key[s],ce=e.length[s];t.appendSchemaByField({field:`old_field[${s}]`,component:"Input",label:" ",colProps:{span:0},defaultValue:y,componentProps:{disabled:!0,hidden:!0}},""),t.appendSchemaByField({field:`field[${s}]`,component:"Input",label:" ",colProps:{span:4},defaultValue:y,componentProps:{disabled:!0}},""),t.appendSchemaByField({field:`comment[${s}]`,component:"Input",label:" ",colProps:{span:4},defaultValue:ie,componentProps:{disabled:!0}},""),t.appendSchemaByField({field:`control[${s}]`,component:"Select",label:" ",colProps:{span:4},required:!0,componentProps:{options:_e},defaultValue:((l=B[y])==null?void 0:l.control)||$e(Z)},""),t.appendSchemaByField({field:`form_show[${s}]`,component:"Checkbox",label:" ",colProps:{span:1},defaultValue:ue?!1:(n=B[y])==null?void 0:n.form_show},""),t.appendSchemaByField({field:`list_show[${s}]`,component:"Checkbox",label:" ",colProps:{span:1},defaultValue:(_=B[y])==null?void 0:_.list_show},""),t.appendSchemaByField({field:`enable_sort[${s}]`,component:"Checkbox",label:" ",colProps:{span:1},defaultValue:((c=B[y])==null?void 0:c.enable_sort)||!1},""),t.appendSchemaByField({field:`readonly[${s}]`,component:"Checkbox",label:" ",colProps:{span:1},defaultValue:((d=B[y])==null?void 0:d.readonly)||!1},""),t.appendSchemaByField({field:`searchable[${s}]`,component:"Checkbox",label:" ",colProps:{span:1},defaultValue:((m=B[y])==null?void 0:m.searchable)||!1},""),t.appendSchemaByField({field:`search_type[${s}]`,component:"Select",label:" ",colProps:{span:2},componentProps:{options:[{label:"\u666E\u901A\u67E5\u8BE2",value:"normal"},{label:"\u8303\u56F4\u67E5\u8BE2",value:"between"}]},defaultValue:((r=B[y])==null?void 0:r.search_type)||"\u666E\u901A\u67E5\u8BE2"},""),t.appendSchemaByField({field:`control_args[${s}]`,component:"Input",label:" ",colProps:{span:4},componentProps:{placeholder:""},defaultValue:((h=B[y])==null?void 0:h.control_args)||te(Z,ce)},"")}}const te=(t,o)=>{if(t=="enum"){let e=[];for(let l of o.split(","))e.push(l+":"+l);return"options:"+e.join(",")}return""},ae=()=>E(this,null,function*(){try{const t=U.value,o=H.value;if(!t||!o)return;const e=yield t.validate(),l=yield b(),n=yield K(),_=yield le();$?yield ee(Q.MODIFY,{table:e,columns:l,forms:n,keys:_}):yield ee(Q.CREATE,{table:e,columns:l,forms:n,keys:_}),W(),C("\u64CD\u4F5C\u6210\u529F"),I("reload")}catch(t){console.log(t)}});function oe(){const t=R.value;if(!!t){for(let o in V){let e=k(V[o]);e.field=e.field==="0"?String(j.value):`${e.field}[${j.value}]`,t.appendSchemaByField(e,"")}j.value++}}function ne(t){const o=R.value;if(!o)return;const e=[];for(let l in V){let n=V[l];e.push(n.field=="0"?String(t):`${n.field}[${t}]`)}o.removeSchemaByFiled(e),j.value--}function q(){return E(this,null,function*(){const t=O.value;if(!t)return;const o=yield b(),e=[];for(let l of o)e.push({label:l.field,value:l.field});for(let l in A){let n=k(A[l]);n.field==="columns"&&n.componentProps&&(n.componentProps.options=e),n.field=n.field==="0"?String(D.value):`${n.field}[${D.value}]`,t.appendSchemaByField(n,"")}D.value++})}function se(t){const o=O.value;if(!o)return;const e=[];for(let l in A){let n=A[l];e.push(n.field=="0"?String(t):`${n.field}[${t}]`)}o.removeSchemaByFiled(e),D.value--,D.value<0&&q()}return{tableElRef:U,fieldElRef:R,formElRef:H,keyElRef:O,handleSubmit:ae,tabListTitle:f,onTabChange:p,onTabClose:S,activeKey:T,del:ne,add:oe,addKey:q,delKey:se,register:F}}}),ke={class:"mt-3"},Fe=a("div",{class:"ant-row pb-2 b"},[a("div",{class:"ant-col-4 pl-2 align-center"}," \u5B57\u6BB5"),a("div",{class:"ant-col-4"}," \u5907\u6CE8"),a("div",{class:"ant-col-3 pl-2"},"\u957F\u5EA6/\u503C"),a("div",{class:"ant-col-4 pl-2"},"\u9ED8\u8BA4\u503C"),a("div",{class:"ant-col-4 pl-2"},"\u7C7B\u578B"),a("div",{class:"ant-col-1"},"\u4E3B\u952E"),a("div",{class:"ant-col-1"},"\u81EA\u589E"),a("div",{class:"ant-col-1"},"\u5141\u8BB8\u7A7A"),a("div",{class:"ant-col-2 pl-2"},"\u64CD\u4F5C")],-1),Se=i("+"),ge=i("-"),we=a("div",{class:"ant-row pb-2 b"},[a("div",{class:"ant-col-4 pl-2"},[a("br"),i("\u5B57\u6BB5")]),a("div",{class:"ant-col-4"},[a("br"),i("\u5907\u6CE8")]),a("div",{class:"ant-col-4 pl-2"},[a("br"),i("\u63A7\u4EF6\u7C7B\u578B")]),a("div",{class:"ant-col-1 pl-2"},[i("\u8868\u5355"),a("br"),i("\u663E\u793A")]),a("div",{class:"ant-col-1 pl-2"},[i("\u5217\u8868"),a("br"),i("\u663E\u793A")]),a("div",{class:"ant-col-1"},[i("\u652F\u6301"),a("br"),i("\u6392\u5E8F")]),a("div",{class:"ant-col-1"},[i("\u662F\u5426"),a("br"),i("\u53EA\u8BFB")]),a("div",{class:"ant-col-1"},[i("\u662F\u5426"),a("br"),i("\u67E5\u8BE2")]),a("div",{class:"ant-col-2 pl-2"},[a("br"),i("\u67E5\u8BE2\u7C7B\u578B")]),a("div",{class:"ant-col-4 pl-2"},[a("br"),i("\u63A7\u4EF6\u53C2\u6570")])],-1),Pe=i("+"),Te=i("-"),Ve=a("div",{class:"ant-row pb-2 b"},[a("div",{class:"ant-col-6 pl-2"},[a("br"),i("\u7D22\u5F15\u540D\u79F0")]),a("div",{class:"ant-col-6"},[a("br"),i("\u7D22\u5F15\u5B57\u6BB5")]),a("div",{class:"ant-col-6 pl-2"},[a("br"),i("\u7D22\u5F15\u7C7B\u578B")])],-1),Ae=i("+"),Re=i("-");function Oe(u,I,F,W,T,G){const C=L("BasicForm"),f=L("Button"),p=L("Card"),S=L("BasicModal");return g(),w(S,x(u.$attrs,{destroyOnClose:"",onRegister:u.register,title:"\u4FEE\u6539\u8868",helpMessage:["\u4FEE\u6539\u8868"],onOk:u.handleSubmit,afterClose:u.onTabClose}),{default:v(()=>[a("div",ke,[M(C,{ref:"tableElRef",labelWidth:75,showActionButtonGroup:!1},null,512)]),M(p,x({"tab-list":u.tabListTitle},u.$attrs,{"active-tab-key":u.activeKey,onTabChange:u.onTabChange}),{default:v(()=>[Y(a("div",null,[Fe,M(C,{ref:"fieldElRef",labelWidth:10,actionColOptions:{span:24},showResetButton:!1,showSubmitButton:!1},{add:v(({field:b})=>[Number(b)===0?(g(),w(f,{key:0,onClick:u.add},{default:v(()=>[Se]),_:1},8,["onClick"])):(g(),w(f,{key:1,onClick:K=>u.del(b)},{default:v(()=>[ge]),_:2},1032,["onClick"]))]),_:1},512)],512),[[z,u.activeKey==="fieldTab"]]),Y(a("div",null,[we,M(C,{ref:"formElRef",labelWidth:10,actionColOptions:{span:24},showResetButton:!1,showSubmitButton:!1},{add:v(({field:b})=>[Number(b)===0?(g(),w(f,{key:0,onClick:u.add},{default:v(()=>[Pe]),_:1},8,["onClick"])):(g(),w(f,{key:1,onClick:K=>u.del(b)},{default:v(()=>[Te]),_:2},1032,["onClick"]))]),_:1},512)],512),[[z,u.activeKey==="formTab"]]),Y(a("div",null,[Ve,M(C,{ref:"keyElRef",labelWidth:10,actionColOptions:{span:24},showResetButton:!1,showSubmitButton:!1},{add:v(({field:b})=>[Number(b)===0?(g(),w(f,{key:0,onClick:u.addKey},{default:v(()=>[Ae]),_:1},8,["onClick"])):(g(),w(f,{key:1,onClick:K=>u.delKey(b)},{default:v(()=>[Re]),_:2},1032,["onClick"]))]),_:1},512)],512),[[z,u.activeKey==="keyTab"]])]),_:1},16,["tab-list","active-tab-key","onTabChange"])]),_:1},16,["onRegister","onOk","afterClose"])}var nl=re(Ee,[["render",Oe]]);export{nl as default};
