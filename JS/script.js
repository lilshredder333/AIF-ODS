const ods = {
  pregunta: [
    {
      texto: "1. ¿Tu empresa apoya activamente a empresas lideradas por mujeres?",
      respuesta: [
        { texto: "a. Sí, nuestra empresa tiene políticas y programas específicos para apoyar a empresas lideradas por mujeres, promoviendo la igualdad de género.", valor: 5 },
        { texto: "b. Estamos en proceso de explorar formas de apoyar a empresas lideradas por mujeres, pero aún no hemos implementado programas concretos al respecto.", valor: 3 },
        { texto: "c. No, nuestra empresa no tiene políticas o programas específicos para apoyar a empresas lideradas por mujeres en este momento.", valor: 2 },
        { texto: "d. No estoy seguro/a de la política de la empresa en este tema.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Establecer políticas y programas de mentoría o capacitación para mujeres líderes en tu industria como parte de tu compromiso con la igualdad de género y el apoyo a empresas lideradas por mujeres." },
        { texto: "Elaborar un estudio a la hora de contratar los servicios de las empresas colaboradoras para saber su compromiso con la igualdad de género." },
        { texto: "Apoyar y promocionar iniciativas locales que busquen empoderar a las mujeres." },
        { texto: "Colaborar con organizaciones no lucrativas que trabajan en la promoción de la igualdad de género." }
      ]
    },
    {
      texto: "2. ¿Qué medidas implementáis para promover la igualdad de oportunidades laborales para hombres y mujeres?",
      respuesta: [
        { texto: "a. Establecer políticas de contratación basadas en méritos y ofrecer flexibilidad en la jornada laboral.", valor: 5 },
        { texto: "b. Realizar charlas para la sensibilización sobre la igualdad de género en el entorno laboral.", valor: 4 },
        { texto: "c. Elaborar medidas de conciliación laboral y familiar.", valor: 4 },
        { texto: "d. Crear un proceso de evaluación regular sobre el clima laboral para abordar posibles desigualdades de género.", valor: 4 }
      ],
      recomendaciones: [
        { texto: "Establecer políticas de contratación basadas en méritos y ofrecer flexibilidad en la jornada laboral." },
        { texto: "Realizar charlas para la sensibilización sobre la igualdad de género en el entorno laboral." },
        { texto: "Elaborar medidas de conciliación laboral y familiar." },
        { texto: "Crear un proceso de evaluación regular sobre el clima laboral para abordar posibles desigualdades de género." }
      ]
    },
    {
      texto: "3. ¿Qué medidas implementáis para promover un lenguaje inclusivo y no sexista en el entorno laboral?",
      respuesta: [
        { texto: "a. Establecer normativas claras sobre el lenguaje utilizado en espacios de trabajo y en reuniones y aplicar un sistema de sanciones en caso de uso de mensajes discriminatorios.", valor: 5 },
        { texto: "b. Proporcionar a los trabajadores formaciones y talleres de sensibilización sobre la importancia de un lenguaje no sexista.", valor: 4 },
        { texto: "c. Realizar un manual de lenguaje no sexista que cualquier empleado o empleada podrá utilizar.", valor: 4 }
      ],
      recomendaciones: [
        { texto: "Establecer normativas claras sobre el lenguaje utilizado en espacios de trabajo y en reuniones y aplicar un sistema de sanciones en caso de uso de mensajes discriminatorios." },
        { texto: "Proporcionar a los trabajadores formaciones y talleres de sensibilización sobre la importancia de un lenguaje no sexista." },
        { texto: "Realizar un manual de lenguaje no sexista que cualquier empleado o empleada podrá utilizar." }
      ]
    },
    {
      texto: "4. ¿Qué acciones lleváis a cabo para fomentar la capacitación y sensibilización en temas de género, diversidad e inclusión?",
      respuesta: [
        { texto: "a. Proporcionar programas de capacitación para empleados en temas de género, diversidad e inclusión.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Proporcionar programas de capacitación para empleados en temas de género, diversidad e inclusión." }
      ]
    },
    {
      texto: "5. ¿Vuestra empresa cuenta con un canal de denuncias seguro y confidencial para abordar problemas de discriminación?",
      respuesta: [
        { texto: "a. Sí, contamos con un canal de denuncias seguro y confidencial para abordar problemas de discriminación.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Establecer un canal de denuncias seguro y confidencial para abordar problemas de discriminación." }
      ]
    },
    {
      texto: "6. ¿Qué medidas habéis implementado para garantizar un lenguaje inclusivo y no discriminatorio en las interacciones con clientes?",
      respuesta: [
        { texto: "a. Establecer un seguimiento mensual para comprobar que los trabajadores que tengan contacto con clientes tengan un lenguaje adecuado, formal e igualitario para todos los géneros.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Establecer un seguimiento mensual para comprobar que los trabajadores que tengan contacto con clientes tengan un lenguaje adecuado, formal e igualitario para todos los géneros." }
      ]
    },
    {
      texto: "7. ¿Qué acciones lleváis a cabo para promover el desarrollo y la promoción de mujeres en puestos directivos?",
      respuesta: [
        { texto: "a. Adoptar programas de búsqueda activa de talento femenino.", valor: 5 },
        { texto: "b. Activar la promoción y desarrollo de mujeres cualificadas a puestos directivos, incluyendo mentoría y coaching, para ayudarlas a adquirir las habilidades necesarias para ascender a puestos directivos.", valor: 5 },
        { texto: "c. Incluir a las mujeres en la participación de conferencias, la nominación para premios y la promoción de su trabajo a través de diversos canales de comunicación.", valor: 5 },
        { texto: "d. Llegar a la proporción de un 50% de mujeres en los puestos directivos en un periodo de 3 años.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Adoptar programas de búsqueda activa de talento femenino" },
        { texto: "Activar la promoción y desarrollo de mujeres cualificadas a puestos directivos, incluyendo mentoría y coaching, para ayudarlas a adquirir las habilidades necesarias para ascender a puestos directivos." },
        { texto: "Incluir a las mujeres en la participación de conferencias, la nominación para premios y la promoción de su trabajo a través de diversos canales de comunicación." },
        { texto: "Llegar a la proporción de un 50% de mujeres en los puestos directivos en un periodo de 3 años." }
      ]
    },
    {
      texto: "8. ¿Realizáis análisis periódicos para identificar posibles brechas de género en el ámbito laboral?",
      respuesta: [
        { texto: "a. Sí, analizamos datos internos de contratación para identificar brechas de género y comprender las razones detrás de ellas.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Analizar datos internos de contratación para identificar brechas de género y comprender las razones detrás de ellas." }
      ]
    },
    {
      texto: "9. ¿Cómo promovéis un entorno laboral inclusivo y equitativo en vuestra empresa?",
      respuesta: [
        { texto: "a. Realizamos encuestas con el personal para comprender sus percepciones y experiencias relacionadas con la distribución de género en la asignación de roles y responsabilidades.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Realizar encuestas con el personal para comprender sus percepciones y experiencias relacionadas con la distribución de género en la asignación de roles y responsabilidades." }
      ]
    },
    {
      texto: "10. ¿Qué medidas tomáis para garantizar un trato igualitario y respetuoso en el lugar de trabajo?",
      respuesta: [
        { texto: "a. Realizamos sesiones de formación y talleres sobre igualdad de género y diversidad para concienciar a los empleados.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Realizar sesiones de formación y talleres sobre igualdad de género y diversidad para concienciar a los empleados." }
      ]
    },
    {
      texto: "11. ¿Cómo fomentáis la participación activa de hombres y mujeres en la crianza y el cuidado de los hijos?",
      respuesta: [
        { texto: "a. Implementamos políticas de flexibilidad laboral que permiten a los empleados equilibrar sus responsabilidades laborales y familiares.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Implementar políticas de flexibilidad laboral que permiten a los empleados equilibrar sus responsabilidades laborales y familiares." }
      ]
    },
    {
      texto: "12. ¿Qué estrategias empleáis para eliminar la discriminación de género en los procesos de selección y promoción?",
      respuesta: [
        { texto: "a. Revisamos y actualizamos regularmente nuestras políticas de contratación y promoción para garantizar la igualdad de oportunidades para todos los empleados.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Revisar y actualizar regularmente las políticas de contratación y promoción para garantizar la igualdad de oportunidades para todos los empleados." }
      ]
    },
    {
      texto: "13. ¿Qué acciones lleváis a cabo para prevenir y abordar el acoso de género en el lugar de trabajo?",
      respuesta: [
        { texto: "a. Ofrecemos formación y recursos para que los empleados puedan identificar y denunciar el acoso de género.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Ofrecer formación y recursos para que los empleados puedan identificar y denunciar el acoso de género." }
      ]
    },
    {
      texto: "14. ¿Realizáis evaluaciones regulares del clima laboral para identificar posibles problemas de género?",
      respuesta: [
        { texto: "a. Sí, realizamos evaluaciones periódicas del clima laboral que incluyen preguntas específicas sobre igualdad de género.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Realizar evaluaciones periódicas del clima laboral que incluyan preguntas específicas sobre igualdad de género." }
      ]
    },
    {
      texto: "15. ¿Qué acciones lleváis a cabo para fomentar la igualdad salarial entre hombres y mujeres?",
      respuesta: [
        { texto: "a. Realizamos análisis salariales regulares para identificar y corregir posibles brechas de género.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Realizar análisis salariales regulares para identificar y corregir posibles brechas de género." }
      ]
    },
    {
      texto: "16. ¿Vuestra empresa cuenta con políticas para fomentar la participación equitativa de hombres y mujeres en roles de liderazgo?",
      respuesta: [
        { texto: "a. Sí, tenemos políticas y programas específicos para fomentar la participación equitativa de hombres y mujeres en roles de liderazgo.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Implementar políticas y programas específicos para fomentar la participación equitativa de hombres y mujeres en roles de liderazgo." }
      ]
    },
    {
      texto: "17. ¿Qué medidas tomáis para garantizar un ambiente laboral seguro y libre de discriminación?",
      respuesta: [
        { texto: "a. Establecemos normas claras de comportamiento y consecuencias para aquellos que violen esas normas, incluida la discriminación de género.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Establecer normas claras de comportamiento y consecuencias para aquellos que violen esas normas, incluida la discriminación de género." }
      ]
    },
    {
      texto: "18. ¿Cómo fomentáis la inclusión de la diversidad de género en vuestra empresa?",
      respuesta: [
        { texto: "a. Promovemos la diversidad de género en todas las áreas de la empresa, desde la contratación hasta la promoción y el liderazgo.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Promover la diversidad de género en todas las áreas de la empresa, desde la contratación hasta la promoción y el liderazgo." }
      ]
    },
    {
      texto: "19. ¿Qué medidas tomáis para garantizar un proceso de selección justo e imparcial?",
      respuesta: [
        { texto: "a. Utilizamos criterios de selección objetivos y evaluamos a todos los candidatos por igual, sin tener en cuenta su género.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Utilizar criterios de selección objetivos y evaluar a todos los candidatos por igual, sin tener en cuenta su género." }
      ]
    },
    {
      texto: "20. ¿Cómo fomentáis la conciliación entre la vida laboral y personal para todos los empleados?",
      respuesta: [
        { texto: "a. Ofrecemos opciones flexibles de horario de trabajo y teletrabajo para ayudar a los empleados a equilibrar sus responsabilidades laborales y personales.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Ofrecer opciones flexibles de horario de trabajo y teletrabajo para ayudar a los empleados a equilibrar sus responsabilidades laborales y personales." }
      ]
    },
    {
      texto: "21. ¿Cómo promovéis la igualdad de género en vuestra estrategia de marketing y comunicación?",
      respuesta: [
        { texto: "a. Utilizamos imágenes y mensajes que promuevan la igualdad de género y evitamos los estereotipos de género en nuestra publicidad y comunicaciones.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Utilizar imágenes y mensajes que promuevan la igualdad de género y evitar los estereotipos de género en la publicidad y comunicaciones." }
      ]
    },
    {
      texto: "22. ¿Qué acciones lleváis a cabo para prevenir el acoso sexual en el lugar de trabajo?",
      respuesta: [
        { texto: "a. Ofrecemos formación y recursos para que los empleados puedan identificar y denunciar el acoso sexual.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Ofrecer formación y recursos para que los empleados puedan identificar y denunciar el acoso sexual." }
      ]
    },
    {
      texto: "23. ¿Vuestra empresa cuenta con medidas para garantizar una distribución equitativa de tareas domésticas y de cuidado entre hombres y mujeres?",
      respuesta: [
        { texto: "a. Sí, tenemos políticas y programas para promover la participación equitativa de hombres y mujeres en las tareas domésticas y de cuidado.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Implementar políticas y programas para promover la participación equitativa de hombres y mujeres en las tareas domésticas y de cuidado." }
      ]
    },
    {
      texto: "24. ¿Qué medidas tomáis para garantizar una representación equitativa de hombres y mujeres en eventos y conferencias?",
      respuesta: [
        { texto: "a. Promovemos activamente la participación de mujeres como oradoras y panelistas en eventos y conferencias.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Promover activamente la participación de mujeres como oradoras y panelistas en eventos y conferencias." }
      ]
    },
    {
      texto: "25. ¿Cómo fomentáis la participación de mujeres en roles de liderazgo y toma de decisiones en vuestra empresa?",
      respuesta: [
        { texto: "a. Ofrecemos oportunidades de desarrollo y capacitación específicas para mujeres que aspiran a roles de liderazgo y toma de decisiones.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Ofrecer oportunidades de desarrollo y capacitación específicas para mujeres que aspiran a roles de liderazgo y toma de decisiones." }
      ]
    },
    {
      texto: "26. ¿Qué acciones lleváis a cabo para promover una cultura organizacional inclusiva y respetuosa con la diversidad de género?",
      respuesta: [
        { texto: "a. Organizamos sesiones de sensibilización y capacitación sobre diversidad de género para todos los empleados.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Organizar sesiones de sensibilización y capacitación sobre diversidad de género para todos los empleados." }
      ]
    },
    {
      texto: "27. ¿Cómo fomentáis la participación equitativa de hombres y mujeres en programas de mentoría y desarrollo profesional?",
      respuesta: [
        { texto: "a. Implementamos programas de mentoría específicos para mujeres y promovemos la participación equitativa de hombres y mujeres en programas de desarrollo profesional.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Implementar programas de mentoría específicos para mujeres y promover la participación equitativa de hombres y mujeres en programas de desarrollo profesional." }
      ]
    },
    {
      texto: "28. ¿Qué medidas tomáis para eliminar sesgos de género en los procesos de evaluación del desempeño y ascenso?",
      respuesta: [
        { texto: "a. Proporcionamos formación a los evaluadores sobre sesgos de género y establecemos criterios objetivos para evaluar el desempeño y el potencial de los empleados.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Proporcionar formación a los evaluadores sobre sesgos de género y establecer criterios objetivos para evaluar el desempeño y el potencial de los empleados." }
      ]
    },
    {
      texto: "29. ¿Qué acciones lleváis a cabo para fomentar una cultura de apoyo y solidaridad entre hombres y mujeres en el lugar de trabajo?",
      respuesta: [
        { texto: "a. Organizamos actividades y eventos que promueven la interacción y el trabajo en equipo entre hombres y mujeres.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Organizar actividades y eventos que promuevan la interacción y el trabajo en equipo entre hombres y mujeres." }
      ]
    },
    {
      texto: "30. ¿Qué medidas tomáis para garantizar un trato igualitario y respetuoso hacia todas las personas, independientemente de su género u orientación sexual?",
      respuesta: [
        { texto: "a. Establecemos normas de conducta claras y proporcionamos formación sobre diversidad e inclusión a todos los empleados.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Establecer normas de conducta claras y proporcionar formación sobre diversidad e inclusión a todos los empleados." }
      ]
    }
  ]
};







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

// Función para obtener el contenido HTML según la puntuación total
function obtenerContenidoSegunPuntuacion(puntuacionTotal) {
  let contenidoHTML = "";

  if (puntuacionTotal < 75) {
    // Mostrar todas las recomendaciones
    ods.pregunta.forEach(pregunta => {
      pregunta.recomendaciones.forEach(recomendacion => {
        contenidoHTML += `<div class="recomendacion">${recomendacion.texto}</div>`;
      });
    });
    // Mostrar mensaje y emoticono
    contenidoHTML = `<h3>¡Espabila!</h3><img src="enfadado.png" alt="enfadado">${contenidoHTML}`;
  } else if (puntuacionTotal >= 75 && puntuacionTotal <= 100) {
    // Mostrar solo las 2 primeras recomendaciones por pregunta
    let mostradasPorPregunta = 0;
    ods.pregunta.forEach(pregunta => {
      pregunta.recomendaciones.slice(0, 2).forEach(recomendacion => {
        contenidoHTML += `<div class="recomendacion">${recomendacion.texto}</div>`;
      });
    });
    // Mostrar mensaje y emoticono
    contenidoHTML = `<h3>Mejorable</h3><h4>Confiamos en ti</h4><img src="triste.png" alt="triste">${contenidoHTML}`;
  } else if (puntuacionTotal >= 100 && puntuacionTotal <= 139) {
    // Mostrar solo una recomendación por pregunta
    ods.pregunta.forEach(pregunta => {
      if (pregunta.recomendaciones.length > 0) {
        contenidoHTML += `<div class="recomendacion">${pregunta.recomendaciones[0].texto}</div>`;
      }
    });
    // Mostrar mensaje y emoticono
    contenidoHTML = `<h3>Por el buen camino</h3><h4>Siga trabajando en ello</h4><img src="like.png" alt="like">${contenidoHTML}`;
  } else if (puntuacionTotal >= 140 && puntuacionTotal <= 150) {
    // No mostrar recomendaciones
    contenidoHTML = "";
  } else if (puntuacionTotal > 150) {
    // Mostrar mensaje y emoticono
    contenidoHTML = `<h3>¡Excelente!</h3><h4>Sigue así</h4><img src="estrellitas.png" alt="estrellitas">`;
  }

  // Insertar el contenido en el elemento con id "resultado"
  document.getElementById("resultado").innerHTML = contenidoHTML;
}

// Mostrar la primera pregunta al cargar la página
mostrarPregunta(indicePreguntaActual);

// Manejadores de eventos para los botones
document.getElementById("btnNext").addEventListener("click", mostrarPreguntaSiguiente);
document.getElementById("btnPrev").addEventListener("click", mostrarPreguntaAnterior);

// Llamar a la función para obtener el contenido según la puntuación total
obtenerContenidoSegunPuntuacion(puntuacionTotal);
