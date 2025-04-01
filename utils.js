export function compraLibro(nome,genere,prezzo){
    ClienteLibreria.libriAcquistati.push({nome:nome,genere:genere,prezzo:prezzo});
}