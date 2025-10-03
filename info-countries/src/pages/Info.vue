<script setup>
    import { ref, watch, nextTick  } from 'vue'
    import axios from 'axios'
    import L from 'leaflet'

    import iconUrl from "../assets/icons/marker-icon.png";
    import iconRetinaUrl from "../assets/icons/marker-icon-2x.png";
    import shadowUrl from "../assets/icons/marker-shadow.png";

    L.Icon.Default.mergeOptions({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
    });

    const props = defineProps({
        name: String
    })

    const dataCountry = ref(null)
    const errorMessage = ref(null)
    let map = null

    // Só busca quando a prop 'nome' mudar (ou seja, quando clicar em buscar)
    watch(() => props.name, async (newName) => {
        if (!newName) {
            dataCountry.value = null
            return
        }

        try {
            const res = await axios.get(`http://localhost:3000/country/${newName}`)

            if (!res.data || res.data.length === 0) {
                throw new Error('País não encontrado')
            }

            dataCountry.value = res.data[0]
            errorMessage.value = null

            // Pega latitude e longitude
            const [lat, lng] = dataCountry.value.latlng
            // Se já existir um mapa, remove antes de criar outro
            await nextTick()
            if (map) {
                map.remove()
            }
            // Cria o mapa centralizado no país
            map = L.map('map').setView([lat, lng], 3)
            console.log(map)
            // Camada do OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map)

            // Marcador na capital (ou no centro do país)
            L.marker([lat, lng]).addTo(map)
                .bindPopup(dataCountry.value.name.common)
                .openPopup()

        } catch (err) {
            dataCountry.value = null
            errorMessage.value = 'Country not found'
        }
    })
</script>

<template>
  <div class="info">
    <div v-if="dataCountry" class="sucess">
        <div class="country">
            <h2>{{ dataCountry.name.common }}</h2>
            <img :src="dataCountry.flags.svg" :alt="dataCountry.name.common" class="flag" title="Flag"/>
        </div>
        <div class="info-country">
            <div class="details">
                <p> <span> Official name: </span> {{ dataCountry.name.official }}</p>
                <p> <span>Region: </span> {{ dataCountry.region }}</p>
                <p> <span>Capital: </span> {{ dataCountry.capital[0] }}</p>
                <p> <span>Area: </span> {{ dataCountry.area.toLocaleString('en') }}</p>
                <p> <span>Population: </span> {{ dataCountry.population.toLocaleString('en') }}</p>
                <p> <span>Currency: </span> {{ Object.values(dataCountry.currencies)[0].name }} 
                    ({{ Object.values(dataCountry.currencies)[0].symbol }})
                </p>
                <p> <span>Languages: </span> {{ Object.values(dataCountry.languages).join(', ') }}</p>
                <p> <span>Timezones: </span> {{ Object.values(dataCountry.timezones).join(', ') }}</p>
            </div>
            <!-- Aqui aparece o mapa -->
            <div class="map" id="map"></div>
        </div>
    </div>

    <div v-else-if="errorMessage" class="error">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>


