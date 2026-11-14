/**
 * ARCHIVO CENTRAL DE CONTENIDO DEL BLOG
 */

export const blogContent = {
  blogMeta: {
    blogTitle: 'Inteligencia artificial',
    blogSubtitle: 'Bitácora académica sobre la tendencia tecnológica actual y su impacto',
    description:
      'La inteligencia artificial básicamente, es lograr que las computadoras y los aparatos hagan cosas que normalmente haríamos nosotros, los humanos. La idea es que la máquina aprenda de los errores y resuelva problemas por su cuenta.',
    technologyName: 'Inteligencia artificial',
    studentName: 'Maria Mónica Calderón González',
    institution: 'Institución Universitaria ITM',
    publishDate: 'Noviembre 2026',
    bannerImage: '/image1.jpeg',
    bannerAlt: 'Robots industriales automatizados en línea de ensamblaje y logística',
  },

  // 1. ¿Qué es la inteligencia artificial?
  page1WhatIs: {
    badge: 'Página 1',
    title: '¿Qué es la inteligencia artificial?',
    subtitle: 'Fundamentos, características esenciales y relevancia contemporánea.',
    definition:
      'La inteligencia artificial básicamente, es lograr que las computadoras y los aparatos hagan cosas que normalmente haríamos nosotros, los humanos.\n\nO sea, la idea es que la máquina no solo siga órdenes mecánicas y ya, sino que piense un poquito, aprenda de los errores y resuelva problemas por su cuenta, ya sea intentando imitar cómo razonamos o buscando el camino más lógico para llegar a una solución.',
    characteristics: [
      {
        id: 'car-1',
        title: 'Búsqueda de soluciones y análisis',
        description:
          'La inteligencia artificial nos ayuda a encontrar soluciones a diferentes situaciones, analizando la información y buscando la mejor manera de llegar a un resultado.',
      },
      {
        id: 'car-2',
        title: 'Interpretación del lenguaje humano',
        description:
          'Puede interpretar y trabajar con el lenguaje humano, permitiendo la comunicación entre las personas y los sistemas tecnológicos.',
      },
      {
        id: 'car-3',
        title: 'Automatización y optimización de procesos',
        description:
          'Permite que algunas actividades se realicen de manera automática, reduciendo el trabajo repetitivo y facilitando diferentes procesos. Por ejemplo, en las fábricas se utilizan robots que realizan actividades como ensamblar piezas, empacar productos o clasificar materiales automáticamente, evitando que las personas tengan que hacer estas tareas repetidamente y permitiendo que los procesos sean más rápidos y sencillos.',
      },
    ],
    currentImportance: [
      'Permite realizar algunas actividades en menos tiempo, dejando espacio para enfocarnos en otras tareas importantes.',
      'Mejora la comunicación, ya que facilita la traducción de idiomas',
      'Permite realizar algunas actividades en menos tiempo, dejando espacio para enfocarnos en otras tareas.',
      'Permite buscar información, resolver dudas y comprender mejor algunos temas, siendo un apoyo para los estudiantes.',
    ],
    image1: '/image1.jpeg',
    image1Caption: 'Robots industriales que realizan actividades de ensamblaje y logística',
    image2: '/image2.jpeg',
    image2Caption: 'Brazo robótico inteligente en línea de clasificación automatizada',
  },

  // 2. Ventajas y aplicaciones
  page2Advantages: {
    badge: 'Página 2',
    title: 'Ventajas y aplicaciones',
    subtitle: 'Beneficios clave y escenarios reales en educación, empresas y la vida cotidiana.',
    advantages: [
      {
        id: 'adv-1',
        number: '01',
        title: 'Ahorro de tiempo',
        description:
          'Nos permite realizar diferentes actividades de manera más rápida. Por medio de aplicaciones como ChatGPT o Gemini podemos buscar información, resolver inquietudes y obtener respuestas en menos tiempo.',
      },
      {
        id: 'adv-2',
        number: '02',
        title: 'Apoyo emocional',
        description:
          'Puede servir como una herramienta de apoyo en momentos difíciles, ya que nos permite expresar lo que sentimos, recibir consejos y encontrar orientación ante algunas situaciones.',
      },
      {
        id: 'adv-3',
        number: '03',
        title: 'Apoyo en el aprendizaje',
        description:
          'Nos facilita el estudio porque podemos resolver dudas, comprender temas difíciles, prepararnos para exámenes y crear planes de estudio según nuestras necesidades.',
      },
      {
        id: 'adv-4',
        number: '04',
        title: 'Automatización de tareas',
        description:
          'Permite que algunas actividades se realicen automáticamente mediante sistemas programados, ayudándonos a tener una mejor organización y planeación.',
      },
      {
        id: 'adv-5',
        number: '05',
        title: 'Reducción de tiempos y costos en las empresas',
        description:
          'Ayuda a las empresas a agilizar sus procesos mediante máquinas y robots que realizan determinadas actividades en menos tiempo, aumentando la producción y reduciendo algunos gastos a largo plazo.',
      },
    ],
    applications: [
      {
        id: 'app-edu',
        area: 'Educación',
        headline: 'Educación',
        description:
          'Ayuda a  estudiantes a resolver dudas, investigar temas, prepararse para exámenes y crear planes de estudio. También facilita la comprensión de temas que pueden resultar difíciles.',
      },
      {
        id: 'app-biz',
        area: 'Empresas',
        headline: 'Empresas',
        description:
          'Se utiliza para automatizar tareas, organizar información, analizar datos y mejorar los procesos de producción, permitiendo ahorrar tiempo y recursos.',
      },
      {
        id: 'app-daily',
        area: 'Vida cotidiana',
        headline: 'Vida cotidiana',
        description:
          'Está presente en asistentes virtuales como Alexa y Siri, electrodomésticos inteligentes y dispositivos que permiten controlar algunas actividades del hogar.',
      },
    ],
    image1: '/image3.jpeg',
    image1Caption: 'Automatización robótica en entornos corporativos e industriales',
    image2: '/image4.jpeg',
    image2Caption: 'Asistentes virtuales inteligentes en la vida cotidiana del hogar',
  },

  // 3. Retos y futuro de la tecnología (incluye opinión personal)
  page3Challenges: {
    badge: 'Página 3',
    title: 'Retos, futuro y opinión personal',
    subtitle: 'Desafíos, riesgos asociados, tendencias y reflexión crítica sobre su impacto.',
    challenges: [
      {
        id: 'risk-1',
        title: 'Dependencia de la inteligencia artificial',
        description:
          'Considero que uno de los mayores riesgos es que nos estamos acostumbrando a depender demasiado de estas herramientas. Actualmente, recurrimos a la inteligencia artificial para resolver casi cualquier inquietud o realizar diferentes actividades, en lugar de intentar hacerlo por nuestros propios medios.',
      },
      {
        id: 'risk-2',
        title: 'Reemplazo de la mano de obra humana',
        description:
          'Otro riesgo importante es que algunas empresas están optando por utilizar robots y sistemas de inteligencia artificial para realizar actividades que antes hacían las personas. Esto puede generar una disminución de oportunidades laborales y afectar el empleo en diferentes sectores.',
      },
      {
        id: 'risk-3',
        title: 'Disminución del pensamiento crítico',
        description:
          'Siento que, al acostumbrarnos a utilizar la inteligencia artificial para resolverlo todo, podemos dejar de desarrollar nuestras propias capacidades para pensar, analizar y buscar soluciones. En el ámbito estudiantil, por ejemplo, muchas veces dejamos de utilizarla como una guía de aprendizaje y terminamos pidiéndole que realice nuestros trabajos completos, sin esforzarnos por comprender los temas.',
      },
    ],
    futureTrends: [
      {
        id: 'trend-1',
        horizon: 'Tendencia emergente',
        title: 'Modelos de aprendizaje que superan los patrones humanos',
        description:
          'Ya no se trata solo de enseñarle a la máquina imitando lo que hace una persona. El avance apunta a sistemas (como el aprendizaje por refuerzo) capaces de generar conocimiento desde cero, analizando y encontrando patrones a una velocidad tal que pueden procesar en horas lo que a un humano le tomaría siglos descubrir.',
      },
    ],
  },

  // 4. Página exclusiva: Opinión personal sobre su impacto en la sociedad
  opinionPage: {
    badge: 'Reflexión y postura',
    title: 'Opinión personal sobre su impacto en la sociedad',
    subtitle: 'Análisis crítico sobre la dependencia tecnológica, el futuro laboral y el intelecto humano.',
    paragraphs: [
      'A nivel personal, siento que uno de los mayores riesgos de la inteligencia artificial es que nos estamos volviendo dependientes de ella, ya que todo gira en torno a esta tecnología y todo se lo preguntamos. Si bien es una manera de ayudarnos en todos nuestros ámbitos, por ejemplo en lo estudiantil, muchas veces no utilizamos nuestra propia inteligencia, sino que le pedimos a la IA que haga nuestro trabajo completo en lugar de usarla como una fuente de guía.',
      'Además, siento que otro de los mayores riesgos es el desempleo, debido a que muchas empresas están optando por reemplazar la mano de obra humana por la robótica y la inteligencia artificial. Al final, siento que entre más utilicemos esta tecnología, nuestro intelecto disminuirá, porque ya no utilizaremos nuestras propias capacidades para pensar y resolver las cosas, sino que vamos a optar siempre por lo más fácil y rápido, que es decirle a la IA que haga el trabajo por nosotros.',
    ],
    takeaways: [
      {
        title: 'Dependencia intelectual',
        desc: 'El riesgo de delegar el pensamiento crítico en lugar de usar la IA como herramienta de apoyo.',
      },
      {
        title: 'Impacto laboral y desempleo',
        desc: 'La sustitución de mano de obra por sistemas automatizados en las industrias.',
      },
      {
        title: 'Preservación del criterio propio',
        desc: 'La necesidad de esforzarse por comprender los temas y no optar solo por el camino fácil.',
      },
    ],
  },
};
