function handleClick(target) {
    const selectedItemContainer = document.getElementById("selected-item");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    // console.log(target.childNodes[3].childNodes[3].innerText)

    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    // console.log(itemName)
}