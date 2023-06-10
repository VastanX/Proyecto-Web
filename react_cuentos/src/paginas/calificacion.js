import React, { useState } from 'react';
import Cabecera from './Cabecera';
import { Link } from 'react-router-dom';

const FormularioCalificacion = () => {
  const [rating, setRating] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [review, setReview] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!rating) {
      newErrors.rating = 'Por favor, selecciona una calificación.';
      isValid = false;
    }

    if (!recommendation) {
      newErrors.recommendation = 'Por favor, selecciona una opción de recomendación.';
      isValid = false;
    }

    if (!difficulty) {
      newErrors.difficulty = 'Por favor, selecciona una dificultad de lectura.';
      isValid = false;
    }

    if (!review) {
      newErrors.review = 'Por favor, escribe una reseña.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Realizar acción de envío del formulario
      alert('Calificado con éxito!');
    }
  };

  return (
    <div className="container">
      <Cabecera />

      <center>
        <form style={{ marginTop: '100px' }} onSubmit={handleFormSubmit}>
          <fieldset style={{ color: 'white' }} className="rating">
            <legend style={{ fontSize: '30px' }}>¿Cómo calificarías el libro?</legend>

            <input
              type="radio"
              id="rate1"
              name="rating"
              value="1"
              checked={rating === '1'}
              onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="rate1">Muy malo</label>

            <input
              type="radio"
              id="rate2"
              name="rating"
              value="2"
              checked={rating === '2'}
              onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="rate2">Malo</label>

            <input
              type="radio"
              id="rate3"
              name="rating"
              value="3"
              checked={rating === '3'}
              onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="rate3">Ni bueno ni malo</label>

            <input
              type="radio"
              id="rate4"
              name="rating"
              value="4"
              checked={rating === '4'}
              onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="rate4">Bueno</label>

            <input
              type="radio"
              id="rate5"
              name="rating"
              value="5"
              checked={rating === '5'}
              onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="rate5">Muy bueno</label>

            {errors.rating && <p className="error-message">{errors.rating}</p>}
          </fieldset>

          <fieldset style={{ color: 'white' }} className="rating">
            <legend style={{ fontSize: '30px' }}>¿Recomendarías este libro a otras personas?</legend>

            <input
              type="radio"
              id="recommendationYes"
              name="recommendation"
              value="yes"
              checked={recommendation === 'yes'}
              onChange={(e) => setRecommendation(e.target.value)}
            />
            <label htmlFor="recommendationYes">Sí</label>

            <input
              type="radio"
              id="recommendationNo"
              name="recommendation"
              value="no"
              checked={recommendation === 'no'}
              onChange={(e) => setRecommendation(e.target.value)}
            />
            <label htmlFor="recommendationNo">No</label>

            <input
              type="radio"
              id="recommendationUnknown"
              name="recommendation"
              value="unknown"
              checked={recommendation === 'unknown'}
              onChange={(e) => setRecommendation(e.target.value)}
            />
            <label htmlFor="recommendationUnknown">No lo sé</label>

            {errors.recommendation && <p className="error-message">{errors.recommendation}</p>}
          </fieldset>

          <fieldset style={{ color: 'white' }} className="rating">
            <legend style={{ fontSize: '30px' }}>¿Qué dificultad le darías a la lectura de este cuento?</legend>

            <input
              type="radio"
              id="difficultyBeginner"
              name="difficulty"
              value="beginner"
              checked={difficulty === 'beginner'}
              onChange={(e) => setDifficulty(e.target.value)}
            />
            <label htmlFor="difficultyBeginner">Para principiantes</label>

            <input
              type="radio"
              id="difficultyEasy"
              name="difficulty"
              value="easy"
              checked={difficulty === 'easy'}
              onChange={(e) => setDifficulty(e.target.value)}
            />
            <label htmlFor="difficultyEasy">Fácil de leer</label>

            <input
              type="radio"
              id="difficultyNormal"
              name="difficulty"
              value="normal"
              checked={difficulty === 'normal'}
              onChange={(e) => setDifficulty(e.target.value)}
            />
            <label htmlFor="difficultyNormal">Normal</label>

            <input
              type="radio"
              id="difficultySkilledReaders"
              name="difficulty"
              value="skilled-readers"
              checked={difficulty === 'skilled-readers'}
              onChange={(e) => setDifficulty(e.target.value)}
            />
            <label htmlFor="difficultySkilledReaders">Para lectores hábiles</label>

            <input
              type="radio"
              id="difficultyAdvanced"
              name="difficulty"
              value="advanced"
              checked={difficulty === 'advanced'}
              onChange={(e) => setDifficulty(e.target.value)}
            />
            <label htmlFor="difficultyAdvanced">Nivel avanzado</label>

            {errors.difficulty && <p className="error-message">{errors.difficulty}</p>}
          </fieldset>

          <fieldset style={{ color: 'white' }}>
            <legend style={{ fontSize: '30px' }}>Escribe una pequeña reseña sobre el libro</legend>

            <input
              style={{ width: '600px', height: '100px' }}
              type="text"
              id="resenia"
              name="resenia"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />

            {errors.review && <p className="error-message">{errors.review}</p>}
          </fieldset>

          <button type="submit">Enviar respuesta</button>
        </form>
      </center>

        <div className="col">
            <Link to="/Reporte"><button style={{ color: 'crimson' }}>Reportar error</button></Link>
        </div>

    </div>
  );
};

export default FormularioCalificacion;
