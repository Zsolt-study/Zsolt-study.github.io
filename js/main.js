console.log("Helló Zsolt! Érezd jól magad!");

function calcAmount() {
    let price = 1200;
    let extra = parseInt(document.querySelector("[name=extra]:checked").value);
    let souce = parseInt(document.querySelector("[name=souce]:checked").value);
    let quantity = parseInt(document.querySelector("[name=quantity]").value);
    let amount =(price + extra + souce) * quantity;
    let showAmount = document.querySelector("span.show-amount");
    showAmount.innerHTML = amount
}