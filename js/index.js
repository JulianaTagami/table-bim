var titulo = document.querySelector('.titulo');
titulo.textContent = "Table BMI";

var paciente = document.querySelector("#one");

var tdPeso = paciente.querySelector(".weight");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".height");
var altura = tdAltura.textContent;

var tdBmi = paciente.querySelector(".bmi");

var bmi = peso / (altura * altura) ;

tdBmi.textContent = bmi


