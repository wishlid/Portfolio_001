document.addEventListener("DOMContentLoaded", function(){
    let stars = ['물병','물고기','양','황소','쌍둥이','게','사자','처녀','천칭','전갈','사수','염소'];
    let term = getParameter('term') == '' ? 1 : getParameter('term');
    let id = `constellation${term}`;
    let star = stars[term-1];
    document.getElementById(id).style.display = 'block';
    document.getElementsByClassName('constellation')[0].innerHTML = star;
    document.getElementsByClassName('constellation')[0].style.backgroundImage = `url('images/signS${term}.png')`;
    document.getElementsByTagName('h1')[0].innerHTML = `4월 ${star}자리 운세`;
});
function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}