let input = document.querySelector('input');
let output = document.querySelector('.Result');

function CalcZkah() {
    result = " زكاتك هي " + '<b>'+(input.value * 0.025)+'</b>' + " ريال";
    if(input.value< 1600.0)
        result ="لم تبلغ حد النصاب"
    output.innerHTML = result;
}