
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

function getOnePlayer(id) {
    $.ajax({
        url: 'http://localhost:3000/players?id=' + id,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            updateRonaldo(data[0])
        }
    });
}

function updateRonaldo(ronaldo) {
    console.log(ronaldo);
    var newImg = document.getElementById("updateImg").value;
    ronaldo.img = newImg;
    $.ajax({
        url: 'http://localhost:3000/players/2',
        type: 'PUT',
        data: ronaldo,
        success: function(data){
            console.log(data);
        }
    })
}


var x = setInterval(function(){}, 2000);
function varsta() {

    clearInterval(x);

    var tmp = document.querySelector('select#an');
    var an = tmp.options[tmp.selectedIndex].value;
    tmp = document.querySelector('select#luna');
    var luna = tmp.options[tmp.selectedIndex].value;
    tmp = document.querySelector('select#ziua');
    var zi = tmp.options[tmp.selectedIndex].value;

    console.log(an + '-' + luna + '-' + zi);

    var dataNasterii = new Date(an,luna,zi).getTime();
    var data = new Date(an,luna,zi);

    x = setInterval(function() {

        var now = new Date();
        
        var nowTime = now.getTime();
        
        var distance = nowTime - dataNasterii;

        
        var years = Math.abs(now.getUTCFullYear() - data.getUTCFullYear());
        //console.log(parseInt(luna));

        if (now.getMonth()-parseInt(luna)<0)
                {years--;
                var months=12-parseInt(luna)+1+now.getMonth();}
        else {
            var months= now.getMonth()-parseInt(luna)+1;}
        
        if(months>11)
            {
                years++;
                months=months%12;
            }


        var days = Math.abs(now.getDate() - parseInt(zi));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("show-age").innerHTML = "Varsta: " + years + " ani " + months + " luni si " + days + " zile, " + hours + " ore " + minutes + " minute " + seconds + " secunde ";


    }, 1000);

}
