document.getElementById("calculate").onclick = function () {
    var val1 = "";
    var val2 = "";
    var ans = "";
    val1 = document.getElementById("value1").value;
    val2 = document.getElementById("value2").value;
    val2 = val2/100;
    ans = val1 / (val2*val2);
    document.getElementById("result").innerHTML = ans;
}