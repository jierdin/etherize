(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"4fRq":function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var r=new Uint8Array(16);e.exports=function(){return a(r),r}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}},AY73:function(e,t,a){"use strict";a.r(t);var r=a("1OyB"),n=a("vuIU"),i=a("Ji7U"),o=a("md7G"),s=a("foSv"),c=a("q1tI"),l=a.n(c),u=a("ODXe"),d=a("o0o1"),p=a.n(d),m=a("JX7q"),f=a("rePB"),h=a("yrHX"),y=a("Qmp0"),g=a("AO0C"),b=a("RVWH"),v=a("gCRj"),w=a("pOf4"),x=a("VEet"),O=a.n(x),P=l.a.createElement;function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(s.a)(e);if(t){var n=Object(s.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(o.a)(this,a)}}var T=function(e){Object(i.a)(a,e);var t=E(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return P(g.o,null,P(g.E,{className:"py-5 mt-5 "},P(g.m,{md:"12",className:"text-center"},P("img",{src:O.a,style:{maxHeight:"300px"},alt:"loading..."}))))}}]),a}(l.a.Component),M=a("b2pr"),S=a("P+JV"),j=a("nOHt"),k=l.a.createElement;function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(s.a)(e);if(t){var n=Object(s.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(o.a)(this,a)}}var N=function(e){Object(i.a)(a,e);var t=R(a);function a(e){var n;return Object(r.a)(this,a),n=t.call(this,e),Object(f.a)(Object(m.a)(n),"state",{apiClient:null,title:"",template:"",compiledTemplate:null,parameters:{},executionResult:null,variables:null,cost:n.getBasePrice()}),Object(f.a)(Object(m.a)(n),"loadOpenLaw",(function(e){var t,a,r,i,o,s,c,l,u,d;return p.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,p.a.awrap(v.a.GetOpenLawAPIClient(e));case 2:return t=m.sent,m.next=5,p.a.awrap(t.getTemplate(e));case 5:return a=m.sent,r=a.content,i=a.title,m.next=10,p.a.awrap(h.a.compileTemplate(r));case 10:if(!(o=m.sent).isError){m.next=13;break}throw"template error: "+o.errorMessage;case 13:return s={"Organizer Signature":'{"email":"'+S.b.legalEmail+'"}',"Total Price":n.getBasePrice().toString()},m.next=16,p.a.awrap(h.a.execute(o.compiledTemplate,{},s));case 16:return c=m.sent,l=c.executionResult,(u=c.errorMessage)&&console.error("Openlaw Execution Error:",u),m.next=22,p.a.awrap(h.a.getExecutedVariables(l,{}));case 22:d=m.sent,n.setState({apiClient:t,title:i,template:a,compiledTemplate:o,parameters:s,executionResult:l,variables:d});case 24:case"end":return m.stop()}}),null,null,null,Promise)})),Object(f.a)(Object(m.a)(n),"sendDraft",(function(){var e,t,a,r,i,o,s,c,l,d,m,f,h;return p.a.async((function(y){for(;;)switch(y.prev=y.next){case 0:return e=n.state.apiClient,n.MiscellaneousModal.current.SetTextAndTitle("Sending Draft",""),n.MiscellaneousModal.current.ToggleShowing(),n.MiscellaneousModal.current.ToggleLoading(!0),y.prev=4,y.next=7,p.a.awrap(v.a.getJWT());case 7:if(t=y.sent,a=Object(u.a)(t,2),r=a[0],""===(i=a[1])&&""!==r){y.next=14;break}return alert(i),y.abrupt("return");case 14:if(e.jwt=r,null==(o=n.tryExecuteTemplate())){y.next=19;break}return n.MiscellaneousModal.current.SetTextAndTitle("Error",o),y.abrupt("return");case 19:return s=n.buildOpenLawParamsFromState(),c=n.uploadParamsHasValidEmail(s),l=Object(u.a)(c,2),l[0],d=l[1],m="Success!",f="",y.next=25,p.a.awrap(v.a.CheckIfUserExists(d));case 25:return y.sent||(m="Sign Up Required!",f="In order to view/edit your draft you MUST sign up first. Check your email for a sign up link before you try to open your draft. <br>",v.a.SendInviteToUserFromAdminAccount(d)),y.next=29,p.a.awrap(e.uploadDraft(s));case 29:return h=y.sent,y.next=32,p.a.awrap(e.sendDraft([],[],h));case 32:n.MiscellaneousModal.current.SetTextAndTitle(m,f+"You should receive your draft at: "+d),y.next=38;break;case 35:y.prev=35,y.t0=y.catch(4),n.MiscellaneousModal.current.SetTextAndTitle("Error","We tried to send the draft, but got an error: "+y.t0);case 38:case"end":return y.stop()}}),null,null,[[4,35]],Promise)})),Object(f.a)(Object(m.a)(n),"RequestSignatureFromEtherize",(function(){var e,t,a,r,i,o,s,c,l,d,m;return p.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(e=n.state.apiClient,t="",null==(a=n.tryExecuteTemplate())){f.next=5;break}return f.abrupt("return",[!1,a]);case 5:return r=n.buildOpenLawParamsFromState(),f.prev=6,f.next=9,p.a.awrap(v.a.getJWT());case 9:if(i=f.sent,o=Object(u.a)(i,2),s=o[0],""===(c=o[1])&&""!==s){f.next=15;break}throw c;case 15:e.jwt=s,l=n.uploadParamsHasValidEmail(r),d=Object(u.a)(l,2),d[0],m=d[1],v.a.SendInviteToUserFromAdminAccount(m),f.next=24;break;case 20:return f.prev=20,f.t0=f.catch(6),console.log(f.t0),f.abrupt("return",[!1,f.t0]);case 24:return f.prev=24,f.next=27,p.a.awrap(e.uploadContract(r));case 27:t=f.sent,f.next=36;break;case 30:return f.prev=30,f.t1=f.catch(24),console.log(f.t1),f.next=35,p.a.awrap(n.uploadAndSendDraftOnContractError(e,t));case 35:return f.abrupt("return",f.sent);case 36:if(f.prev=36,""!==t){f.next=40;break}throw console.log("warning: we didn't get an error from contractID but it is blank"),"contract id is blank";case 40:return f.next=42,p.a.awrap(e.sendContract([S.b.legalEmail],[S.b.legalEmail],t));case 42:return f.abrupt("return",[!0,""]);case 45:return f.prev=45,f.t2=f.catch(36),console.log("error, but we're handling it with a draft upload: "+f.t2),f.next=50,p.a.awrap(n.uploadAndSendDraftOnContractError(e,t));case 50:return f.abrupt("return",f.sent);case 51:case"end":return f.stop()}}),null,null,[[6,20],[24,30],[36,45]],Promise)})),Object(f.a)(Object(m.a)(n),"payFiat",(function(){var e,t,a,r,i,o,s,c,l,d,m,f,h;return p.a.async((function(y){for(;;)switch(y.prev=y.next){case 0:return n.ChoosePaymentMethodModal.current.ToggleShowing(),n.PaymentModal.current.ToggleShowing(),n.PaymentModal.current.ToggleLoading(!0),y.next=5,p.a.awrap(n.RequestSignatureFromEtherize());case 5:if(e=y.sent,t=Object(u.a)(e,2),a=t[0],r=t[1],a){y.next=12;break}return n.PaymentModal.current.SetTextAndTitle("Error","Failure to upload to OpenLaw: "+r),y.abrupt("return");case 12:return n.PaymentModal.current.ToggleShowing(),i=n.buildOpenLawParamsFromState(),o=n.uploadParamsHasValidEmail(i),s=Object(u.a)(o,2),s[0],c=s[1],y.next=17,p.a.awrap(v.a.getFiatTransaction(c,n.state.cost,n.getProductName()));case 17:return l=y.sent,d=l.id,m=window.Stripe("pk_live_6J7vcpcvkozc86Jb8OL9m7va00vyvCQNrj"),y.next=22,p.a.awrap(m.redirectToCheckout({sessionId:d}));case 22:f=y.sent,null!=(h=f.error)&&alert("Failure to get Stripe Checkout: "+h.message);case 25:case"end":return y.stop()}}),null,null,null,Promise)})),Object(f.a)(Object(m.a)(n),"onChange",(function(e,t){var a=e?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},n.state.parameters,Object(f.a)({},e,[e].includes("Email")?JSON.stringify({email:t}):t)):n.state.parameters;if(n.setState({parameters:a}),S.b.OpenLawDynamicFieldKeys.includes(e)){var r=n.state.compiledTemplate,i=h.a.execute(r.compiledTemplate,{},a),o=i.executionResult,s=(i.errorMessage,h.a.getExecutedVariables(o,{}));n.setState({parameters:a,variables:s,executionResult:o})}})),n.ChoosePaymentMethodModal=l.a.createRef(),n.PaymentModal=l.a.createRef(),n.MiscellaneousModal=l.a.createRef(),n.calculatePriceThenTogglePaymentModal=n.calculatePriceThenTogglePaymentModal.bind(Object(m.a)(n)),n.payCrypto=n.payCrypto.bind(Object(m.a)(n)),n.openLawHtmlDoc=l.a.createRef(),n.loadOpenLaw(S.b.AgreementsPerEntity[S.a.hybridEntity]),n}return Object(n.a)(a,[{key:"getBasePrice",value:function(){return 0}},{key:"getProductName",value:function(){return"Hybrid Legal Entity"}},{key:"tryExecuteTemplate",value:function(){var e=this.state.compiledTemplate,t=h.a.execute(e.compiledTemplate,{},this.state.parameters),a=t.executionResult,r=t.errorMessage;if(""!==r)return console.log("openlaw execute error: "+r),r;var n=h.a.validateContract(a),i=h.a.getMissingInputs(n);if(i.length>0){var o=i[0];return o===S.b.OpenLawMemberEmailKey&&(o="Member Email"),"Please fill out all fields, we're missing your "+o}var s=h.a.validationErrors(n);if(s.length>0)return console.log("errors:"),console.log(s),s[0];var c=h.a.getExecutedVariables(a,{});return this.setState({variables:c,executionResult:a}),null}},{key:"uploadParamsHasValidEmail",value:function(e){var t=null;try{t=JSON.parse(e.parameters["Member Signature"])}catch(a){return[!1,""]}return[!0,t.email]}},{key:"buildOpenLawParamsFromState",value:function(){var e=this.state.template,t=this.state.parameters;return{templateId:e.id,title:e.title,text:e.content,creator:"Etherize",parameters:t,overriddenParagraphs:{},agreements:{},draftId:""}}},{key:"buildOpenLawParamsWithOverload",value:function(e){var t=this.state.template;return{templateId:t.id,title:t.title,text:t.content,creator:"Etherize",parameters:e,overriddenParagraphs:{},agreements:{},draftId:""}}},{key:"togglePaymentModal",value:function(){var e=this.tryExecuteTemplate();if(null!=e)return this.MiscellaneousModal.current.SetTextAndTitle("Error",e),void this.MiscellaneousModal.current.ToggleShowing();this.state.cost>0?(this.ChoosePaymentMethodModal.current.SetTextAndTitle("Choose a Payment Method",""),this.ChoosePaymentMethodModal.current.ToggleShowing()):this.justSummonNonLegalEntity()}},{key:"justSummonNonLegalEntity",value:function(){var e,t,a,r;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return this.PaymentModal.current.ToggleShowing(),this.PaymentModal.current.ToggleLoading(!0),n.next=4,p.a.awrap(this.RequestSignatureFromEtherize());case 4:if(e=n.sent,t=Object(u.a)(e,2),a=t[0],r=t[1],a){n.next=11;break}return this.PaymentModal.current.SetTextAndTitle("Error","Failure to upload to OpenLaw: "+r),n.abrupt("return");case 11:this.PaymentModal.current.SetTextAndTitle("Success!","Check your e-mail for your Entity Information document. After signing it, you will be able to deploy your Ethereal component using MetaMask.");case 12:case"end":return n.stop()}}),null,this,null,Promise)}},{key:"calculatePriceThenTogglePaymentModal",value:function(){for(var e=this.getBasePrice(),t=0,a=Object.keys(this.state.parameters);t<a.length;t++){var r=a[t],n=this.state.parameters[r];if(n.includes("($")){var i=n.indexOf("($"),o=n.indexOf(")",i),s=n.slice(i+"($".length,o);e+=parseInt(s)}}var c=this.state.parameters;c["Total Price"]=e.toString(),this.setState({cost:e,parameters:c},this.togglePaymentModal)}},{key:"uploadAndSendDraftOnContractError",value:function(e,t){var a,r,n,i;return p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=this.buildOpenLawParamsFromState(),r=a.parameters[S.b.OpenLawMemberEmailKey],""!==t&&e.changeContractAlias(t,"Error - discard"),(n=this.state.parameters)[S.b.OpenLawMemberEmailKey]=S.b.legalEmail,a=this.buildOpenLawParamsWithOverload(n),o.prev=6,o.next=9,p.a.awrap(e.uploadDraft(a));case 9:return i=o.sent,o.next=12,p.a.awrap(e.sendDraft([],[],i));case 12:return v.a.SendEtherizeWarningEmailOfErrorOnFrontEnd("Draft uploaded but contract not sent, with draft id: "+i),a.parameters[S.b.OpenLawMemberEmailKey]=r,o.abrupt("return",[!0,""]);case 17:return o.prev=17,o.t0=o.catch(6),o.abrupt("return",[!1,"We're having trouble communicating with our servers right now"]);case 20:case"end":return o.stop()}}),null,this,[[6,17]],Promise)}},{key:"payCrypto",value:function(e){var t,a,r,n,i,o,s,c,l,d,m,f,h,y;return p.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:return this.ChoosePaymentMethodModal.current.ToggleShowing(),this.PaymentModal.current.ToggleShowing(),this.PaymentModal.current.ToggleLoading(!0),g.next=5,p.a.awrap(this.RequestSignatureFromEtherize());case 5:if(t=g.sent,a=Object(u.a)(t,2),r=a[0],n=a[1],r){g.next=12;break}return this.PaymentModal.current.SetTextAndTitle("Error","Failure to upload to OpenLaw: "+n),g.abrupt("return");case 12:return i=this.buildOpenLawParamsFromState(),o=this.uploadParamsHasValidEmail(i),s=Object(u.a)(o,2),s[0],c=s[1],g.next=16,p.a.awrap(v.a.getCryptoTransaction(e,this.state.cost,c));case 16:if("ok"===(l=g.sent).error){g.next=20;break}return this.PaymentModal.current.SetTextAndTitle("Error",l.error),g.abrupt("return");case 20:d=l.result,m=d.Address,f=d.status_url,h="Please send your "+e+" to the following address: <br/> <br/>"+m+"<br/> <br/> ",y="Monitor the status of your payment <a href="+f+"> here </a> ",this.PaymentModal.current.SetTextAndTitle("Transaction Created!",h+y);case 26:case"end":return g.stop()}}),null,this,null,Promise)}},{key:"templatePage",value:function(){var e=this;return k(l.a.Fragment,null,k(w.a,{ref:this.MiscellaneousModal}),k(w.a,{ref:this.PaymentModal}),k(w.a,{ref:this.ChoosePaymentMethodModal},k(g.E,{center:!0},k(g.m,{lg:"8",className:"mb-4"},k(g.f,{border:"0"},k(g.e,{size:"lg",onClick:this.payFiat,className:"btn-secondary"},"Pay $",this.state.cost," in USD"),k(g.e,{size:"lg",onClick:function(){return e.payCrypto("BTC")},className:"btn-secondary"},"Pay $",this.state.cost," in BTC"),k(g.e,{size:"lg",onClick:function(){return e.payCrypto("ETH")},className:"btn-secondary"},"Pay $",this.state.cost," in ETH"))))),k(g.o,null,k(g.E,{className:"py-5 mt-5 "},k(g.m,{md:"12"},k(g.b,{type:"fadeInUp"},k(g.f,{cascade:!0},k(g.i,{className:"view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3"},k("div",null),k("p",{className:"card-title creation-header h1"},"Entity Formation"),k("div",null)),k(g.g,{className:"text-center"},k("div",{ref:this.openLawHtmlDoc},k(y.a,{style:{width:"50%"},apiClient:this.state.apiClient,executionResult:this.state.executionResult,parameters:this.state.parameters,onChangeFunction:this.onChange,openLaw:h.a,variables:this.state.variables,inputExtraTextMap:{"Entity Name":k("a",{href:"https://wyobiz.wy.gov/business/filingsearch.aspx"},"Check here if your name is available")}}))))))),k(g.E,{className:"mt-5 mb-5"},k(g.m,{className:"text-center",md:"12"},k(g.b,{type:"fadeInUp"},k(g.f,null,k(g.i,{className:"view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3"},k("div",null),k("p",{className:"card-title creation-header h1"},"Select Spell"),k("div",null)),k(g.E,{className:"mt-2"},k(g.m,{lg:"6",className:"mb-3"},k(g.b,{reveal:!0,type:"fadeInUp"},k(g.f,{cascade:!0},k(g.i,{className:"view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3"},k("div",null),k("p",{className:"card-title creation-subheader h4"},"Save Draft"),k("div",null)),k(g.g,{cascade:!0},k(g.k,null,"A draft of the Formation Agreement and the specifics of the Entity will be sent to you via electronic mail. ",k("br",null),k("br",null),"Forward the draft to your lawyer or co-founders for review, or to hello@etherize.io when you are ready to Summon."),k(g.e,{size:"lg",className:"btn-secondary",onClick:this.sendDraft},k("h3",{className:"ethericText"},"Draft")))))),k(g.m,{lg:"6",className:"mb-3"},k(g.b,{reveal:!0,type:"fadeInUp"},k(g.f,{cascade:!0},k(g.i,{className:"view view-cascade gradient-card-header standard-card-header-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3"},k("div",null),k("p",{className:"card-title creation-subheader h4"},"Summon Entity"),k("div",null)),k(g.g,{cascade:!0},k(g.k,null,"Etherize will issue a Formation Agreement, verify the viability of the Entity, and confirm with you before Filing. ",k("br",null)," ",k("br",null),"Give life to the Entity by infusing it with the currency of your choosing. Full refund if requested before Filing."),k(g.e,{size:"lg",onClick:this.calculatePriceThenTogglePaymentModal,className:"btn-secondary"},k("h3",{className:"ethericText"},"Summon")))))))))))),k(M.a,null))}},{key:"render",value:function(){return k("div",{className:"mainBackground"},this.state.executionResult?k("div",null,k(b.a,null),this.templatePage()):k("div",null,k(b.a,null),k(T,null)))}}]),a}(l.a.Component),A=Object(j.withRouter)(N),F=a("8Kt/"),L=a.n(F),D=l.a.createElement;function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(s.a)(e);if(t){var n=Object(s.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(o.a)(this,a)}}var z=function(e){Object(i.a)(a,e);var t=I(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return D(l.a.Fragment,null,D(L.a,null,D("title",null,"Etherize Entities"),D("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),D("script",{src:"https://js.stripe.com/v3/"})),D(A,null))}}]),a}(l.a.Component);t.default=Object(j.withRouter)(z)},I2ZF:function(e,t){for(var a=[],r=0;r<256;++r)a[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,n=a;return[n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]]].join("")}},VEet:function(e,t){e.exports="//_next/static/images/portal-6-f75e9537d7a587062e973a3eedfe9e86.svg"},bLGy:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return a("AY73")}])},xk4V:function(e,t,a){var r=a("4fRq"),n=a("I2ZF");e.exports=function(e,t,a){var i=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var s=0;s<16;++s)t[i+s]=o[s];return t||n(o)}}},[["bLGy",0,2,4,8,7,1,3,5,6]]]);