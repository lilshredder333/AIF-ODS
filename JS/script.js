

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
      texto: "2. ¿Tu empresa promueve la igualdad de oportunidades laborales para hombres y mujeres?",
      respuesta: [
        { texto: "a. Sí, existe una política clara de igualdad de oportunidades.", valor: 5 },
        { texto: "b. En su mayoría, pero hay áreas donde se podría mejorar.", valor: 3 },
        { texto: "c. No hay una política formal, pero se fomenta la igualdad de manera informal.", valor: 2 },
        { texto: "d. No, hay desigualdades evidentes en las oportunidades laborales.", valor: 0 }
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
        { texto: "a. Proporcionamos la participación en igualdad de género a todo el personal.", valor: 5 },
        { texto: "b. Promovemos la participación equitativa de hombres y mujeres en ciertas reuniones y charlas.", valor: 3 },
        { texto: "c. Se hace la exclusión de cierta parte del personal, debido a su género, en todas las reuniones y charlas.", valor: 2 },
        { texto: "d. No tomamos medidas específicas.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Establecer normativas claras sobre el lenguaje utilizado en espacios de trabajo y en reuniones y aplicar un sistema de sanciones en caso de uso de mensajes discriminatorios." },
        { texto: "Proporcionar a los trabajadores formaciones y talleres de sensibilización sobre la importancia de un lenguaje no sexista." },
        { texto: "Realizar un manual de lenguaje no sexista que cualquier empleado o empleada podrá utilizar." }
      ]
    },
    {
      texto: "4. ¿Realizan charlas y conferencias para asegurar la eliminación de estereotipos de género en el desarrollo diario de las actividades de vuestra empresa?",
      respuesta: [
        { texto: "a. No realizamos charlas o conferencias para asegurar la eliminación de estereotipos de género.", valor: 0 },
        { texto: "b. No realizamos charlas o conferencias para asegurar la eliminación de estereotipos de género. Pero tenemos pensado hacerlas en un periodo corto de tiempo. Acortar el periodo de tiempo lo máximo posible.", valor: 2 },
        { texto: "c. Realizamos una charla o conferencia al año para asegurar la eliminación de estereotipos de género.", valor: 3 },
        { texto: "d. Realizamos más de una charla o conferencia al año para asegurar la eliminación de estereotipos de género.", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Proporcionar programas de capacitación para empleados en temas de género, diversidad e inclusión." }
      ]
    },
    {
      texto: "5. ¿La información dada al cliente está sesgada por género?",
      respuesta: [
        { texto: "a. El trato para los clientes es formal y adecuado para cada uno de ellos, sin tener restricciones por el género y fomentando la importancia de la igualdad de género", valor: 5 },
        { texto: "b. No se tienen en cuenta diferentes formalidades para el género de cada cliente", valor: 3 },
        { texto: "c. Según el género no damos ningún tipo de información.", valor: 2 },
        { texto: "d. Se prioriza un género exclusivo como cliente, buscando la exclusión y desinterés por el otro.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Establecer un canal de denuncias seguro y confidencial para abordar problemas de discriminación." }
      ]
    },
    {
      texto: "6. ¿Cuál es la proporción de mujeres que ejercen puestos directivos?",
      respuesta: [
        { texto: "a. Entre el 100 y el 80% de la dirección", valor: 5 },
        { texto: "b. De un 50% a un 80%", valor: 3 },
        { texto: "c. Entre un 20% y un 40%", valor: 2 },
        { texto: "d. Entre un 0 hasta el 20%", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Establecer un protocolo claro de comunicación inclusiva para el personal de atención al cliente." },
        { texto: "Proporcionar capacitación periódica sobre el uso de un lenguaje inclusivo y no discriminatorio." }
      ]
    },
    {
      texto: "7. ¿Cuál es la proyección para el aumento de mujeres en posiciones de liderazgo para los próximos 5 años?",
      respuesta: [
        { texto: "a. Menos del 5%", valor: 0 },
        { texto: "b. Entre un 5% y un 20%", valor: 2 },
        { texto: "c. Entre un 20% y un 50%", valor: 3 },
        { texto: "d. Más de un 50%", valor: 5 }
      ],
      recomendaciones: [
        { texto: "Desarrollar programas de mentoría y capacitación para mujeres en posiciones de liderazgo para fomentar la igualdad de género en la empresa." }
      ]
    },
    {
      texto: "8. ¿Qué porcentaje de hombres y mujeres dan servicios asistenciales relacionados con la higiene y la limpieza en su compañía?",
      respuesta: [
        { texto: "a. Menos del 50% de mujeres, no existe una distinción marcada entre estas labores para ambos géneros.", valor: 5 },
        { texto: "b. El 50%, los cargos se encuentran equilibrados", valor: 3 },
        { texto: "c. El 75% los desarrollan mujeres.", valor: 2 },
        { texto: "d. El 100% de mujeres.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Promover la contratación de empleados de diversas culturas y origen étnico." },
        { texto: "Organizar eventos y actividades para celebrar y promover la diversidad cultural." },
        { texto: "Ofrecer programas de capacitación sobre sensibilización cultural y competencia intercultural." }
      ]
    },
    {
      texto: "9. ¿Qué porcentaje de hombres y mujeres dan servicios asistenciales relacionados con el mantenimiento en su compañía?",
      respuesta: [
        { texto: "a. Menos del 50% de mujeres, no existe una distinción marcada entre estas labores para ambos géneros.", valor: 0 },
        { texto: "b. El 50%, los cargos se encuentran equilibrados", valor: 5 },
        { texto: "c. El 75% los desarrollan mujeres.", valor: 3 },
        { texto: "d. El 100% de mujeres.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Implementar políticas de inclusión activa y adaptaciones razonables para personas con discapacidad." },
        { texto: "Ofrecer programas de capacitación sobre inclusión y sensibilización sobre discapacidad." },
        { texto: "Adaptar los puestos de trabajo y proporcionar apoyo adicional según las necesidades de cada persona con discapacidad." }
      ]
    },
    {
      texto: "10. ¿Qué porcentaje de hombres y mujeres se dedican a la atención al cliente en tu empresa?",
      respuesta: [
        { texto: "a. Menos del 50% de mujeres, no existe una distinción marcada entre estas labores para ambos géneros.", valor: 5 },
        { texto: "b. El 50%, los cargos se encuentran equilibrados", valor: 3 },
        { texto: "c. El 75% los desarrollan mujeres.", valor: 2 },
        { texto: "d. El 100% de mujeres.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Realizar revisiones periódicas de sueldos para garantizar la equidad salarial." },
        { texto: "Implementar políticas de transparencia salarial y prohibir la discriminación salarial por género." },
        { texto: "Realizar auditorías salariales para identificar y corregir posibles brechas salariales de género." }
      ]
    },
    {
      texto: "11. ¿En nuestro equipo de marketing hay igualdad de género en cuanto a representación y oportunidades de liderazgo?",
      respuesta: [
        { texto: "a. Sí, hay igualdad de género en cuanto a representación y oportunidades de liderazgo.", valor: 5 },
        { texto: "b. Hay igualdad de género en cuanto a representación, pero no en cuanto a oportunidades de liderazgo.", valor: 3 },
        { texto: "c. Hay igualdad de género en cuanto a oportunidades de liderazgo, pero no en cuanto a representación.", valor: 2 },
        { texto: "d. No hay igualdad de género en cuanto a representación ni a oportunidades de liderazgo.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Implementar políticas de no discriminación por orientación sexual e identidad de género." },
        { texto: "Ofrecer capacitación sobre diversidad sexual y de género para empleados y directivos." },
        { texto: "Organizar eventos y actividades para celebrar la diversidad LGBTQ+." }
      ]
    },
    {
      texto: "12. ¿Se han llevado a cabo actividades de formación para aumentar la concienciación de la desigualdad presente en la prestación de determinados servicios?",
      respuesta: [
        { texto: "a. Sí, se han llevado a cabo prácticas fomentando la concienciación sobre la igualdad y fueron bien recibidas.", valor: 3 },
        { texto: "b. Sí, pero no lo suficiente, las prácticas adoptadas fueron bien recibidas pero no vemos una aplicación real en la práctica", valor: 3 },
        { texto: "c. Se ha intentado por parte de la empresa pero la propuesta no ha sido bien recibida por la plantilla.", valor: 2 },
        { texto: "d. No se ha propuesto, ya que la mayoría de los trabajadores y trabajadoras no están cómodos cuando hay un intercambio de roles.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Fomentar la contratación intergeneracional y ofrecer programas de mentoría para empleados de diferentes edades." }
      ]
    },
    {
      texto: "13. ¿Las imágenes publicitarias generadas por tu empresa reflejan roles de género tradicionales?",
      respuesta: [
        { texto: "a. No, nunca", valor: 5 },
        { texto: "b. Sí, pero no nos habíamos fijado en ello", valor: 2 },
        { texto: "c. Si, de manera intencionada.", valor: 0 },
      ],
      recomendaciones: [
        { texto: "Implementar políticas de cuotas de género para garantizar una representación equitativa de mujeres en puestos directivos y de liderazgo." },
        { texto: "Ofrecer programas de desarrollo profesional y mentoría específicamente diseñados para mujeres." },
        { texto: "Fomentar la visibilidad y reconocimiento de los logros de las mujeres en la empresa." }
      ]
    },
    {
      texto: "14. ¿Crees que la desigualdad de género afecta al funcionamiento de la empresa?",
      respuesta: [
        { texto: "a. Sí, y por ello intentamos mejorar", valor: 5 },
        { texto: "b. Sí, pero no sabemos qué hacer", valor: 3 },
        { texto: "c. No, no lo sabía", valor: 2 },
        { texto: "d. No, no lo tengo en cuenta", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Implementar políticas de inclusión y adaptaciones razonables para personas con diferentes habilidades y condiciones de salud." },
        { texto: "Ofrecer programas de sensibilización y capacitación sobre diversidad funcional para empleados y directivos." },
        { texto: "Adaptar los espacios de trabajo y proporcionar apoyo adicional según las necesidades de cada persona con diferentes habilidades y condiciones de salud." }
      ]
    },
    {
      texto: "15. ¿Tu empresa incluye la atención postnatal para ambos géneros cómo derecho del trabajador y trabajadora?",
      respuesta: [
        { texto: "a. Sí, y tenemos actividades al respecto", valor: 5 },
        { texto: "b. Sí, pero sólo tenemos actividades para mujeres", valor: 3 },
        { texto: "c. No, no lo sabía", valor: 2 },
        { texto: "d. No, no me interesa.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Ofrecer oportunidades de desarrollo profesional y ascenso basadas en el rendimiento y habilidades, independientemente del origen socioeconómico." },
        { texto: "Proporcionar programas de capacitación y mentoría para empleados de diferentes orígenes socioeconómicos." },
        { texto: "Implementar políticas de equidad salarial y beneficios que favorezcan a empleados de diferentes orígenes socioeconómicos." }
      ]
    },
    {
      texto: "16. ¿Tu empresa fomenta la igualdad de género a través de la implementación de un lenguaje inclusivo en sus políticas y comunicaciones, considerando aspectos como la diversidad, el respeto y la equidad en la expresión verbal y escrita?",
      respuesta: [
        { texto: "a. Sí, el lenguaje inclusivo forma parte de la cultura de nuestra empresa", valor: 5 },
        { texto: "b. Sí, aunque no tenemos claras las reglas del lenguaje inclusivo", valor: 2 },
        { texto: "c. No, no me preocupa", valor: 0 },
      ],
      recomendaciones: [
        { texto: "Implementar políticas de tolerancia cero hacia el acoso sexual y procedimientos claros para reportar y abordar casos de acoso." },
        { texto: "Ofrecer programas de sensibilización y capacitación sobre acoso sexual para empleados y directivos." },
        { texto: "Fomentar una cultura de respeto y empatía en el lugar de trabajo mediante actividades y campañas de concienciación." }
      ]
    },
    {
      texto: "17. ¿Ha adoptado su empresa alguna política de conciliación familiar y laboral?",
      respuesta: [
        { texto: "a. Sí, hemos adoptado diversas medidas incluidas en la responsabilidad social corporativa", valor: 5 },
        { texto: "b. Sí, pero todavía trabajamos en mejorarlo", valor: 3 },
        { texto: "c. No, pero lo estamos estudiando", valor: 2 },
        { texto: "d. No, nos limitamos a adoptar las medidas recogidas en el estatuto de los trabajadores", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Ofrecer oportunidades de formación continua y desarrollo profesional para todos los empleados, independientemente de su nivel educativo." },
        { texto: "Adaptar los procesos de selección y promoción para valorar las habilidades y experiencia por encima del nivel educativo." },
        { texto: "Proporcionar apoyo y recursos adicionales para empleados con menor nivel educativo." }
      ]
    },
    {
      texto: "18. ¿Tu empresa imparte el protocolo de prevención de riesgos psicosociales a los trabajadores y trabajadoras?",
      respuesta: [
        { texto: "a. Sí, hemos adoptado el protocolo de riesgos psicosociales", valor: 5 },
        { texto: "b. Sí, pero todavía trabajamos en mejorarlo", valor: 3 },
        { texto: "c. No, pero lo estamos estudiando", valor: 2 },
        { texto: "d. No, no sabíamos de la necesidad de tener un protocolo de riesgos psicosociales.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Promover la diversidad de género en la formación de equipos y proyectos mediante políticas de inclusión y equidad." },
        { texto: "Fomentar la colaboración y el intercambio de ideas entre personas de diferentes géneros en todos los niveles de la empresa." },
        { texto: "Implementar medidas para evitar sesgos de género en la selección y asignación de proyectos y responsabilidades." }
      ]
    },
    {
      texto: "19. ¿La empresa tiene establecido un canal de denuncias en caso de vulnerabilidad de la integridad física o psíquica de su personal?",
      respuesta: [
        { texto: "a. Si, hemos establecido un canal de denuncias.", valor: 5 },
        { texto: "b. Si, pero no se ha puesto en práctica", valor: 3 },
        { texto: "c. No, pero se está discutiendo", valor: 2 },
        { texto: "d. No, no lo vemos necesario.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Fomentar la tolerancia religiosa y el respeto mutuo mediante políticas de diversidad e inclusión." },
        { texto: "Ofrecer espacios de reflexión y diálogo interreligioso para empleados de diferentes identidades religiosas." },
        { texto: "Adaptar los horarios y prácticas laborales para respetar las festividades religiosas de todas las religiones representadas en la empresa." }
      ]
    },
    {
      texto: "20. ¿La resolución del proceso del canal de denuncias se considera ágil y sencillo?",
      respuesta: [
        { texto: "a. Sí, desde el primer momento la persona afectada tiene la posibilidad de compartir con un representante su caso, aunque el procedimiento sea más extenso.", valor: 5 },
        { texto: "b. Sí, en el plazo de una semana la empresa ya toma medidas al respecto.", valor: 3 },
        { texto: "c. No existe canal de denuncia en nuestra empresa", valor: 0 },
        { texto: "d. La respuesta al proceso depende del nivel de trabajo.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Fomentar el respeto a la identidad de género de cada persona y prohibir la discriminación por identidad de género." },
        { texto: "Ofrecer capacitación sobre diversidad de género y sensibilización sobre identidades transgénero." },
        { texto: "Implementar políticas de inclusión y adaptaciones para garantizar un entorno seguro para personas de diferentes identidades de género." }
      ]
    },
    {
      texto: "21. ¿La empresa dispone de algún recurso de atención psicológica para los empleados?",
      respuesta: [
        { texto: "a. Sí, tenemos un profesional en la empresa", valor: 5 },
        { texto: "b. Sí, tenemos un convenio con un profesional externo.", valor: 3 },
        { texto: "c. No nos lo habíamos planteado, pero creemos que sería necesario.", valor: 2 },
        { texto: "d. No, no disponemos de este recurso ni lo dispondremos en un futuro.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Fomentar la aceptación y el respeto hacia todas las orientaciones sexuales mediante políticas de inclusión y no discriminación." },
        { texto: "Ofrecer formación sobre diversidad sexual y sensibilización sobre discriminación por orientación sexual." },
        { texto: "Implementar medidas para prevenir y abordar casos de discriminación por orientación sexual en el lugar de trabajo." }
      ]
    },
    {
      texto: "22. ¿La empresa dispone de algún servicio de guardería para los empleados?",
      respuesta: [
        { texto: "a. Sí, tenemos una guardería en la empresa", valor: 5 },
        { texto: "b. Sí, tenemos un convenio con una guardería cercana", valor: 3 },
        { texto: "c. No nos lo habíamos planteado, pero creemos que sería necesario.", valor: 2 },
        { texto: "d. No, no disponemos de este recurso ni lo dispondremos en un futuro.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Fomentar el respeto a la identidad de género de cada persona y prohibir la discriminación por identidad de género." },
        { texto: "Ofrecer capacitación sobre diversidad de género y sensibilización sobre identidades transgénero." },
        { texto: "Implementar políticas de inclusión y adaptaciones para garantizar un entorno seguro para personas de diferentes identidades de género." }
      ]
    },
    {
      texto: "23. ¿Para un mismo puesto de trabajo, se remunera igual a hombres y mujeres?",
      respuesta: [
        { texto: "a. Sí, se remunera según convenio.", valor: 5 },
        { texto: "b. No, las mujeres están mejor remuneradas.", valor: 0 },
        { texto: "c. No, los hombres están mejor remunerados.", valor: 0 },
      ],
      recomendaciones: [
        { texto: "Fomentar la aceptación y el respeto hacia todas las orientaciones sexuales mediante políticas de inclusión y no discriminación." },
        { texto: "Ofrecer formación sobre diversidad sexual y sensibilización sobre discriminación por orientación sexual." },
        { texto: "Implementar medidas para prevenir y abordar casos de discriminación por orientación sexual en el lugar de trabajo." }
      ]
    },
    {
      texto: "24. ¿Existe conocimiento sobre el “techo de cristal”?",
      respuesta: [
        { texto: "a. Sí y por ello desarrollamos políticas y ofrecemos condiciones laborales que apacigüen este fenómeno.", valor: 5 },
        { texto: "b. Sí pero no se ha desarrollado ningún protocolo para evitarlo.", valor: 0 },
        { texto: "c. No tenemos conocimiento sobre ello.", valor: 2 }

      ],
      recomendaciones: [
        { texto: "Fomentar la contratación intergeneracional y ofrecer programas de mentoría para empleados de diferentes edades." }
      ]
    },
    {
      texto: "25. ¿A la hora de despedir a un trabajador se tiene en cuenta el género ?",
      respuesta: [
        { texto: "a. Si, se tienen más facilidades para prescindir de una mujer", valor: 0 },
        { texto: "b. No, a la hora de tomar una decisión no se tiene en cuenta el sexo", valor: 5 },
        { texto: "c. Si, es más fácil despedir a alguien si es hombre", valor: 0 },
      ],
      recomendaciones: [
        { texto: "Realizar revisiones periódicas de sueldos para garantizar la equidad salarial." },
        { texto: "Implementar políticas de transparencia salarial y prohibir la discriminación salarial por género." },
        { texto: "Realizar auditorías salariales para identificar y corregir posibles brechas salariales de género." }
      ]
    },
    {
      texto: "26. Al adquirir un producto o servicio, ¿investiga si la empresa proveedora fomenta la igualdad de género?",
      respuesta: [
        { texto: "a. Sí, hacemos un estudio de la empresa para comprobar si fomentan la igualdad.", valor: 5 },
        { texto: "b. No, pero planeamos en un futuro proceder a investigar a las empresas proveedoras, para contribuir de esta manera a la igualdad de género.", valor: 2 },
        { texto: "c. No lo tenemos en cuenta.", valor: 0 },
      ],
      recomendaciones: [
        { texto: "Promover la contratación de empleados de diversas culturas y origen étnico." },
        { texto: "Organizar eventos y actividades para celebrar y promover la diversidad cultural." },
        { texto: "Ofrecer programas de capacitación sobre sensibilización cultural y competencia intercultural." }
      ]
    },
    {
      texto: "27. ¿Qué medidas toma tu empresa para prevenir el mobbing por motivos de género?",
      respuesta: [
        { texto: "a. La jornada laboral está adaptada a las necesidades de los empleados", valor: 5 },
        { texto: "b. La jornada laboral tiene una jornada con márgenes para entrada y salida", valor: 3 },
        { texto: "c. No tenemos ninguna modalidad de horarios flexibles", valor: 0 },
      ],
      recomendaciones: [
        { texto: "Proporcionar programas de capacitación para empleados en temas de género, diversidad e inclusión." }
      ]
    },
    {
      texto: "28. ¿Existen horarios de trabajos flexibles para todos en tu empresa?",
      respuesta: [
        { texto: "a. El trato para los clientes es formal y adecuado para cada uno de ellos, sin tener restricciones por el género y fomentando la importancia de la igualdad de género", valor: 5 },
        { texto: "b. No se tienen en cuenta diferentes formalidades para el género de cada cliente", valor: 3 },
        { texto: "c. Según el género no damos ningún tipo de información.", valor: 2 },
        { texto: "d. Se prioriza un género exclusivo como cliente, buscando la exclusión y desinterés por el otro.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Establecer un canal de denuncias seguro y confidencial para abordar problemas de discriminación." }
      ]
    },
    {
      texto: "29. ¿La empresa contrata y/o promueve a los trabajadores por talento y méritos propios?",
      respuesta: [
        { texto: "a. Sí, la empresa únicamente contrata y/o promueve a los trabajadores por su valía y no tiene en cuenta otros factores como el género, religión, procedencia etc.", valor: 5 },
        { texto: "b. No, la empresa no sólo contrata y/o promueve a los trabajadores por su valía, a veces influye en la toma de decisiones factores como el género, religión, procedencia etc.", valor: 2 },
        { texto: "c. No, la empresa sólo contrata y/o promueve a los trabajadores por factores como el género, religión, procedencia etc.", valor: 0 },
      ],
      recomendaciones: [
        { texto: "Establecer normativas claras sobre el lenguaje utilizado en espacios de trabajo y en reuniones y aplicar un sistema de sanciones en caso de uso de mensajes discriminatorios." },
        { texto: "Proporcionar a los trabajadores formaciones y talleres de sensibilización sobre la importancia de un lenguaje no sexista." },
        { texto: "Realizar un manual de lenguaje no sexista que cualquier empleado o empleada podrá utilizar." }
      ]
    },
    {
      texto: "30. ¿ Se cometen en tu empresa de forma habitual situaciones que lleven a una discriminación positiva?",
      respuesta: [
        { texto: "a. Sí, constantemente.", valor: 0 },
        { texto: "b. Sí pero son penadas o corregidas.", valor: 2 },
        { texto: "c. No, se evita en la mayor medida posible.", valor: 5 },
      ],
      recomendaciones: [
        { texto: "Utilizar métodos de reclutamiento y selección que promuevan la diversidad y la igualdad de oportunidades." },
        { texto: "Revisar y actualizar regularmente los procesos de reclutamiento y selección para eliminar sesgos y prejuicios." },
        { texto: "Ofrecer formación y capacitación a los responsables de selección para promover prácticas justas e inclusivas." }
      ]
    }
  ]
}


document.addEventListener("DOMContentLoaded", () => mostrarPregunta(indicePreguntaActual));

let indicePreguntaActual = 0;
let respuestasSeleccionadas = new Map();
let puntuacionTotal = 0;

function mostrarPregunta(indice) {
  const pregunta = ods.pregunta[indice];
  const contenedorPreguntas = document.getElementById("contenedor-form");
  contenedorPreguntas.innerHTML = "";

  const contenedorPregunta = document.createElement("div");
  contenedorPregunta.className = "contenedor-pregunta";
  contenedorPregunta.innerHTML = `<h2>${pregunta.texto}</h2>`;

  const contenedorRespuestas = document.createElement("div");
  contenedorRespuestas.className = "contenedor-respuestas";

  pregunta.respuesta.forEach((respuesta) => {
    const divRespuesta = document.createElement("div");
    divRespuesta.className = "respuesta";
    divRespuesta.textContent = respuesta.texto;
    divRespuesta.dataset.valor = respuesta.valor;
    const preguntaActual = pregunta.texto;
    if (respuestasSeleccionadas.has(preguntaActual) && respuestasSeleccionadas.get(preguntaActual) === respuesta.valor) {
      divRespuesta.classList.add("active");
    }
    divRespuesta.addEventListener("click", () => seleccionarRespuesta(preguntaActual, respuesta.valor, divRespuesta));
    contenedorRespuestas.appendChild(divRespuesta);
  });

  contenedorPregunta.appendChild(contenedorRespuestas);
  contenedorPreguntas.appendChild(contenedorPregunta);

  const contenedorBotones = document.createElement("div");
  contenedorBotones.className = "contenedor-botones";

  const btnPrev = crearBoton("Anterior", mostrarPreguntaAnterior);
  const btnNext = crearBoton("Siguiente", () => {
    if (indice === ods.pregunta.length - 1) {
      mostrarResultado();
    } else {
      if (respuestasSeleccionadas.has(pregunta.texto)) {
        mostrarPreguntaSiguiente();
      } else {
        alert("Por favor, selecciona una respuesta antes de continuar.");
      }
    }
  });

  if (indice === 0) {
    btnPrev.style.display = "none";
  }

  contenedorBotones.appendChild(btnPrev);
  contenedorBotones.appendChild(btnNext);
  contenedorPreguntas.appendChild(contenedorBotones);
}

function mostrarPreguntaSiguiente() {
  const indiceSiguiente = indicePreguntaActual + 1;
  if (indiceSiguiente < ods.pregunta.length) {
    indicePreguntaActual = indiceSiguiente;
    mostrarPregunta(indicePreguntaActual);
  }
}

function mostrarPreguntaAnterior() {
  const indiceAnterior = indicePreguntaActual - 1;
  if (indiceAnterior >= 0) {
    indicePreguntaActual = indiceAnterior;
    mostrarPregunta(indicePreguntaActual);
  }
}

function crearBoton(texto, onClick) {
  const btn = document.createElement("button");
  btn.textContent = texto;
  btn.addEventListener("click", onClick);
  return btn;
}

function seleccionarRespuesta(pregunta, valorRespuesta, divRespuesta) {
  const respuestaText = divRespuesta.textContent.trim(); 
  if (divRespuesta.classList.contains('active')) {
    divRespuesta.classList.remove('active');
    puntuacionTotal -= valorRespuesta;
    respuestasSeleccionadas.delete(pregunta);
  } else {
    document.querySelectorAll('.respuesta.active').forEach(respuesta => respuesta.classList.remove('active'));
    divRespuesta.classList.add('active');
    puntuacionTotal += valorRespuesta;
    respuestasSeleccionadas.set(pregunta, valorRespuesta);
  }

  mostrarPuntuacionTotal(puntuacionTotal);
}

function mostrarResultado() {
  const contenedorPreguntas = document.getElementById("contenedor-form");
  contenedorPreguntas.innerHTML = "";

  const contenedorResultado = document.getElementById("recomendaciones-contenedor");
  contenedorResultado.style.display = "block";
  contenedorResultado.innerHTML = "";

  const botonDescarga = document.createElement('button');
  botonDescarga.id = 'botonDescarga';
  botonDescarga.textContent = 'Descargar resultados';
  botonDescarga.addEventListener('click', descargarResultados);
  contenedorResultado.appendChild(botonDescarga);

  const puntuacionUsuario = document.createElement('div');
  puntuacionUsuario.textContent = `Tu puntuación total: ${puntuacionTotal}`;
  puntuacionUsuario.id = 'puntuacionUsuario'
  contenedorResultado.appendChild(puntuacionUsuario);

  const puntuacionMaxima = document.createElement('div');
  puntuacionMaxima.id = 'puntuacionMax'
  puntuacionMaxima.textContent = `Puntuación Máxima: 150`;
  contenedorResultado.appendChild(puntuacionMaxima);

  generarRecomendaciones(contenedorResultado);

  // Mostrar mensaje adicional
  const mensajeAdicional = obtenerMensajeAdicional(puntuacionTotal);
  const contenedorMensajeAdicional = document.createElement('div');
  contenedorMensajeAdicional.id = 'mensajeAdicional';
  contenedorMensajeAdicional.appendChild(mensajeAdicional);
  contenedorResultado.appendChild(contenedorMensajeAdicional);

  const recomendacionElementos = document.querySelectorAll('.recomendacion-elemento');

  recomendacionElementos.forEach((recomendacionElemento) => {
    recomendacionElemento.addEventListener('click', () => {
      const recomendaciones = recomendacionElemento.querySelector('.recomendaciones');
      if (recomendaciones.style.display === 'none' || recomendaciones.style.display === '') {
        recomendaciones.style.display = 'flex';
      } else {
        recomendaciones.style.display = 'none';
      }
    });
  });
}

function obtenerMensajeAdicional(puntuacionTotal) {
  const mensajeAdicional = document.createElement('div');
  if (puntuacionTotal < 75) {
    mensajeAdicional.innerHTML = `MAL 🙁 ESPABILA 😡<br>Haz click para ver tus recomendaciones`;
  } else if (puntuacionTotal >= 75 && puntuacionTotal < 100) {
    mensajeAdicional.innerHTML = `MEJORABLE 😕 CONFIAMOS EN TI 😔<br>Haz click para ver tus recomendaciones`;
  } else if (puntuacionTotal >= 100 && puntuacionTotal < 140) {
    mensajeAdicional.innerHTML = `POR EL BUEN CAMINO 😊 SIGA TRABAJANDO EN ELLO 👍<br>Haz click para ver tus recomendaciones`;
  } else {
    mensajeAdicional.innerHTML = `EXCELENTE 😃 SIGUE ASÍ `;
  }
  return mensajeAdicional;
}

function generarRecomendaciones(contenedorResultado) {
  ods.pregunta.forEach((pregunta) => {
    const cantidadRecomendaciones = calcularCantidadRecomendaciones(puntuacionTotal);
    const recomendaciones = pregunta.recomendaciones.slice(0, cantidadRecomendaciones);

    const recomendacionElemento = document.createElement('div');
    recomendacionElemento.classList.add('recomendacion-elemento');
    recomendacionElemento.textContent = `Pregunta: ${pregunta.texto}`;

    if (recomendaciones.length > 0) {
      const recomendacionesContainer = document.createElement('div');
      recomendacionesContainer.classList.add('recomendaciones');
      recomendaciones.forEach((recomendacion, index) => {
        const recomendacionItem = document.createElement('div');
        recomendacionItem.id = 'recomendacionItem';

        // Crear elemento <h2> para el título de la recomendación
        const tituloRecomendacion = document.createElement('h2');
        tituloRecomendacion.textContent = `Recomendación ${index + 1}:`;
        // Agregar elemento <h2> al elemento recomendacionItem
        recomendacionItem.appendChild(tituloRecomendacion);

        // Crear elemento <p> para el texto de la recomendación
        const textoRecomendacion = document.createElement('p');
        textoRecomendacion.textContent = recomendacion.texto;
        // Agregar elemento <p> al elemento recomendacionItem
        recomendacionItem.appendChild(textoRecomendacion);

        // Agregar recomendacionItem al contenedor de recomendaciones
        recomendacionesContainer.appendChild(recomendacionItem);
      });
      // Agregar recomendacionesContainer al elemento recomendacionElemento
      recomendacionElemento.appendChild(recomendacionesContainer);
    }

    // Agregar recomendacionElemento al contenedorResultado
    contenedorResultado.appendChild(recomendacionElemento);
  });
}


function calcularCantidadRecomendaciones(puntuacionTotal) {
  let cantidadRecomendaciones = 0;
  if (puntuacionTotal < 75) {
    cantidadRecomendaciones = 3;
  } else if (puntuacionTotal >= 75 && puntuacionTotal <= 100) {
    cantidadRecomendaciones = 2;
  } else if (puntuacionTotal >= 101 && puntuacionTotal <= 139) {
    cantidadRecomendaciones = 1;
  } else {
    cantidadRecomendaciones = 0;
  }
  return cantidadRecomendaciones;
}

function descargarResultados() {
  // Crear un elemento <a> para la descarga
  const enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = obtenerContenidoDescargable(); // Llama a una función para obtener el contenido a descargar
  enlaceDescarga.download = 'resultados_y_recomendaciones.txt'; // Nombre del archivo a descargar
  enlaceDescarga.click(); // Simula un clic en el enlace para iniciar la descarga
}

function obtenerContenidoDescargable() {
  let contenido = `Puntuación total: ${puntuacionTotal}\n\n`;

  // Agregar las recomendaciones
  ods.pregunta.forEach((pregunta) => {
    contenido += `Pregunta: ${pregunta.texto}\n`;
    const cantidadRecomendaciones = calcularCantidadRecomendaciones(puntuacionTotal);
    const recomendaciones = pregunta.recomendaciones.slice(0, cantidadRecomendaciones);
    recomendaciones.forEach((recomendacion, index) => {
      contenido += `Recomendación ${index + 1}: ${recomendacion.texto}\n`;
    });
    contenido += '\n';
  });

  return URL.createObjectURL(new Blob([contenido], { type: 'text/plain' }));
}
