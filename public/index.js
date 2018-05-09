$(function () {


    $("#nameButton").click(sendUsername);
    $("#btnStart").click(start);
    $("#btnDraw").click(draw);
    $("#btnStay").click(star);
    $("#btnNextTurn").click(nextTurn);


    function sendUsername() {
        let requestUrl = "http://LocalHost:3000/room/myRoom/players/";
        let username = $("#nametext").val();
        let request = new XMLHttpRequest();
        request.open("POST", requestUrl + username + "/");
        request.send();
        addUserToList(username)
    }

    function addUserToList(username) {
        var list = $(".ContactList ul");
        var li = $("<li/>");
        var nameField = $("<span></span>");
        var btnDelete = $("<button>Remove</button>")
        btnDelete.addClass(username)
        nameField.innerText= username ;
        console.log(username);
        nameField.appendTo(li);
        btnDelete.appendTo(li);
        li.appendTo(list);
    }

});