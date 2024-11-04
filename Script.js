function somaStrings(string){
let contador = 0;
for (var i =0; i<string.length; i++){
    if  (string[i] !== " "){
        contador++;
    }
}
return contador
}


function palindromo(string) {
    
    string = string.replace(/\s+/g, '').toLowerCase();
    
    let inicio = 0;
    let final = string.length - 1;

    while (inicio < final) {
        if (string[comeco] !== string[final]) {
            return false;
        }
        inicio++;
        final--;
    }
    return true;
}


function ContarVogaConso9(string) {
    let vogal = 0;
    let consoante // Substitui todas as ocorrências de charAntigo por charNovo= 0;

    string = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        
        
        if ("aeiou".includes(char)) {
            vogal++;
        } 
        
        else if (char >= 'a' && char <= 'z') {
            consoante++;
        }
    }

    return {
        vogais: vogal,
        consoantes: consoante
    };
}


function substituirCaracter(string, charAntigo, charNovo) {
    let novaString = "";
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === charAntigo) {
            novaString += charNovo;
        } else {
            novaString += string[i];
        }
    }

    return novaString;
}



function somarElementosMatriz(matriz) {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }

    return soma;
}

function buscarNumeroNaMatriz(matriz, numero) {
        for (let i = 0; i < matriz.length; i++) {
                for (let j = 0; j < matriz[i].length; j++) {
                            if (matriz[i][j] === numero) {
                                            return { encontrado: true, posicao: [i, j] };
                                                        }
                                                                }
                                                                    }
                                                                     return { encontrado: false };
                                                                                                                                        

}

function imprimirDiagonalPrincipal(matriz) {
        if (matriz.length !== matriz[0].length) {
                console.log("A matriz não é quadrada.");
                        return;
                            }

                                const diagonalPrincipal = [];
                                    for (let i = 0; i < matriz.length; i++) {
                                            diagonalPrincipal.push(matriz[i][i]);
                                                }

                                                    console.log("Diagonal principal:", diagonalPrincipal);
                                                    }

imprimirDiagonalPrincipal(matriz);
