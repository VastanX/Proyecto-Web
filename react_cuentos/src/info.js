import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function Info() {
    return (
      <>
      <div class="container">
      <div class="row">
        <div class="col">
          <div class="cabecera">
            <ul><a href="index.html"><button>Volver a inicio</button></a></ul>
          </div>
        </div>
        <div class="col">
          <div class="cabecera">
            <ul><a href="info.html"><button>Información</button></a></ul>
          </div>
        </div>
        <div class="col">
          <ul><a href="login.html"><button>Iniciar sesión</button></a></ul>
        </div>
        <div class="col">
          <ul><a href="registro.html"><button>Registrarse</button></a></ul>
        </div>
        <div class="col">
          <ul><a href="contacto.html"><button>Contacto</button></a></ul>
        </div>
      </div>
    </div>
    
    <div class="informa">

      <center><p class="Info">¿Quienes somos?</p></center>

      <li>
        <center><img src="logoU.png" class="logo" style="width: 50%;"></img></center>
      </li>

      <p>
        <center>
          <li class="texto_info">El proyecto creado por dos estudiantes de la Pontificia Universidad Católica de Valparaíso (PUCV) es una página web diseñada para ayudar a los niños a aprender a leer mediante la lectura de cuentos. La página incluye una colección de cuentos cortos adecuados para niños de diversas edades, desde preescolar hasta primaria.

            La página web tiene un diseño sencillo pero atractivo, que permite a los niños navegar fácilmente por la colección de cuentos. Los cuentos se organizan en diferentes categorías, como animales, aventuras, fantasía y amistad, lo que facilita la búsqueda de historias según los intereses de los niños.
            
            <br></br><br></br>Actualmente, el proyecto se encuentra en proceso de desarrollo, por lo que solo cuenta con la función básica de lectura de cuentos. Sin embargo, los estudiantes tienen planes de incluir actividades interactivas en el futuro para ayudar a los niños a mejorar su comprensión lectora. 
          </li>
        </center>
      </p>
      <center><p class="Info">¿Proposito del proyecto?</p></center>
      <p>
        <center><li class="texto_info">El objetivo principal de este proyecto es ayudar a los niños a aprender a leer, independientemente de su trasfondo social o económico. Es común que las aplicaciones de este tipo sean costosas y poco accesibles para algunas personas. Sin embargo, los creadores de este proyecto han buscado garantizar que su plataforma sea gratuita y de alta calidad para asegurar la enseñanza de la lectura a niños entre 5 y 7 años.    </li></center>
      </p>
    </div>

    <footer>
      <a href="reporte.html"><button style="color: crimson;">Reportar error</button></a>
    </footer>

    <script src="" async defer></script>
  
      </>
    );
}