function update() {
    console.log("Updating Files...");
    let tit = document.getElementById('title').value;
    let desc = document.getElementById('description').value;
    let itemJsonArray;

    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
    } else {
        itemJsonArray = JSON.parse(localStorage.getItem('itemsJson'));
    }

    itemJsonArray.push([tit, desc]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

    let tableBody = document.getElementById("tablebody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn small btn-primary"> Delete</button></td>
                </tr>`;
    });
    tableBody.innerHTML = str;
}

function deleteItem(index) {
    let itemJsonArray = JSON.parse(localStorage.getItem('itemsJson'));
    itemJsonArray.splice(index, 1); // Remove the item from the array
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray)); // Update the local storage

    // Repopulate the table
    let tableBody = document.getElementById("tablebody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn small btn-primary" onclick="deleteItem(${index})">Delete</button></td>
                </tr>`;
    });
    tableBody.innerHTML = str;
}
