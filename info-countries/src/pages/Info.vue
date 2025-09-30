<script setup>
    import { ref, watch } from 'vue'
    import axios from 'axios'

    const props = defineProps({
        name: String
    })

    const dataCountry = ref(null)

    // Só busca quando a prop 'nome' mudar (ou seja, quando clicar em buscar)
    watch(() => props.name, async (newName) => {
        if (!newName) {
            dataCountry.value = null
            return
        }

        try {
            const res = await axios.get(`http://localhost:3000/country/${newName}`)
            dataCountry.value = res.data[0]
        } catch (err) {
            console.error(err)
            dataCountry.value = null
            alert('País não encontrado')
        }
    })
</script>

<template>
  <div v-if="dataCountry" class="info">
    <h2>{{ dataCountry.name.common }}</h2>
    <img :src="dataCountry.flags.svg" :alt="dataCountry.name.common" width="150" />
    <p>Region: {{ dataCountry.region }}</p>
    <p>Capital: {{ dataCountry.capital[0] }}</p>
    <p>Area: {{ dataCountry.area.toLocaleString('en') }}</p>
    <p>População: {{ dataCountry.population.toLocaleString('en') }}</p>
    <p>Moeda: {{ Object.values(dataCountry.currencies)[0].name }} 
        ({{ Object.values(dataCountry.currencies)[0].symbol }})
    </p>
    <p>Idiomas: {{ Object.values(dataCountry.languages).join(', ') }}</p>
    <p>Timezones: {{ Object.values(dataCountry.timezones).join(', ') }}</p>
  </div>
</template>

