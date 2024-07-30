let lista = [3,5,7,2,8,10,11,15,12,18];
let maiorNumero = lista[0]
let posicaoLista = 1;
while ( posicaoLista < lista.length) {
    if ( lista[posicaoLista] > maiorNumero) {
        maiorNumero = lista[posicaoLista]
    }
    posicaoLista++;
} 
console.log(maiorNumero)

