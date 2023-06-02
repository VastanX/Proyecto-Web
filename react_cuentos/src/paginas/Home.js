
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
                <a href="info.html">
                  <button>Información</button>
                </a>
              </ul>
            </div>
          </div>
          <div className="col">
            <ul>
              <a href="contacto.html">
                <button>Contacto</button>
              </a>
            </ul>
          </div>
          <div className="col">
            <ul>
              <a href="login.html">
                <button>Iniciar sesión</button>
              </a>
            </ul>
          </div>
          <div className="col">
            <ul>
              <a href="registro.html">
                <button>Registrarse</button>
              </a>
            </ul>
          </div>
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
              <a href="cuento2.html">
                <button style={{ marginTop: "20px" }}>Ver detalles</button>
              </a>
            </figure>
          </div>
          <div className="col">
            <figure className="cuento">
              <img src={c3} alt="Imagen del cuento" className="cuadro" />
              <figcaption>
                Estos cerditos siempre eran perseguidos por un lobo que se los quería comer. Para escapar de este lobo, los cerditos decidieron hacerse una casa.
              </figcaption>
              <a href="cuento3.html">
                <button>Ver detalles</button>
              </a>
            </figure>
          </div>
          <div className="col">
            <figure className="cuento">
              <img src={c4} alt="Imagen del cuento" className="cuadro" />
              <figcaption>
                Un cisne que nace en un corral de patos. Ridiculizado por ser diferente, hasta que al fin crece y se convierte en la más hermosa y admirada criatura.
              </figcaption>
              <a href="cuento4.html">
                <button>Ver detalles</button>
              </a>
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
              <a href="cuento1.html">
                <button style={{ marginTop: "5px" }}>Ver detalles</button>
              </a>
            </figure>
          </div>
          <div className="col">
            <figure className="cuento">
              <img src={c6} alt="Imagen del cuento" className="cuadro" />
              <figcaption>
              Conejo pinta y esconde los huevos de chocolate para que los niños y las niñas los encuentren. Este año, nuestro protagonista tiene un pequeño problema...
              </figcaption>
              <a href="cuento2.html">
                <button style={{ marginTop: "20px" }}>Ver detalles</button>
              </a>
            </figure>
          </div>
          <div className="col">
            <figure className="cuento">
              <img src={c7} alt="Imagen del cuento" className="cuadro" />
              <figcaption>
              Un muñeco de madera que va atravesando diferentes pruebas en las que tiene que decidir entre el bien y el mal, y que finalmente se convierte en un niño de carne y hueso.
              </figcaption>
              <a href="cuento3.html">
                <button>Ver detalles</button>
              </a>
            </figure>
          </div>
          <div className="col">
            <figure className="cuento">
              <img src={c8} alt="Imagen del cuento" className="cuadro" />
              <figcaption>
              Una princesa bonita, encantadora, dulce y adolescente llamada Blancanieves conoce a un grupo de siete enanitos cuando huye de su malvada madrastra
              </figcaption>
              <a href="cuento4.html">
                <button>Ver detalles</button>
</a>
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
              <a href="cuento1.html">
                <button style={{ marginTop: "5px" }}>Ver detalles</button>
              </a>
            </figure>
          </div>
          <div className="col">
            <figure className="cuento">
              <img src={c10} alt="Imagen del cuento" className="cuadro" />
              <figcaption>
              Un niño y una niña se encuentran tremendamente aburridos dentro de su casa durante un día lluvioso hasta que el Gato Ensombrerado llega y crea un desastre.
              </figcaption>
              <a href="cuento2.html">
                <button style={{ marginTop: "20px" }}>Ver detalles</button>
              </a>
            </figure>
          </div>
          
    

 
</div>

             

     <footer>
      <a href="reporte.html"><button >Reportar error</button></a>
    </footer>

   



</div>
</>
);
}

export default Home;