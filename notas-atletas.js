let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

// matriz nova
let novoAtletas = []
// for que passa o array
for (let i = 0; i < atletas.length; i++){

    // pega o nome dos atletas no array
    let nome = atletas[i].nome

    // ordena as notas 
    let notasOrdenadas = atletas[i].notas.sort(function(a,b){
        return a - b
    })
    console.log("notas Ordenadas", notasOrdenadas)
    // tira menor e maior numero 
    let notasComSlice = notasOrdenadas.slice(1,-1)

    console.log("notas com slice:",notasComSlice)

    // soma as notas para dps obter a media
    let totalNota = notasComSlice.reduce(function(acumulador,total){
        return acumulador += total
    })
    let media = totalNota / notasComSlice.length
    // novo objeto 
    let atletaFinal = {}
    atletaFinal["notasValida"] = media
    atletaFinal["nome"] = nome
    atletaFinal["notasObtida"] = atletas[i].notas.sort()
    novoAtletas.push(atletaFinal)
}

novoAtletas.forEach(function(atleta){
    console.log(`
    Atleta: ${atleta.nome}    
    Notas Obtidas: ${atleta.notasObtida}    
    Média Válida: ${atleta.notasValida}    
        `)
})