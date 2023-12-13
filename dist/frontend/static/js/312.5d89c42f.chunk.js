"use strict";(self.webpackChunksocial_network_client=self.webpackChunksocial_network_client||[]).push([[312],{47312:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});var n=s(72791),o=s(66826),a=s(62836),r=s(62966),i=s(78417),c=s(85168),l=s(82288),p=s(14541),h=s.n(p),d=s(72898);class u extends n.Component{constructor(){super(...arguments),this.componentDidMount=()=>{const{match:t,dispatch:e,data:{coordinates:s}}=this.props;s!==t.params.coordinates&&e(l.r.getPostsByLocation(t.params.coordinates,{initialFetch:!0,coordinates:t.params.coordinates})),document.title="Location Page | social-network"},this.fetchData=()=>{const{dispatch:t,data:{postsByLocation:e},match:s}=this.props,n=e[e.length-1]._id;t(l.r.getPostsByLocation(s.params.coordinates,{initialFetch:!1,lastId:n}))}}render(){const{data:{postsByLocation:t,totalPostsByLocation:e},alert:s,match:o}=this.props,l=t.length!==e,[p,u]=o.params.coordinates.split(","),m=t.map((t=>(0,d.jsx)(i.Z,{to:"/p/"+t._id,children:(0,d.jsxs)("div",{className:"gallery-item",children:[(0,d.jsx)("img",{src:"/images/post-images/thumbnail/".concat(t.photo),className:"gallery-image",alt:""}),(0,d.jsx)("div",{className:"gallery-item-info",children:(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{className:"gallery-item-likes",children:[(0,d.jsx)("span",{className:"visually-hidden",children:"Likes:"}),(0,d.jsx)(a.Z,{name:"heart"})," ",t.likes]}),(0,d.jsxs)("li",{className:"gallery-item-comments",children:[(0,d.jsx)("span",{className:"visually-hidden",children:"Comments:"}),(0,d.jsx)(a.Z,{name:"comment"})," ",t.comments]})]})})]})},t._id)));return s.type?(0,d.jsx)("div",{className:"container",children:(0,d.jsx)(c.Z,{alert:s})}):(0,d.jsxs)(n.Fragment,{children:[(0,d.jsxs)("div",{className:"map-header",children:[(0,d.jsx)("img",{alt:"",src:"https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l(".concat(p,",").concat(u,")/").concat(p,",").concat(u,",13,0.00,0.00/1200x250@2x?access_token=pk.eyJ1Ijoiam9obmJvcyIsImEiOiJjanl1b3l1MmkwaDdnM2pwaG5yNm1mZmlrIn0.O7X5QEcRO2ncLo_vLMVeTQ")}),(0,d.jsx)("div",{className:"location-name",children:t[0]?t[0].location.address:""})]}),(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{style:{fontSize:"2rem",paddingBottom:"1%"},children:[" ",e," posts"]}),(0,d.jsx)(r.Z,{}),(0,d.jsx)(h(),{className:"gallery",dataLength:m.length,next:this.fetchData,hasMore:l,loader:(0,d.jsx)("h4",{children:"Loading..."}),children:m})]})}),(0,d.jsx)(r.Z,{hidden:!0})]})}}const m=(0,o.$j)((t=>({data:t.post,fetchingUserData:t.user.loadingUser,alert:t.alert})))(u)},82288:(t,e,s)=>{s.d(e,{r:()=>l});var n=s(73685),o=s(51935);const a={fetchPosts:function(t){const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({...t})};return fetch("/api/post/getPosts/",e).then(i).then((t=>t.data))},getPostsByHashtag:function(t,e){const s={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({hashtag:t,...e})};return fetch("/api/post/getPostsByHashtag/",s).then(i).then((t=>t.data))},getPostsByLocation:function(t,e){const s={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({coordinates:t,...e})};return fetch("/api/post/getPostsByLocation/",s).then(i).then((t=>t.data))},addPost:function(t){const e={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token},body:t};return fetch("/api/post/addPost/",e).then(i).then((t=>t.post))},addProfiePicture:function(t){const e={method:"POST",headers:{Authorization:JSON.parse(localStorage.getItem("user")).token},body:t};return fetch("/api/user/addProfiePicture/",e).then(i).then((t=>t))},deletePost:function(t){const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t})};return fetch("/api/post/delete/",e).then(i).then((t=>t))},likePost:function(t,e){const s={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t,authorId:e})};return fetch("/api/post/likePost/",s).then(i).then((t=>t))},getPostLikes:function(t){const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t})};return fetch("/api/post/getPostLikes/",e).then(i).then((t=>t))},getPost:function(t){const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:JSON.parse(localStorage.getItem("user")).token},body:JSON.stringify({postId:t})};return fetch("/api/post/getPost/",e).then(i).then((t=>t))},logout:r};function r(){localStorage.removeItem("user")}function i(t){return t.text().then((e=>{const s=e&&JSON.parse(e);if(!t.ok){401===t.status&&(console.log(t),r(),window.location.reload(!0));const e=s&&s.message||t.statusText;return Promise.reject(e)}return s}))}var c=s(44102);const l={mapLoactionSelect:function(t){return e=>{e({type:n.q.MAP_LOCATION_SELECT,location:t})}},changeTextareaValue:function(t){return e=>{e({type:n.q.TEXTAREA_VALUE_CAHNGE,value:t})}},canvasHasValue:function(t){return e=>{e({type:n.q.CANVAS_HAS_VALUE,hasValue:t})}},getCroppedSrc:function(t){return e=>{e({type:n.q.IMAGE_CROP_SELECT,imgSrc:t})}},selectImage:function(t,e){return s=>{s({type:n.q.IMAGE_SELECT,imgSrc:t,imgSrcExt:e})}},fetchPosts:function(t){return s=>{a.fetchPosts(t).then((o=>{if(t.initialFetch){const{posts:a,total:r}=o[0];a.forEach((t=>s({type:n.q.INIT_COMMENT,postId:t._id}))),s(e(a,r[0],t.initialFetch))}else s(e(o)),o.forEach((t=>s({type:n.q.INIT_COMMENT,postId:t._id})))}),(t=>{s(c.I.error(t))}))};function e(t,e,s){return{type:n.q.POSTS_SUCCESS,posts:t,total:e,initialFetch:s}}},getPostsByHashtag:function(t,e){return o=>{var r;o((r=e.initialFetch,{type:n.q.HASHTAG_POSTS_REQUEST,initialFetch:r})),a.getPostsByHashtag(t,e).then((n=>{if(e.initialFetch){const{posts:a,total:r}=n[0];o(s(a,r[0],e.initialFetch,t))}else o(s(n))}),(t=>{o(c.I.error(t))}))};function s(t,e,s,o){return{type:n.q.HASHTAG_POSTS_SUCCESS,posts:t,total:e,initialFetch:s,hashtag:o}}},getPostsByLocation:function(t,e){return o=>{var r;o((r=e.initialFetch,{type:n.q.LOCATION_POSTS_REQUEST,initialFetch:r})),a.getPostsByLocation(t,e).then((n=>{if(e.initialFetch){const{posts:a,total:r}=n[0];o(s(a,r[0],e.initialFetch,t))}else o(s(n))}),(t=>{o(c.I.error(t))}))};function s(t,e,s,o){return{type:n.q.LOCATION_POSTS_SUCCESS,posts:t,total:e,initialFetch:s,coordinates:o}}},deletePost:function(t){return e=>{e({type:n.q.POST_DELETE_REQUEST}),a.deletePost(t).then((t=>{var s;e((s=t,{type:n.q.POST_DELETE_SUCCESS,result:s})),e(c.I.success(t.message))}),(t=>{console.log(t)}))}},addPost:function(t){return e=>{e({type:n.q.ADD_POST_REQUEST}),a.addPost(t).then((t=>{e(function(t){return{type:n.q.ADD_POST_SUCCESS,post:t}}(t)),e(c.I.success("Post uploaded")),e({type:n.q.INIT_COMMENT,postId:t._id})}),(t=>{e(c.I.error(t))}))}},addProfiePicture:function(t){return e=>{e({type:o.A.GETUSER_REQUEST}),a.addProfiePicture(t).then((t=>{var s;e((s=t.user,{type:o.A.USER_UPDATE_PROFILEPICTURE_SUCCESS,user:s}))}),(t=>{console.log(t)}))}},likePost:function(t,e,s){return r=>{s.some((e=>e===t))?r(o(n.q.DISLIKE_POST,{postId:t})):r(o(n.q.LIKE_POST,{postId:t})),a.likePost(t,e).then((()=>{}),(t=>{console.log(t)}))};function o(t,e){return{type:t,post:e}}},getPostLikes:function(t){return e=>{a.getPostLikes(t).then((t=>{var s;e((s=t.users[0].users_likes,{type:n.q.GET_POST_LIKES,postLikes:s}))}),(t=>{console.log(t)}))}},getPost:function(t){return e=>{a.getPost(t).then((t=>{var s,o;document.title=t.post[0].author[0].username+"'s post | social-network",e((s=n.q.GET_POST,o=t.post,{type:s,post:o})),e({type:n.q.INIT_COMMENT,postId:t.post[0]._id})}),(t=>{e(c.I.error(t)),console.log(t)}))}}}},85168:(t,e,s)=>{s.d(e,{Z:()=>a});s(72791);var n=s(91460),o=s(72898);function a(t){let{alert:{type:e,message:s}}=t;return"success"===e?(0,o.jsx)(n.Z,{success:!0,header:"Success",content:s}):"error"===e?(0,o.jsx)(n.Z,{error:!0,header:"Error",content:s}):null}},91460:(t,e,s)=>{s.d(e,{Z:()=>L});var n=s(87462),o=s(15671),a=s(43144),r=s(82963),i=s(61120),c=s(60136),l=s(97326),p=s(4942),h=s(42854),d=s.n(h),u=(s(41761),s(81694)),m=s.n(u),g=s(72791),S=s(47826),f=s(76755),y=s(86246),P=s(65831),T=s(42879),E=s(62836);function N(t){var e=t.children,s=t.className,o=t.content,a=m()("content",s),r=(0,f.Z)(N,t),i=(0,y.Z)(N,t);return g.createElement(i,(0,n.Z)({},r,{className:a}),P.kK(e)?o:e)}N.handledProps=["as","children","className","content"],N.propTypes={};const I=N;function O(t){var e=t.children,s=t.className,o=t.content,a=m()("header",s),r=(0,f.Z)(O,t),i=(0,y.Z)(O,t);return g.createElement(i,(0,n.Z)({},r,{className:a}),P.kK(e)?o:e)}O.handledProps=["as","children","className","content"],O.propTypes={},O.create=(0,T.u5)(O,(function(t){return{content:t}}));const _=O;var v=s(72034),Z=s.n(v);function k(t){var e=t.children,s=t.className,o=t.content,a=m()("content",s),r=(0,f.Z)(k,t),i=(0,y.Z)(k,t);return g.createElement(i,(0,n.Z)({},r,{className:a}),P.kK(e)?o:e)}k.handledProps=["as","children","className","content"],k.propTypes={},k.defaultProps={as:"li"},k.create=(0,T.u5)(k,(function(t){return{content:t}}));const C=k;function j(t){var e=t.children,s=t.className,o=t.items,a=m()("list",s),r=(0,f.Z)(j,t),i=(0,y.Z)(j,t);return g.createElement(i,(0,n.Z)({},r,{className:a}),P.kK(e)?Z()(o,C.create):e)}j.handledProps=["as","children","className","items"],j.propTypes={},j.defaultProps={as:"ul"},j.create=(0,T.u5)(j,(function(t){return{items:t}}));const x=j;var L=function(t){function e(){var t,s;(0,o.Z)(this,e);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return s=(0,r.Z)(this,(t=(0,i.Z)(e)).call.apply(t,[this].concat(a))),(0,p.Z)((0,l.Z)((0,l.Z)(s)),"handleDismiss",(function(t){var e=s.props.onDismiss;e&&e(t,s.props)})),s}return(0,c.Z)(e,t),(0,a.Z)(e,[{key:"render",value:function(){var t=this.props,s=t.attached,o=t.children,a=t.className,r=t.color,i=t.compact,c=t.content,l=t.error,p=t.floating,h=t.header,u=t.hidden,N=t.icon,O=t.info,v=t.list,Z=t.negative,k=t.onDismiss,C=t.positive,j=t.size,L=t.success,A=t.visible,G=t.warning,q=m()("ui",r,j,(0,S.lG)(i,"compact"),(0,S.lG)(l,"error"),(0,S.lG)(p,"floating"),(0,S.lG)(u,"hidden"),(0,S.lG)(N,"icon"),(0,S.lG)(O,"info"),(0,S.lG)(Z,"negative"),(0,S.lG)(C,"positive"),(0,S.lG)(L,"success"),(0,S.lG)(A,"visible"),(0,S.lG)(G,"warning"),(0,S.sU)(s,"attached"),"message",a),U=k&&g.createElement(E.Z,{name:"close",onClick:this.handleDismiss}),J=(0,f.Z)(e,this.props),b=(0,y.Z)(e,this.props);return P.kK(o)?g.createElement(b,(0,n.Z)({},J,{className:q}),U,E.Z.create(N,{autoGenerateKey:!1}),(!d()(h)||!d()(c)||!d()(v))&&g.createElement(I,null,_.create(h,{autoGenerateKey:!1}),x.create(v,{autoGenerateKey:!1}),(0,T.BU)(c,{autoGenerateKey:!1}))):g.createElement(b,(0,n.Z)({},J,{className:q}),U,o)}}]),e}(g.Component);(0,p.Z)(L,"Content",I),(0,p.Z)(L,"Header",_),(0,p.Z)(L,"List",x),(0,p.Z)(L,"Item",C),(0,p.Z)(L,"handledProps",["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"]),L.propTypes={}}}]);
//# sourceMappingURL=312.5d89c42f.chunk.js.map