class Computer {
    private cpucore:number;
    private ram:number;
    private fans:number;

 constructor(cpucore:number, ram:number, fans:number){
    this.cpucore = cpucore;
    this.ram = ram;
    this.fans = fans;
    
   }
   //change private values
   mudarCpu(cpucore:number){
     this.cpucore = cpucore;
   }
   mudarRam(ram:number){
     this.ram = ram;
   }
   mudarFans(fans:number){
     this.fans = fans;
   }
  //end private values 
}
const ryzen = new Computer(8, 16, 3);
ryzen.mudarCpu(12);
ryzen.mudarRam(32);
ryzen.mudarFans(5);
console.log(ryzen);
