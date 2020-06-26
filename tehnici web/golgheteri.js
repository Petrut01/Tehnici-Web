function changePageTitle() {
    var txt = 'Salut, ';
    var nume = '';
    while(nume == null || nume == ""){
        nume = prompt("Cum te numesti?", "");
    }
    txt += nume + '!';
    var docTitleTag = document.title;
    document.title = txt;

    setTimeout(function() {
        document.title = docTitleTag;
    }, 2000);

}
changePageTitle();

