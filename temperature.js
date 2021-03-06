// JavaScript source code
function calculate() {
    var result;
    var original= document.getElementById("original");
    var temp = original.value;
    var regexp = /^([+-]?\d+(?:\.\d+)?(?:[Ee][+-]?\d+)?)\s*([cCfF])$/;
  
    var m = temp.match(regexp);
  
    if (m) {
        var num = m[1];
        var type = m[2];
        num = parseFloat(num);
        if (type == 'c' || type == 'C') {
            result = (num * 9/5)+32;
            result = result.toFixed(1) + "F"
        }
        else {
            result = (num - 32)*5/9;
            result = result.toFixed(1) + "C"
        }
        converted.innerHTML = result;
    }
    else {
        converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
    }
}
