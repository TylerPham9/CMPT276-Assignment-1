var formData = document.getElementById("calcForm");
var numOfActs=0;


function calculatePercent(actClass){
    var x = document.getElementsByClassName(actClass)[0].value;
    var y = document.getElementsByClassName(actClass)[1].value;
    var total = (x/y)*100;
    // console.log(total);
    if (total <= 150 && total >= 0){
        document.getElementsByClassName(actClass)[2].innerHTML = total.toFixed(2) + "%";
    } else {
        document.getElementsByClassName(actClass)[2].innerHTML = '';
    }
}
function calculateMean(){
    var i = 1;
    var numOfValues = 0;
    var nume=0;
    var j,nume;
    // var nume = document.getElementsByClassName('act'+i)[2].con;
    // console.log(nume);
    // for (i = 1; )
    // if (document.getElementsByClassName('act'+i)[2].innerHTML == ''){
    //     console.log("penis");
    // } else {
    //     console.log("testies");
    // }
    numOfActs = document.getElementById("calcForm").length /2;
    
    for (i = 1; i <= numOfActs; i++){
        j = document.getElementsByClassName('act'+ i)[2];
        // console.log("innerHTML " + j.innerHTML);
        if (j.innerHTML == ''){
        } else {
            console.log(Number(j.innerHTML.slice(0, j.innerHTML.length-1)));
            nume = nume + Number(j.innerHTML.slice(0, j.innerHTML.length-1));
            numOfValues++;
        }
    }
    console.log(nume/numOfValues);
    document.getElementById("result").innerHTML = (nume/numOfValues).toFixed(2) + "%";

}

function calculateAvg(){
    // window.alert("testing");
    var j;
    var i; //Counter
    var nume = 0;
    var denom = 0;
    numOfActs = document.getElementById("calcForm").length /2;
   
    for (i = 1; i <= numOfActs; i++) {
        j = document.getElementsByClassName('act'+i);
        
        if (j[0].value != '' && j[1].value != ''){
            nume += Number(j[0].value);
            denom += Number(j[1].value);
        }

    }
    document.getElementById("result").innerHTML = (nume*100/denom).toFixed(2) + "%";
    
}