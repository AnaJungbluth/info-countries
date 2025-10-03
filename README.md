# Info Countries

Aplicação que permite buscar informações sobre países: localização no mapa, população, bandeira, moeda, idiomas, entre outros dados.

---

## 🧰 Tecnologias usadas

| Camada | Tecnologias |
|---|---|
| Backend / API | Node.js, Express, Axios |
| Frontend | Vue 3, Vite, Leaflet (para mapa) |
| Styles | CSS |
| Infraestrutura | Docker, Docker Compose, Nginx |

---

## 🚀 Funcionalidades

- Digitar o nome de um país e obter informações completas  
- Exibir localização geográfica no mapa com marcador  
- Mostrar bandeira, região, capital, população, área, moedas, idiomas, fusos horários  
- Tratamento de erro para país não encontrado  
- Versão Docker para facilitar implantação

---

## 🏗️ Como rodar 

### Aplicação completa com o Docker

```bash
docker-compose up --build
```

### Aplicação completa sem Docker

#### Back-end

```bash
cd controller
node api.js
```

#### Front-end

```bash
cd info-countries
npm run dev
```

## Acessar  🚀

- [Front-end](http://localhost:5173)
- [Back-end](http://localhost:3000/country/país)
