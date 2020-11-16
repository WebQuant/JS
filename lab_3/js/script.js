// https://codepen.io/porsake/pen/XogeKM

function result() {

    var a, b, c, d, sort, result;

    a = document.getElementById('inp_a').value;
    a = parseInt(a);
    b = document.getElementById('inp_b').value;
    b = parseInt(b);
    c = document.getElementById('inp_c').value;
    c = parseInt(c);
    d = document.getElementById('inp_d').value;
    d = parseInt(d);

    sort = [a, b, c, d];
    result = sort.sort();


    alert("Ready!");

    document.getElementById('result').innerHTML = result;
}

function result_scholarship() {

    var math, physics, fl, informatics, scholarship_1, scholarship_2, scholarship_3, scholarship_4;

    math = document.getElementById('inp_math').value;
    physics = document.getElementById('inp_physics').value;
    fl = document.getElementById('inp_fl').value;
    informatics = document.getElementById('inp_informatics').value;

    scholarship_1 = "100 р.";
    scholarship_2 = "75 р.";
    scholarship_3 = "50 р.";
    scholarship_4 = "Not to charge"

    if (math == "5" && physics == "5" && fl == "5" && informatics == "5") {
        document.getElementById('result_scholarship').innerHTML = scholarship_1;
    }
    else if (math == "4" && physics == "4" && fl == "4" && informatics == "4") {
        document.getElementById('result_scholarship').innerHTML = scholarship_3;
    }
    else if ((math == "5" || math == "4") && (physics == "5" || physics == "4") && (fl == "5" || fl == "4") && (informatics == "5" || informatics == "4")) {
        document.getElementById('result_scholarship').innerHTML = scholarship_2;
    }
    else if (math == "3" || physics == "3" || fl == "3" || informatics == "3") {
        document.getElementById('result_scholarship').innerHTML = scholarship_4;
    }
}
