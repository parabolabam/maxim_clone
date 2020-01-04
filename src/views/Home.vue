<template>
<div class="container">
  <Header />
  <MainSection />
  <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Header'
import MainSection from '@/components/MainSection'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
    Header,
    MainSection,
    Footer
  }
}
</script>

<style scoped lang="scss">
  // colors vars
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main main main"
    "footer footer footer footer";

}
</style>
