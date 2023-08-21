let totalAmount = 0;
function handleClick(target) {
    const selectedItemContainer = document.getElementById("selected-item");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    totalAmount = parseFloat(totalAmount) + parseFloat(price);
    const totalPrice = document.getElementById("total-price").innerText = totalAmount;
    const total1 = totalPrice;
    document.getElementById("total").innerText = total1;

    //* Button calculation starts from here *//

    const couponCodeInput = document.getElementById("coupon-code");

    const applyButton = document.getElementById("apply-button");
    applyButton.disabled = totalPrice < 200;
    
    const purchaseButton = document.getElementById("purchase");
    purchaseButton.disabled = totalPrice < 0;

    applyButton.addEventListener('click', function () {
        if (!applyButton.disabled && couponCodeInput.value === 'SELL200') {
            const discount = 0.20;
            let discountedTotal = 0;
            discountedTotal = (totalAmount * discount).toFixed(2);
            document.getElementById("Discounted").innerText = discountedTotal;
            const total = totalAmount - (totalAmount * discount).toFixed(2);
            document.getElementById("total").innerText = total;
            couponCodeInput.value = ' ';
            
        }
    });
};

function goHome() {

    window.Location.href = "http://127.0.0.1:5500/index.html";
    document.getElementById("total-price").innerText = "0.00";
    document.getElementById("Discounted").innerText = "0.00";
    document.getElementById("total").innerText = "0.00";
    document.getElementById("selected-item").innerText = " ";
    const purchaseButton = document.getElementById("purchase");
    purchaseButton.disabled=true;
    // purchaseButton.style.backgroundColor='#E527B2';
    const applyButton = document.getElementById("apply-button");
    applyButton.disabled =true;

}





