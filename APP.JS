var getData = function(){

    var nombre = document.getElementById("Nombre").value;
    var fecha = document.getElementById("Fecha").value;
    var Mesa = document.getElementById("Mesa").value;
        if (nombre == "") {
        document.getElementById("Nombre").focus();
    } else {
        if (fecha == "") {
            document.getElementById("Nombre").focus();
             } else {
                console.log(nombre+ "" +fecha);
                document.getElementById("Nombre").value = ""
                document.getElementById("Fecha").value = ""
                document.getElementById("Nombre").focus()
                
                
                    }
            }
} 
if (Mesa == "mesa") {
    document.getElementById("mesa").focus();
} else {
    if (Mesa == " 1 ") {
        document.getElementById("ya esta ocupada").focus();
         } else {
            console.log(Mesa);
            
                }
        }

