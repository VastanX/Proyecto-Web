$().ready(function () {
    $("#registro").validate({
        rules:{
            nombre:{
                required:true,
                maxlength: 30,
                lettersonly: true,
            },
            contrasena:{
                required:true,
            }
        },
        messages:{
            nombre:{
                required:"Este campo es requerido",
                maxlength:"Máximo 30 caracteres",
                lettersonly:"Solo letras"
            },
            contrasena:{
                required:"Este campo es requerido"
            }
        }
    })
});