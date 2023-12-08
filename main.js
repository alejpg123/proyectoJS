let mensaje = "";

let intereses = 1.15;

let saldo = prompt("Bienvenido al simulador de préstamo del MichiBank. Cuánto dinero quiere solicitar?");

if(saldo < 50000000){
for (let i = 1; i <= 12; i++) {
    saldo = (saldo * intereses).toFixed(2);
    mensaje += `
    Monto total a pagar: $${saldo} 
    Cuotas: ${i} cuotas. 
    Valor de cada cuota: $${(saldo / i).toFixed(2)}
    `;
}
}
else{
    alert(`El dinero que esta pidiendo supera el máximo permitido.`)
}

alert(mensaje);
