<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mercado turístico

    .row.justify-content-center
      .col-10.col-lg-8
        p El turismo es un fenómeno social, cultural y económico que supone el desplazamiento de personas a países o lugares fuera de su entorno habitual por motivos personales, profesionales o de negocios, esas personas se denominan viajeros (que pueden ser o bien turistas o excursionistas; residentes o no residentes) y el turismo abarca sus actividades, algunas de las cuales suponen un gasto turístico. (OMT, s.f).

        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla")
          .row(titulo="Dinámicas del turismo ")
            .col-12
              p.mb-0 En virtud de lo anterior, el turismo además de tener una dinámica económica en la que se enmarca el mercado turístico, también tiene dinámicas socioculturales que involucran a las comunidades anfitrionas con sus tradiciones y costumbres; y dinámicas ambientales que involucran la fauna, la flora, el agua, el aire, el suelo, los ecosistemas y el paisaje, de los destinos visitados. Por lo que es necesario involucrarse en los análisis y estrategias que se generan, en pro de su protección, conservación y salvaguardia. 

          .row(titulo="Mercado turístico")
            .col-12
              p.mb-0 Así las cosas, el mercado turístico se define como "el estado y evolución de la oferta y la demanda del sector turístico, como lo mencionan García, R, Olmos, L. (2016) y complementa, De La Ballina, Francisco (2018) afirmando que “El marketing turístico debe comenzar por entender al turista, su comportamiento de compra, en primer lugar, y de su viaje, después." p. 57.

          .row(titulo="Concepto de mercado turístico")
            .col-12
              p.mb-0 De la misma manera en la que el mercado se define como una institución económica en la que se produce el punto de encuentro entre las dos partes que intercambian un bien o servicio, en el mercado turístico sucede lo mismo, solo que las partes son en lugar de consumidores, viajeros y en lugar de productores o distribuidores prestadores de servicios turísticos y agencias de viajes.  Pero en esencia el concepto de mercado prevalece siendo su base el intercambio de bienes y servicios, en este caso, turísticos.

      
      .col-8.col-lg-4
        figure
            img(src='@/assets/curso/temas/tema2/img1.svg', alt='Texto que describa la imagen')

    .row
      p Paralelo de los elementos del mercado vistos anteriormente con el equivalente de cada uno dentro del sector turístico.
       
    .row.justify-content-center.mt-5.mb-5
      .col-lg-10
        .titulo-sexto.bgr-titulo
          p #[strong Figura 2.] Paralelo entre los elementos del mercado y los elementos del mercado turístico
        .row.justify-content-center
          .col-10.col-lg-6.mt-3
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen')

          .col-10.col-lg-6.mt-3
            figure
              img(src='@/assets/curso/temas/tema2/img2.1.svg', alt='Texto que describa la imagen')

        .tarjeta.tarjeta--gris.p-3.mt-3
          p.text-small Cada elemento del mercado tiene un equivalente en los elementos del mercado turístico. A través de esta figura se aprecia cual es el equivalente de cada uno.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido.mt-5
      h2 2.1  Elementos del mercado turístico
        

    .row.mt-5.justify-content-center
      .col-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img3.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 A continuación, se presentan los elementos del mercado turístico en donde se detalla información acerca de la diferencia entre viajero, visitante, turista y excursionista, de igual forma se describen los tipos de prestadores turísticos como son las agencias de viajes, el concepto de qué es un producto turístico, a qué se refiere las tarifas, qué determina la demanda y la oferta turística.



    .row.mt-5
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta.color-primario
            span 
          b Elementos del mercado turístico


    
      SlyderA(tipo="b").bg5
        .row.justify-content-center
          .col-10.col-lg-8.mt-4
            h4 Viajeros
           
            p Un viajero es toda persona que se desplaza entre dos lugares geográficos distintos por cualquier motivo y duración. (RIET. 2008, citado en OMT, (s.f.). Se clasifican de la siguiente manera:
           
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Visitante:]  un visitante es aquel que viaja a un destino por un periodo de tiempo determinado y con la intención de volver a su lugar de procedencia, dependiendo del tiempo de estadía se divide en: turista y excursionista.
            
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Turistas:]  un turista es aquel que viaja a un destino por un periodo de tiempo determinado y con la intención de volver a su lugar de procedencia, con la condición de pernoctar en el destino visitado.
            
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Excursionistas:]   un excursionista es aquel que viaja a un destino por un periodo de tiempo determinado y con la intención de volver a su lugar de procedencia, el excursionista es un visitante de día, este no pernocta en el destino.
          .col-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-10.col-lg-8.mt-4
            h4 Prestadores de servicios turísticos PST
            
            p Son los establecimientos que prestan algún servicio turístico (alojamiento, gastronomía, transporte).
           
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Establecimientos de alojamiento y hospedaje:] “se entiende por Establecimiento Hotelero o de Hospedaje, el conjunto de bienes destinados por la persona natural o jurídica a prestar el servicio de alojamiento no permanente inferior a 30 días, con o sin alimentación y servicios básicos y/o complementarios o accesorios de alojamiento, mediante contrato de hospedaje, el cual es un contrato de arrendamiento, de carácter comercial y de adhesión, que una empresa dedicada a ésta actividad celebra con el propósito principal de prestar alojamiento a otra persona denominada huésped, mediante el pago del precio respectivo día a día, por un plazo inferior a 30 días.” (MINCIT, 2017).
           
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Establecimientos gastronómicos:] son aquellos establecimientos cuyo principal objetivo es la venta de alimentos y bebidas listas para el consumo, ubicados dentro del destino turístico e incluidos en el producto turístico.
          
          .col-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-10.col-lg-8.mt-4
            h4 Prestadores de servicios turísticos PST
            
            
            
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Empresas de transporte:]  son aquellas empresas que prestan servicio de transporte especializado para el turismo, ya sean viajes entre ciudades o países, estos no incluyen el transporte público al interior de la ciudad. Puede ser transporte marítimo, terrestre o aéreo.
            
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Parques temáticos:] son aquellos que se instalan en un sitio o ubicación de carácter permanente o no permanente, su principal característica se centra en el manejo de su entorno o ambientación que tiene un carácter muy definido. Son comunes el manejo de temas como sitios geográficos, la prehistoria, cuentos infantiles y épocas de la historia, entre otros. Estos parques pueden o no tener dentro de su oferta de entretenimiento atracciones de alto impacto, familiar e infantil o juegos de destreza.  (MINCIT 2017).
                      
          .col-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-10.col-lg-8.mt-4
            h4 Agencias de viajes
            
            p Son las empresas que se encargan de organizar, promover y vender planes turísticos nacionales o internacionales.
            
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Agencias de viajes mayoristas:] las agencias de viajes mayoristas son aquellas que se dedican a generar y programar los planes turísticos que serán vendidos por las agencias de viaje minoristas y ejecutados por las agencias de viaje operadoras.
            
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Agencias de viajes minoristas:] las agencias de viaje minoristas son aquellas que se dedican a vender y ofrecer los planes de viajes turísticos, estas son agencias de viaje emisoras, es decir, envían al viajero hacia el destino, y suelen ser el primer contacto con el viajero, además estas pueden ser físicas y 
              i on-line.
            
            p <i class="fas fa-check" STYLE="Color: orange"></i> #[strong Agencias de viajes operadoras:] las agencias de viaje operadoras son las que se encargan de operar en el destino los planes vendidos por las agencias de viaje minoristas, estas son agencias de viaje receptoras, es decir, son las que reciben al visitante en el destino.
          
          .col-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-10.col-lg-8.mt-4
            h4 Producto turístico
            
            p Según Rivera (2018) “El producto es lo que quiere ofrecer la comunidad anfitriona, pero es también lo que anhela encontrar el turismo vivencial. Es, a su vez, lo que los prestadores logísticos están en capacidad de ofrecer a través de sus servicios y es lo que el operador turístico y la institucionalidad pública están en capacidad de integrar y ensamblar para consolidar una oferta comerciable”. (p. 92)
            
          .col-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-10.col-lg-8.mt-4
            h4 Tarifa
            
            p Es el valor comercial definido para el producto o servicio turístico, teniendo en cuenta que cada uno puede tener varias tarifas dependiendo de la temporada (alta, media, baja), el tipo de viajero o turista (niños, militares, otros), los servicios incluidos y/o las políticas de reserva o cancelación establecidas por el prestador de servicios turísticos.
            
          .col-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img9.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-10.col-lg-8.mt-4
            h4 Demanda turística
            
            p La afluencia de visitantes que tiene el destino o el nivel de clientes que tiene prestador de servicios turísticos en un periodo determinado.

          .col-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img10.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-10.col-lg-8.mt-4
            h4 Oferta turística
            
            p Constituye el conjunto de productos y servicios que están activos y disponibles para su disfrute en un destino o área turística.

          .col-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img11.svg', alt='Texto que describa la imagen')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido.mt-5
      h2 2.2  Sistema turístico

    .row.mt-5.justify-content-center
      .col-6.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img12.svg', alt='Texto que describa la imagen')
      
      .col-10.col-lg-10.mt-3
        p Como se ha mencionado anteriormente, el turismo es un fenómeno social, por lo tanto, además de la actividad económica que efectivamente se deriva de él, también hay un conjunto de factores sociales que hay que tener en cuenta.
        p A continuación, se invita a ver el video sobre el sistema turístico, el cual presenta los cinco subsistemas esenciales para su funcionamiento.

    .row.mt-5
      .col-lg-6
       figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption   VIDEO

    separador

    #t_2_3.titulo-segundo.color-acento-contenido.mt-5
      h2 2.3  Producto Turístico

    .row.mt-5.justify-content-center
      .col-10.col-lg-8
        p El producto turístico es usualmente mirado únicamente desde la oferta de los establecimientos turísticos, sin embargo, en el sector turístico este concepto trasciende la mirada empresarial para ubicarse en la del destino.   En otros casos este concepto se suele confundir con otros, como el de recurso turístico, atractivo turístico, oferta turística y hasta patrimonio natural o cultural. Lo que sí es cierto es que éste los incluye.

        .bloque-texto-b.color-cajon.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 El producto es lo que quiere ofrecer la comunidad anfitriona, pero es también lo que anhela encontrar el turista vivencial. Es, a su vez, lo que los prestadores logísticos están en capacidad de ofrecer a través de sus servicios y es lo que el operador turístico y la institucionalidad pública están en capacidad de integrar y ensamblar para consolidar una oferta comerciable.
            i.fas.fa-quote-right
          p - Según Rivera, Andrés (2018, p. 92)
      
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img13.svg', alt='Texto que describa la imagen')

    .row.mt-5
      p En la definición propuesta por Rivera (2018) se involucra la comunidad anfitriona, los prestadores logísticos y la institucionalidad que son elementos que hacen parte de un destino o área turística y en la de Acerenza (1990) se hace referencia a que es un producto compuesto.  Así las cosas, como se puede apreciar en la figura 5, el producto turístico cuenta con seis (6) componentes que en algunos casos se fusionan entre sí dependiendo de las características del territorio, como ya se podrá apreciar en la explicación de cada uno. Sus componentes son:

    .row.justify-content-center.mt-5
      .col-6.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img14.svg' width='210' height='200')
      .col-6-.col-lg-3.mt-5
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Recursos turísticos
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Atractivos turísticos
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Actividades turísticas experienciales
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Comunidad local
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Servicios turísticos
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Infraestructura turística
    .row.justify-content-center
      .col-10.mt-5
        .cajon.color-acento-botones.p-4
          p Para ampliar información sobre el producto turístico y sus componentes, se puede ver el documento #[b Anexo 4. Producto turístico.]    

          .col-8.col-lg-4
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo 4. 
                p Producto turístico
    
    .row.mt-4.mb-5
      p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello diríjase al menú principal en donde encontrará la síntesis, la actividad didáctica, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
