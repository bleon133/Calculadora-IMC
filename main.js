const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const calcular = document.getElementById("calcular");
const reiniciar = document.getElementById("reiniciar");
const resultado = document.getElementById("resultado");
const aguja = document.getElementById("child");
let resultadoimc = 0;
let angulo = -90;

calcular.addEventListener('click', ()=>{
    if(altura.value != "" && peso.value != ""){
        if(isNaN(altura.value) && isNaN(peso.value)){
            alert("No pueden ser letras.");
            limpiar();
        }else{
            if(altura.value > 0 && peso.value > 0){
                if(peso.value <= 700){
                    if(altura.value <= 300){
                        if(altura.value > 3 && altura.value <60){
                            alert("Valor de la altura invalida.");
                            limpiar();
                        }else{
                            if(altura.value >= 60 && altura.value <=300){
                                altura.value = +altura.value/100;
                            }
                            resultadoimc = (peso.value / altura.value ** 2).toFixed(3);
                            resultado.textContent = resultadoimc;
                            if(resultadoimc == 0){
                                resultado.style.backgroundColor = "rgb(0, 255, 255)";
                                aguja.style.rotate = "-90deg";
                            }else if (resultadoimc > 0 && resultadoimc < 18.5){
                                resultado.style.backgroundColor = "rgb(0, 255, 255)";
                                angulo = -90+((67/74)*(resultadoimc*2));
                                aguja.style.rotate = `${angulo}deg`;
                            }else if (resultadoimc == 18.5){
                                resultado.style.backgroundColor = "#2aee4b";
                                aguja.style.rotate = "-56.5deg";
                            }else if (resultadoimc > 18.5 && resultadoimc < 25){
                                resultado.style.backgroundColor = "#2aee4b";
                                aguja.style.rotate = "-37.5deg";
                            }else if (resultadoimc > 25 && resultadoimc <= 27.5){
                                resultado.style.backgroundColor = "rgb(255, 166, 0)";
                                aguja.style.rotate = "0deg";
                            }else if (resultadoimc > 27.5 && resultadoimc < 40){
                                angulo = (27.5 -7.5)+(7*(resultadoimc-30));
                                aguja.style.rotate = `${angulo}deg`;
                                if(resultadoimc > 27.5 && resultadoimc < 30){
                                    resultado.style.backgroundColor = "rgb(255, 166, 0)";
                                }else if(resultadoimc >= 30 && resultadoimc < 35){
                                    resultado.style.backgroundColor = "#dde027";
                                }else if(resultadoimc >= 35 && resultadoimc < 40){
                                    resultado.style.backgroundColor = "#d31208";
                                }
                            }else if (resultadoimc >= 40){
                                resultado.style.backgroundColor = "#d31208";
                                aguja.style.rotate = "90deg";
                            }   
                        }
                    }else{
                        alert("La altura no puede ser mayor a 3 metros (300cm).")
                        limpiar();
                    }
                }else{
                    alert("El peso no puede ser mayor a 700kg.");
                    limpiar();
                }
            }else{
                alert("Los valores deben ser positivos.");
                limpiar();
            }
        }
    }else{
        alert("No puede quedar los espacios en blanco.");
        limpiar();
    }
})

reiniciar.addEventListener('click', ()=>{
    resultado.textContent = "";
    resultado.style.backgroundColor = "#fff";
    aguja.style.rotate = "-90deg";
    peso.value = "";
    altura.value = "";
})

function limpiar(){
    resultado.textContent = "";
    resultado.style.backgroundColor = "#fff";
    aguja.style.rotate = "-90deg";
    peso.value = "";
    altura.value = "";
}
