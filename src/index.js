import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

function loadWebsite(){
    const targetElement = document.getElementById('content');
    targetElement.appendChild(createNav());
    targetElement.appendChild(createHome());
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
            replaceElement(createHome());
            setActiveButton(e.target);
            homeGoToMenu()
            setFooterText('Photo by Shelby Cohron on Unsplash');
        }
    })
    menuBtn.addEventListener('click', (e) =>{
        if(e.target.classList.contains('active')){
            return;
        }else{
            replaceElement(createMenu());
            setActiveButton(e.target);
            setFooterText('')
        }
    })
    contactBtn.addEventListener('click', (e) =>{
        if(e.target.classList.contains('active')){
            return;
        }else{
            replaceElement(createContact());
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
    replaceElement(createMenu());
    const menuBtn = document.querySelector('#menu');
    setActiveButton(menuBtn);
    setFooterText('')
    });
}

loadWebsite();
setupSwitchTab();

    

    
