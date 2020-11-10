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
