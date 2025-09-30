<script setup>
    import { ref } from 'vue'
    import axios from 'axios'

    const nameCountry = ref('')      // guarda o que o usuário digita
    const dadosPais = ref(null)   // guarda os dados retornados da API

    async function getCountry() {
        if (!nameCountry.value) return
        try {
            const response = await axios.get(`http://localhost:3000/country/${nameCountry.value}`)
            dadosPais.value = response.data[0] // a API retorna um array
        } catch (error) {
            console.error(error)
            dadosPais.value = null
            alert('País não encontrado ou erro na API')
        }
    }
</script>
