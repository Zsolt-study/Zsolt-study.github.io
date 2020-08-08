console.log("Helló Zsolt! Érezd jól magad!");

function calcAmount() {
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let address = document.querySelector("#address").value.trim();
    let price = 1200;
    let extra = parseInt(document.querySelector("[name=extra]:checked").value);
    let souce = parseInt(document.querySelector("[name=souce]:checked").value);
    let quantity = parseInt(document.querySelector("[name=quantity]").value);
    if (!name) {
        alert("Kérjük adja meg a nevét!");
    } else if (!email || (email.indexOf("@") < 0) || (email.indexOf(".") < 0)) {
        alert("Nem megfelelő email címet adott meg!");
    } else if (address.length < 10) {
        alert("Kérjük pontos címet adjon meg!");
    } else if (!quantity || quantity < 1 || quantity > 10) {
        alert("Csak 1 éa 10 közötti darabot rendelhetsz!");
    } else {
        let amount =(price + extra + souce) * quantity;
    let showAmount = document.querySelector("span.show-amount");
    showAmount.innerHTML = amount
    }
    
}
    