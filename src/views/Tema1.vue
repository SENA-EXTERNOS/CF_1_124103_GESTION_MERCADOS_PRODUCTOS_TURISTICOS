<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mercado   

     
    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema1/carrito1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 A continuación, se presentan los elementos del mercado turístico en donde se detalla información acerca de la diferencia entre viajero, visitante, turista y excursionista, de igual forma se describen los tipos de prestadores turísticos como son las agencias de viajes, el concepto de qué es un producto turístico, a qué se refiere las tarifas, qué determina la demanda y la oferta turística. 


      
    .tarjeta.bgr-slider.p-4.mt-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li 
                i.lista-ul__vineta
                b Frase:                                 
              p Una tradicional empresa de telecomunicaciones se encuentra buscando nuevos mercados.
              p.mt-5
              li 
                i.lista-ul__vineta
                b Relación con el significado:                                 
              p Esta frase se refiere a mercados como grupos de consumidores o conjuntos de personas que, por sus características, son de interés para una empresa.
         
       
          .col-md-6
            figure
              img(src='@/assets/curso/temas/Tema1/slider1.png', alt='Texto que describa la imagen')
              
        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li 
                i.lista-ul__vineta
                b Frase:                                 
              p ¿Sanciones económicas a Rusia afectarían el mercado de flores en Colombia?
              p.mt-4 
              li 
                i.lista-ul__vineta
                b Relación con el significado:                                 
              p Esta pregunta, se refiere al mercado como un sector de la economía. Como también se puede hablar del sector turístico, de valores o automotriz.



          .col-md-6
            figure
              img(src='@/assets/curso/temas/Tema1/slider2.png', alt='Texto que describa la imagen')


        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li 
                i.lista-ul__vineta
                b Frase:                                 
              p La mayoría de las pequeñas empresas no permanecen en el mercado por más de cinco años. 
              p.mt-4 
              li 
                i.lista-ul__vineta
                b Relación con el significado:                                 
              p Esta afirmación, se refiere al mercado como un espacio que no es solo físico, donde convergen la oferta y la demanda. Como fruto de su relación se establecen los precios.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/Tema1/slider3.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li 
                i.lista-ul__vineta
                b Frase:                                 
              p Los miércoles habrá mercado campesino en mi barrio.
              p.mt-4  
              li 
                i.lista-ul__vineta
                b Relación con el significado:                                 
              p Esta expresión habla de la actividad económica de venta de productos normalmente de la canasta familiar.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/Tema1/slider4.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li 
                i.lista-ul__vineta
                b Frase:                                 
              p El precio del mercado que hicimos hoy fue como lo tenía presupuestado..
              .mt-4 
              li 
                i.lista-ul__vineta
                b Relación con el significado:                                 
              p Esta frase se refiere al mercado como el resultado de la compra de artículos de la canasta familiar.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/Tema1/slider5.png', alt='Texto que describa la imagen')

    .row.mt-5       
    .row.justify-content-around.align-items-center
        .col-lg-6.sm-8
          figure
          img(src='@/assets/curso/temas/Tema1/mercado.png' alt='Texto que describa la imagen' width='505px' height='430px')
           
        .col-lg-6.sm-8
          p.mt-2 El mercado es el espacio, físico o virtual donde se produce el intercambio de bienes y servicios. Todas las interacciones que surgen a partir de este intercambio, por lo tanto se mueve alrededor de las actividades económicas fundamentales, que son producción, distribución y consumo, lo que deja ver que sus actores principales son los consumidores, productores y distribuidores de dichos bienes y servicios, quienes en la dinámica de compra y venta, generan unas relaciones denominadas oferta y demanda.  Adicionalmente, dentro de los elementos que componen al mercado se encuentran el precio, el producto y el proceso de intercambio.
                         
          .row
          .col-lg-12.mb-5.mb-lg-0
            .bloque-texto-b.color-acento-contenido.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h3.mb-5 Introducción a la economía social de mercado’ “El mercado es una institución económica en la cual se produce el punto de encuentro entre las dos partes que intercambian un bien o servicio, por lo tanto, el sistema de mercado se basa en el intercambio, lo que implica que para tener los bienes y servicios deseados se debe dar a la otra parte lo que ésta a la vez requiere o desea.
                i.fas.fa-quote-right
              p.texto-img.mb4 -Según lo menciona Resico, M. F. (2019. p.67) en su libro.
              
        separador
      

    #t_1_1

    .titulo-segundo.color-acento-contenido
      h2 1.1  Elementos del mercado

    .row.mt-5
      p Es así como en el mercado convergen una serie de actores y relaciones que de aquí en adelante denominaremos elementos del mercado y que vale la pena mirar en detalle: 
    .row.justify-content-center.mt-5
      .col-lg-8.sm-8
        .titulo-sexto.color-acento-contenido
          b Figura 1.
          span  Elementos del mercado
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/Tema1/elemento.png', alt='Texto que describa la imagen')
              figcaption Nota: Adaptado de Elementos del mercado, de Principios e instrumentos

          div(x="17%" y="23%" tooltip="Ver más" numero="1")
            h5 Oferta
            p.mt-4
            p Cantidad de un producto o servicio que se dispone para la venta en un periodo determinado, es decir, número de productos o servicios que están disponibles para la venta en una hora, día, mes o año determinado.


          div(x="17%" y="45%" tooltip="Ver más" numero="2")
            h5 Precio
            p.mt-4
            p Valor comercial de intercambio a través del cual el consumidor puede adquirir un producto.

          div(x="17%" y="67%" tooltip="Ver más" numero="3")
            h5 Productores
            p.mt-4
            p Son personas, familias o empresas que dan origen de manera artesanal o industrial a los bienes y servicios. Estos productores pueden pertenecer al sector primario (agricultura, caza, pesca y silvicultura), secundario (manufactura, construcción, energético) o terciario (finanzas, comercio, turismo, comunicaciones, ocio, espectáculos, cultura, servicios públicos, educación, sanidad) de la economía.

          div(x="83%" y="23%" tooltip="Ver más" numero="4")
            .h5.mb-2 Consumidores
             p.mt-4
            p Son personas, familias o empresas que adquieren un determinado producto o servicio para satisfacer sus necesidades, intereses o deseos.
      
    
          div(x="83%" y="44%" tooltip="Ver más" numero="5")
            .h5.mb-2 Demanda
            p.mt-4  
            p Cantidad de un producto o servicio específico que las personas quieren tener en un horizonte de tiempo determinado, es decir, la demanda, constituye el número de productos o servicios que en una hora, día, mes o año determinado se ha calculado que los consumidores están dispuestos a adquirir.
      
    
          div(x="83%" y="67%" tooltip="Ver más" numero="6")
            .h5.mb-2 Producto
            p.mt-4
            p Bien tangible o intangible que se oferta en el mercado para satisfacer las necesidades, intereses o deseos de personas, familias o empresas.


          div(x="42%" y="81%" tooltip="Ver más" numero="7")
            .h5.mb-2 Distribuidores
            p.mt-4
            p Son empresas que comercializan un determinado producto o servicio y que por lo general pertenecen al sector terciario de la economía (finanzas, comercio, turismo, comunicaciones, ocio, espectáculos, cultura, servicios públicos, educación, sanidad).
    
        .row.justify-content-center.mt-5
        .col-lg-8.sm-8
        .cajon.color-acento-contenido.p-4.mb-4
          p Estos elementos del mercado están en una constante interrelación que los afecta. Esta interrelación es denominada la ley de la oferta y la demanda. 

    .col-md-6.mb-4.mb-md-0
      .lista-ol--cuadro__vineta
      b  Ley de la oferta y la demanda  


    
    .row.justify-content-around.align-items-center
          .col-lg-2.col-sm-10
            figure
              img(src='@/assets/curso/temas/Tema1/estadistica.png', alt='Texto que describa la imagen').img-tarjeta-linea-1
          .col-lg-10.col-sm-10
            p.mt-5 Es una teoría económica que responde a los sucesos orgánicos o planificados que se dan como resultado de la interacción de los elementos del mercado. Las interacciones cotidianas entre los productores, distribuidores y consumidores generan variaciones constantes del precio y de la cantidad de productos y servicios a fabricar o a distribuir. 

            p Cuando se incrementa la demanda de un producto, se sube el precio y también la producción, lo que es conocido como la ley de la oferta, en este mismo orden de ideas, el incremento del precio de un producto, desincentivar su consumo, lo que se denomina la ley de la demanda.

    b Para la mejor comprensión de esa ley analice usted los siguientes ejemplos:

    .row.mt-4
    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Ejemplo 1: Consumo de tapabocas")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/Tema1/pestaña1.svg', alt='Texto que describa la imagen' width='440px' height='255px' )         
          .col-md-6
            h4 Consumo de tapabocas
            p En el año 2020 durante la emergencia sanitaria debido al COVID 19, el consumo por el uso de tapabocas se incrementó de manera desproporcionada, triplicando su precio lo que generó escasez de este producto, desencadenando una serie de situaciones en la producción, distribución y venta de este, que llevó  al incremento de su precio donde, una caja, por 20 unidades, de tapabocas antivirus de la marca Apolo N95 se encontraba  hasta en 445.000 pesos colombianos en Internet según publicación de El Pulzo en 2020.    
      .py-3.py-md-4(titulo="Ejemplo 2: Tendencia alimentación saludable")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/Tema1/pestaña2.svg' alt='Texto que describa la imagen' width='440px' height='255px')            
          .col-md-6
            h4 Tendencia alimentación saludable
            p La tendencia del 
              i fitness 
              | y de alimentación saludable ha popularizado el consumo de algunos alimentos en los últimos años, como es el caso del aguacate. En el año 2019 como no lo cuenta la BBC News, se dio el ‘boom global del aguacate’ con un incremento de su consumo y a su vez una escasez de este, lo que ocasionó un alza en el precio de este.
           
    .row.justify-content-center.mt-5
      .col-lg-10.sm-8
        .cajon.color-acento-botones.p-4.mb-4     
          .row
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/Tema1/analisis.svg' alt='Texto que describa la imagen' width='80px' height='77,3px')  
            .col-lg-10
              p #[b Análisis de los ejemplos]
              p Comportamiento demanda y oferta: El aumento de la demanda de un producto, es una variación dentro de las interacciones cotidianas de dos de los elementos del mercado (consumidor vs producto). Dicha variación movilizó a los demás elementos del mercado, generando disminución de la oferta por desabastecimiento o escasez, e incremento del precio por que los distribuidores que tengan estos productos en inventario pueden venderlos a un mayor valor, debido a que se cotizan a causa de su difícil consecución.

      separador
    #t_1_2

    .titulo-segundo.color-acento-contenido
      h2 1.2  Clasificación de los mercados

    .row.mt-5
      p A continuación, se muestran los tipos de mercados clasificados según tipo de producto, según consumidor y tipo de demanda.
      .row.justify-content-center
          .col-lg-6
            b Los mercados se pueden clasificar de diferentes maneras teniendo en cuenta cada elemento de estos, permitiendo su comprensión así:
               
      
    .bg--img_03
      .row.justify-content-center
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/Tema1/Acordion1.png", alt="alt").img400.m-auto
        .col-lg-8
         AcordionA(tipo="a" clase-tarjeta="tarjeta bgr-tarjeta-3").mt-5
          .row(titulo="Según el tipo de producto")
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercados de bienes y servicios:]  en los que se intercambian todo tipo de bienes y servicios ofrecidos por las empresas para satisfacer las necesidades de las personas, familias, asociaciones o de otras empresas.
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercados de factores:] en el que se intercambian los factores de producción que configuran los insumos que se usan para producir otros bienes y servicios, así como el trabajo a cambio de remuneración.
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercados financieros:] en el que se intercambian los créditos y servicios bancarios.
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercados de divisas:] en el que se intercambian las monedas del mundo. Por ejemplo, el peso colombiano por dólares. 
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercados de capitales:] en el que se da la compra y venta de bonos, títulos y acciones..  
              
          .row(titulo="Según el consumidor")
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercados de consumo:]  dirigidos al consumidor final directamente.
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercados industriales:] dirigidos a las fábricas y empresas que producen algún otro bien.
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercados de organismos públicos:] dirigidos a los bienes y servicios que requiere la administración pública.
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercados institucionales: ] dirigidos a satisfacer una actividad particular principalmente en las empresas de servicios.
            
          
          .row(titulo="Según el tipo de demanda)")
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercado potencial:]  es el grupo de posibles compradores de un producto o servicio.
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercado disponible:] es el grupo de posibles compradores de un producto o servicio que además tienen la necesidad actual de él y los recursos para satisfacerla.
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercado objetivo:] es el grupo de personas que comparten una o más características y que por sus condiciones físicas, geográficas, sociales, culturales y/o económicas son de interés para una empresa en su labor comercial.
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Mercado actual: ] es el grupo de personas que actualmente está consumiendo un producto o servicio.
            
          
    separador

    #t_1_3

    .titulo-segundo.color-acento-contenido
      h2 1.3  Mercado objetivo y mercado meta

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-8.mb-5
          p Como fue mencionado anteriormente, el mercado objetivo es una de las clasificaciones de los mercados según el tipo de demanda y es aquel que representa al grupo de personas o empresas que comparten una o más características y que por sus condiciones físicas, geográficas, sociales, culturales y/o económicas son de interés para una empresa en su labor comercial.
          
          .col-lg-12.sm-8
            .cajon.color-acento-contenido.p-4.mb-4     
                p Para comprender mejor el mercado objetivo, se hace necesario conocer el concepto de ‘Segmentación de mercados’, el que, según Soto, Tamayo, y Almanza (2018) en su artículo’ ‘Análisis de variables de segmentación de mercados’ define como el proceso mediante el cual se divide un mercado poblacional en grupos de consumidores con necesidades y características homogéneas para poder ofrecerles bienes y servicios que tengan un valor de uso o de consumo.
  
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/Tema1/tema13.png', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-lg-2.col-sm-10
            figure
              img(src='@/assets/curso/temas/Tema1/Tema132.svg', alt='Texto que describa la imagen').img-tarjeta-linea-1
          .col-lg-10.col-sm-10
            p Para ampliar información revise el Anexo 1. Mercado objetivo y mercado meta, en donde se detallan necesidades, intereses o deseos de uno de los segmentos de mercados identificados y las características del mercado objetivo seleccionado, se exponen las fases de cómo realizar la segmentación de mercados y cómo generar una propuesta de valor.

            
              .col-lg-6.col-sm-10
                a.anexo.mb-4(:href="obtenerLink('downloads/Anexo_1.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/temas/Tema1/icono-pdf.svg")
                  .anexo__texto
                    b Anexo1.
                    p Mercado objetivo y mercado meta  



    separador      

    #t_1_4

    .titulo-segundo.color-acento-contenido
      h2 1.4  Mercado objetivo y mercado meta

    .row.justify-content-around.align-items-center
      .row.justify-content-around.align-items-center
        .col-lg-8
        p Es relevante conocer la diferencia entre los conceptos de cliente, consumidor y usuario que están estrechamente relacionados con el tipo de producto o servicio que adquieren o el rol que asumen en el proceso de intercambio.        
      
          
    .col-lg-11.sm-8
        .lista-ol--cuadro__vineta
        b Cliente, usuario y consumidor
        .row.mt-5
    TabsA.color-acento-contenido.mb-5        
      .tarjeta.color-tarjetacliente.p-4(titulo="El cliente")      
        .row
          .col-xl-6.mb-4
            figure
            img(src='@/assets/curso/temas/Tema1/cliente.svg' width='110px' height='110px')
            
          .col-xl-6
            h4 El cliente
            p Es la persona natural o jurídica que realiza una transacción monetaria a cambio de un producto o servicio que puede ser para su uso personal o para el de otras personas, al igual que puede ser el insumo para la fabricación de otros bienes y servicios o para una actividad empresarial.
       
      .tarjeta.color-tarjetacliente.p-4(titulo="El consumidor")
      
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/Tema1/Consumidor.svg' width='110px' height='110px')
            
          .col-xl-6
            h4 El consumidor
            p Es la persona natural que consume o dicho en otras palabras, es quien adquiere a través de una transacción monetaria productos y servicios para satisfacer una necesidad personal sin ningún tipo de ánimo de lucro.
            
      .tarjeta.color-tarjetacliente.p-4(titulo="El usuario")
     
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/Tema1/usuario.svg' width='110px' height='110px')
            
          .col-xl-6
            h4 El usuario
            p Es la persona natural que utiliza o disfruta de un servicio para su uso personal, este puede ser ofrecido por una empresa pública o privada. 
    
        
    .row.justify-content-around.align-items-center
          .col-lg-2.col-sm-10
            figure
              img(src='@/assets/curso/temas/Tema1/masinfo.svg', alt='Texto que describa la imagen').img-tarjeta-linea-1
          .col-lg-10.col-sm-10
            p.mt-5 Para ampliar información revise el Anexo 1. Mercado objetivo y mercado meta, en donde se detallan necesidades, intereses o deseos de uno de los segmentos de mercados identificados y las características del mercado objetivo seleccionado, se exponen las fases de cómo realizar la segmentación de mercados y cómo generar una propuesta de valor.


            .col-lg-6.col-sm-10
                a.anexo.mb-4(:href="obtenerLink('downloads/Anexo_2_1.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/temas/Tema1/icono-pdf.svg")
                  .anexo__texto
                    b Anexo2.
                    p Clientes, consumidores y usuarios

          separador    


    #t_1_5

    .titulo-segundo.color-acento-contenido
      h2 1.5  Plan de mercadeo

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-8.mb-5
          p Las empresas en su direccionamiento estratégico cuentan con diferentes objetivos organizacionales que apuntan al logro de la visión empresarial que han determinado en un horizonte de tiempo, por lo general de 5 años o más.  Estos objetivos marcan una ruta clara de acción que normalmente se traduce en planes y programas específicos para las diferentes áreas de la empresa, permitiendo así que cada un aporte desde su operación a la consecución de los objetivos marcados.
          
          .col-lg-12.sm-8
            .cajon.color-acento-contenido.p-4.mb-4     
                p En términos comerciales las empresas buscan posicionamiento y reconocimiento de su marca, la apertura de nuevos mercados, la llegada de nuevos clientes, la fidelización de los clientes actuales y el incremento de las ventas y para lograrlo requieren hacerlo de manera planificada y organizada. En virtud de lo anterior se hace necesario contar con un plan de mercadeo.
  
        .col-lg-4
          figure
          img(src='@/assets/curso/temas/Tema1/tema15.png')

        .row.justify-content-around.align-items-center
          .col-lg-2.col-sm-10
            figure
              img(src='@/assets/curso/temas/Tema1/masinfo15.svg', alt='Texto que describa la imagen').img-tarjeta-linea-1
          .col-lg-10.col-sm-10
            p Para ampliar información revise el Anexo 3. Plan de mercadeo, en donde se describen las definiciones de Mercadeo, mercadotecnia y marketing y Fases para la elaboración de un plan de mercadeo.

        
            .col-lg-6.col-sm-10
                a.anexo.mb-4(:href="obtenerLink('downloads/Anexo_4.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/curso/temas/Tema1/icono-pdf.svg")
                  .anexo__texto
                    b Anexo3.
                    p Mercado objetivo y mercado meta 


    
    
      
          
          
      




      
      
        



  
          
        
            
       
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
