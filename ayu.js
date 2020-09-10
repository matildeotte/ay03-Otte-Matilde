$(document).ready(function(){
    $("#boton").click(function(){
        var idboton = $(this).attr("id");
        $("#texto1").text("el boton funciona");
    });
    $("#texto1").mouseenter(function(){
        $("#texto1").css("background-color","red"); 
    });
    $("#boton2").click(function(){
        var idboton2 = $(this).attr("id");
        var mostrar = true;
        if (mostrar == true){
            mostar == false;
            $("#texto2").mouseenter.show();
        }
        else {
            mostrar == true
            $("#texto2").mouseenter.hide();
        }
    });
   
})


