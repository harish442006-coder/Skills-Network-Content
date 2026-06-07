let amount1,amount2,amount3;
function calculateAmount(){
    amount1=parseFloat(document.getElementById('grocery1').value);
    amount2=parseFloat(document.getElementById('grocery2').value);
    amount3=parseFloat(document.getElementById('grocery3').value);
    let sum=(amount1+amount2+amount3);
    document.getElementById('result').innerText=`The Total amount is:$ ${sum}`;
}