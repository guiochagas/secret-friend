let friendsList = [];


function clearField() {
    field = document.querySelector(".down-side__field-to-type");
    field.value = "";
    field.focus();
}


function addFriend() {
    const friend = document.getElementById("down-side__field-to-type").value;
    
    if (friend) {
        friendsList.push(friend);

        const friendList = document.querySelector(".friendList");
        const friendLine = document.createElement("li");

        friendLine.textContent = friend;
        friendList.appendChild(friendLine);

        clearField();
    } else {
        alert("Please, type at least one name");
    }
}

function randomNumber() {
    let listLenght = friendsList.length;
    const number = parseInt(Math.random() * listLenght);
    return number;
}


function chooseFriend() {
    const chosenFriend = friendsList[randomNumber()];
    const result = document.getElementById("down-side__friendResult");
    result.innerHTML = chosenFriend;
    return result
}


// Evento para que o botão "adicionar" seja executado ao teclar "Enter"
const friendField = document.getElementById("down-side__field-to-type");
friendField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addFriend();  // Chama a função addFriend ao pressionar Enter
    }
});