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
  <header>
    <h1>World</h1>
  </header>

  <main class="container">
    <div class="description">
      <div>
        <h2>Country information</h2>
      </div>
      <div>
        <!-- Texto informativo sobre a aplicação -->
        <p>
          Digite o nome de um país na caixa de pesquisa e descubra sua localização 
          no mapa, população, bandeira, moeda, idiomas e outras informações.
        </p>
      </div>
    </div>

    <div class="search">
      <!-- Caixa de pesquisa -->
       <input type="text" v-model="nameCountry" placeholder="Digite o nome do país">
      <!-- Botão de pesquisar -->
       <button @click="getCountry">
        <img src="./assets/image/lupa.png" alt="Pesquisar">
       </button>
    </div>

    <div class="info-country">
      <Info :name="search"/>
    </div>
  </main>
</template>

