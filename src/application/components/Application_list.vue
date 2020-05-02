<template>
  <div>
    <v-container fluid d-flex class="grid">
      <v-card v-for="card in applications.data" :key="card.id" class="card">
        <v-card-title v-text="card.name"></v-card-title>
        <v-card-subtitle v-text="card.environment"></v-card-subtitle>
        <v-card-text>
          <div class="text--primary">
            <div v-if="card.version !== null">
              Version: {{ card.version }}
            </div>
            <div v-if="card.country !== null">
              Country: {{ card.country }}
            </div>
            <div v-if="card.provider !== null">
              Provider: {{ card.provider }}
            </div>
            <div v-if="card.project !== null">
              Project: {{ card.project }}
            </div>
            <div v-if="card.region !== null">
              Region: {{ card.region }}
            </div>
            <div v-if="card.datacenter !== null">
              Datacenter: {{ card.datacenter }}
            </div>
            <div v-if="card.services !== null">
              Services:
              <ul>
              <li v-for="(value, name) in card.services" :key="name">
                {{ name | capitalize }}: {{ value }}
              </li>
              </ul>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "applicationList",
  props: ["applications"],


  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
};
</script>

<style>
.row {
  margin: 0;
}

.grid {
  flex-wrap: wrap;
}

.card {
  width: 17.6vw;
  margin: 1vw;
  box-sizing: border-box;
}
</style>
