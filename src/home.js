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

export default createHome;