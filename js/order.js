function calcAmount() {
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let address = document.querySelector("#address").value.trim();
    let comment = document.querySelector("#comment").value.trim();
    let extra = parseInt(document.querySelector("[name=extra]:checked").value);
    const sauce = parseInt(document.querySelector('#sauce').value, 10);
    let quantity = parseInt(document.querySelector("[name=quantity]").value);
    let pricePerProduct = 1200
    let price = document.querySelector("span.show-price");
    
    isValidPersonalData(name, email, address, comment)
    isValidQuantity(quantity)
    getTotal(extra, sauce, quantity, pricePerProduct)
    
}
function  isValidPersonalData(name, email, address, comment){
    
    if (!name) {
        alert("Kérjük adja meg a nevét!");
        return false;
    } 
    if (!email || (email.indexOf("@") < 0) || (email.indexOf(".") < 0)){
        alert("Nem megfelelő email címet adott meg!");
        return false;
    }
    if (address.length < 10) {
        alert("Kérjük pontos címet adjon meg!");
        return false;
    }
    if ((comment.indexOf ("<") > 0) || (comment.indexOf(">") > 0)){
        alert("A megjegyzésben a HTML elemek használata nem megengedett!");
        return false;
    }
    return true;
}

function isValidQuantity(quantity){
    if (!quantity || quantity < 1 || quantity > 10) {
        alert("Csak 1 és 10 közötti darabot rendelhetsz!");
        return false;
    }
    return true
}

function getTotal(extra, sauce, quantity, pricePerProduct){
    let price =(pricePerProduct + extra + sauce) * quantity;
    if (price < 5000) {
        price = price + 500
    }
    
    message.innerText = price
}