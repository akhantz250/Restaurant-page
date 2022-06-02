/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact(){
    const contactContentElement = document.createElement('div');
    contactContentElement.classList.add('contact-body');

    contactContentElement.innerHTML=` 
    <div class="info">
        <div class="info-row">
            <h2>TELEPHONE</h2>
            <span>+65 9988 2211</span>
        </div>
        <div class="info-row">
            <h2>EMAIL</h2>
            <span>chicky@gmail.com</span>
        </div>
        <div class="info-row">
            <h2>LOCATION</h2>
            <span>123 Orchard Boulevard<br>#1-123, ION Orchard<br>Singapore 123456 </span>
        </div>
        <div class="info-row">
            <h2>OPERATING HOURS</h2>
            <span>MON-FRI:  
            10:00 to 22:00<br>
            SAT-SUN: 
            10:00 to 00:00<br>
            PUBLIC HOLIDAYS: 
            10:00 to 00:00</span>
        </div>
    </div>
    <img class='map' src="./images/map.png" alt="map">
    `
    return contactContentElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome(){
    const homeElement = document.createElement('div');
    const centerElement = document.createElement('div');

    const headingElement = document.createElement('h1');
    const paraElement = document.createElement('p');
    const btnElement = document.createElement('button');

    headingElement.textContent = "Chicky's";
    paraElement.textContent = "Only the tastiest and crispiest fried chicken";
    btnElement.textContent = "See our menu";
    btnElement.setAttribute('id','go-to-menu');

    homeElement.classList.add('body');
    homeElement.classList.add('home');
    centerElement.classList.add('center')

    centerElement.appendChild(headingElement);
    centerElement.appendChild(paraElement);
    centerElement.appendChild(btnElement);

    homeElement.appendChild(centerElement)

    return homeElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu(){
    const mainContentElement = document.createElement('div');
    mainContentElement.classList.add('main-content');
    mainContentElement.innerHTML=`
    <h2>Our Menu</h2>
    <h3>MAINS</h3>
    <div class="container">
        <div class="col">
            <div class='menu-item' style="background-image: url(./images/friedchicken.webp);"></div>
            <span>Signature Chicken</span>
        </div>
        <div class="col">
            <div class='menu-item' style='background-image: url(./images/spicychicken.webp);'></div>
            <span>Spicy Chicken</span>
        </div>
        <div class="col">
            <div class='menu-item' style="background-image: url(./images/ramen.webp); background-position: 10%;"></div>
            <span>Spicy Ramen with Chicken</span>
        </div>
    </div>
    <h3>SIDES</h3>
    <div class="container">
        <div class="col">
            <div class='menu-item' style="background-image: url(./images/fries.webp); background-position: 30%;"></div>
            <span>French Fries</span>
        </div>
        <div class="col">
            <div class='menu-item' style="background-image: url(./images/mashpotatoes.jpg);"></div>
            <span>Mash Potatoes</span>
        </div>
        <div class="col">
            <div class='menu-item' style="background-image: url(./images/coleslaw.jpg);"></div>
            <span>Coleslaw</span>
        </div>
    </div>
    <h3>DRINKS</h3>
    <div class="container">
        <div class="col">
            <div class='menu-item' style="background-image: url(./images/soda.jpg); background-position: 30%; background-size: 80%;"></div>
            <span>Soda</span>
        </div>
        <div class="col">
            <div class='menu-item' style="background-image: url(./images/milkshake.jpg)"></div>
            <span>Milkshake</span>
        </div>
        <div class="col">
            <div class='menu-item' style="background-image: url(./images/coffee.webp); background-size: 90%;"></div>
            <span>Coffee</span>
        </div>
    </div>
    `

    return mainContentElement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function loadWebsite(){
    const targetElement = document.getElementById('content');
    targetElement.appendChild(createNav());
    targetElement.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
    targetElement.appendChild(createFooter());
    setFooterText('Photo by Shelby Cohron on Unsplash')
    homeGoToMenu();
}
    
function createNav(){
    const navElement = document.createElement('nav');
    const ulElement = document.createElement('ul');

    const homeList = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.textContent = "Home"
    homeLink.classList.add('active');

    const menuList = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.textContent = "Menu"

    const contactList = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.textContent = "Contact Us"

    homeLink.setAttribute('id','home');
    menuLink.setAttribute('id','menu');
    contactLink.setAttribute('id','contact');
    
    
    contactList.appendChild(contactLink);
    menuList.appendChild(menuLink);
    homeList.appendChild(homeLink);
    ulElement.appendChild(homeList);
    ulElement.appendChild(menuList);
    ulElement.appendChild(contactList);
    navElement.appendChild(ulElement)

    return navElement;
}

function createFooter(){
    const footerElement = document.createElement('footer');
    const footerLink = document.createElement('a');
    footerElement.appendChild(footerLink);
    return footerElement;
}

function setupSwitchTab(){
    const targetElement = document.getElementById('content');
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');
    
    homeBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')){
            return;
        }else{
            replaceElement((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
            setActiveButton(e.target);
            homeGoToMenu()
            setFooterText('Photo by Shelby Cohron on Unsplash');
        }
    })
    menuBtn.addEventListener('click', (e) =>{
        if(e.target.classList.contains('active')){
            return;
        }else{
            replaceElement((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
            setActiveButton(e.target);
            setFooterText('')
        }
    })
    contactBtn.addEventListener('click', (e) =>{
        if(e.target.classList.contains('active')){
            return;
        }else{
            replaceElement((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
            setActiveButton(e.target);
            setFooterText('')
        }
    });
}

function replaceElement(newElement){
    const targetElement = document.getElementById('content');
    const removedElement = document.querySelector('#content > :nth-child(2)')
    targetElement.removeChild(removedElement);
    targetElement.insertBefore(newElement,targetElement.lastElementChild);
}

function setActiveButton(target){
    const buttons = document.querySelectorAll('nav ul li a');
    buttons.forEach((button) =>{
        button.classList.remove('active');
    });
    target.classList.add('active');
}

function setFooterText(text){
    const footerText = document.querySelector('footer a');
    footerText.textContent = text;
    footerText.setAttribute('href', "https://unsplash.com/photos/KetmxcM64fo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink");
}

function homeGoToMenu(){
    const homeMenuBtn = document.getElementById('go-to-menu');
    homeMenuBtn.addEventListener('click',() => {
    replaceElement((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
    const menuBtn = document.querySelector('#menu');
    setActiveButton(menuBtn);
    setFooterText('')
    });
}

loadWebsite();
setupSwitchTab();

    

    

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ2pDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUMxQnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRix5QkFBeUI7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLHlCQUF5QjtBQUMvRztBQUNBO0FBQ0E7QUFDQSwyRkFBMkY7QUFDM0Y7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiwwQkFBMEIscUJBQXFCO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLHFCQUFxQjtBQUM1RztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ3ZEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ0E7QUFDTTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlEQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDJCQUEyQixpREFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkJBQTJCLGlEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkJBQTJCLG9EQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpe1xuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250ZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJvZHknKTtcblxuICAgIGNvbnRhY3RDb250ZW50RWxlbWVudC5pbm5lckhUTUw9YCBcbiAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1yb3dcIj5cbiAgICAgICAgICAgIDxoMj5URUxFUEhPTkU8L2gyPlxuICAgICAgICAgICAgPHNwYW4+KzY1IDk5ODggMjIxMTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXJvd1wiPlxuICAgICAgICAgICAgPGgyPkVNQUlMPC9oMj5cbiAgICAgICAgICAgIDxzcGFuPmNoaWNreUBnbWFpbC5jb208L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1yb3dcIj5cbiAgICAgICAgICAgIDxoMj5MT0NBVElPTjwvaDI+XG4gICAgICAgICAgICA8c3Bhbj4xMjMgT3JjaGFyZCBCb3VsZXZhcmQ8YnI+IzEtMTIzLCBJT04gT3JjaGFyZDxicj5TaW5nYXBvcmUgMTIzNDU2IDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXJvd1wiPlxuICAgICAgICAgICAgPGgyPk9QRVJBVElORyBIT1VSUzwvaDI+XG4gICAgICAgICAgICA8c3Bhbj5NT04tRlJJOiAgXG4gICAgICAgICAgICAxMDowMCB0byAyMjowMDxicj5cbiAgICAgICAgICAgIFNBVC1TVU46IFxuICAgICAgICAgICAgMTA6MDAgdG8gMDA6MDA8YnI+XG4gICAgICAgICAgICBQVUJMSUMgSE9MSURBWVM6IFxuICAgICAgICAgICAgMTA6MDAgdG8gMDA6MDA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxpbWcgY2xhc3M9J21hcCcgc3JjPVwiLi9pbWFnZXMvbWFwLnBuZ1wiIGFsdD1cIm1hcFwiPlxuICAgIGBcbiAgICByZXR1cm4gY29udGFjdENvbnRlbnRFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0OyIsImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcbiAgICBjb25zdCBob21lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNlbnRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGhlYWRpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBwYXJhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBidG5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBoZWFkaW5nRWxlbWVudC50ZXh0Q29udGVudCA9IFwiQ2hpY2t5J3NcIjtcbiAgICBwYXJhRWxlbWVudC50ZXh0Q29udGVudCA9IFwiT25seSB0aGUgdGFzdGllc3QgYW5kIGNyaXNwaWVzdCBmcmllZCBjaGlja2VuXCI7XG4gICAgYnRuRWxlbWVudC50ZXh0Q29udGVudCA9IFwiU2VlIG91ciBtZW51XCI7XG4gICAgYnRuRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnZ28tdG8tbWVudScpO1xuXG4gICAgaG9tZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYm9keScpO1xuICAgIGhvbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBjZW50ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpXG5cbiAgICBjZW50ZXJFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmdFbGVtZW50KTtcbiAgICBjZW50ZXJFbGVtZW50LmFwcGVuZENoaWxkKHBhcmFFbGVtZW50KTtcbiAgICBjZW50ZXJFbGVtZW50LmFwcGVuZENoaWxkKGJ0bkVsZW1lbnQpO1xuXG4gICAgaG9tZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VudGVyRWxlbWVudClcblxuICAgIHJldHVybiBob21lRWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuICAgIG1haW5Db250ZW50RWxlbWVudC5pbm5lckhUTUw9YFxuICAgIDxoMj5PdXIgTWVudTwvaDI+XG4gICAgPGgzPk1BSU5TPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lbnUtaXRlbScgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvZnJpZWRjaGlja2VuLndlYnApO1wiPjwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+U2lnbmF0dXJlIENoaWNrZW48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvc3BpY3ljaGlja2VuLndlYnApOyc+PC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5TcGljeSBDaGlja2VuPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pdGVtJyBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9yYW1lbi53ZWJwKTsgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAlO1wiPjwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+U3BpY3kgUmFtZW4gd2l0aCBDaGlja2VuPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aDM+U0lERVM8L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pdGVtJyBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9mcmllcy53ZWJwKTsgYmFja2dyb3VuZC1wb3NpdGlvbjogMzAlO1wiPjwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+RnJlbmNoIEZyaWVzPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pdGVtJyBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9tYXNocG90YXRvZXMuanBnKTtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPk1hc2ggUG90YXRvZXM8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NvbGVzbGF3LmpwZyk7XCI+PC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5Db2xlc2xhdzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGgzPkRSSU5LUzwvaDM+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3NvZGEuanBnKTsgYmFja2dyb3VuZC1wb3NpdGlvbjogMzAlOyBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPlNvZGE8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL21pbGtzaGFrZS5qcGcpXCI+PC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5NaWxrc2hha2U8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NvZmZlZS53ZWJwKTsgYmFja2dyb3VuZC1zaXplOiA5MCU7XCI+PC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5Db2ZmZWU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcblxuICAgIHJldHVybiBtYWluQ29udGVudEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gbG9hZFdlYnNpdGUoKXtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gICAgc2V0Rm9vdGVyVGV4dCgnUGhvdG8gYnkgU2hlbGJ5IENvaHJvbiBvbiBVbnNwbGFzaCcpXG4gICAgaG9tZUdvVG9NZW51KCk7XG59XG4gICAgXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCBuYXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgdWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGNvbnN0IGhvbWVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBob21lTGluay50ZXh0Q29udGVudCA9IFwiSG9tZVwiXG4gICAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxuXG4gICAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCJcblxuICAgIGhvbWVMaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lJyk7XG4gICAgbWVudUxpbmsuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcbiAgICBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdCcpO1xuICAgIFxuICAgIFxuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gICAgaG9tZUxpc3QuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgIHVsRWxlbWVudC5hcHBlbmRDaGlsZChob21lTGlzdCk7XG4gICAgdWxFbGVtZW50LmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcbiAgICB1bEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpO1xuICAgIG5hdkVsZW1lbnQuYXBwZW5kQ2hpbGQodWxFbGVtZW50KVxuXG4gICAgcmV0dXJuIG5hdkVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gICAgcmV0dXJuIGZvb3RlckVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldHVwU3dpdGNoVGFiKCl7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gICAgXG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlcGxhY2VFbGVtZW50KGNyZWF0ZUhvbWUoKSk7XG4gICAgICAgICAgICBzZXRBY3RpdmVCdXR0b24oZS50YXJnZXQpO1xuICAgICAgICAgICAgaG9tZUdvVG9NZW51KClcbiAgICAgICAgICAgIHNldEZvb3RlclRleHQoJ1Bob3RvIGJ5IFNoZWxieSBDb2hyb24gb24gVW5zcGxhc2gnKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVwbGFjZUVsZW1lbnQoY3JlYXRlTWVudSgpKTtcbiAgICAgICAgICAgIHNldEFjdGl2ZUJ1dHRvbihlLnRhcmdldCk7XG4gICAgICAgICAgICBzZXRGb290ZXJUZXh0KCcnKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXBsYWNlRWxlbWVudChjcmVhdGVDb250YWN0KCkpO1xuICAgICAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIHNldEZvb3RlclRleHQoJycpXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQobmV3RWxlbWVudCl7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgcmVtb3ZlZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCA+IDpudGgtY2hpbGQoMiknKVxuICAgIHRhcmdldEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVtb3ZlZEVsZW1lbnQpO1xuICAgIHRhcmdldEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsdGFyZ2V0RWxlbWVudC5sYXN0RWxlbWVudENoaWxkKTtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKHRhcmdldCl7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiB1bCBsaSBhJyk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+e1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBzZXRGb290ZXJUZXh0KHRleHQpe1xuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXIgYScpO1xuICAgIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGZvb3RlclRleHQuc2V0QXR0cmlidXRlKCdocmVmJywgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvS2V0bXhjTTY0Zm8/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdFNoYXJlTGlua1wiKTtcbn1cblxuZnVuY3Rpb24gaG9tZUdvVG9NZW51KCl7XG4gICAgY29uc3QgaG9tZU1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ28tdG8tbWVudScpO1xuICAgIGhvbWVNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgcmVwbGFjZUVsZW1lbnQoY3JlYXRlTWVudSgpKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbiAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ0bik7XG4gICAgc2V0Rm9vdGVyVGV4dCgnJylcbiAgICB9KTtcbn1cblxubG9hZFdlYnNpdGUoKTtcbnNldHVwU3dpdGNoVGFiKCk7XG5cbiAgICBcblxuICAgIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9