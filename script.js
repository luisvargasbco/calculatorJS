function takeValue(x) {
    document.getElementById('Result').innerHTML +=x;
}

function clearInput() {
    document.getElementById('Result').innerHTML ="";
}

function calculateresult() {
    var result = eval(document.getElementById('Result').innerHTML);
    document.getElementById('Result').innerHTML = result;
}

var coma = document.getElementById('coma');
var zero = document.getElementById('zero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var equal = document.getElementById('equal');
var deleteN = document.getElementById('Delete');

zero.addEventListener('click', function() {
    takeValue(0);
})
coma.addEventListener('click', function() {
    takeValue(',');
})
one.addEventListener('click', function() {
    takeValue(1);
})
two.addEventListener('click', function() {
    takeValue(2);
})
three.addEventListener('click', function() {
    takeValue(3);
})
four.addEventListener('click', function() {
    takeValue(4);
})
five.addEventListener('click', function() {
    takeValue(5);
})
six.addEventListener('click', function() {
    takeValue(6);
})
seven.addEventListener('click', function() {
    takeValue(7);
})
eight.addEventListener('click', function() {
    takeValue(8);
})
nine.addEventListener('click', function() {
    takeValue(9);
})

plus.addEventListener('click', function() {
    takeValue('+');
})
minus.addEventListener('click', function() {
    takeValue('-');
})
multiply.addEventListener('click', function() {
    takeValue('*');
})
divide.addEventListener('click', function() {
    takeValue('/');
})

equal.addEventListener('click', function(+1) {
    calculateresult();
})
deleteN.addEventListener('click', function() {
    clearInput();
})