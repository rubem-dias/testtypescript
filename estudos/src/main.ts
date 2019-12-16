
interface CarroInterface{
    getKilometragem():number;
    setKilometragem(kilometragem:number);
}

class Carro implements CarroInterface{
    
    private placa:string;
    private chassi:string;
    private uf:string;
    private kilometragem:number;

    constructor(placa:string, chassi:string, uf:string, kilometragem:number){
        this.chassi = chassi;
        this.placa = placa;
        this.uf = uf;
        this.kilometragem = kilometragem;
    }

    setChassi(chassi:string){
        
        this.chassi = chassi;
    }

    getChassi(){ return this.chassi}

    setPlaca(placa:string){
        if(placa.charAt(0)!='A')
            throw new Error("you cannot change plate to a different UF")
            
        this.placa = placa
    }

    getPlaca(){ return this.placa;}

    getKilometragem(){
        return this.kilometragem;
    }
    setKilometragem(kilometragem:number){
        this.kilometragem = kilometragem;
    }

}

const palio = new Carro("a123", "dsadsa12321321", "SP", 1232132132131);
palio.setPlaca("A123")
console.log(palio.getPlaca(), palio.getKilometragem())







