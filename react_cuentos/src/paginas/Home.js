import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import "../App.css";

import c1 from '../fotos de cuentos/c1.png';
import c2 from '../fotos de cuentos/c2.png';
import c3 from '../fotos de cuentos/c3.png';
import c4 from '../fotos de cuentos/c4.png';
import c5 from '../fotos de cuentos/c5.png';
import c6 from '../fotos de cuentos/c6.png';
import c7 from '../fotos de cuentos/c7.png';
import c8 from '../fotos de cuentos/c8.png';
import c9 from '../fotos de cuentos/c9.png';
import c10 from '../fotos de cuentos/c10.png';



function Home() {

  const isAdmin = localStorage.getItem('adminToken'); // Verifica si hay un token de administrador almacenado

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Elimina el token de administrador al cerrar sesión
    alert('Cierre de sesión exitoso');
    window.location.reload(); // Refresca la página
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <h1>Cuentos</h1>
            </div>
          </div>
          <div className="col">
            <div className="cabecera">
              <ul>
                <Link to="/info">
                  <button>Información</button>
                </Link> 
              </ul>
            </div>
          </div>
          <div className="col">
            <ul>
              <Link to="/contacto">
                <button>Contacto</button>
              </Link>
            </ul>
          </div>
          <div className="col">
            <ul>
              <Link to="/login">
                <button>Iniciar sesión</button>
              </Link>
            </ul>
          </div>
          <div className="col">
            <ul>
              <Link to="/registro">
                <button>Registrarse</button>
              </Link>
            </ul>
          </div>
          {isAdmin ? (
            <div className="col">
              <Link to="/lista">
                    <button>ADMIN</button>
                  </Link>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <figure className="cuento">
              <img src={c1} alt="Imagen del cuento" className="cuadro" />
              <figcaption>
                Se trata sobre la ayuda de la familia y los amigos. Ella le lleva comida a su abuela y un cazador los ayuda a ellos. El cazador salva a Caperucita Roja y a su abuelita de las garras del lobo feroz.
              </figcaption>
              <Link to="/cuento1">
                <button style={{ marginTop: "5px" }}>Ver detalles</button>
              </Link> 
            </figure>
          </div>
          <div className="col">
            <figure className="cuento">
              <img src={c2} alt="Imagen del cuento" className="cuadro" />
              <figcaption>
                Un gato que, a base de astucia y engaños, consigue la fortuna y la mano de una princesa para su amo, totalmente pobre.
              </figcaption>
              <Link to="/cuento2">
                <button style={{ marginTop: "5px" }}>Ver detalles</button>
              </Link> 
            </figure>
          </div>
          <div className="col">
            <figure className="cuento">
              <img src={c3} alt="Imagen del cuento" className="cuadro" />
              <figcaption>
                Estos cerditos siempre eran perseguidos por un lobo que se los quería comer. Para escapar de este lobo, los cerditos decidieron hacerse una casa.
              </figcaption>
              <Link to="/cuento3">
                <button style={{ marginTop: "5px" }}>Ver detalles</button>
              </Link> 
            </figure>
          </div>
          <div className="col">
            <figure className="cuento">
              <img src={c4} alt="Imagen del cuento" className="cuadro" />
              <figcaption>
                Un cisne que nace en un corral de patos. Ridiculizado por ser diferente, hasta que al fin crece y se convierte en la más hermosa y admirada criatura.
              </figcaption>
              <Link to="/cuento4">
                <button style={{ marginTop: "5px" }}>Ver detalles</button>
              </Link> 
            </figure>
  </div>
</div>

<div className="row">
  <div className="col">
    <figure className="cuento">
      <img src={c5} alt="Imagen del cuento" className="cuadro" />
      <figcaption>
      Dos hermanos hijos de un leñador, viven con su padre y su madrastra cerca de un bosque, como eran muy pobres, a la madrastra se le ocurrió la idea de llevar a los niños a la parte más profunda del bosque y dejarlos allí abandonados.
      </figcaption>
      <Link to="/cuento5">
        <button style={{ marginTop: "5px" }}>Ver detalles</button>
      </Link> 
    </figure>
  </div>
  <div className="col">
    <figure className="cuento">
      <img src={c6} alt="Imagen del cuento" className="cuadro" />
      <figcaption>
      Conejo pinta y esconde los huevos de chocolate para que los niños y las niñas los encuentren. Este año, nuestro protagonista tiene un pequeño problema...
      </figcaption>
      <Link to="/cuento6">
        <button style={{ marginTop: "5px" }}>Ver detalles</button>
      </Link> 
    </figure>
  </div>
  <div className="col">
    <figure className="cuento">
      <img src={c7} alt="Imagen del cuento" className="cuadro" />
      <figcaption>
      Un muñeco de madera que va atravesando diferentes pruebas en las que tiene que decidir entre el bien y el mal, y que finalmente se convierte en un niño de carne y hueso.
      </figcaption>
      <Link to="/cuento7">
        <button style={{ marginTop: "5px" }}>Ver detalles</button>
      </Link> 
    </figure>
  </div>
  <div className="col">
    <figure className="cuento">
      <img src={c8} alt="Imagen del cuento" className="cuadro" />
      <figcaption>
      Una princesa bonita, encantadora, dulce y adolescente llamada Blancanieves conoce a un grupo de siete enanitos cuando huye de su malvada madrastra
      </figcaption>
      <Link to="/cuento8">
        <button style={{ marginTop: "5px" }}>Ver detalles</button>
      </Link> 
    </figure>
</div>

 
</div>

<div className="row">
  <div className="col">
    <figure className="cuento">
      <img src={c9} alt="Imagen del cuento" className="cuadro" />
      <figcaption>
      Este cuento enseña a los niños que a pesar de las circunstancias y adversidades (el soldadito tiene una sola pierna, termina en una alcantarilla, se lo traga un pez, etc.), uno puede ser capaz de conseguir lo que se proponga si pone el suficiente esfuerzo y empeño.
      </figcaption>
      <Link to="/cuento9">
        <button style={{ marginTop: "5px" }}>Ver detalles</button>
      </Link> 
    </figure>
  </div>
  <div className="col">
    <figure className="cuento">
      <img src={c10} alt="Imagen del cuento" className="cuadro" />
      <figcaption>
      Un niño y una niña se encuentran tremendamente aburridos dentro de su casa durante un día lluvioso hasta que el Gato Ensombrerado llega y crea un desastre.
      </figcaption>
      <Link to="/cuento10">
        <button style={{ marginTop: "5px" }}>Ver detalles</button>
      </Link> 
    </figure>
  </div>
</div>

             

<div className="col">
  <Link to="/Reporte"><button style={{ color: 'crimson' }}>Reportar error</button></Link>
</div>

   



</div>
</>
);
}

export default Home;