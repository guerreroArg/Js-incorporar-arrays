alert("Test de alcoholemia");

class Test {
    constructor(bebida, cantidad, conductor) {
        this.bebida = bebida;
        this.cantidad = cantidad;
        this.conductor = conductor;
    }
}

    let enter = true;

    const eleccBebida = (b) => {

    let elecc = parseInt(prompt("Ingrese la bebida ingerida: /n 1. Vino 2. Cerveza 3. Fernet 4. Vodka 5. Manaos 6. Jugo"))

    switch (elecc) {
        case 1:
            b.bebida = "Vino";  
            break;
        case 2:
            b.bebida = "Cerveza";
            break;
        case 3:
            b.bebida = "Fernet";
            break;
        case 4:
            b.bebida = "Vodka";
            break;
        case 5:
            b.bebida = "Manaos";
            break;
        case 6:
            b.bebida = "Jugo";
            break;
        default:
            eleccBebida(b);
            break;
    }
    return b.bebida;
}

const eleccCant = (c) => {
    let elecc = parseInt(prompt("Cuantos vasos bebio? :\n 1. 1 2. 2 3. 3 4. 4 5. 5"));
    
    switch (elecc) {
        case 1:
            c.cantidad = "1";
            alert ("Usted no ha bebido demasiado deberia ir con cuidado")
            break;
        case 2:
            c.cantidad = "2";
            alert ("Usted ha bebido poco pero vaya con mucho cuidado")
            break;
        case 3:
            c.cantidad = "3";
            alert ("Usted ha bebido suficente, pero que maneje su amigo")
            break;
        case 4:
            c.cantidad = "4";
           alert ("Usted tiene aguante pero NO MANEJE!!!!")
            break;
        case 5:
            c.cantidad = "5";
            alert ("Usted deberia estar inconciente, no piense en manejar")
            break;
        default: 
            eleccCant(c);
            break;
    }
    return c.cantidad;
}

const objeto = [];

while (enter) { 
    if (confirm("Crea conductor")) {
        objeto.push(new Test(prompt("Ingrese el nombre del conductor"),eleccBebida(Test),eleccCant(Test)));
    } else { 
    enter = false;
    }
}
for (let x = 0; x < objeto.length; x++) {
    alert(`Conductor cargado:\n Conductor ${x + 1}:Bebida elegida ${x + 1}: ${objeto[x].bebida}\n Cantidad ingerida ${x + 1}: ${objeto[x].cantidad}`);
}
console.log(objeto)



