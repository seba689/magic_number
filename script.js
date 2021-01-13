
x = document.getElementById('numero');
y = document.getElementById('intentos');
z = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
m=0

function jugar(){  
    x = document.getElementById('numero').value;
    y = document.getElementById('intentos').value;
    t = "";
    t += "<tr><td>"+"es tu intento "+(m+1)+"</td></tr>";
    if(z<x){
        document.getElementById('lista').innerHTML = "tu numero es mayor" ;
        document.getElementById('intento').innerHTML = t;
    }
    else if(z>x){
        document.getElementById('lista').innerHTML ='tu numero es menor';
        document.getElementById('intento').innerHTML = t;
    }
    else{
        document.getElementById('lista').innerHTML = "felicidades acertaste";
        document.getElementById('intento').innerHTML = t;
    }
    m++

    console.log(z);
    console.log(x);
    console.log(y);
    console.log(m);
    while(y<=m){ 
  
    if (m=y){
            alert("perdiste .... el numero magico era "+z);
            break
        }
    }
}

//document.getElementById("lista").innerHTML 

// extras
function juguemos(){
    document.getElementById("pg1").style.display = "none";
}
function siguente(){
    document.getElementById("body1").style.display = "none";
}

