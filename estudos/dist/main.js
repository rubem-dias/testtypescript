var Carro = /** @class */ (function () {
    function Carro(placa, chassi, uf, kilometragem) {
        this.chassi = chassi;
        this.placa = placa;
        this.uf = uf;
        this.kilometragem = kilometragem;
    }
    Carro.prototype.setChassi = function (chassi) {
        this.chassi = chassi;
    };
    Carro.prototype.getChassi = function () { return this.chassi; };
    Carro.prototype.setPlaca = function (placa) {
        if (placa.charAt(0) != 'A')
            throw new Error("you cannot change plate to a different UF");
        this.placa = placa;
    };
    Carro.prototype.getPlaca = function () { return this.placa; };
    Carro.prototype.getKilometragem = function () {
        return this.kilometragem;
    };
    Carro.prototype.setKilometragem = function (kilometragem) {
        this.kilometragem = kilometragem;
    };
    return Carro;
}());
var palio = new Carro("a123", "dsadsa12321321", "SP", 1232132132131);
palio.setPlaca("A123");
console.log(palio.getPlaca(), palio.getKilometragem());
