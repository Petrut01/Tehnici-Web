function getPlayers() {
    $.ajax({
        url: 'http://localhost:3000/players',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
}

function insertPlayer() {
    var name = document.getElementById("name").value;
    var caps = document.getElementById("caps").value;
    var imgUrl = document.getElementById("imgUrl").value;
    var player = {
        name: name,
        img: imgUrl,
        caps: caps
    }
    $.ajax({
        url: 'http://localhost:3000/players',
        type: 'POST',
        data: player,
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function deletePlayer() {
    var id = document.getElementById("playerId").value;
    $.ajax({
        url: 'http://localhost:3000/players/' + id,
        type: 'DELETE',
        success: function(data) {
            console.log(data);
        }
    })
}

window.onload = function() {
    var btn = document.createElement("button");
    btn.innerHTML = "Top 3 cele mai multe aparitii:";
    btn.addEventListener("click", showMessage);
    btn.addEventListener("mouseout", editText1);
    btn.addEventListener("mousewheel", editText2);
    document.body.appendChild(btn);

    function showMessage() {
        var style = document.createElement("link");
        style.href = "style.css";
        style.rel = "stylesheet";
        style.type = "text/css";
        document.head.appendChild(style);
        var divText = document.createElement("div");
        divText.style.backgroundColor = "gray";
        divText.classList.add("divStyle");
        var text = document.createElement("h2");
        text.innerHTML = "Iker Casillas- 177 de aparitii";
        text.style.textAlign="center";
        divText.appendChild(text);
        document.body.appendChild(divText);
        var btnDelete = document.createElement("button");
        btnDelete.innerHTML = "Stergere";
        btnDelete.addEventListener("click", deleteText);
        document.body.appendChild(btnDelete);
    }

    function deleteText() {
        var cont = document.getElementsByTagName("div");
        console.log(cont[0].childNodes);
        cont[0].removeChild(cont[0].childNodes[0]);
        deleteContainer();
    }

    function deleteContainer() {
        var cont = document.getElementsByTagName("div");
        cont[4].remove();
        var deletBtn = document.getElementsByTagName("button");
        deletBtn[4].remove();
    }

    function editText1() {
        var text = document.getElementsByTagName("h2")[0];
        if( text !== undefined) {
            text.innerHTML = "Cristiano Ronaldo - 169 de aparitii";
            text.style.textAlign = "center";
        }
    }
    function editText2(){
        var txt = document.getElementsByTagName("h2")[0];
        if( txt !== undefined) {
            txt.innerHTML = "Xavi - 151 de aparitii";
            txt.style.textAlign = "center";
        }
    }


}