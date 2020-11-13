// https://codepen.io/porsake/pen/XogeKM

function result() {

    var a, b, c, s, p;

    a = document.getElementById('inp_a').value;
    a = parseInt(a);
    b = document.getElementById('inp_b').value;
    b = parseInt(b);
    c = document.getElementById('inp_c').value;
    c = parseInt(c);

    p = (a + b + c) / 2;
    s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    alert("Ready!")

    document.getElementById('result').innerHTML = s;

}

function result_x() {

    var a, b, c, x1, x2, d;

    a = document.getElementById('inpx_a').value;
    a = parseInt(a);
    b = document.getElementById('inpx_b').value;
    b = parseInt(b);
    c = document.getElementById('inpx_c').value;
    c = parseInt(c);

    d = Math.pow(b, 2) - 4 * a * c;
    x1 = (-(b) + Math.sqrt(d)) / (2 * a);
    x2 = (-(b) - Math.sqrt(d)) / (2 * a);

    alert("Ready!");

    document.getElementById('result_x1').innerHTML = x1;
    document.getElementById('result_x2').innerHTML = x2;

}