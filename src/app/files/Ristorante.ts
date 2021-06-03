class Ristorante{

    constructor(private id:number, private nome:string, private cucina:string,
                private indirizzo:string, private menu:any[],
                private img1:string, private img2:string){

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

    getCucina(){
        return this.cucina;
    }

    setCucina(cucina:string){
        this.cucina = cucina;
    }

    getIndirizzo(){
        return this.indirizzo;
    }

    setIndirizzo(indirizzo:string){
        this.indirizzo = indirizzo;
    }

    getMenu(){
        return this.menu;
    }

    setMenu(menu:any){
        this.menu = menu;
    }

    getImg1(){
        return this.img1;
    }

    setImg1(img1:string){
        this.img1 = img1;
    }

    getImg2(){
        return this.img2;
    }

    setImg2(img2:string){
        this.img2 = img2;
    }

    
}