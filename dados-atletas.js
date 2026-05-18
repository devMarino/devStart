class Atleta {
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome || 'não informado'
        this.idade = idade || 'não informado'
        this.peso = peso || 'não informado'
        this.altura = altura || 'não informado'
        this.notas = notas || 'não informado'
        this.categoria = this.calculaCategoria(idade) || 'não informado'
        this.imcCalculado = this.calculaIMC(peso,altura) || 'não informado'
        this.mediaValida = this.calculaMediaValida(notas) || 'não informado'
    }

    calculaCategoria(){
        if (this.idade  >= 9 && this.idade <= 11){
        this.categoria = "Infantil"
        } else if (this.idade >=12 && this.idade <= 13 ) {
            this.categoria = "Juvenil"
        } else if (this.idade >= 14 && this.idade <= 15){
            this.categoria = "Intermediário"
        } else if (this.idade >= 16 && this.idade <= 30){
            this.categoria = "Adulto"
        } else {
            this.categoria = "Sem categoria"
        }
        return this.categoria
    }
    //calcula peso
    calculaIMC(peso,altura){
        this.imcCalculado = peso / altura**2
        return this.imcCalculado
    }
    // calcula media valida
    calculaMediaValida(notas){
        //notas é o array original
        const notasCopia = [...notas]
        // ordena notas
        let notasOrdenadas = notasCopia.sort(function(a,b){
            return a - b
        })
        //removendo maior e menor nota para média válida
        let notasValida = notasOrdenadas.slice(1,-1)
        //soma todas as notas
        let somaTotal = notasValida.reduce(function(acumulador,atual){
            return acumulador + atual
        })
        // calcula média
        this.mediaValida = somaTotal / notasValida.length
        return this.mediaValida
    }
    // método de retornos
     //retorna peso
    obtemPesoAtleta(){
        return this.peso
    }
    // retorna imc
    obtemIMC(){
        return this.imcCalculado
    }
    // retorna a media
    obtemMediaValida(){
        return this.mediaValida
    }
    //retorna nome d atleta
    obtemNomeAtleta(){
        return this.nome
    }
    // retorna idade do atleta
    obtemIdadeAtleta(){
        return this.idade
    }
    // retorna categoria
    obtemCategoria(){
        return this.categoria
    }
    // retorna nota original
    obtemNotasAtleta(){
        return this.notas
    }
    obtemAlturaAtleta(){
        return this.altura
    }
}
const atleta = new Atleta("Cesar Abascal",30,80,1.70,[10,9.34,8.42,10,7.88])
//saída
console.log(`
    Nome: ${atleta.obtemNomeAtleta()}
    Idade: ${atleta.obtemIdadeAtleta()}
    Peso: ${atleta.obtemPesoAtleta()}
    Altura: ${atleta.obtemAlturaAtleta()}
    Notas: ${atleta.obtemNotasAtleta()}
    Categoria: ${atleta.obtemCategoria()}
    IMC: ${atleta.obtemIMC()}
    Média válida: ${atleta.obtemMediaValida()}   
`)

//categoria:
//     Infantil: 9 a 11 anos
//     Juvenil: 12 e 13 anos
//     Intermediário: 14 e 15 anos
//     Adulto: 16 a 30 anos
//     Sem categoria: demais idades
