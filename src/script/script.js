
function openav(){
    document.getElementById('nav-bar').style.width='70%';
}
function closenav(){
    document.getElementById('nav-bar').style.width='0%';
    
}
function calcular(){

    let carboidratos = document.getElementById("carbo").value;
    let proteinas = document.getElementById("protein").value;
    let gordura = document.getElementById("fats").value;
    
    Resultado = ((gordura * 9)+(proteinas * 4)+(carboidratos * 4));
    
    if (Resultado==0){
        alert("Campos vazios digite algum valor para calcular as calorias dos alimentos.")
    }else{
        document.getElementById("resultado").innerHTML=Resultado;
        console.log(Resultado);
    }
}


