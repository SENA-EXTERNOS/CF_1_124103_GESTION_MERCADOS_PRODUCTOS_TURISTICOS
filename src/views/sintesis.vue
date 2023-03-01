<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

        
    p.mt-4 A través del siguiente mapa conceptual se muestra la manera en la que se relacionan todos los temas del presente componente formativo, resaltando sus puntos de encuentro y los elementos que los integran. Cabe destacar que al sistema turístico le subyace la demanda y oferta, que a su vez hacen parte del mercado de este tipo. Por otro lado, el mercado, según su producto, se clasifica en mercados de capitales, de valores, financieros, de divisas y de bienes y servicios, siendo parte de este último el mercado turístico.
        

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/Sintesis1.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
