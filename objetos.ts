import {mobile} from "./clasemobile"

let mobile1:mobile;
mobile1 = new mobile("Nokia", "3210","Nokia Corporation", 128, "blue", false, 1, 60.0,)
let mobile2:mobile;
mobile2 = new mobile("¡Phone", "3G","Apple",128, "white", true, 2, 180)
let mobile3:mobile
mobile3 = new mobile("Samsung", "Galaxy 10", "Samsung", 128, "black", true, 2, 128)

mobile1.cameraNumber = 4
mobile1.is5G = true

mobile1.mostrarAtributos()
mobile2.mostrarAtributos()
mobile3.mostrarAtributos()
