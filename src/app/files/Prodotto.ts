class Prodotto{

    constructor(private id:number, private nome:string, private ingredienti:string[]){

    }

    getId(){
        return this.id;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome:string){
        this.nome = nome;
    }

    getIngredienti(){
        return this.ingredienti;
    }

    setIngredienti(ingredienti:string[]){
        this.ingredienti = ingredienti;
    }

}