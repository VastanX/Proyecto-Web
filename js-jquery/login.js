$().ready(function () {

    $("#registro").validate({
        rules:{
            nombre:{
                required: true,
                maxlength: 30,
            },
            contrasena:{
                required: true, 
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
            recontrasena:{
                equalTo: contrasena,
                required: true,
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
            contrasena:{
                required:"Este campo es requerido",
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
            recontrasena:{
                required:"Este campo es requerido",
                equalTo:"Las contraseñas no coinciden"
            },
            asunto:{
                required:"Este campo es requerido"
            },
            descripcion:{
                required: true,
            }
        }
    })

    $("#botonRecuperar").click(function(){
        window.location.href='recuperarClave.html';
     })

});