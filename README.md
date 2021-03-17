# Javascript - Conceitos

**Classes e Funções**

Definindo um objeto: 

    const livro = {
	    nome: 'React Native', 
	    editora: 'Casa do Código', 
	    paginas: 185, 
	    anunciar: function(){
		    console.log(´A Alura indica o livro ${this.nome} !´)
		}
	 }
	 livro.anunciar()


**Classe**

Classe no Javascript também são funções

    class livro = {
	    constructor(nome, editora, paginas){
	    this.nome = nome
	    this.editora = editora
	    this.paginas = paginas
	    }
	    anunciarTitulo(){
	    console.log(´Título: ${this.nome}´)
	    }
	    descreverTitulo(){
	    console.log(´${this.nome} é um livro da editora ${this.editora} e tem ${paginas} páginas´)
	    } 
	  }
