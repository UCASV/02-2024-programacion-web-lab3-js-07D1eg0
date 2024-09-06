const searchNumber = (buscado, c) => {

    let encontrado = 0;

    buscado.forEach(number => {
        if (number === c) {
            encontrado = number;
            alert('El numero ' + c + ' esta en el arreglo');
            return;
        }
    });

    return encontrado;
}

const requestNumber = () => {
    return parseInt(prompt("Ingresa el número a buscar: "));
}

const main = () => {
    let buscado = [4, 9, 3, 1, 10, 254];
    const c = requestNumber();

    const resultado = searchNumber(buscado, c)

    if (resultado) {
        searchNumber(buscado, c)
        return;
    }else{
        alert('No se encontro')
    }

}

main()
