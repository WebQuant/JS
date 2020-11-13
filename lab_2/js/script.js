// https://codepen.io/porsake/pen/XogeKM

function result() {

    var x, sh_x, ch_x, th_x;

    x = document.getElementById('inp_x').value;
    x = parseInt(x);

    sh_x = (Math.exp(x) - Math.exp(-x)) / 2;
    ch_x = (Math.exp(x) + Math.exp(-x)) / 2;
    th_x = sh_x / ch_x;

    alert("Ready!")

    document.getElementById('result_sh_x').innerHTML = sh_x;
    document.getElementById('result_ch_x').innerHTML = ch_x;
    document.getElementById('result_th_x').innerHTML = th_x;

}
