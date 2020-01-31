export class mobile {

    name:string;
    model:string;
    trademark:string;
    sdSize:number;
    color:string;
    is5G:boolean;
    cameraNumber:number;
    price:number;

    constructor(name:string,model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number, price:number){

        this.name = name
        this.model = model
        this.trademark = trademark
        this.sdSize = sdSize
        this.color = color
        this.is5G = is5G
        this.cameraNumber = cameraNumber
        this.price = price
    }
mostrarAtributos(){

    console.log("El nombres es " + this.name + "\n" + "El modelos es " + this.model + "\n" + "La marca es " + this.trademark + "\n" + "Capacidad de SD es: " + this.sdSize + "\n" + "El color es: " + this.color + "\n" + "Tiene 5G: " + this.is5G + "\n" + "Número de cámaras: " + this.cameraNumber + "\n" + "Su precio es: " + this.price)

}
}