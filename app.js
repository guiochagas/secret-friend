let friendsList = []

function clearField() {
    field = document.querySelector(".down-side__field-to-type");
    field.value = "";
    field.focus()
}


function addFriend() {
    const friend = document.getElementById("down-side__field-to-type").value;
    
    if (friend) {
        friendsList.push(friend)

        const friendList = document.querySelector(".friendList");
        const friendLine = document.createElement("li");

        friendLine.textContent = friend;
        friendList.appendChild(friendLine);

        clearField()
    } else {
        alert("Please, type at least one name")
    }
}


