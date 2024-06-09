"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[26189],{195020:(e,l,i)=>{var a,s,n,t,r,o,d;i.r(l),i.d(l,{default:()=>_});let c={fragment:{argumentDefinitions:a=[{defaultValue:null,kind:"LocalArgument",name:"inviteCode"}],kind:"Fragment",metadata:null,name:"UnauthCloseupInviteUpsellQuery",selections:[{alias:null,args:s=[{kind:"Variable",name:"inviteCode",variableName:"inviteCode"}],concreteType:null,kind:"LinkedField",name:"v3GetInviteCodeQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"InviteCode",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"sender",plural:!1,selections:[t={alias:null,args:null,kind:"ScalarField",name:"firstName",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null}],storageKey:null}],type:"InviteCodeResponse",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"UnauthCloseupInviteUpsellQuery",selections:[{alias:null,args:s,concreteType:null,kind:"LinkedField",name:"v3GetInviteCodeQuery",plural:!1,selections:[n,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"InviteCode",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"sender",plural:!1,selections:[t,r,o,d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},d],storageKey:null}],type:"InviteCodeResponse",abstractKey:null}],storageKey:null}]},params:{id:"4610a8b7fe41310eb2db231b8c1171930d91f797fbc7fd321ec6682cb48a3711",metadata:{},name:"UnauthCloseupInviteUpsellQuery",operationKind:"query",text:null}};c.hash="6932152931fe069ad54b218e36e66908";let _=c;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let l=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[l]=e}}}(c.default||c)},126189:(e,l,i)=>{i.d(l,{Z:()=>A});var a=i(616550),s=i(883119),n=i(214877),t=i(119936),r=i(140017),o=i(339001),d=i(96157),c=i(5859),_=i(757640),p=i(624797),h=i(554786),u=i(90647),m=i(677233),g=i(686703),x=i(260488),f=i(669177),y=i(19447),b=i(785893);let j=({description:e,handleDismiss:l,heading:i,i18n:a,appUpsellType:n})=>(0,b.jsx)(u.Z,{app_upsell_type:n,componentType:14155,children:({handleOpenApp:n})=>(0,b.jsxs)(s.kC,{alignItems:"center",direction:"column",justifyContent:"center",children:[(0,b.jsx)(s.xu,{paddingY:2,children:(0,b.jsx)(s.X6,{align:"center",size:"400",children:i})}),(0,b.jsx)(s.xu,{width:246,children:(0,b.jsx)(s.xv,{align:"center",size:"300",children:e})}),(0,b.jsxs)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{display:"grid"}},justifyContent:"center",marginTop:5,children:[(0,b.jsx)(s.xu,{marginBottom:2,width:246,children:(0,b.jsx)(s.zx,{color:"red",fullWidth:!0,onClick:()=>{(0,m.y)(),n()},size:"lg",text:a._('Open app', 'mweb.auth.referred_app_upsell.open_app', 'CTA text for referred app upsell')})}),(0,b.jsx)(s.zx,{color:"gray",fullWidth:!0,onClick:()=>{l()},size:"lg",text:a._('Continue in browser', 'mweb.auth.referred_app_upsell.continue', 'Continue text for referred app upsell')})]})]})}),P=({handleDismiss:e,i18n:l,iconSize:i,appUpsellType:a})=>(0,b.jsxs)(s.xu,{alignItems:"center",bottom:!0,color:"light",direction:"column",display:"flex",left:!0,paddingX:5,position:"fixed",right:!0,top:!0,zIndex:new s.Ry(5),children:[(0,b.jsx)(s.xu,{"data-test-id":"referred-app-upsell-dismiss-button",left:!0,padding:4,position:"absolute",top:!0,children:(0,b.jsx)(s.hU,{accessibilityLabel:l._('Cancel', 'mweb.auth.referred_app_upsell.close_modal_label', 'close modal icon'),icon:"cancel",onClick:e,size:"sm"})}),(0,b.jsxs)(s.xu,{direction:"column",display:"flex",height:"100%",justifyContent:"center",margin:"auto",maxWidth:440,children:[(0,b.jsx)(s.xu,{display:"flex",justifyContent:"center",paddingY:2,children:(0,b.jsx)(s.JO,{accessibilityLabel:l._('Logo', 'mweb.auth.referred_app_upsell.logo', 'logo icon'),color:"brandPrimary",icon:"pinterest",size:i})}),(0,b.jsx)(j,{appUpsellType:a,description:l._('Save ideas, interact with friends, and get inspired', 'mweb.auth.referred_app_upsell.description1', 'description for referred app upsell'),handleDismiss:e,heading:l._('Pinterest is better in the app', 'mweb.auth.referred_app_upsell.heading1', 'heading for referred app upsell'),i18n:l})]})]}),z=({backgroundImageUrl:e,handleDismiss:l,heroImage:i,i18n:a,multipleImages:n,appUpsellType:t})=>(0,b.jsxs)(s.xu,{alignItems:"center",bottom:!0,color:"light",direction:"column",display:"flex",left:!0,paddingX:5,position:"fixed",right:!0,top:!0,zIndex:new s.Ry(5),children:[(0,b.jsx)(s.xu,{height:319,position:"absolute",top:!0,width:"100%",zIndex:new s.Ry(2),children:(0,b.jsx)(s.Ee,{alt:a._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),fit:"cover",naturalHeight:1,naturalWidth:1,src:e})}),(0,b.jsxs)(s.xu,{alignItems:"center",bottom:!0,color:"light",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(12px)"}},direction:"column",display:"flex",left:!0,paddingX:5,position:"absolute",right:!0,top:!0,zIndex:new s.Ry(3),children:[(0,b.jsx)(s.xu,{color:"default",dangerouslySetInlineStyle:{__style:{background:"transparent"}},"data-test-id":"referred-app-upsell-dismiss-button",left:!0,padding:4,position:"absolute",top:!0,children:(0,b.jsx)(s.hU,{accessibilityLabel:a._('Cancel', 'mweb.auth.referred_app_upsell.close_modal_label', 'close modal icon'),icon:"cancel",onClick:l,size:"sm"})}),(0,b.jsxs)(s.xu,{direction:"column",display:"flex",height:"100%",justifyContent:"center",margin:"auto",maxWidth:440,children:[(0,b.jsx)(s.kC,{justifyContent:"center",children:i}),(0,b.jsx)(j,{appUpsellType:t,description:n?a._('Save these ideas, get similar recs, and more', 'mweb.auth.referred_app_upsell.description2', 'description for referred app upsell'):a._('Save this idea, get similar recs, and more', 'mweb.auth.referred_app_upsell.description5', 'description for referred app upsell'),handleDismiss:l,heading:a._('It\'s better in the Pinterest app', 'mweb.auth.referred_app_upsell.heading1', 'heading for referred app upsell'),i18n:a})]})]})]}),w=({pinUrl:e,i18n:l})=>(0,b.jsx)(s.xu,{height:235,marginBottom:6,overflow:"hidden",rounding:4,width:176,children:(0,b.jsx)(s.Ee,{alt:l._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),fit:"cover",naturalHeight:1,naturalWidth:1,src:e})});function A({onDismiss:e,viewParameter:l,viewType:i}){let A=(0,r.ZP)(),v=(0,h.Wb)(),{isBot:C,userAgent:{platform:k,raw:S}}=(0,c.B)(),I=(0,f.Rp)({isBot:C,platform:k,userAgent:S}),{logContextEvent:T}=(0,n.v)(),L=v?60:32,U=(0,a.k6)(),R=(0,a.$B)(),E=(0,a.TH)(),{invite_code:N}=(0,p.mB)(E.search),{appUpsellType:O,uiType:B}=(0,g.n)(),F=()=>{T({component:14155,element:10308,event_type:10220,view_type:i||202,view_parameter:l,aux_data:{app_upsell_type:O}}),(0,m.y)(),e()},Z=R.params.id??"",{data:W}=(0,_.Z)(Z?{name:"PinResource",options:{field_set_key:"detailed",id:Z}}:null),K=(0,y.S6)()(Z),{username:D,slug:H}=(0,a.UO)(),{data:Q}=(0,_.Z)(D&&H?{name:"BoardResource",options:{username:(0,p.Jx)(D),slug:(0,p.Jx)(unescape(H||"")),field_set_key:"detailed"}}:null);if("full"===B){let e="",l=null,i=!1;if((0,d.L6)(U.location)&&(e=(W??K)?.images?.orig?.url||"",l=(0,b.jsx)(w,{i18n:A,pinUrl:e})),(0,d.am)(U.location)&&Q&&Q.images&&Q.images["474x"]){if(Q.images["474x"].length>2){e=Q.images["474x"][0].url||"";let a=Q.images["474x"][1].url||"",n=Q.images["474x"][2].url||"";i=!0,l=(0,b.jsx)(s.xu,{marginBottom:7,children:(0,b.jsxs)(s.kC,{children:[(0,b.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{borderTopLeftRadius:"16px",borderBottomLeftRadius:"16px",marginRight:"1px"}},height:117,overflow:"hidden",width:117,children:(0,b.jsx)(s.Ee,{alt:A._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),fit:"cover",naturalHeight:1,naturalWidth:1,src:e})}),(0,b.jsxs)(s.kC,{direction:"column",children:[(0,b.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{borderTopRightRadius:"16px",marginBottom:"1px"}},height:59,overflow:"hidden",width:57,children:(0,b.jsx)(s.Ee,{alt:A._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),fit:"cover",naturalHeight:1,naturalWidth:1,src:a})}),(0,b.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{borderBottomRightRadius:"16px"}},height:57,overflow:"hidden",width:58,children:(0,b.jsx)(s.Ee,{alt:A._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),fit:"cover",naturalHeight:1,naturalWidth:1,src:n})})]})]})})}else Q.images["474x"].length>0&&(e=Q.images["474x"][0].url||"",l=(0,b.jsx)(w,{i18n:A,pinUrl:e}))}return e?(0,b.jsx)(z,{appUpsellType:O,backgroundImageUrl:e,handleDismiss:F,heroImage:l,i18n:A,multipleImages:i}):(0,b.jsx)(P,{appUpsellType:O,handleDismiss:F,i18n:A,iconSize:L,upsellAppIsAndroidLiteApp:I})}if("inline"===B){let e=(0,b.jsx)(s.xu,{color:"light",padding:1,rounding:1,children:(0,b.jsx)(s.JO,{accessibilityLabel:A._('Pinterest logo', 'AppUpsellFooter.icon', 'Pinterest logo icon for app upsell footer'),color:"brandPrimary",icon:"pinterest",inline:!0,size:28})}),l=A._('It\'s better in the app', 'mweb.auth.referred_app_upsell.heading3', 'heading for referred app upsell'),i=A._('Get similar recs and more', 'mweb.auth.referred_app_upsell.description4', 'description for referred app upsell');return O.endsWith("social-referred")&&N&&(l=(0,b.jsx)(x.X,{variables:{inviteCode:N},children:e=>(0,o.nk)(A._('{{ invitee }} shared this idea', 'mweb.auth.referred_app_upsell.heading5', 'heading for referred app upsell that has the invitee info'),{invitee:e.v3GetInviteCodeQuery?.data?.sender?.firstName||""})}),i=A._('Open app to discover more', 'mweb.auth.referred_app_upsell.description6', 'description for referred app upsell'),N&&(e=(0,b.jsx)(x.X,{variables:{inviteCode:N},children:e=>(0,b.jsx)(s.xu,{height:48,overflow:"hidden",rounding:6,width:48,children:(0,b.jsx)(s.Ee,{alt:A._('App upsell profile image', 'mweb.auth.referred_app_upsell.image1', 'image for referred app upsell, using invitee profile image'),fit:"cover",naturalHeight:1,naturalWidth:1,src:e.v3GetInviteCodeQuery?.data?.sender?.imageMediumUrl||""})})}))),(0,b.jsx)(u.Z,{app_upsell_type:O,children:({handleOpenApp:a})=>(0,b.jsx)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"#F1F1F1"}},direction:"row",display:"flex",height:74,padding:4,width:"100%",zIndex:new s.Ry(99999),children:(0,b.jsx)(s.iP,{onTap:()=>{(0,m.y)(),a()},children:(0,b.jsxs)(s.kC,{alignItems:"center",direction:"row",justifyContent:"start",width:"100%",children:[e,(0,b.jsxs)(s.xu,{flex:"grow",marginStart:4,children:[(0,b.jsx)(s.xu,{marginBottom:1,children:(0,b.jsx)(s.xv,{children:l})}),(0,b.jsx)(s.xv,{weight:"bold",children:i})]}),(0,b.jsx)(s.xu,{children:(0,b.jsx)(s.hU,{accessibilityLabel:"cancel",icon:"cancel",onClick:({event:e})=>{F(),e.preventDefault(),e.stopPropagation()},size:"sm"})})]})})})})}{let e=A._('Pinterest is better in the app', 'mweb.auth.referred_app_upsell.heading3', 'heading for referred app upsell');return O.endsWith("social-referred")&&N&&(e=(0,b.jsx)(x.X,{variables:{inviteCode:N},children:e=>(0,o.nk)(A._('Join {{ invitee }} on Pinterest', 'mweb.auth.referred_app_upsell.heading4', 'heading for referred app upsell that has the invitee info'),{invitee:e.v3GetInviteCodeQuery?.data?.sender?.firstName||""})})),(0,b.jsx)(t.default,{accessibilityModalLabel:A._('modal', 'mweb.auth.referred_app_upsell.modal_label', 'modal label'),closeOnOutsideClick:!1,isOpen:!0,mobileHideCloseIcon:!0,onDismiss:()=>{},type:"app_upsell_v1",zIndex:new s.Ry(101),children:(0,b.jsxs)(s.xu,{"data-test-id":"appUpsell-iframe",padding:2,children:[(0,b.jsx)(s.xu,{display:"inlineBlock",position:"absolute",children:(0,b.jsx)(s.xu,{"data-test-id":"referred-app-upsell-close",marginStart:1,marginTop:1,children:(0,b.jsx)(s.hU,{accessibilityLabel:A._('close', 'mweb.auth.referred_app_upsell.close', 'close button'),icon:"cancel",onClick:F,size:"sm"})})}),(0,b.jsxs)(s.xu,{marginBottom:5,marginTop:8,paddingX:2,children:[(0,b.jsx)(s.xu,{display:"flex",justifyContent:"center",paddingY:3,children:(0,b.jsx)(s.JO,{accessibilityLabel:A._('Logo', 'mweb.auth.referred_app_upsell.logo', 'logo icon'),color:"brandPrimary",icon:"pinterest",size:L})}),(0,b.jsx)(j,{appUpsellType:O,description:A._('Save ideas, interact with friends, and get inspired', 'mweb.auth.referred_app_upsell.description3', 'description for referred app upsell'),handleDismiss:F,heading:e,i18n:A})]})]})})}}},260488:(e,l,i)=>{i.d(l,{X:()=>z,Z:()=>w});var a,s=i(167912),n=i(883119),t=i(608516),r=i(344064),o=i(205841),d=i(140017),c=i(48481),_=i(623409),p=i(490166),h=i(953565),u=i(785893);function m({isStoryPin:e,inviteText:l,inviterFirstName:i,isThinnerStyle:a,username:s}){let t=(0,_.Z)(),r=l.split(i);return(0,u.jsx)(n.xu,{children:(0,u.jsx)(p.Z,{onTouch:()=>{(0,h.nP)("mweb_social_unauth.closeup.social_text_click")},pressState:"none",children:(0,u.jsxs)(n.kC,{direction:"row",gap:{row:1,column:0},children:[(0,u.jsx)(n.xv,{inline:!0,size:"300",children:r[0]}),e?(0,u.jsx)(n.xv,{inline:!0,size:"300",weight:"bold",children:(0,u.jsx)(n.rU,{href:"/"+s,onClick:()=>{t({action:"click",item:"invite-profiler"})},target:"blank",children:i})}):(0,u.jsx)(n.xv,{inline:!0,size:a?"200":"300",weight:a?"normal":"bold",children:(0,u.jsx)(n.rU,{href:"/"+s,onClick:()=>{t({action:"click",item:"invite-profiler-not-story"})},target:"blank",children:i})}),(0,u.jsx)(n.xv,{inline:!0,size:a?"200":"300",children:r[1]})]})})})}function g({inviter:e,socialContextBannerStyle:l,setShouldShowSocialUpsellBanner:i}){let{shouldShowSignupUpsellText:a,isDismissible:s}=l,t=(0,d.ZP)(),{username:r}=e,h=e.imageMediumUrl,g=e.firstName,x=(0,c.Z)(),f=(0,_.Z)();return(0,u.jsx)(n.kC,{alignItems:"center",justifyContent:s?"center":"start",children:(0,u.jsx)(n.xu,{children:(0,u.jsx)(n.iP,{fullHeight:!0,onTap:()=>{f({action:"click",item:"close-button",within:"social-banner"}),x({reason:"UPSELL_LOGIN_OR_SIGNUP",attributionLabel:"tap_desktop_unauth_social_context_banner",desktopOptions:{modalType:"signup",modalOptions:{source:"defaultSource",container:"pinWash"}}})},children:(0,u.jsxs)(n.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(233, 228, 255, 0.9)"}},direction:"row",display:"flex",height:44,marginBottom:6,marginStart:s?0:2,marginTop:2,paddingX:s?4:2,paddingY:4,position:s?"static":"absolute",rounding:"pill",top:!0,width:s?1012:void 0,zIndex:new n.Ry(1),children:[(0,u.jsx)(n.xu,{marginBottom:8,marginEnd:1,marginTop:8,width:32,children:(0,u.jsx)(p.Z,{onTouch:e=>{e.stopPropagation(),r&&window.open("/"+r),f({action:"click",item:"user-rep",within:"social-banner"})},pressState:"none",children:h?.includes("default")?(0,u.jsx)(n.JO,{accessibilityLabel:"pinterest logo",color:"default",icon:"pinterest",size:24}):(0,u.jsx)(o.qE,{name:g,size:"fit",src:h??void 0})})}),(0,u.jsxs)(n.kC,{direction:"row",flex:"grow",children:[(0,u.jsx)(m,{inviterFirstName:g,inviteText:a?(t._('{{ name }} shared this idea.', 'pin.closeup.long_banner.desktop.shareNotification', 'Long banner notifying desktop users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",g):(t._('{{ name }} shared this idea ', 'pin.closeup.banner.desktop.shareNotification', 'Banner notifying desktop users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",g),isStoryPin:!1,isThinnerStyle:a,username:r}),a&&(0,u.jsx)(n.xu,{marginEnd:2,marginStart:1,children:(0,u.jsx)(n.xv,{inline:!0,size:"200",weight:"bold",children:t._('Sign up to join them', 'pin.header.social_context_dweb', 'label')})})]}),s&&(0,u.jsx)(n.hU,{accessibilityLabel:"cancel",icon:"cancel",onClick:({event:e})=>{e.stopPropagation(),f({action:"dismiss",item:"close-button",within:"social-banner"}),i?.(!1)},size:"sm"})]})})})})}var x=i(340523),f=i(554786),y=i(90647),b=i(773616);function j({inviter:{imageMediumUrl:e,username:l,firstName:i},isStoryPin:a}){let s=(0,d.ZP)(),{checkExperiment:t}=(0,x.F)(),r=(0,f.ml)(),g=()=>(0,h.nP)("mweb_social_unauth.closeup.avatar_click"),j=(0,b.Z)(),P=(0,c.Z)(),z=(0,_.Z)(),w=(s._('{{ name }} shared this idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them')).replace("{{ name }}",l),A="undefined"!=typeof window&&window.innerWidth<360,v=l.length>25,C=r&&!a&&t("mweb_social_context_header_upsell").anyEnabled,k=t("mweb_social_context_header_upsell").group;return j&&a?(0,u.jsxs)(n.kC,{alignItems:"center",gap:{row:2,column:0},justifyContent:"center",minHeight:v?100:80,children:[(0,u.jsx)(n.xu,{marginBottom:4,marginTop:4,width:40,children:(0,u.jsx)(p.Z,{onTouch:g,pressState:"none",children:(0,u.jsx)(o.qE,{name:i,size:"fit",src:e??void 0})})}),(0,u.jsx)(n.kC.Item,{flex:"grow",children:(0,u.jsxs)(n.xu,{alignItems:"center",direction:v?"column":"row",display:"flex",justifyContent:v?"start":"between",padding:v?3:0,children:[(0,u.jsxs)(n.kC,{alignItems:"start",direction:"column",gap:{row:0,column:1},wrap:!A,children:[(0,u.jsx)(n.kC,{children:(0,u.jsxs)(n.xv,{align:v?"center":"start",children:[(0,u.jsx)(n.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(n.rU,{display:"inlineBlock",href:`/${l??""}/`,onClick:()=>{z({action:"click",item:"invite-profiler"})},target:"blank",underline:"hover",children:l})}),w.split(l)[1]]})}),!v&&(0,u.jsx)(n.xv,{size:"100",children:s._('Open Pinterest to see more', 'unauth.mweb.shared.banner.edu', 'education for CTA to open app on shared banner')})]}),(0,u.jsx)(n.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginTop:v?3:0,minWidth:v?0:100,children:(0,u.jsx)(y.Z,{app_upsell_type:"social-context-header",componentType:14161,children:({handleOpenApp:e})=>(0,u.jsx)(n.zx,{onClick:()=>e(),size:"md",text:s._('Open app', 'unauth.mweb.shared.banner.cta', 'CTA to open app on shared banner')})})})]})})]}):(0,u.jsx)(p.Z,{onTouch:()=>{C&&P({reason:"UPSELL_LOGIN_OR_SIGNUP",attributionLabel:"tap_mobile_unauth_social_context_header"})},pressState:"none",children:(0,u.jsxs)(n.kC,{alignItems:"center",gap:4,justifyContent:"start",minHeight:80,children:[(0,u.jsx)(n.xu,{marginBottom:4,marginStart:C?2:0,marginTop:4,width:48,children:(0,u.jsx)(p.Z,{onTouch:g,pressState:"none",children:(0,u.jsx)(o.qE,{name:i,src:e??void 0})})}),(0,u.jsxs)(n.kC,{alignItems:C?"start":"center",direction:"column",justifyContent:"start",children:[(0,u.jsx)(n.xu,{marginStart:C?-1:0,children:(0,u.jsx)(m,{inviterFirstName:i,inviteText:C&&k.includes("join")?(s._('{{ name }} shared this idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",i):C&&k.includes("converse")?(s._('{{ name }} sent an idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",i):C&&k.includes("explore")?(s._('{{ name }} sent this idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",i):(s._('{{ name }} shared this idea with you', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",i),isStoryPin:a,isThinnerStyle:C,username:l})}),C&&(0,u.jsx)(n.xu,{marginTop:1,children:(0,u.jsx)(n.xv,{inline:!0,size:"300",weight:"bold",children:k.includes("join")?s._('Tap to join them on Pinterest', 'pin.closeup.header.shareNotification.text', 'header notifying users to tap on area'):k.includes("converse")?s._('Tap to share feedback', 'pin.closeup.header.shareNotification.text', 'header notifying users to tap on area'):k.includes("explore")&&s._('Tap to see more like it', 'pin.closeup.header.shareNotification.text', 'header notifying users to tap on area')})})]})]})})}let P=void 0!==a?a:a=i(195020),z=({children:e,variables:l})=>e((0,s.useLazyLoadQuery)(P,l));function w({inviterFirstNameRef:e,isDesktop:l,isStoryPin:i,setShouldShowSocialUpsellBanner:a,socialContextBannerStyle:s}){return(0,u.jsx)(t.Z,{children:(0,u.jsx)(r.ty,{children:t=>t?(0,u.jsx)(z,{variables:{inviteCode:t},children:t=>{let r=t.v3GetInviteCodeQuery?.data?.sender,{firstName:o,imageMediumUrl:d,username:c}=r??Object.freeze({});return o&&c?(e&&(e.current=o),l?(0,u.jsx)(g,{inviter:{firstName:o,imageMediumUrl:d,username:c},setShouldShowSocialUpsellBanner:a,socialContextBannerStyle:s??{isDismissible:!0,shouldShowSignupUpsellText:!0}}):(0,u.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{boxShadow:"0 1px 0 0 rgba(0, 0, 0, 0.08)"}},marginEnd:-2,marginStart:-2,paddingX:2,children:(0,u.jsx)(j,{inviter:{firstName:o,imageMediumUrl:d,username:c},isStoryPin:!!i})})):null}}):null})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/26189-d2fb955b38428f7b.mjs.map