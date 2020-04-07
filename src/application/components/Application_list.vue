<template>
  <div>
    <v-container fluid d-flex class="grid">
      <v-card v-for="card in applications" :key="card.id" class="card">
        <v-card-title v-text="card.name"></v-card-title>
        <v-card-subtitle v-text="card.environment"></v-card-subtitle>
        <v-card-text>
          <div class="text--primary">
            <div v-if="card.country != 'null'">
              {{ card.country }}
            </div>
            <div v-if="card.datacenter != 'null'">
              {{ card.datacenter }}
            </div>
            <div v-if="card.platform != 'null'">
              {{ card.platform }}
            </div>
            <div v-if="card.region != 'null'">
              {{ card.region }}
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "applicationList",
  props: ["applications"],
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
