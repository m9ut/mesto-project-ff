(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-29",headers:{authorization:"acded56c-69ba-46c3-84dc-c91bcbdd5c55","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},n=function(n){return fetch(e.baseUrl+"/cards/likes/".concat(n),{method:"PUT",headers:e.headers}).then(t)},r=function(n){return fetch(e.baseUrl+"/cards/likes/".concat(n),{method:"DELETE",headers:e.headers}).then(t)},o=document.querySelector("#card-template").content,c=function(e,t,n,r,c){var a=o.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__image"),u=a.querySelector(".card__title"),l=a.querySelector(".card__like-button"),s=a.querySelector(".card__delete-button"),d=a.querySelector(".card__like-count");return a.dataset.cardId=e._id,a.dataset.ownerId=e.owner._id,i.src=e.link,i.alt=e.name,u.textContent=e.name,d.textContent=e.likes.length,e.likes.some((function(e){return e._id===c}))&&l.classList.add("card__like-button_is-active"),e.owner._id===c?s.addEventListener("click",(function(n){t(a,e._id)})):s.remove(),l.addEventListener("click",(function(t){n(d,l,e._id)})),i.addEventListener("click",r),a},a=function(n,r){(function(n){return fetch(e.baseUrl+"/cards/".concat(n),{method:"DELETE",headers:e.headers}).then(t)})(r).then((function(e){n.remove()})).catch((function(e){console.log(e)}))},i=function(e,t,o){(t.classList.contains("card__like-button_is-active")?r:n)(o).then((function(n){t.classList.toggle("card__like-button_is-active"),e.textContent=n.likes.length})).catch((function(e){return console.log(e)}))},u=function(e){e.target.closest(".popup__close")?s(e.target.closest(".popup")):e.target.classList.contains("popup_is-opened")&&s(e.target)},l=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",d)},s=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d)},d=function(e){"Escape"===e.key&&s(document.querySelector(".popup_is-opened"))};function p(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function f(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}function m(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){p(e,n,t)})),f(r,n,t)}var _=document.querySelector(".profile__edit-button"),y=document.querySelector(".popup_type_edit"),v=document.forms["edit-profile"],h=v.elements.name,b=v.elements.description,S=document.querySelector(".profile__title"),g=document.querySelector(".profile__description"),q=document.querySelector(".profile__add-button"),E=document.querySelector(".popup_type_new-card"),k=document.forms["new-place"],L=document.querySelector(".popup__input_type_card-name"),C=document.querySelector(".popup__input_type_url"),A=document.querySelector(".popup__image"),x=document.querySelector(".popup_type_image"),w=document.querySelector(".popup__caption"),U=document.querySelector(".profile__image_overlay"),T=document.querySelector(".popup_type_user-image"),j=document.forms["edit-user-image"],O=document.querySelector(".profile__image");function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var I=document.querySelector(".places__list"),P="",D=function(e){S.textContent=e.name,g.textContent=e.about,O.style.backgroundImage="url(".concat(e.avatar,")"),P=e._id},M=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};_.addEventListener("click",(function(e){var t,n,r;l(y),m(v,J),t=v,n=S.textContent,r=g.textContent,t.name.value=n,t.description.value=r})),y.addEventListener("click",u),v.addEventListener("submit",(function(n){n.preventDefault();var r,o=v.querySelector(".popup__button");M(!0,o),(r={name:h.value,about:b.value},fetch(e.baseUrl+"/users/me",{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r.name,about:r.about})}).then(t)).then((function(e){D(e),s(y)})).catch((function(e){console.log(e)})).finally((function(){M(!1,o)}))})),U.addEventListener("click",(function(e){l(T),m(j,J),j.reset()})),T.addEventListener("click",u),j.addEventListener("submit",(function(n){n.preventDefault();var r,o=j.querySelector(".popup__button");M(!0,o),(r=j.link.value,fetch(e.baseUrl+"/users/me/avatar",{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){D(e),s(T)})).catch((function(e){console.log(e)})).finally((function(){M(!1,o)}))})),q.addEventListener("click",(function(e){l(E),m(E,J)})),E.addEventListener("click",u),k.addEventListener("submit",(function(n){n.preventDefault();var r,o=k.querySelector(".popup__button");M(!0,o),(r={name:L.value,link:C.value},fetch(e.baseUrl+"/cards",{method:"POST",headers:e.headers,body:JSON.stringify({name:r.name,link:r.link})}).then(t)).then((function(e){var t=c(e,a,i,N,P);I.prepend(t),s(E),k.reset()})).catch((function(e){console.log(e)})).finally((function(){M(!1,o)}))})),q.addEventListener("click",(function(){k.reset(),m(k,J),l(E)})),Promise.all([fetch(e.baseUrl+"/users/me",{headers:e.headers}).then(t),fetch(e.baseUrl+"/cards",{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],u=r[1];D(o),u.forEach((function(e){!function(e,t,n,r,o){var a=c(e,t,n,r,o);I.append(a)}(e,a,i,N,P)}))})).catch((function(e){console.error(e)}));var N=function(e){A.src=e.target.src,A.alt=e.target.alt,w.textContent=e.target.alt,l(x)};x.addEventListener("click",u);var J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);f(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?p(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.classList.add(r.errorClass),o.textContent=n}(e,t,t.validationMessage,n)}(e,o,t),f(n,r,t)}))}))}(t,e)}))}(J)})();