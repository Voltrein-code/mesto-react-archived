(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),r=a.n(c),o=(a(11),a(2)),i=a.p+"static/media/header__logo.03b78ada.svg",p=a(0);var l=function(){return Object(p.jsx)("header",{className:"header",children:Object(p.jsx)("a",{href:".",target:"_top",children:Object(p.jsx)("img",{src:i,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})})},u=a(5),d=a(6),j=new(function(){function e(t){Object(u.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(d.a)(e,[{key:"_getServerResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._getServerResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getServerResponse)}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._getServerResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getServerResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._getServerResponse)}},{key:"like",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._getServerResponse)}},{key:"dislike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._getServerResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getServerResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-21",headers:{authorization:"c717fb8f-7e38-4c7d-b617-f552f6e3b5d3","Content-Type":"application/json"}});function h(e){return Object(p.jsxs)("article",{className:"card",children:[Object(p.jsx)("img",{src:e.card.link,className:"card__image",alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(p.jsx)("button",{className:"card__delete-button",type:"button"}),Object(p.jsxs)("div",{className:"card__caption",children:[Object(p.jsx)("h2",{className:"card__name",children:e.card.name}),Object(p.jsxs)("div",{className:"card__like-display",children:[Object(p.jsx)("button",{className:"card__like-button",type:"button"}),Object(p.jsx)("p",{className:"card__like-counter",name:"",children:e.card.likes.length})]})]})]})}var b=function(e){var t=s.a.useState(""),a=Object(o.a)(t,2),n=a[0],c=a[1],r=s.a.useState(""),i=Object(o.a)(r,2),l=i[0],u=i[1],d=s.a.useState(""),b=Object(o.a)(d,2),m=b[0],_=b[1],x=s.a.useState([]),O=Object(o.a)(x,2),f=O[0],g=O[1];return s.a.useEffect((function(){j.getUserInfo().then((function(e){c(e.name),u(e.about),_(e.avatar)})).catch((function(e){console.log(e)}))})),s.a.useEffect((function(){j.getCards().then((function(e){g(e)})).catch((function(e){console.log(e)}))})),Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__avatar-container",children:[Object(p.jsx)("img",{src:m,alt:" ",className:"profile__avatar"}),Object(p.jsx)("button",{className:"profile__avatar-edit",type:"button",onClick:e.onEditAvatar})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsx)("h1",{className:"profile__name",children:n}),Object(p.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile}),Object(p.jsx)("p",{className:"profile__caption",children:l})]}),Object(p.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(p.jsx)("section",{className:"cards",children:f.map((function(t){return Object(p.jsx)(h,{card:t,onCardClick:e.onCardClick},t._id)}))})]})};var m=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var _=function(e){return Object(p.jsx)("article",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("form",{action:"#",className:"popup__container",name:e.name,noValidate:!0,children:[Object(p.jsx)("button",{className:"popup__close",type:"button",onClick:e.onClose}),Object(p.jsx)("h2",{className:"popup__caption",children:e.title}),e.children,Object(p.jsx)("button",{className:"popup__submit",type:"submit",children:e.buttonText})]})})};var x=function(e){return Object(p.jsx)("article",{className:"popup popup_type_card-image ".concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("figure",{className:"popup__image-container",children:[Object(p.jsx)("button",{className:"popup__close popup__close_type_card-image",type:"button",onClick:e.onClose}),Object(p.jsx)("img",{src:e.card.link,className:"popup__image",alt:e.card.name}),Object(p.jsx)("figcaption",{className:"popup__figcaption",children:e.card.name})]})})};var O=function(){var e=s.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=s.a.useState(!1),r=Object(o.a)(c,2),i=r[0],u=r[1],d=s.a.useState(!1),j=Object(o.a)(d,2),h=j[0],O=j[1],f=s.a.useState(!1),g=Object(o.a)(f,2),v=g[0],N=g[1],y=s.a.useState({}),k=Object(o.a)(y,2),C=k[0],S=k[1];function U(){n(!1),u(!1),O(!1),N(!1),S({})}return Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)(l,{}),Object(p.jsx)(b,{onEditProfile:function(){u(!i)},onAddPlace:function(){O(!h)},onEditAvatar:function(){n(!a)},onCardClick:function(e){S(e),N(!v)}}),Object(p.jsx)(m,{}),Object(p.jsx)(_,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:i,onClose:U,children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{type:"text",className:"popup__text popup__text_type_name",id:"name-input",name:"name",required:!0,minLength:"2",maxLength:"40"}),Object(p.jsx)("span",{className:"popup__text-error name-input-error"}),Object(p.jsx)("input",{type:"text",className:"popup__text popup__text_type_caption",id:"caption-input",name:"about",required:!0,minLength:"2",maxLength:"200"}),Object(p.jsx)("span",{className:"popup__text-error caption-input-error"})]})}),Object(p.jsx)(_,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:h,onClose:U,children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__text popup__text_type_image",name:"name",id:"image-input",required:!0,minLength:"2",maxLength:"30"}),Object(p.jsx)("span",{className:"popup__text-error image-input-error"}),Object(p.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__text popup__text_type_link",id:"link-input",name:"link",required:!0}),Object(p.jsx)("span",{className:"popup__text-error link-input-error"})]})}),Object(p.jsx)(_,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:U,children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",className:"popup__text popup__text_type_link",id:"avatar-input",name:"avatar",required:!0}),Object(p.jsx)("span",{className:"popup__text-error avatar-input-error"})]})}),Object(p.jsx)(_,{name:"avatar",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}),Object(p.jsx)(x,{isOpen:v,card:C,onClose:U})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.699fa773.chunk.js.map