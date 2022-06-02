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

export default createMenu;
