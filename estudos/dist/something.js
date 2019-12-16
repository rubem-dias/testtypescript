var Computer = /** @class */ (function () {
    function Computer(cpucore, ram, fans) {
        this.cpucore = cpucore;
        this.ram = ram;
        this.fans = fans;
    }
    //change private values
    Computer.prototype.mudarCpu = function (cpucore) {
        this.cpucore = cpucore;
    };
    Computer.prototype.mudarRam = function (ram) {
        this.ram = ram;
    };
    Computer.prototype.mudarFans = function (fans) {
        this.fans = fans;
    };
    return Computer;
}());
var ryzen = new Computer(8, 16, 3);
ryzen.mudarCpu(12);
ryzen.mudarRam(32);
ryzen.mudarFans(5);
console.log(ryzen);
