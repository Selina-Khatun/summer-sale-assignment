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

//* apply Button calculation starts from here *//

    const couponCodeInput = document.getElementById("coupon-code");
    const applyButton = document.getElementById("apply-button");
    couponCodeInput.addEventListener('input', function () {
        if (couponCodeInput.value === 'SELL200') {
            applyButton.disabled = totalPrice < 200;
        } else {
            applyButton.disabled = true;
        }
    });
    applyButton.addEventListener('click', function () {
        if (!applyButton.disabled) {
            const discount = 0.20;
            let discountedTotal = 0;
            discountedTotal = totalPrice * discount;
            document.getElementById("Discounted").innerText = discountedTotal;
            const total = totalPrice - (totalPrice * discount);
            document.getElementById("total").innerText = total;

        }
    });
};





