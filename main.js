function valueButton(e){
    calculatorForm.screen.value += e.value;
}
function Clear(){
    calculatorForm.screen.value = "";
}
function Calcu(){
    calculatorForm.screen.value = eval(calculatorForm.screen.value);
}

