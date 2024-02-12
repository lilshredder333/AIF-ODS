const ods = {
  pregunta: [
    {
      texto: "1. ¿Tu empresa apoya activamente a empresas lideradas por mujeres?",
      respuesta: [
        { texto: "a. Sí, nuestra empresa tiene políticas y programas específicos para apoyar a empresas lideradas por mujeres, promoviendo la igualdad de género.", "valor": 5 },
        { texto: "b. Estamos en proceso de explorar formas de apoyar a empresas lideradas por mujeres, pero aún no hemos implementado programas concretos al respecto.", "valor": 3 },
        { texto: "c. No, nuestra empresa no tiene políticas o programas específicos para apoyar a empresas lideradas por mujeres en este momento.", "valor": 2 },
        { texto: "d. No estoy seguro/a de la política de la empresa en este tema.", "valor": 0 }
      ]
    },
    {
      texto: "2. ¿Tu empresa promueve la igualdad de oportunidades laborales para hombres y mujeres?",
      respuesta: [
        { texto: "a. Sí, existe una política clara de igualdad de oportunidades.", "valor": 5 },
        { texto: "b. En su mayoría, pero hay áreas donde se podría mejorar.", "valor": 3 },
        { texto: "c. No hay una política formal, pero se fomenta la igualdad de manera informal.", "valor": 2 },
        { texto: "d. No, hay desigualdades evidentes en las oportunidades laborales.", "valor": 0 }
      ]
    },
    {
      texto: "3. ¿Qué medidas implementáis para promover la igualdad de género en las reuniones, eventos y charlas empresariales?",
      respuesta: [
        { texto: "a. Proporcionamos la participación en igualdad de género a todo el personal.", "valor": 5 },
        { texto: "b. Promovemos la participación equitativa de hombres y mujeres en ciertas reuniones y charlas.", "valor": 2 },
        { texto: "c. Se hace la exclusión de cierta parte del personal, debido a su género, en todas las reuniones y charlas.", "valor": 2 },
        { texto: "d. No tomamos medidas específicas.", "valor": 0 }
      ]
    },
    {
      texto: "4. ¿Realizan charlas y conferencias para asegurar la eliminación de estereotipos de género en el desarrollo diario de las actividades de vuestra empresa?",
      respuesta: [
        { texto: "a. No realizamos charlas o conferencias para asegurar la eliminación de estereotipos de género.", "valor": 0 },
        { texto: "b. No realizamos charlas o conferencias para asegurar la eliminación de estereotipos de género. Pero tenemos pensado hacerlas en un periodo corto de tiempo. Acortar el periodo de tiempo lo máximo posible.", "valor": 2 },
        { texto: "c. Realizamos una charla o conferencia al año para asegurar la eliminación de estereotipos de género.", "valor": 3 },
        { texto: "d. Realizamos más de una charla o conferencia al año para asegurar la eliminación de estereotipos de género.", "valor": 5 }
      ]
    },
    {
      texto: "5. ¿La información dada al cliente está sesgada por género?",
      respuesta: [
        { texto: "a. El trato para los clientes es formal y adecuado para cada uno de ellos, sin tener restricciones por el género y fomentando la importancia de la igualdad de género", "valor": 5 },
        { texto: "b. No se tienen en cuenta diferentes formalidades para el género de cada cliente", "valor": 3 },
        { texto: "c. Según el género no damos ningún tipo de información.", "valor": 2 },
        { texto: "d. Se prioriza un género exclusivo como cliente, buscando la exclusión y desinterés por el otro.", "valor": 0 }
      ]
    },
    {
      texto: "6. ¿Cuál es la proporción de mujeres que ejercen puestos directivos?",
      respuesta: [
        { texto: "a. Entre el 100 y el 80% de la dirección", "valor": 5 },
        { texto: "b. De un 50% a un 80%", "valor": 3 },
        { texto: "c. Entre un 20% y un 40%", "valor": 2 },
        { texto: "d. Entre un 0 hasta el 20%", "valor": 0 }
      ]
    },
    {
      texto: "7. ¿Cuál es la proyección para el aumento de mujeres en posiciones de liderazgo para los próximos 5 años?",
      respuesta: [
        { texto: "a. Menos del 5%", "valor": 0 },
        { texto: "b. Entre un 5% y un 20%", "valor": 2 },
        { texto: "c. Entre un 20% y un 50%", "valor": 3 },
        { texto: "d. Más de un 50%", "valor": 5 }
      ]
    },
    {
      texto: "8. ¿Qué porcentaje de hombres y mujeres dan servicios asistenciales relacionados con la higiene y la limpieza en su compañía?",
      respuesta: [
        { texto: "a. Menos del 50% de mujeres, no existe una distinción marcada entre estas labores para ambos géneros.", "valor": 5 },
        { texto: "b. El 50%, los cargos se encuentran equilibrados", "valor": 3 },
        { texto: "c. El 75% los desarrollan mujeres.", "valor": 2 },
        { texto: "d. El 100% de mujeres.", "valor": 0 }
      ]
    },
    {
      texto: "9. ¿Qué porcentaje de hombres y mujeres dan servicios asistenciales relacionados con el mantenimiento en su compañía?",
      respuesta: [
        { texto: "a. Menos del 50% de mujeres, no existe una distinción marcada entre estas labores para ambos géneros.", "valor": 0 },
        { texto: "b. El 50%, los cargos se encuentran equilibrados", "valor": 5 },
        { texto: "c. El 75% los desarrollan mujeres.", "valor": 3 },
        { texto: "d. El 100% de mujeres.", "valor": 2 }
      ]
    },
    {
      texto: "10. ¿Qué porcentaje de hombres y mujeres se dedican a la atención al cliente en tu empresa?",
      respuesta: [
        { texto: "a. Menos del 50% de mujeres, no existe una distinción marcada entre estas labores para ambos géneros.", "valor": 5 },
        { texto: "b. El 50%, los cargos se encuentran equilibrados", "valor": 3 },
        { texto: "c. El 75% los desarrollan mujeres.", "valor": 2 },
        { texto: "d. El 100% de mujeres.", "valor": 0 }
      ]
    },
    {
      texto: "11. ¿En nuestro equipo de marketing hay igualdad de género en cuanto a representación y oportunidades de liderazgo?",
      respuesta: [
        { texto: "a. Sí, hay igualdad de género en cuanto a representación y oportunidades de liderazgo.", "valor": 5 },
        { texto: "b. Hay igualdad de género en cuanto a representación, pero no en cuanto a oportunidades de liderazgo.", "valor": 3 },
        { texto: "c. Hay igualdad de género en cuanto a oportunidades de liderazgo, pero no en cuanto a representación.", "valor": 2 },
        { texto: "d. No hay igualdad de género en cuanto a representación ni a oportunidades de liderazgo.", "valor": 0 }
      ]
    },
    {
      texto: "12. ¿Se han llevado a cabo actividades de formación para aumentar la concienciación de la desigualdad presente en la prestación de determinados servicios?",
      respuesta: [
        { texto: "a. Sí, se han llevado a cabo prácticas fomentando la concienciación sobre la igualdad y fueron bien recibidas.", "valor": 3 },
        { texto: "b. Sí, pero no lo suficiente, las prácticas adoptadas fueron bien recibidas pero no vemos una aplicación real en la práctica", "valor": 3 },
        { texto: "c. Se ha intentado por parte de la empresa pero la propuesta no ha sido bien recibida por la plantilla.", "valor": 2 },
        { texto: "d. No se ha propuesto, ya que la mayoría de los trabajadores y trabajadoras no están cómodos cuando hay un intercambio de roles.", "valor": 0 }
      ]
    },
    {
      texto: "13. ¿Las imágenes publicitarias generadas por tu empresa reflejan roles de género tradicionales?",
      respuesta: [
        { texto: "a. No, nunca", "valor": 5 },
        { texto: "b. Sí, pero no nos habíamos fijado en ello", "valor": 2 },
        { texto: "c. Si, de manera intencionada.", "valor": 0 }
      ]
    },
    {
      texto: "14. ¿Crees que la desigualdad de género afecta al funcionamiento de la empresa?",
      respuesta: [
        { texto: "a. Sí, y por ello intentamos mejorar", "valor": 5 },
        { texto: "b. Sí, pero no sabemos qué hacer", "valor": 3 },
        { texto: "c. No, no lo sabía", "valor": 2 },
        { texto: "d. No, no lo tengo en cuenta", "valor": 0 }
      ]
    },
    {
      texto: "15. ¿Tu empresa incluye la atención postnatal para ambos géneros cómo derecho del trabajador y trabajadora?",
      respuesta: [
        { texto: "a. Sí, y tenemos actividades al respecto", "valor": 5 },
        { texto: "b. Sí, pero sólo tenemos actividades para mujeres", "valor": 3 },
        { texto: "c. No, no lo sabía", "valor": 2 },
        { texto: "d. No, no me interesa.", "valor": 0 }
      ]
    },
    {
      texto: "16. ¿Tu empresa fomenta la igualdad de género a través de la implementación de un lenguaje inclusivo en sus políticas y comunicaciones, considerando aspectos como la diversidad, el respeto y la equidad en la expresión verbal y escrita?",
      respuesta: [
        { texto: "a. Sí, el lenguaje inclusivo forma parte de la cultura de nuestra empresa", "valor": 5 },
        { texto: "b. Sí, aunque no tenemos claras las reglas del lenguaje inclusivo", "valor": 2 },
        { texto: "c. No, no me preocupa", "valor": 0 }
      ]
    },
    {
      texto: "17. ¿Ha adoptado su empresa alguna política de conciliación familiar y laboral?",
      respuesta: [
        { texto: "a. Sí, hemos adoptado diversas medidas incluidas en la responsabilidad social corporativa", "valor": 5 },
        { texto: "b. Sí, pero todavía trabajamos en mejorarlo", "valor": 3 },
        { texto: "c. No, pero lo estamos estudiando", "valor": 2 },
        { texto: "d. No, nos limitamos a adoptar las medidas recogidas en el estatuto de los trabajadores", "valor": 0 }
      ]
    },
    {
      texto: "18. ¿Tu empresa imparte el protocolo de prevención de riesgos psicosociales a los trabajadores y trabajadoras?",
      respuesta: [
        { texto: "a. Sí, hemos adoptado el protocolo de riesgos psicosociales", "valor": 5 },
        { texto: "b. Sí, pero todavía trabajamos en mejorarlo", "valor": 3 },
        { texto: "c. No, pero lo estamos estudiando", "valor": 2 },
        { texto: "d. No, no sabíamos de la necesidad de tener un protocolo de riesgos psicosociales.", "valor": 0 }
      ]
    },
    {
      texto: "19. ¿La empresa tiene establecido un canal de denuncias en caso de vulnerabilidad de la integridad física o psíquica de su personal?",
      respuesta: [
        { texto: "a. Si, hemos establecido un canal de denuncias.", "valor": 5 },
        { texto: "b. Si, pero no se ha puesto en práctica", "valor": 3 },
        { texto: "c. No, pero se está discutiendo", "valor": 2 },
        { texto: "d. No, no lo vemos necesario.", "valor": 0 }
      ]
    },
    {
      texto: "20. ¿La resolución del proceso del canal de denuncias se considera ágil y sencillo?",
      respuesta: [
        { texto: "a. Sí, desde el primer momento la persona afectada tiene la posibilidad de compartir con un representante su caso, aunque el procedimiento sea más extenso.", "valor": 5 },
        { texto: "b. Sí, en el plazo de una semana la empresa ya toma medidas al respecto.", "valor": 3 },
        { texto: "c. No existe canal de denuncia en nuestra empresa", "valor": 2 },
        { texto: "d. La respuesta al proceso depende del nivel de trabajo..", "valor": 0 }
      ]
    },
    {
      texto: "21. ¿La empresa dispone de algún recurso de atención psicológica para los empleados?",
      respuesta: [
        { texto: "a. Sí, tenemos un profesional en la empresa", "valor": 5 },
        { texto: "b. Sí, tenemos un convenio con un profesional externo.", "valor": 3 },
        { texto: "c. No nos lo habíamos planteado, pero creemos que sería necesario.", "valor": 2 },
        { texto: "d. No, no disponemos de este recurso ni lo dispondremos en un futuro.", "valor": 0 }
      ]
    },
    {
      texto: "22. ¿La empresa dispone de algún servicio de guardería para los empleados?",
      respuesta: [
        { texto: "a. Sí, tenemos una guardería en la empresa", "valor": 5 },
        { texto: "b. Sí, tenemos un convenio con una guardería cercana", "valor": 3 },
        { texto: "c. No nos lo habíamos planteado, pero creemos que sería necesario.", "valor": 2 },
        { texto: "d. No, no disponemos de este recurso ni lo dispondremos en un futuro.", "valor": 0 }
      ]
    },
    {
      texto: "23. ¿Para un mismo puesto de trabajo, se remunera igual a hombres y mujeres?",
      respuesta: [
        { texto: "a. Sí, se remunera según convenio.", "valor": 5 },
        { texto: "b. No, las mujeres están mejor remuneradas.", "valor": 0 },
        { texto: "c. No, los hombres están mejor remunerados.", "valor": 0 }
      ]
    },
    {
      texto: "24. ¿Existe conocimiento sobre el “techo de cristal”?",
      respuesta: [
        { texto: "a. Sí y por ello desarrollamos políticas y ofrecemos condiciones laborales que apacigüen este fenómeno.", "valor": 5 },
        { texto: "b. Sí pero no se ha desarrollado ningún protocolo para evitarlo.", "valor": 0 },
        { texto: "c. No tenemos conocimiento sobre ello.", "valor": 2 }
      ]
    },
    {
      texto: "25. ¿A la hora de despedir a un trabajador se tiene en cuenta el género?",
      respuesta: [
        { texto: "a. Si, se tienen más facilidades para prescindir de una mujer", "valor": 0 },
        { texto: "b. No, a la hora de tomar una decisión no se tiene en cuenta el sexo", "valor": 5 },
        { texto: "c. Si, es más fácil despedir a alguien si es hombre", "valor": 0 }
      ]
    },
    {
      texto: "26. Al adquirir un producto o servicio, ¿investiga si la empresa proveedora fomenta la igualdad de género?",
      respuesta: [
        { texto: "a. Sí, hacemos un estudio de la empresa para comprobar si fomentan la igualdad.", "valor": 5 },
        { texto: "b. No, pero planeamos en un futuro proceder a investigar a las empresas proveedoras, para contribuir de esta manera a la igualdad de género.", "valor": 2 },
        { texto: "c. No lo tenemos en cuenta.", "valor": 0 }
      ]
    },
    {
      texto: "27. ¿Qué medidas toma tu empresa para prevenir el mobbing por motivos de género?",
      respuesta: [
        { texto: "a. Si, tenemos un plan específico para prevenir el mobbing por motivos de géneros, conocidos por todos los empleados", "valor": 5 },
        { texto: "b. Sí, implementamos el plan preestablecido por la agenda 2030", "valor": 3 },
        { texto: "c. No, creemos innecesario establecer ningún plan anti mobbing de género", "valor": 0 }
      ]
    },
    {
      texto: "28. ¿Existen horarios de trabajos flexibles para todos en tu empresa?",
      respuesta: [
        { texto: "a. La jornada laboral está adaptada a las necesidades de los empleados", "valor": 5 },
        { texto: "b. La jornada laboral tiene una jornada con márgenes para entrada y salida", "valor": 3 },
        { texto: "c. No tenemos ninguna modalidad de horarios flexibles", "valor": 0 }
      ]
    },
    {
      texto: "29. ¿La empresa contrata y/o promueve a los trabajadores por talento y méritos propios?",
      respuesta: [
        { texto: "a. Sí, la empresa únicamente contrata y/o promueve a los trabajadores por su valía y no tiene en cuenta otros factores como el género, religión, procedencia etc.", "valor": 5 },
        { texto: "b. No, la empresa no sólo contrata y/o promueve a los trabajadores por su valía, a veces influye en la toma de decisiones factores como el género, religión, procedencia etc.", "valor": 2 },
        { texto: "c. No, la empresa sólo contrata y/o promueve a los trabajadores por factores como el género, religión, procedencia etc.", "valor": 0 }
      ]
    },
    {
      texto: "30. ¿ Se cometen en tu empresa de manera consciente, inconsciente o por costumbre actitudes que pueden ser consideradas machistas?",
      respuesta: [
        { texto: "a. No, es algo que está desterrado en nuestra empresa", "valor": 0 },
        { texto: "b. Sí, pero se está trabajando para erradicarlas", "valor": 2 },
        { texto: "c. Sí, y no vemos ningún problema en ello", "valor": 5 }
      ]
    }
  ]
}









let indicePreguntaActual = 0;
let respuestasSeleccionadas = new Map(); // Almacena temporalmente las respuestas seleccionadas
let puntuacionTotal = 0; // Almacena la puntuación total

function mostrarPregunta(indice) {
  const pregunta = ods.pregunta[indice];

  const contenedorPreguntas = document.getElementById("contenedor-form");
  contenedorPreguntas.innerHTML = "";

  let contenedorPregunta = document.createElement("div");
  contenedorPregunta.classList.add("contenedor-pregunta");

  let textoPregunta = document.createElement("h2");
  textoPregunta.textContent = pregunta.texto;

  contenedorPregunta.appendChild(textoPregunta);

  pregunta.respuesta.forEach(function (respuesta) {
    let contenedorRespuestas = document.createElement("div");
    contenedorRespuestas.classList.add("contenedor-respuestas");

    let inputRespuesta = document.createElement("input");
    inputRespuesta.type = "radio";
    inputRespuesta.name = pregunta.texto; // Asignar nombre único a cada grupo de radio buttons
    inputRespuesta.value = respuesta.valor;
    inputRespuesta.checked = respuestasSeleccionadas.has(pregunta.texto) && respuestasSeleccionadas.get(pregunta.texto) === respuesta.valor; // Marcar la respuesta seleccionada anteriormente

    let labelRespuesta = document.createElement("label");
    // labelRespuesta.classList.add("btn", "btn-primary"); // Estilo similar al botón de Bootstrap
    labelRespuesta.textContent = respuesta.texto;

    contenedorRespuestas.appendChild(inputRespuesta);
    contenedorRespuestas.appendChild(labelRespuesta);
    contenedorPregunta.appendChild(contenedorRespuestas);
  });

  contenedorPreguntas.appendChild(contenedorPregunta);
}

function mostrarPreguntaSiguiente() {
  if (indicePreguntaActual > 0) { // Si no estamos en la primera pregunta
    const radios = document.querySelectorAll('input[type="radio"]:checked');
    if (radios.length === 0) {
      alert("Por favor, selecciona una respuesta antes de continuar.");
      return;
    }
  }

  if (indicePreguntaActual < ods.pregunta.length - 1) {
    guardarRespuestaSeleccionada(); // Guardar la respuesta seleccionada antes de avanzar
    indicePreguntaActual++;
    mostrarPregunta(indicePreguntaActual);
  }
}

function mostrarPreguntaAnterior() {
  if (indicePreguntaActual > 0) {
    indicePreguntaActual--;
    mostrarPregunta(indicePreguntaActual);
  }
}

function guardarRespuestaSeleccionada() {
  const radios = document.querySelectorAll('input[type="radio"]:checked');
  if (radios.length > 0) {
    const preguntaActual = ods.pregunta[indicePreguntaActual].texto;
    const valorRespuesta = parseInt(radios[0].value);
    respuestasSeleccionadas.set(preguntaActual, valorRespuesta);
    puntuacionTotal += valorRespuesta; // Actualizar la puntuación total
  }
}

// Mostrar la primera pregunta al cargar la página
mostrarPregunta(indicePreguntaActual);

// Manejadores de eventos para los botones
document.getElementById("btnNext").addEventListener("click", mostrarPreguntaSiguiente);
document.getElementById("btnPrev").addEventListener("click", mostrarPreguntaAnterior);

// Función para obtener el contenido HTML según la puntuación total
function obtenerContenidoSegunPuntuacion() {
  // Lógica para determinar el contenido HTML según la puntuación total
  let contenidoHTML;
  
  if (puntuacionTotal >= 20) {
    contenidoHTML = "<h3>Felicidades, obtuviste una puntuación alta.</h3>";
  }
  else {
    contenidoHTML = "<h3>Tu puntuación no alcanza el umbral necesario.</h3>";
  }

  // Insertar el contenido en el elemento con id "resultado"
  document.getElementById("resultado").innerHTML = contenidoHTML;
}

// Llamar a la función para obtener el contenido según la puntuación total
obtenerContenidoSegunPuntuacion();
