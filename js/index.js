let total=0;
function handleClick(target) {
    const selectedItemContainer = document.getElementById("selected-item");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    // console.log(target.childNodes[3].childNodes[3].innerText)
 
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    // console.log( target.childNodes[3].childNodes[5].innerText.split(" ")[0]);
const price =target.childNodes[3].childNodes[5].innerText.split(" ")[0];

total=parseFloat(total)+parseFloat(price);

document.getElementById("total-price").innerText=total;
}