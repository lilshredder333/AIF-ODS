

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
        { texto: "c. Realizar un manual de lenguaje no sexista que cualquier empleado o empleada podrá utilizar.", valor: 4 },
        { texto: "d. No tomamos medidas específicas.", valor: 0 }
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
      texto: "5. ¿Vuestra empresa cuenta con un canal de denuncias seguro y confidencial para abordar problemas de discriminación?",
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
      texto: "6. ¿Qué medidas habéis implementado para garantizar un lenguaje inclusivo y no discriminatorio en las interacciones con clientes?",
      respuesta: [
        { texto: "a. Entre el 100 y el 80% de la dirección", valor: 5 },
        { texto: "b. De un 79% a un 60% de la dirección", valor: 4 },
        { texto: "c. De un 59% a un 40% de la dirección", valor: 3 },
        { texto: "d. Menos del 40% de la dirección", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Establecer un protocolo claro de comunicación inclusiva para el personal de atención al cliente." },
        { texto: "Proporcionar capacitación periódica sobre el uso de un lenguaje inclusivo y no discriminatorio." }
      ]
    },
    {
      texto: "7. ¿Ofrecéis programas de mentoría o capacitación para mujeres en posiciones de liderazgo?",
      respuesta: [
        { texto: "a. Sí, ofrecemos programas específicos de mentoría y capacitación para mujeres en posiciones de liderazgo.", valor: 5 },
        { texto: "b. Estamos en proceso de desarrollar programas de mentoría y capacitación para mujeres en posiciones de liderazgo.", valor: 3 },
        { texto: "c. No, no ofrecemos programas específicos de mentoría y capacitación para mujeres en posiciones de liderazgo en este momento.", valor: 2 },
        { texto: "d. No estoy seguro/a de si la empresa ofrece este tipo de programas.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Desarrollar programas de mentoría y capacitación para mujeres en posiciones de liderazgo para fomentar la igualdad de género en la empresa." }
      ]
    },
    {
      texto: "8. ¿Cómo fomentáis la diversidad cultural dentro de la empresa?",
      respuesta: [
        { texto: "a. Promovemos la contratación de empleados de diversas culturas y origen étnico.", valor: 5 },
        { texto: "b. Organizamos eventos y actividades para celebrar y promover la diversidad cultural.", valor: 4 },
        { texto: "c. Ofrecemos programas de capacitación sobre sensibilización cultural y competencia intercultural.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para fomentar la diversidad cultural en la empresa.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Promover la contratación de empleados de diversas culturas y origen étnico." },
        { texto: "Organizar eventos y actividades para celebrar y promover la diversidad cultural." },
        { texto: "Ofrecer programas de capacitación sobre sensibilización cultural y competencia intercultural." }
      ]
    },
    {
      texto: "9. ¿Cómo garantizáis la igualdad de oportunidades para personas con discapacidad?",
      respuesta: [
        { texto: "a. Contamos con políticas de inclusión activa y adaptaciones razonables para personas con discapacidad.", valor: 5 },
        { texto: "b. Ofrecemos programas de capacitación sobre inclusión y sensibilización sobre discapacidad.", valor: 4 },
        { texto: "c. Adaptamos los puestos de trabajo y proporcionamos apoyo adicional según las necesidades de cada persona con discapacidad.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para garantizar la igualdad de oportunidades para personas con discapacidad.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Implementar políticas de inclusión activa y adaptaciones razonables para personas con discapacidad." },
        { texto: "Ofrecer programas de capacitación sobre inclusión y sensibilización sobre discapacidad." },
        { texto: "Adaptar los puestos de trabajo y proporcionar apoyo adicional según las necesidades de cada persona con discapacidad." }
      ]
    },
    {
      texto: "10. ¿Qué medidas tomáis para promover la igualdad salarial entre hombres y mujeres?",
      respuesta: [
        { texto: "a. Realizamos revisiones periódicas de sueldos para garantizar la equidad salarial.", valor: 5 },
        { texto: "b. Tenemos políticas de transparencia salarial y prohibimos la discriminación salarial por género.", valor: 4 },
        { texto: "c. Realizamos auditorías salariales para identificar y corregir posibles brechas salariales de género.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para promover la igualdad salarial entre hombres y mujeres.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Realizar revisiones periódicas de sueldos para garantizar la equidad salarial." },
        { texto: "Implementar políticas de transparencia salarial y prohibir la discriminación salarial por género." },
        { texto: "Realizar auditorías salariales para identificar y corregir posibles brechas salariales de género." }
      ]
    },
    {
      texto: "11. ¿Cómo promovéis un ambiente de trabajo inclusivo para personas LGBTQ+?",
      respuesta: [
        { texto: "a. Tenemos políticas de no discriminación por orientación sexual e identidad de género.", valor: 5 },
        { texto: "b. Ofrecemos capacitación sobre diversidad sexual y de género para empleados y directivos.", valor: 4 },
        { texto: "c. Organizamos eventos y actividades para celebrar la diversidad LGBTQ+.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para promover un ambiente de trabajo inclusivo para personas LGBTQ+.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Implementar políticas de no discriminación por orientación sexual e identidad de género." },
        { texto: "Ofrecer capacitación sobre diversidad sexual y de género para empleados y directivos." },
        { texto: "Organizar eventos y actividades para celebrar la diversidad LGBTQ+." }
      ]
    },
    {
      texto: "12. ¿Qué medidas tomáis para asegurar la igualdad de oportunidades para personas de diferentes edades?",
      respuesta: [
        { texto: "a. Fomentamos la contratación intergeneracional y ofrecemos programas de mentoría.", valor: 5 },
        { texto: "b. No tenemos medidas específicas para asegurar la igualdad de oportunidades para personas de diferentes edades.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Fomentar la contratación intergeneracional y ofrecer programas de mentoría para empleados de diferentes edades." }
      ]
    },
    {
      texto: "13. ¿Qué acciones realizáis para fomentar la participación y representación de mujeres en puestos directivos y de liderazgo?",
      respuesta: [
        { texto: "a. Implementamos políticas de cuotas de género para garantizar una representación equitativa de mujeres en puestos directivos y de liderazgo.", valor: 5 },
        { texto: "b. Ofrecemos programas de desarrollo profesional y mentoría específicamente diseñados para mujeres.", valor: 4 },
        { texto: "c. Fomentamos la visibilidad y reconocimiento de los logros de las mujeres en la empresa.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para fomentar la participación y representación de mujeres en puestos directivos y de liderazgo.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Implementar políticas de cuotas de género para garantizar una representación equitativa de mujeres en puestos directivos y de liderazgo." },
        { texto: "Ofrecer programas de desarrollo profesional y mentoría específicamente diseñados para mujeres." },
        { texto: "Fomentar la visibilidad y reconocimiento de los logros de las mujeres en la empresa." }
      ]
    },
    {
      texto: "14. ¿Qué acciones lleváis a cabo para fomentar un ambiente de trabajo inclusivo para personas con diferentes habilidades y condiciones de salud?",
      respuesta: [
        { texto: "a. Contamos con políticas de inclusión y adaptaciones razonables para personas con diferentes habilidades y condiciones de salud.", valor: 5 },
        { texto: "b. Ofrecemos programas de sensibilización y capacitación sobre diversidad funcional para empleados y directivos.", valor: 4 },
        { texto: "c. Adaptamos los espacios de trabajo y proporcionamos apoyo adicional según las necesidades de cada persona con diferentes habilidades y condiciones de salud.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para fomentar un ambiente de trabajo inclusivo para personas con diferentes habilidades y condiciones de salud.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Implementar políticas de inclusión y adaptaciones razonables para personas con diferentes habilidades y condiciones de salud." },
        { texto: "Ofrecer programas de sensibilización y capacitación sobre diversidad funcional para empleados y directivos." },
        { texto: "Adaptar los espacios de trabajo y proporcionar apoyo adicional según las necesidades de cada persona con diferentes habilidades y condiciones de salud." }
      ]
    },
    {
      texto: "15. ¿Qué medidas habéis implementado para garantizar la igualdad de oportunidades para personas de diferentes orígenes socioeconómicos?",
      respuesta: [
        { texto: "a. Ofrecemos oportunidades de desarrollo profesional y ascenso basadas en el rendimiento y habilidades, independientemente del origen socioeconómico.", valor: 5 },
        { texto: "b. Proporcionamos programas de capacitación y mentoría para empleados de diferentes orígenes socioeconómicos.", valor: 4 },
        { texto: "c. Implementamos políticas de equidad salarial y beneficios que favorezcan a empleados de diferentes orígenes socioeconómicos.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para garantizar la igualdad de oportunidades para personas de diferentes orígenes socioeconómicos.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Ofrecer oportunidades de desarrollo profesional y ascenso basadas en el rendimiento y habilidades, independientemente del origen socioeconómico." },
        { texto: "Proporcionar programas de capacitación y mentoría para empleados de diferentes orígenes socioeconómicos." },
        { texto: "Implementar políticas de equidad salarial y beneficios que favorezcan a empleados de diferentes orígenes socioeconómicos." }
      ]
    },
    {
      texto: "16. ¿Qué medidas habéis implementado para garantizar un ambiente de trabajo seguro y libre de acoso sexual?",
      respuesta: [
        { texto: "a. Contamos con políticas de tolerancia cero hacia el acoso sexual y procedimientos claros para reportar y abordar casos de acoso.", valor: 5 },
        { texto: "b. Ofrecemos programas de sensibilización y capacitación sobre acoso sexual para empleados y directivos.", valor: 4 },
        { texto: "c. Fomentamos una cultura de respeto y empatía en el lugar de trabajo mediante actividades y campañas de concienciación.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para garantizar un ambiente de trabajo seguro y libre de acoso sexual.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Implementar políticas de tolerancia cero hacia el acoso sexual y procedimientos claros para reportar y abordar casos de acoso." },
        { texto: "Ofrecer programas de sensibilización y capacitación sobre acoso sexual para empleados y directivos." },
        { texto: "Fomentar una cultura de respeto y empatía en el lugar de trabajo mediante actividades y campañas de concienciación." }
      ]
    },
    {
      texto: "17. ¿Qué medidas tomáis para garantizar la igualdad de oportunidades para personas con diferentes niveles de educación?",
      respuesta: [
        { texto: "a. Ofrecemos oportunidades de formación continua y desarrollo profesional para todos los empleados, independientemente de su nivel educativo.", valor: 5 },
        { texto: "b. Adaptamos los procesos de selección y promoción para valorar las habilidades y experiencia por encima del nivel educativo.", valor: 4 },
        { texto: "c. Proporcionamos apoyo y recursos adicionales para empleados con menor nivel educativo.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para garantizar la igualdad de oportunidades para personas con diferentes niveles de educación.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Ofrecer oportunidades de formación continua y desarrollo profesional para todos los empleados, independientemente de su nivel educativo." },
        { texto: "Adaptar los procesos de selección y promoción para valorar las habilidades y experiencia por encima del nivel educativo." },
        { texto: "Proporcionar apoyo y recursos adicionales para empleados con menor nivel educativo." }
      ]
    },
    {
      texto: "18. ¿Qué acciones lleváis a cabo para fomentar la participación y representación de personas de diferentes géneros en equipos de trabajo y proyectos?",
      respuesta: [
        { texto: "a. Promovemos la diversidad de género en la formación de equipos y proyectos mediante políticas de inclusión y equidad.", valor: 5 },
        { texto: "b. Fomentamos la colaboración y el intercambio de ideas entre personas de diferentes géneros en todos los niveles de la empresa.", valor: 4 },
        { texto: "c. Implementamos medidas para evitar sesgos de género en la selección y asignación de proyectos y responsabilidades.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para fomentar la participación y representación de personas de diferentes géneros en equipos de trabajo y proyectos.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Promover la diversidad de género en la formación de equipos y proyectos mediante políticas de inclusión y equidad." },
        { texto: "Fomentar la colaboración y el intercambio de ideas entre personas de diferentes géneros en todos los niveles de la empresa." },
        { texto: "Implementar medidas para evitar sesgos de género en la selección y asignación de proyectos y responsabilidades." }
      ]
    },
    {
      texto: "19. ¿Qué medidas habéis implementado para promover un ambiente de trabajo seguro y respetuoso para personas de diferentes identidades religiosas?",
      respuesta: [
        { texto: "a. Fomentamos la tolerancia religiosa y el respeto mutuo mediante políticas de diversidad e inclusión.", valor: 5 },
        { texto: "b. Ofrecemos espacios de reflexión y diálogo interreligioso para empleados de diferentes identidades religiosas.", valor: 4 },
        { texto: "c. Adaptamos los horarios y prácticas laborales para respetar las festividades religiosas de todas las religiones representadas en la empresa.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para promover un ambiente de trabajo seguro y respetuoso para personas de diferentes identidades religiosas.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Fomentar la tolerancia religiosa y el respeto mutuo mediante políticas de diversidad e inclusión." },
        { texto: "Ofrecer espacios de reflexión y diálogo interreligioso para empleados de diferentes identidades religiosas." },
        { texto: "Adaptar los horarios y prácticas laborales para respetar las festividades religiosas de todas las religiones representadas en la empresa." }
      ]
    },
    {
      texto: "20. ¿Qué medidas habéis implementado para promover un ambiente de trabajo seguro y respetuoso para personas de diferentes identidades de género?",
      respuesta: [
        { texto: "a. Fomentamos el respeto a la identidad de género de cada persona y prohibimos la discriminación por identidad de género.", valor: 5 },
        { texto: "b. Ofrecemos capacitación sobre diversidad de género y sensibilización sobre identidades transgénero.", valor: 4 },
        { texto: "c. Implementamos políticas de inclusión y adaptaciones para garantizar un entorno seguro para personas de diferentes identidades de género.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para promover un ambiente de trabajo seguro y respetuoso para personas de diferentes identidades de género.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Fomentar el respeto a la identidad de género de cada persona y prohibir la discriminación por identidad de género." },
        { texto: "Ofrecer capacitación sobre diversidad de género y sensibilización sobre identidades transgénero." },
        { texto: "Implementar políticas de inclusión y adaptaciones para garantizar un entorno seguro para personas de diferentes identidades de género." }
      ]
    },
    {
      texto: "21. ¿Qué medidas tomáis para promover la igualdad de oportunidades para personas de diferentes orientaciones sexuales?",
      respuesta: [
        { texto: "a. Fomentamos la aceptación y el respeto hacia todas las orientaciones sexuales mediante políticas de inclusión y no discriminación.", valor: 5 },
        { texto: "b. Ofrecemos formación sobre diversidad sexual y sensibilización sobre discriminación por orientación sexual.", valor: 4 },
        { texto: "c. Implementamos medidas para prevenir y abordar casos de discriminación por orientación sexual en el lugar de trabajo.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para promover la igualdad de oportunidades para personas de diferentes orientaciones sexuales.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Fomentar la aceptación y el respeto hacia todas las orientaciones sexuales mediante políticas de inclusión y no discriminación." },
        { texto: "Ofrecer formación sobre diversidad sexual y sensibilización sobre discriminación por orientación sexual." },
        { texto: "Implementar medidas para prevenir y abordar casos de discriminación por orientación sexual en el lugar de trabajo." }
      ]
    },
    {
      texto: "22. ¿Qué medidas habéis implementado para promover un ambiente de trabajo seguro y respetuoso para personas de diferentes identidades de género?",
      respuesta: [
        { texto: "a. Fomentamos el respeto a la identidad de género de cada persona y prohibimos la discriminación por identidad de género.", valor: 5 },
        { texto: "b. Ofrecemos capacitación sobre diversidad de género y sensibilización sobre identidades transgénero.", valor: 4 },
        { texto: "c. Implementamos políticas de inclusión y adaptaciones para garantizar un entorno seguro para personas de diferentes identidades de género.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para promover un ambiente de trabajo seguro y respetuoso para personas de diferentes identidades de género.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Fomentar el respeto a la identidad de género de cada persona y prohibir la discriminación por identidad de género." },
        { texto: "Ofrecer capacitación sobre diversidad de género y sensibilización sobre identidades transgénero." },
        { texto: "Implementar políticas de inclusión y adaptaciones para garantizar un entorno seguro para personas de diferentes identidades de género." }
      ]
    },
    {
      texto: "23. ¿Qué medidas tomáis para promover la igualdad de oportunidades para personas de diferentes orientaciones sexuales?",
      respuesta: [
        { texto: "a. Fomentamos la aceptación y el respeto hacia todas las orientaciones sexuales mediante políticas de inclusión y no discriminación.", valor: 5 },
        { texto: "b. Ofrecemos formación sobre diversidad sexual y sensibilización sobre discriminación por orientación sexual.", valor: 4 },
        { texto: "c. Implementamos medidas para prevenir y abordar casos de discriminación por orientación sexual en el lugar de trabajo.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para promover la igualdad de oportunidades para personas de diferentes orientaciones sexuales.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Fomentar la aceptación y el respeto hacia todas las orientaciones sexuales mediante políticas de inclusión y no discriminación." },
        { texto: "Ofrecer formación sobre diversidad sexual y sensibilización sobre discriminación por orientación sexual." },
        { texto: "Implementar medidas para prevenir y abordar casos de discriminación por orientación sexual en el lugar de trabajo." }
      ]
    },
    {
      texto: "24. ¿Qué medidas tomáis para promover la igualdad de oportunidades para personas de diferentes edades?",
      respuesta: [
        { texto: "a. Fomentamos la contratación intergeneracional y ofrecemos programas de mentoría.", valor: 5 },
        { texto: "b. No tenemos medidas específicas para promover la igualdad de oportunidades para personas de diferentes edades.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Fomentar la contratación intergeneracional y ofrecer programas de mentoría para empleados de diferentes edades." }
      ]
    },
    {
      texto: "25. ¿Qué medidas tomáis para promover la igualdad salarial entre hombres y mujeres?",
      respuesta: [
        { texto: "a. Realizamos revisiones periódicas de sueldos para garantizar la equidad salarial.", valor: 5 },
        { texto: "b. Tenemos políticas de transparencia salarial y prohibimos la discriminación salarial por género.", valor: 4 },
        { texto: "c. Realizamos auditorías salariales para identificar y corregir posibles brechas salariales de género.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para promover la igualdad salarial entre hombres y mujeres.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Realizar revisiones periódicas de sueldos para garantizar la equidad salarial." },
        { texto: "Implementar políticas de transparencia salarial y prohibir la discriminación salarial por género." },
        { texto: "Realizar auditorías salariales para identificar y corregir posibles brechas salariales de género." }
      ]
    },
    {
      texto: "26. ¿Qué acciones lleváis a cabo para fomentar la diversidad cultural dentro de la empresa?",
      respuesta: [
        { texto: "a. Promovemos la contratación de empleados de diversas culturas y origen étnico.", valor: 5 },
        { texto: "b. Organizamos eventos y actividades para celebrar y promover la diversidad cultural.", valor: 4 },
        { texto: "c. Ofrecemos programas de capacitación sobre sensibilización cultural y competencia intercultural.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para fomentar la diversidad cultural en la empresa.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Promover la contratación de empleados de diversas culturas y origen étnico." },
        { texto: "Organizar eventos y actividades para celebrar y promover la diversidad cultural." },
        { texto: "Ofrecer programas de capacitación sobre sensibilización cultural y competencia intercultural." }
      ]
    },
    {
      texto: "27. ¿Qué acciones lleváis a cabo para fomentar la capacitación y sensibilización en temas de género, diversidad e inclusión?",
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
      texto: "28. ¿Vuestra empresa cuenta con un canal de denuncias seguro y confidencial para abordar problemas de discriminación?",
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
      texto: "29. ¿Qué medidas habéis implementado para promover un lenguaje inclusivo y no sexista en el entorno laboral?",
      respuesta: [
        { texto: "a. Establecer normativas claras sobre el lenguaje utilizado en espacios de trabajo y en reuniones y aplicar un sistema de sanciones en caso de uso de mensajes discriminatorios.", valor: 5 },
        { texto: "b. Proporcionar a los trabajadores formaciones y talleres de sensibilización sobre la importancia de un lenguaje no sexista.", valor: 4 },
        { texto: "c. Realizar un manual de lenguaje no sexista que cualquier empleado o empleada podrá utilizar.", valor: 4 },
        { texto: "d. No tomamos medidas específicas.", valor: 0 }
      ],
      recomendaciones: [
        { texto: "Establecer normativas claras sobre el lenguaje utilizado en espacios de trabajo y en reuniones y aplicar un sistema de sanciones en caso de uso de mensajes discriminatorios." },
        { texto: "Proporcionar a los trabajadores formaciones y talleres de sensibilización sobre la importancia de un lenguaje no sexista." },
        { texto: "Realizar un manual de lenguaje no sexista que cualquier empleado o empleada podrá utilizar." }
      ]
    },
    {
      texto: "30. ¿Qué medidas tomáis para garantizar que el reclutamiento y la selección de personal se realicen de manera justa e inclusiva?",
      respuesta: [
        { texto: "a. Utilizamos métodos de reclutamiento y selección que promueven la diversidad y la igualdad de oportunidades.", valor: 5 },
        { texto: "b. Revisamos y actualizamos regularmente nuestros procesos de reclutamiento y selección para eliminar sesgos y prejuicios.", valor: 4 },
        { texto: "c. Ofrecemos formación y capacitación a los responsables de selección para promover prácticas justas e inclusivas.", valor: 4 },
        { texto: "d. No tenemos medidas específicas para garantizar que el reclutamiento y la selección de personal se realicen de manera justa e inclusiva.", valor: 2 }
      ],
      recomendaciones: [
        { texto: "Utilizar métodos de reclutamiento y selección que promuevan la diversidad y la igualdad de oportunidades." },
        { texto: "Revisar y actualizar regularmente los procesos de reclutamiento y selección para eliminar sesgos y prejuicios." },
        { texto: "Ofrecer formación y capacitación a los responsables de selección para promover prácticas justas e inclusivas." }
      ]
    }
  ]
}


document.addEventListener("DOMContentLoaded", function () {
  mostrarPregunta(0); // Llama a la función para mostrar la primera pregunta cuando el DOM esté completamente cargado
});

let indicePreguntaActual = 0;
let respuestasSeleccionadas = new Map(); // Almacena temporalmente las respuestas seleccionadas

// Función para mostrar la pregunta actual en el formulario
function mostrarPregunta(indice) {
  // Obtengo la pregunta actual del conjunto de datos
  const pregunta = ods.pregunta[indice];

  // Selecciono el contenedor donde se mostrará la pregunta y las respuestas
  const contenedorPreguntas = document.getElementById("contenedor-form");
  contenedorPreguntas.innerHTML = "";

  // Creo un contenedor para la pregunta actual
  const contenedorPregunta = document.createElement("div");
  contenedorPregunta.classList.add("contenedor-pregunta");

  // Creo un elemento de encabezado para mostrar el texto de la pregunta
  const textoPregunta = document.createElement("h2");
  textoPregunta.textContent = pregunta.texto;

  // Añado el texto de la pregunta al contenedor de la pregunta
  contenedorPregunta.appendChild(textoPregunta);

  // Creo un contenedor para todas las respuestas de la pregunta actual
  const contenedorRespuestas = document.createElement("div");
  contenedorRespuestas.classList.add("contenedor-respuestas");

  // Creo los divs de respuesta utilizando map
  pregunta.respuesta.forEach((respuesta, index) => {
    const divRespuesta = document.createElement("div");
    divRespuesta.classList.add("respuesta");
    divRespuesta.textContent = respuesta.texto; // Añado el texto de la respuesta al div
    divRespuesta.dataset.valor = respuesta.valor; // Almaceno el valor de la respuesta como un atributo de datos

    // Verificar si la respuesta está seleccionada y aplicar la clase 'active' si es necesario
    const preguntaActual = pregunta.texto;
    if (respuestasSeleccionadas.has(preguntaActual) && respuestasSeleccionadas.get(preguntaActual) === respuesta.valor) {
      divRespuesta.classList.add("active");
    }

    // Agrego un evento de clic para seleccionar la respuesta, actualizar el botón de "Siguiente" y habilitar el botón si una respuesta está seleccionada
    divRespuesta.addEventListener("click", () => {
      seleccionarRespuesta(indice, index, divRespuesta);
      actualizarBotonSiguiente(indice);
    });

    contenedorRespuestas.appendChild(divRespuesta);
  });

  // Añado el contenedor de respuestas al contenedor de la pregunta
  contenedorPregunta.appendChild(contenedorRespuestas);

  // Añado el contenedor de la pregunta al contenedor principal del formulario
  contenedorPreguntas.appendChild(contenedorPregunta);

  // Creo los botones de siguiente y anterior según el índice de la pregunta
  const contenedorBotones = document.createElement("div");
  contenedorBotones.classList.add("contenedor-botones");

  // Si no es la primera pregunta, creo el botón de "Anterior"
  if (indice > 0 && indice < ods.pregunta.length - 1) {
    const btnPrev = crearBoton("Anterior", mostrarPreguntaAnterior);
    contenedorBotones.appendChild(btnPrev);
  }

  // Creo el botón de "Siguiente" o "Finalizar" según el índice de la pregunta
  const btnText = (indice === ods.pregunta.length - 1) ? "Finalizar" : "Siguiente";
  const btnNext = crearBoton(btnText, () => {
    if (indice === ods.pregunta.length - 1) {
      window.location.href = "recomendaciones.html"; // Redirijo al usuario a la página "recomendaciones.html" al finalizar
    } else {
      if (respuestasSeleccionadas.has(pregunta.texto)) { // Verifica si se ha seleccionado una respuesta
        mostrarPreguntaSiguiente();
      } else {
        alert("Por favor, selecciona una respuesta antes de continuar.");
      }
    }
  });

  // Habilitar el botón de "Siguiente" si una respuesta está seleccionada
  if (respuestasSeleccionadas.has(pregunta.texto)) {
    btnNext.disabled = false;
  }

  contenedorBotones.appendChild(btnNext);

  // Añado el contenedor de botones al contenedor principal del formulario
  contenedorPreguntas.appendChild(contenedorBotones);

  // Calcular la puntuación total del usuario
  let puntuacionTotal = calcularPuntuacionTotal();

  // Calcular la cantidad de recomendaciones según la puntuación
  let cantidadRecomendaciones = calcularCantidadRecomendaciones(puntuacionTotal);

  // Mostrar la puntuación total y las recomendaciones
  mostrarPuntuacionTotal(puntuacionTotal);
  generarRecomendaciones();
}

// Función para crear un botón con un texto y una función de clic
function crearBoton(texto, onClick) {
  const btn = document.createElement("button");
  btn.textContent = texto;
  btn.addEventListener("click", onClick);
  return btn;
}

// Función para almacenar la respuesta seleccionada en el mapa de respuestas seleccionadas
function seleccionarRespuesta(indicePregunta, indiceRespuesta, divRespuesta) {
  const preguntaActual = ods.pregunta[indicePregunta].texto;
  const valorRespuesta = ods.pregunta[indicePregunta].respuesta[indiceRespuesta].valor;

  // Verificar si la respuesta seleccionada ya tiene la clase 'active'
  const respuestaActiva = divRespuesta.classList.contains('active');

  if (respuestaActiva) {
    // Si ya está seleccionada, deseleccionarla eliminando la clase 'active'
    divRespuesta.classList.remove('active');
    respuestasSeleccionadas.delete(preguntaActual); // Eliminar la respuesta del mapa
  } else {
    // Si no está seleccionada, seleccionarla agregando la clase 'active'
    // Primero, deseleccionar todas las respuestas en caso de que solo se permita una respuesta
    const respuestas = document.querySelectorAll('.respuesta');
    respuestas.forEach(respuesta => {
      respuesta.classList.remove('active');
    });
    // Luego, seleccionar la respuesta actual
    divRespuesta.classList.add('active');
    // Almacenar la respuesta seleccionada en el mapa
    respuestasSeleccionadas.set(preguntaActual, valorRespuesta);
  }
}

// Función para mostrar la siguiente pregunta
function mostrarPreguntaSiguiente() {
  if (indicePreguntaActual < ods.pregunta.length - 1) {
    indicePreguntaActual++;
    mostrarPregunta(indicePreguntaActual);
  }
}

// Función para mostrar la pregunta anterior
function mostrarPreguntaAnterior() {
  if (indicePreguntaActual > 0) {
    indicePreguntaActual--;
    mostrarPregunta(indicePreguntaActual);
  }
}

function calcularPuntuacionTotal() {
  let puntuacionTotal = 0;

  // Recorrer el mapa de respuestas seleccionadas y sumar los valores
  respuestasSeleccionadas.forEach((valor) => {
    puntuacionTotal += valor;
  });

  return puntuacionTotal;
}

function calcularCantidadRecomendaciones(puntuacionTotal) {
  let cantidadRecomendaciones = 0;
  if (puntuacionTotal < 75) {
    cantidadRecomendaciones = ods.pregunta.length; // Mostrar todas las recomendaciones
  } else if (puntuacionTotal >= 75 && puntuacionTotal <= 100) {
    cantidadRecomendaciones = 2; // Mostrar las 2 primeras recomendaciones por pregunta
  } else if (puntuacionTotal >= 101 && puntuacionTotal <= 139) {
    cantidadRecomendaciones = 1; // Mostrar una recomendación por pregunta
  } else {
    cantidadRecomendaciones = 0; // No recibir recomendaciones
  }
  return cantidadRecomendaciones;
}

function mostrarPuntuacionTotal(puntuacionTotal) {
  const resultadoContainer = document.getElementById('resultado');
  const puntuacionTotalContainer = document.createElement('div');
  const puntuacionMaximaContainer = document.createElement('div');

  puntuacionTotalContainer.id = 'puntuacion-total';
  puntuacionMaximaContainer.id = 'puntuacion-maxima';

  puntuacionTotalContainer.textContent = 'Puntuación Total: ' + puntuacionTotal;
  puntuacionMaximaContainer.textContent = 'Puntuación Máxima: 150';

  resultadoContainer.appendChild(puntuacionTotalContainer);
  resultadoContainer.appendChild(puntuacionMaximaContainer);
}

function generarRecomendaciones() {
  const resultadoContainer = document.getElementById('resultado');
  const recomendacionesContenedor = document.createElement('div');
  recomendacionesContenedor.id = 'recomendaciones-contenedor';
  resultadoContainer.appendChild(recomendacionesContenedor);

  // Calcular la cantidad de recomendaciones según la puntuación total
  let puntuacionTotal = calcularPuntuacionTotal();
  let cantidadRecomendaciones = calcularCantidadRecomendaciones(puntuacionTotal);

  // Recorremos las preguntas y generamos las recomendaciones según la cantidad calculada
  ods.pregunta.forEach((pregunta, indicePregunta) => {
    const recomendacionElemento = document.createElement('div');
    recomendacionElemento.classList.add('recomendacion-elemento');
    recomendacionElemento.textContent = `Pregunta: ${pregunta.texto}`;
    recomendacionesContenedor.appendChild(recomendacionElemento);

    recomendacionElemento.addEventListener('click', () => {
      mostrarRecomendaciones(pregunta, cantidadRecomendaciones, recomendacionElemento);
    });
  });

  // Agregar mensaje adicional basado en la puntuación del usuario una sola vez
  const mensajeAdicional = document.createElement('p');
  mensajeAdicional.id = 'mensaje-adicional'
  mensajeAdicional.textContent = obtenerMensajeAdicional(puntuacionTotal);
  resultadoContainer.appendChild(mensajeAdicional);
}


function obtenerMensajeAdicional(puntuacionTotal) {
  if (puntuacionTotal < 75) {
    return "MAL 🙁 ESPABILA 😡";
  } else if (puntuacionTotal >= 75 && puntuacionTotal < 100) {
    return "MEJORABLE 😕 CONFIAMOS EN TI 😔";
  } else if (puntuacionTotal >= 100 && puntuacionTotal < 140) {
    return "POR EL BUEN CAMINO 😊 SIGA TRABAJANDO EN ELLO 👍";
  } else {
    return "EXCELENTE 😃 SIGUE ASÍ 🌟";
  }
}


function mostrarRecomendaciones(pregunta, cantidadRecomendaciones, recomendacionElemento) {
  const recomendaciones = pregunta.recomendaciones.slice(0, cantidadRecomendaciones);
  const recomendacionesTexto = recomendaciones.map((recomendacion, index) => {
    return `Recomendación ${index + 1}: ${recomendacion.texto}`;
  });
  
  // Verificar si ya se han mostrado las recomendaciones
  const recomendacionesMostradas = recomendacionElemento.querySelector('.recomendaciones');
  if (recomendacionesMostradas) {
    // Si ya están visibles, eliminarlas del contenedor
    recomendacionElemento.removeChild(recomendacionesMostradas);
  } else {
    // Si no están visibles, agregarlas al contenedor
    const recomendacionesContainer = document.createElement('div');
    recomendacionesContainer.classList.add('recomendaciones');
    recomendacionesContainer.textContent = recomendacionesTexto.join('\n');
    recomendacionElemento.appendChild(recomendacionesContainer);
  }
}

