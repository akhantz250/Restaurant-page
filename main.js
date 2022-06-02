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
    <div class="info-col">
        <div class="headrow"><span class="material-symbols-outlined">
            call
        </span>
        <h2>TELEPHONE</h2></div>
        <span>+65 9988 2211</span>
    </div>
    <div class="info-col">
        <div class="headrow"><span class="material-symbols-outlined">
            mail
            </span>
        <h2>EMAIL</h2></div>
        <span>chicky@gmail.com</span>
    </div>
    <div class="info-col">
        <div class="headrow"><span class="material-symbols-outlined">
            navigation
            </span>
        <h2>LOCATION</h2></div>
        <span>123 Orchard Boulevard<br>#1-123, ION Orchard<br>Singapore 123456 </span>
    </div>
    <div class="info-col">
        <div class="headrow"><span class="material-symbols-outlined">
            schedule
            </span>
        <h2>OPERATING HOURS</h2></div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCl7XG4gICAgY29uc3QgY29udGFjdENvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYm9keScpO1xuXG4gICAgY29udGFjdENvbnRlbnRFbGVtZW50LmlubmVySFRNTD1gIFxuICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgPGRpdiBjbGFzcz1cImluZm8tY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkcm93XCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICAgICAgICBjYWxsXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGgyPlRFTEVQSE9ORTwvaDI+PC9kaXY+XG4gICAgICAgIDxzcGFuPis2NSA5OTg4IDIyMTE8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZm8tY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkcm93XCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICAgICAgICBtYWlsXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoMj5FTUFJTDwvaDI+PC9kaXY+XG4gICAgICAgIDxzcGFuPmNoaWNreUBnbWFpbC5jb208L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZm8tY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkcm93XCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICAgICAgICBuYXZpZ2F0aW9uXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoMj5MT0NBVElPTjwvaDI+PC9kaXY+XG4gICAgICAgIDxzcGFuPjEyMyBPcmNoYXJkIEJvdWxldmFyZDxicj4jMS0xMjMsIElPTiBPcmNoYXJkPGJyPlNpbmdhcG9yZSAxMjM0NTYgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvLWNvbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZHJvd1wiPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPlxuICAgICAgICAgICAgc2NoZWR1bGVcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGgyPk9QRVJBVElORyBIT1VSUzwvaDI+PC9kaXY+XG4gICAgICAgIDxzcGFuPk1PTi1GUkk6ICBcbiAgICAgICAgMTA6MDAgdG8gMjI6MDA8YnI+XG4gICAgICAgIFNBVC1TVU46IFxuICAgICAgICAxMDowMCB0byAwMDowMDxicj5cbiAgICAgICAgUFVCTElDIEhPTElEQVlTOiBcbiAgICAgICAgMTA6MDAgdG8gMDA6MDA8L3NwYW4+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuPC9kaXY+XG48aW1nIGNsYXNzPSdtYXAnIHNyYz1cIi4vaW1hZ2VzL21hcC5wbmdcIiBhbHQ9XCJtYXBcIj5cbiAgICBgXG4gICAgcmV0dXJuIGNvbnRhY3RDb250ZW50RWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDsiLCJmdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgY29uc3QgaG9tZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjZW50ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgcGFyYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYnRuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaGVhZGluZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBcIkNoaWNreSdzXCI7XG4gICAgcGFyYUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIk9ubHkgdGhlIHRhc3RpZXN0IGFuZCBjcmlzcGllc3QgZnJpZWQgY2hpY2tlblwiO1xuICAgIGJ0bkVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlNlZSBvdXIgbWVudVwiO1xuICAgIGJ0bkVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2dvLXRvLW1lbnUnKTtcblxuICAgIGhvbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcbiAgICBob21lRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgY2VudGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKVxuXG4gICAgY2VudGVyRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nRWxlbWVudCk7XG4gICAgY2VudGVyRWxlbWVudC5hcHBlbmRDaGlsZChwYXJhRWxlbWVudCk7XG4gICAgY2VudGVyRWxlbWVudC5hcHBlbmRDaGlsZChidG5FbGVtZW50KTtcblxuICAgIGhvbWVFbGVtZW50LmFwcGVuZENoaWxkKGNlbnRlckVsZW1lbnQpXG5cbiAgICByZXR1cm4gaG9tZUVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7IiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IG1haW5Db250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudEVsZW1lbnQuaW5uZXJIVE1MPWBcbiAgICA8aDI+T3VyIE1lbnU8L2gyPlxuICAgIDxoMz5NQUlOUzwvaDM+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2ZyaWVkY2hpY2tlbi53ZWJwKTtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPlNpZ25hdHVyZSBDaGlja2VuPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pdGVtJyBzdHlsZT0nYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3NwaWN5Y2hpY2tlbi53ZWJwKTsnPjwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+U3BpY3kgQ2hpY2tlbjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lbnUtaXRlbScgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvcmFtZW4ud2VicCk7IGJhY2tncm91bmQtcG9zaXRpb246IDEwJTtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPlNwaWN5IFJhbWVuIHdpdGggQ2hpY2tlbjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGgzPlNJREVTPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lbnUtaXRlbScgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvZnJpZXMud2VicCk7IGJhY2tncm91bmQtcG9zaXRpb246IDMwJTtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPkZyZW5jaCBGcmllczwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lbnUtaXRlbScgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvbWFzaHBvdGF0b2VzLmpwZyk7XCI+PC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5NYXNoIFBvdGF0b2VzPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pdGVtJyBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9jb2xlc2xhdy5qcGcpO1wiPjwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+Q29sZXNsYXc8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxoMz5EUklOS1M8L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pdGVtJyBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9zb2RhLmpwZyk7IGJhY2tncm91bmQtcG9zaXRpb246IDMwJTsgYmFja2dyb3VuZC1zaXplOiA4MCU7XCI+PC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5Tb2RhPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pdGVtJyBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9taWxrc2hha2UuanBnKVwiPjwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+TWlsa3NoYWtlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pdGVtJyBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9jb2ZmZWUud2VicCk7IGJhY2tncm91bmQtc2l6ZTogOTAlO1wiPjwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+Q29mZmVlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG5cbiAgICByZXR1cm4gbWFpbkNvbnRlbnRFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmZ1bmN0aW9uIGxvYWRXZWJzaXRlKCl7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICAgIHNldEZvb3RlclRleHQoJ1Bob3RvIGJ5IFNoZWxieSBDb2hyb24gb24gVW5zcGxhc2gnKVxuICAgIGhvbWVHb1RvTWVudSgpO1xufVxuICAgIFxuZnVuY3Rpb24gY3JlYXRlTmF2KCl7XG4gICAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IHVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBob21lTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxuICAgIGhvbWVMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG1lbnVMaW5rLnRleHRDb250ZW50ID0gXCJNZW51XCJcblxuICAgIGNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiXG5cbiAgICBob21lTGluay5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZScpO1xuICAgIG1lbnVMaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51Jyk7XG4gICAgY29udGFjdExpbmsuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhY3QnKTtcbiAgICBcbiAgICBcbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuICAgIGhvbWVMaXN0LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgICB1bEVsZW1lbnQuYXBwZW5kQ2hpbGQoaG9tZUxpc3QpO1xuICAgIHVsRWxlbWVudC5hcHBlbmRDaGlsZChtZW51TGlzdCk7XG4gICAgdWxFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RMaXN0KTtcbiAgICBuYXZFbGVtZW50LmFwcGVuZENoaWxkKHVsRWxlbWVudClcblxuICAgIHJldHVybiBuYXZFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuICAgIHJldHVybiBmb290ZXJFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzZXR1cFN3aXRjaFRhYigpe1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICAgIFxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXBsYWNlRWxlbWVudChjcmVhdGVIb21lKCkpO1xuICAgICAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIGhvbWVHb1RvTWVudSgpXG4gICAgICAgICAgICBzZXRGb290ZXJUZXh0KCdQaG90byBieSBTaGVsYnkgQ29ocm9uIG9uIFVuc3BsYXNoJyk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlcGxhY2VFbGVtZW50KGNyZWF0ZU1lbnUoKSk7XG4gICAgICAgICAgICBzZXRBY3RpdmVCdXR0b24oZS50YXJnZXQpO1xuICAgICAgICAgICAgc2V0Rm9vdGVyVGV4dCgnJylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVwbGFjZUVsZW1lbnQoY3JlYXRlQ29udGFjdCgpKTtcbiAgICAgICAgICAgIHNldEFjdGl2ZUJ1dHRvbihlLnRhcmdldCk7XG4gICAgICAgICAgICBzZXRGb290ZXJUZXh0KCcnKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KG5ld0VsZW1lbnQpe1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IHJlbW92ZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQgPiA6bnRoLWNoaWxkKDIpJylcbiAgICB0YXJnZXRFbGVtZW50LnJlbW92ZUNoaWxkKHJlbW92ZWRFbGVtZW50KTtcbiAgICB0YXJnZXRFbGVtZW50Lmluc2VydEJlZm9yZShuZXdFbGVtZW50LHRhcmdldEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbih0YXJnZXQpe1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgdWwgbGkgYScpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PntcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gc2V0Rm9vdGVyVGV4dCh0ZXh0KXtcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyIGEnKTtcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBmb290ZXJUZXh0LnNldEF0dHJpYnV0ZSgnaHJlZicsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0tldG14Y002NGZvP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRTaGFyZUxpbmtcIik7XG59XG5cbmZ1bmN0aW9uIGhvbWVHb1RvTWVudSgpe1xuICAgIGNvbnN0IGhvbWVNZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvLXRvLW1lbnUnKTtcbiAgICBob21lTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgIHJlcGxhY2VFbGVtZW50KGNyZWF0ZU1lbnUoKSk7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG4gICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdG4pO1xuICAgIHNldEZvb3RlclRleHQoJycpXG4gICAgfSk7XG59XG5cbmxvYWRXZWJzaXRlKCk7XG5zZXR1cFN3aXRjaFRhYigpO1xuXG4gICAgXG5cbiAgICBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==