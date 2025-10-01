<script setup>
  import { ref } from 'vue'
  import Info from "./pages/Info.vue"

  const nameCountry = ref('')
  const search = ref('') // vai enviar para Info.vue só quando clicar

  function getCountry() {
    search.value = nameCountry.value.trim()
  }
</script>

<template>
  <header class="header">
    <img src="./assets/image/world.png" class="img-world">
    <h1>WORLD</h1>
  </header>

  <main class="container">
    <div class="description">
        <h2>Country information</h2>
        <!-- Texto informativo sobre a aplicação -->
        <p>
          Enter the name of a country in the search box and discover its location on 
          the map, population, flag, currency, languages, and other information.
        </p>
    </div>

    <div class="search">
      <!-- Caixa de pesquisa -->
       <input type="text" v-model="nameCountry" placeholder="Enter the name of the country">
      <!-- Botão de pesquisar -->
       <button @click="getCountry" title="Search">
        <img src="./assets/image/lupa.png" alt="Pesquisar" class="img-search">
       </button>
    </div>

    <div class="info-country">
      <Info :name="search"/>
    </div>
  </main>
</template>

