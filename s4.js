// JavaScript source code
//document.addEventListener('DOMContentLoaded', weather)
document.addEventListener('DOMContentLoaded', style)


var apiKey = 'fa7d80c48643dfadde2cced1b1be6ca1';


//cite: CS290 video and lectures - this is mostly composed of the code I wrote for the weather hw assignment which I learn how to do from the videos

document.addEventListener('DOMContentLoaded', function (event) {
    var req = new XMLHttpRequest();

    req.open('GET', "http://api.openweathermap.org/data/2.5/weather?zip=90034" + ",us&appid=" + apiKey, true);

    req.addEventListener('load', function () {

        var output = JSON.parse(req.responseText);

        var temp = output.main.temp * 1.8 - 459.67;
        var temp2 = parseInt(temp);
        document.getElementById('wt').textContent = temp2  + "(F)";
   
    });
    req.send(null);
    event.preventDefault();
})



function style()
{
    document.getElementById("p9").style.color = "black";
    document.getElementById("p9").style.font = "xx-large";

    document.getElementById("cw").style.color = "blue";
    document.getElementById("cw").style.fontWeight = "200";

}