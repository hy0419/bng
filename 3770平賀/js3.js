// var r=Math.floor(Math.random()*5)+1;
// var text=document.getElementById("transformBox").innerHTML;
// document.write("text:"+text);
// document.write("r;"+r);
// var t=text.substr(r, 1);
// document.write("t:"+t);
//
// var textbox = document.querySelector('#transformBox');
// var tex = textbox.textContent;
//
// textbox.innerHTML = null;
// var i=0;
// tex.split('').forEach(function (c) {
//     textbox.innerHTML += '<span id='+i+'>'+c+'</span>';
//     i++;
// });

var move="off";

    $('#b').on('click',

        function() {
            count = 0;
            count2 = 0;
            count3 = 0;
            if (move !== "off") {
            } else {
                move = "on";
                set1();set2();

                move = "off";
            }

        }
        );

function set1(){
    var set1 = setInterval(
        function sf1() {

            document.getElementById("a").innerHTML = Math.floor(Math.random() * 76) + 1;
            count++;
            if (count === 50) {
                count = 0;
                clearInterval(set1);
            }
        }, 50);}

function set2(){
    var set2 = setInterval(
        function sf2() {
        document.getElementById("a").innerHTML = Math.floor(Math.random() * 76) + 1;
        count2++;
        if (count2 === 30) {
            count2 = 0;
            clearInterval(set2);
            rr();saveArray();
        }
    }, 150);}

function set3(){
    var set3 = setInterval(
        function sf3() {
            document.getElementById("a").innerHTML = Math.floor(Math.random() * 76) + 1;
            count3++;
            if (count3 === 10) {
                count3 = 0;
                clearInterval(set3);

            }
        }, 300);}


// $('#trigger').ready(function () {
//     // $('#transformBox').css({
//     $("#2").css({
//         top: -200,
//         left: 400,
//         font : 300
//
//     }).on('transitionend', function () {
//         $(this).css({
//             top: 0,
//             left: 0
//         }).off('transitionend');
//     });
// });


