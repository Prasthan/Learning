// Creating function simpleInterest

function simpleInterest(){
    let principle = document.getElementById('p').value;
    let time = document.getElementById('t').value;
    let rate = document.getElementById('r').value;

    /* alert(time);        : to check whether value has been taken or not */

    let si = principle * time * rate / 100;

    document.getElementById('answer').innerHTML = "The answer is " + si;

}