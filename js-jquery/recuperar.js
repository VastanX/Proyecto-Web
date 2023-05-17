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
        },
        messages:{
            nombre:{
                required: "Este campo es requerido",
                maxlength: "Maximo 30 caracteres",
            },
            email:{
                required: "Este campo es requerido",
                email: "El correo no cumple el formato",
            },
            telefono:{
                required: "Este campo es requerido",
                digits: "Ingrese solo números",
                rangelength: "Debe ingresar 9 números",
            }
        }
    })

    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
      });
      var form = $( "#registro" );
      form.validate();
      $( "#prueba" ).click(function() {

        if(form.valid() == false){
            alert("¡¡Complete todos los campos!!");
        }else{
            alert("Completado con exito, se envío un link de recuperación a su correo.")
            window.location.href='index.html';
        }
      });
      
});
    
        