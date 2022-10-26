<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.justify-content-around.align-items-center.mt-5.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-7
          p.mt-2
           | Estimado aprendiz, bienvenido a este recurso educativo el cual describe los aspectos relacionados con   
           b el mercado turístico
           | , en cuanto a sus elementos, clasificación, el mercado objetivo y mercado meta, las características del cliente, el consumidor y el usuario y el plan de mercadeo, con la revisión de estas temáticas comprenderá la dinámica económica y comercial del turismo, al reconocer la manera singular en la que se relacionan la oferta y demanda turística en un destino.  
          b En el siguiente video conocerá de forma general, la temática que estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!


        .col-lg-4
          figure
            img(src='@/assets/curso/temas/Introduccion/1foto.svg', alt='Texto que describa la imagen')


      

      .col-lg-6.mt-4
       figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IRDX0fHe254" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption   VIDEO

   
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
