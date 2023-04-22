$().ready(function () {

    $("#registro").validate({
        rules:{
            nombre:{
                required: true,
                maxlength: 30,
            },
            email:{
                required: true,
                email:true,
            },
            telefono:{
                required: true,
                digits: true,
                rangelength:[9,9]
            },
            asunto:{
                required: true,
            },
            descripcion:{
                required: true,
            }
        },
        messages:{
            nombre:{
                required:"Este campo es requerido",
                maxlength:"Máximo 30 caracteres",
            },
            email:{
                required:"Este campo es requerido",
                email:"El correo no cumple el formato"
            },
            telefono:{
                required:"Este campo es requerido",
                digits:"Solo puede ingresar números",
                rangelength:"Deben ser 9 números"
            },
            asunto:{
                required:"Este campo es requerido"
            },
            descripcion:{
                required:"Este campo es requerido"
            }
        }
    })
});