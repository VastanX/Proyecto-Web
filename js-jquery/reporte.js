$(document).ready(function () {
    $("#registro").validate({
        rules:{
            problema:{
                required: true,
                maxlength: 100,
            },
            descripcion:{
                required: true
            }
        },
        messages:{
            problema:{
                required: "Este campo es requerido",
                maxlength: "Maximo 100 caracteres",
            },
            descripcion:{
                required: "Este campo es requerido",
            }
        }
    })
});