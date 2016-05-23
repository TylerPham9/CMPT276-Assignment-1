var formData = document.getElementById("calcForm");
var numOfActs=0;


function calculatePercent(actClass){
    console.log(actClass);
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
function addRow(){
    var table = document.getElementById("actTable");
    var nextAct = table.rows.length -1;
    var row = table.insertRow(nextAct);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "Activity " + nextAct;
    cell2.innerHTML = "A"+nextAct;
    var x = document.createElement("input");
    // <input type="number" name="A4x" class="act4" onkeyup="calculatePercent(this)"/>
    x.type = "number";
    x.name = "A"+nextAct+"x";
    x.className = "act"+nextAct;
    // x.value = "";
    x.setAttribute("onkeyup","calculatePercent(this.className)" );

    // console.log(x);
    
    var t = document.createElement("input");
    t.type = "number";
    t.name = "A"+nextAct+"t";
    t.className = "act"+nextAct;
    t.setAttribute("onkeyup","calculatePercent(this.className)" );

    cell3.appendChild(x);
    
    
    // console.log(cell3.innerHTML);
    cell3.innerHTML = cell3.innerHTML + ' / ';
    cell3.appendChild(t);

    // console.log(cell3.innerHTML);
    
    var p = document.createElement("p");
    p.className = "act"+nextAct;
    cell4.appendChild(p);
}

function delRow(){
    var table = document.getElementById("actTable");
    table.deleteRow(table.rows.length-2);
}