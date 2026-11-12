/**
 * ARCHIVO CENTRAL DE CONTENIDO DEL BLOG
 * ---------------------------------------------------------------------------
 * Edita únicamente este archivo para completar tu investigación y personalizar
 * el blog sin necesidad de modificar los componentes de React.
 *
 * Nota: Los textos actuales son marcadores de posición (placeholders) basados
 * estrictamente en las pautas de la actividad académica.
 */

export const blogContent = {
  // 1. Personalización general del blog
  blogMeta: {
    blogTitle: 'Observatorio Tech: [Título de tu blog]',
    blogSubtitle: 'Bitácora académica sobre tendencias tecnológicas actuales',
    description:
      '[Escribe aquí una breve descripción personalizada de tu blog explicando el propósito y el enfoque del tema elegido.]',
    technologyName: '[Nombre de la tecnología]',
    studentName: '[Nombre del estudiante]',
    institution: 'Institución Universitaria ITM',
    publishDate: 'Noviembre 2026',
    bannerImage: '', // Pega aquí la URL de tu banner o importa una imagen local (ej: '/images/banner.jpg')
    bannerAlt: 'Banner principal relacionado con la tendencia tecnológica elegida',
  },

  // 2. Entrada principal del blog (Publicación)
  // Título requerido: "La importancia de [nombre de la tecnología] en la actualidad"
  mainPost: {
    category: 'Entrada Principal',
    readingTime: 'Lectura estimada: 3 - 5 min',
    image: '', // URL o ruta local de la imagen relacionada con la entrada
    imageAlt: 'Imagen ilustrativa para la entrada principal del blog',
    imageCaption: '[Pie de foto: describe brevemente la imagen relacionada]',
    // Redacta aquí el cuerpo de tu entrada (Mínimo 300 palabras en total)
    paragraphs: [
      '[Párrafo 1 - Introducción: Presenta la tendencia tecnológica seleccionada con tus propias palabras, contextualizando por qué ha cobrado relevancia hoy en día. Recuerda que la entrada completa debe sumar mínimo 300 palabras.]',
      '[Párrafo 2 - Desarrollo central: Explica cómo esta tecnología está transformando la manera en que estudiamos, trabajamos o nos comunicamos, apoyándote en la investigación que realices en fuentes confiables.]',
      '[Párrafo 3 - Profundización: Agrega datos relevantes, ejemplos concretos o el impacto actual que sustente la importancia de esta tecnología en la sociedad contemporánea.]',
    ],
    // Al menos una fuente de consulta confiable
    references: [
      {
        title: '[Título del artículo, libro o informe confiable]',
        authorOrSource: '[Autor / Organización / Revista científica]',
        year: '[Año]',
        url: 'https://ejemplo-fuente-confiable.com',
      },
    ],
    // Conclusión personal
    personalConclusion:
      '[Conclusión personal: Redacta con tus propias palabras tu reflexión final sobre por qué consideras importante esta tecnología en la actualidad y qué aprendizaje te deja su estudio.]',
  },

  // 3. Página 1: ¿Qué es la tecnología seleccionada?
  page1WhatIs: {
    badge: 'Página 1',
    titlePrefix: '¿Qué es',
    subtitle: 'Fundamentos, características esenciales y relevancia contemporánea.',
    definition:
      '[Definición: Explica de forma clara y con tus propias palabras qué es la tecnología seleccionada y cómo funciona a nivel general.]',
    characteristics: [
      {
        id: 'car-1',
        title: '[Característica principal 1]',
        description:
          '[Describe brevemente la primera característica clave que define a esta tecnología.]',
      },
      {
        id: 'car-2',
        title: '[Característica principal 2]',
        description:
          '[Describe brevemente la segunda característica clave que define a esta tecnología.]',
      },
      {
        id: 'car-3',
        title: '[Característica principal 3]',
        description:
          '[Describe brevemente la tercera característica clave que define a esta tecnología.]',
      },
    ],
    currentImportance:
      '[Importancia en la actualidad: Explica el papel que desempeña hoy esta tecnología en el panorama global y por qué resulta indispensable conocerla.]',
    image: '', // URL o ruta local de al menos una imagen relacionada
    imageAlt: 'Imagen relacionada con la definición y características de la tecnología',
    imageCaption: '[Pie de foto: imagen relacionada con ¿Qué es la tecnología?]',
  },

  // 4. Página 2: Ventajas y aplicaciones
  page2Advantages: {
    badge: 'Página 2',
    title: 'Ventajas y aplicaciones',
    subtitle: 'Beneficios principales y escenarios reales de uso en distintos ámbitos.',
    // Mínimo tres ventajas
    advantages: [
      {
        id: 'adv-1',
        number: '01',
        title: '[Ventaja 1]',
        description:
          '[Explica el primer beneficio o punto fuerte que aporta esta tecnología.]',
      },
      {
        id: 'adv-2',
        number: '02',
        title: '[Ventaja 2]',
        description:
          '[Explica el segundo beneficio o punto fuerte que aporta esta tecnología.]',
      },
      {
        id: 'adv-3',
        number: '03',
        title: '[Ventaja 3]',
        description:
          '[Explica el tercer beneficio o punto fuerte que aporta esta tecnología.]',
      },
    ],
    // Aplicaciones o usos en la vida cotidiana, educación o empresas
    applications: [
      {
        id: 'app-daily',
        area: 'Vida cotidiana',
        headline: '[Uso en la vida diaria]',
        description:
          '[Describe ejemplos prácticos de cómo las personas interactúan con esta tecnología en su día a día.]',
      },
      {
        id: 'app-edu',
        area: 'Educación',
        headline: '[Uso en el ámbito educativo]',
        description:
          '[Describe cómo se aplica en escuelas, universidades o procesos de aprendizaje y formación.]',
      },
      {
        id: 'app-biz',
        area: 'Empresas',
        headline: '[Uso en el sector empresarial]',
        description:
          '[Describe cómo las organizaciones e industrias implementan esta tecnología para innovar u optimizar procesos.]',
      },
    ],
    image: '', // URL o ruta local de al menos una imagen relacionada
    imageAlt: 'Imagen ilustrativa de las ventajas y aplicaciones de la tecnología',
    imageCaption: '[Pie de foto: imagen relacionada con ventajas y aplicaciones]',
  },

  // 5. Página 3: Retos y futuro de la tecnología
  page3Challenges: {
    badge: 'Página 3',
    title: 'Retos y futuro de la tecnología',
    subtitle: 'Desafíos actuales, proyección a mediano plazo y postura crítica personal.',
    challenges: [
      {
        id: 'risk-1',
        title: '[Desafío o riesgo 1]',
        description:
          '[Describe un reto técnico, ético, económico o de seguridad asociado a esta tecnología.]',
      },
      {
        id: 'risk-2',
        title: '[Desafío o riesgo 2]',
        description:
          '[Describe otro riesgo, limitación o problemática relevante que deba superarse.]',
      },
      {
        id: 'risk-3',
        title: '[Desafío o riesgo 3]',
        description:
          '[Describe un desafío adicional relacionado con regulación, privacidad o adopción social.]',
      },
    ],
    futureTrends: [
      {
        id: 'trend-1',
        horizon: 'Corto / Mediano plazo',
        title: '[Tendencia futura 1]',
        description:
          '[Explica hacia dónde se proyecta que evolucione esta tecnología en los próximos años.]',
      },
      {
        id: 'trend-2',
        horizon: 'Largo plazo',
        title: '[Tendencia futura 2]',
        description:
          '[Explica otra tendencia o innovación emergente vinculada al futuro de esta tecnología.]',
      },
    ],
    personalOpinion:
      '[Opinión personal sobre su impacto en la sociedad: Redacta una reflexión crítica y honesta sobre cómo ves el impacto social, laboral y humano de esta tecnología a futuro.]',
  },
};
