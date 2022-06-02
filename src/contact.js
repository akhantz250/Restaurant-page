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

export default createContact;