export default {
  global: {
    componenteFormativo: 'El Mercado Turístico',
    descripcionCurso:
      'La comprensión del mercado turístico requiere el reconocimiento de conceptos básicos del mercado, vinculados al sistema turístico, identificando cada uno de sus elementos (superestructura, planta turística, producto turístico, oferta y demanda) y su interrelación con los establecimientos que componen la cadena de valor del turismo desde la dinámica interna que se genera entre ellos al comercializar productos y servicios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elementos del mercado',
            hash: 't_1_1',
          },

          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de los mercados',
            hash: 't_1_2',
          },

          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Mercado objetivo y mercado meta',
            hash: 't_1_3',
          },

          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Clientes, consumidores y usuarios',
            hash: 't_1_4',
          },

          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Plan de mercadeo',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mercado turístico  ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos del mercado turístico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Sistema turístico',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Producto Turístico',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Mercado / Cliente, consumidor y usuario',
      referencia:
        'Soto, A. F., Tamayo, Y. D., & Almanza, C. A. (2018). Análisis de variables de segmentación de mercados. I+ D Revista de Investigaciones, 11(1), 78-92.',
      tipo: 'Artículo Científico',
      link: '/downloads/Análisis de variables de segmentación de mercados.pdf',
    },
    {
      tema: 'Mercado / Plan de Mercadeo',
      referencia:
        'Machado Besantes, E. R. (2018). Guía Metodológica para el desarrollo del Plan de Marketing en los Negocios.',
      tipo: 'Libro',
      link:
        '/downloads/Guía metodológica para el desarrollo del plan de marketing en los negocios.pdf',
    },

    {
      tema: 'Mercado / Plan de Mercadeo',
      referencia:
        'Mendivelso Carrillo, H., & Lobos Robles, F. (2019). La evolución del marketing: una aproximación integral.',
      tipo: 'Artículo científico',
      link:
        '/downloads/La Evolución del Marketing una aproximación integral.pdf',
    },

    {
      tema: 'Mercado turístico/Elementos del Mercado Turístico',
      referencia:
        'Ministerio de Industria, Comercio y Turismo, 2018, Plan Sectorial de Turismo 2018 - 2022',
      tipo: 'Plan sectorial',
      link:
        'https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/desarrollo-regional/plan-sectorial-de-turismo-2018-2022',
    },

    {
      tema: 'Mercado turístico / Elementos del Mercado turístico',
      referencia:
        'MINCIT (2017) Definiciones y actividades prestadoras de servicios turísticos.',
      tipo: 'Artículo del Ministerio de Comercio Industria y Turismo.',
      link: '/downloads/Prestadores-de-servicios-turisticos-–-Definiciones.pdf',
    },

    {
      tema: 'Mercado turístico / Elementos del Mercado Turístico',
      referencia: 'MINCIT (2017) Resolución 543',
      tipo:
        'Resolución 543 de 2017 emitida por el Ministerio de Comercio, Industria y Turismo de Colombia como reglamento técnico para Parques de diversiones, atracciones o dispositivos de entretenimiento familiar',
      link: '/downloads/Plan Sectorial de Turismo 2018 2022.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Mercadeo',
      significado:
        'conjunto de operaciones por las que ha de pasar una mercancía desde el productor al consumidor (RAE 2022).',
    },
    {
      termino: 'Mercado',
      significado:
        'El mercado “es una institución económica en la cual se produce el punto de encuentro entre las dos partes que intercambian un bien o servicio, por lo tanto, el sistema de mercado se basa en el intercambio, lo que implica que para tener los bienes y servicios deseados se debe dar a la otra parte lo que ésta a la vez requiere o desea”. Según lo menciona Resico, M. F. (2019).',
    },

    {
      termino: 'Producto turístico ',
      significado:
        'es lo que quiere ofrecer la comunidad anfitriona, pero, también, lo que anhela encontrar el turista vivencial. También se define como aquello que los prestadores logísticos están en capacidad de ofrecer a través de sus servicios. Lo que el operador turístico y la institucionalidad pública están en capacidad de integrar y ensamblar para consolidar una oferta comerciable.  Rivera, Andrés (2018)  ',
    },

    {
      termino: 'Turismo',
      significado:
        'Es un fenómeno social, cultural y económico que supone el desplazamiento de personas a países o lugares fuera de su entorno habitual por motivos personales, profesionales o de negocios; esas personas se denominan viajeros (que pueden ser o bien turistas o excursionistas; residentes o no residentes). El turismo abarca sus actividades, algunas de las cuales suponen un gasto turístico. (OMT, 2022) ',
    },

    {
      termino: 'Comunidad anfitriona',
      significado:
        'Grupo de personas de la localidad que de manera autónoma se organiza para gestionar la invitación a los turistas a su territorio para acogerlos y atenderlos durante su estancia a cambio de una retribución económica social ',
    },

    {
      termino: 'Tarifa',
      significado:
        'Es el valor comercial definido para el producto o servicio turístico, teniendo en cuenta que cada uno puede tener varias tarifas dependiendo de la temporada (alta, media, baja), el tipo de viajero o turista (niños, militares, otros), los servicios incluidos y/o las políticas de reserva o cancelación establecidas por el prestador de servicios turísticos',
    },

    {
      termino: 'Prestadores de servicios turísticos (PST)',
      significado:
        'Son los establecimientos que prestan algún servicio turístico (alojamiento, gastronomía, transporte)',
    },

    {
      termino: 'Oferta',
      significado:
        'Cantidad de un producto o servicio que se dispone para la venta en un periodo determinado, es decir, número de productos o servicios que están disponibles para la venta en una hora, día, mes o año determinado ',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de un producto o servicio específico que las personas quieren tener en un horizonte de tiempo determinado, es decir, la demanda, constituye el número de productos o servicios que en una hora, día, mes o año determinado se ha calculado que los consumidores están dispuestos a adquirir',
    },

    {
      termino: 'Visitante',
      significado:
        'Un visitante es aquel que viaja a un destino por un periodo de tiempo determinado y con la intención de volver a su lugar de procedencia, dependiendo del tiempo de estadía se divide en: turista y excursionista.',
    },
  ],

  referencias: [
    {
      referencia:
        'American Marketing Association. (s.f.). Definitions of Marketing.',
      link:
        'https://www.ama.org/the-definition-of-marketing-what-is-marketing/',
    },
    {
      referencia:
        'Acerenza, M.A. (1990). Agencias de Viajes, organización y operación. Trillas.',

      link: '',
    },
    {
      referencia:
        'BBC News. (7 de agosto de 2019). Por qué se ha disparado el precio del aguacate y hasta cuándo seguirá subiendo. ',

      link: 'https://www.bbc.com/mundo/noticias-49209380',
    },
    {
      referencia:
        'Centro Educacional Fernando de Aragón (2020). Módulo: procesos administrativos nm3.',

      link:
        'https://colegiofernandodearagon.cl/wp-content/uploads/2020/10/3%C2%B0-MEDIO-GUIA-6-CLASSROOM-PROCESOS-ADMINISTRATIVOS.pdf)',
    },
    {
      referencia:
        'Cepeda, L. A. V. (2018). Proceso de segmentación. Visión Empresarial, (6), 238-243.',

      link: '',
    },
    {
      referencia:
        'De La Ballina, F. (2018). Marketing turístico aplicado. (1ª Ed.). ESIC, Alfaomega. ',

      link:
        'https://www.alphaeditorialcloud.com/reader/marketing-turistico-aplicado?location=30',
    },
    {
      referencia:
        'El Pulzo. (6 de marzo de 2020). Se triplicó el precio de los tapabocas por la llegada del coronavirus a Colombia. ',

      link:
        'https://www.pulzo.com/economia/triplica-precio-tapabocas-colombia-PP857293',
    },
    {
      referencia:
        'García, R, Olmos, L. (2016). Estructura del mercado turístico. (2ª Ed.). Paraninfo.',

      link:
        'https://www.alphaeditorialcloud.com/reader/estructura-del-mercado-turistico?location=35',
    },
    {
      referencia:
        'LÓPEZ SALAS, S. E. R. G. I. O. (2020). Atención al cliente, consumidor y usuario. Ediciones Paraninfo, SA.',

      link: '',
    },

    {
      referencia:
        'Machado Besantes, E. R. (2018). Guía Metodológica para el desarrollo del Plan de Marketing en los Negocios.',

      link:
        '/downloads/Guía metodológica para el desarrollo del plan de marketing en los negocios.pdf',
    },

    {
      referencia:
        'Mendivelso Carrillo, H., & Lobos Robles, F. (2019). La evolución del marketing: una aproximación integral. 78-2019.pdf (unach.cl)',

      link:
        '/downloads/La Evolución del Marketing una aproximación integral.pdf',
    },

    {
      referencia:
        'MINCIT (2017). Definiciones y actividades prestadoras de servicios turísticos. ',

      link:
        'https://www.mincit.gov.co/getattachment/f7c53ff0-36c2-435b-884c-bb5e847f8866/Prestadores-de-servicios-turisticos-%E2%80%93-Definiciones.aspx',
    },

    {
      referencia:
        'MINCIT (2021). Política pública de infraestructura turística',

      link:
        ' https://www.mincit.gov.co/minturismo/calidad-y-desarrollo-sostenible/politicas-del-sector-turismo/politica-de-infraestructura-turistica/09-07-21-politicavmt2020-baja-esp.aspx',
    },

    {
      referencia:
        'Organización Mundial del Turismo. (s.f.). Glosario de términos de turismo. ',

      link: ' https://www.unwto.org/es/glosario-terminos-turisticos',
    },

    {
      referencia:
        'Organización Mundial del Turismo. (s.f.). EL TURISMO MÁS DE CERCA: MEDICIÓN Y ANÁLISIS SUBNACIONAL — PROYECTO CONJUNTO INROUTE-OMT',

      link: 'https://www.unwto.org/es/project/inroute',
    },

    {
      referencia:
        'Resico, M. F. (2019). Introducción a la economía social de mercado. Konrad Adenauer Stiftung. get_file (kas.de)',

      link:
        'https://www.kas.de/c/document_library/get_file?uuid=22412104-f255-886e-178f-8b32bf5bce06&groupId=252038',
    },

    {
      referencia:
        'Rivera, A (2018). Atractivos para un turismo con sentido. Universidad Tecnológica de Pereira',

      link: '',
    },

    {
      referencia:
        'Soto, A. F., Tamayo, Y. D., & Almanza, C. A. (2018). Análisis de variables de segmentación de mercados. I+ D Revista de Investigaciones, 11(1), 78-92',

      link: '',
    },
  ],

  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
