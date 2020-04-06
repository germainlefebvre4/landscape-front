<template>
  <div>
    <v-row class="fill-height">
      <v-col>

        <v-card
          class="mx-auto"
          max-width="800"
          outlined
        >
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="card in cards"
                :key="card.id"
                :cols="card.flex"
              >
                <v-card>
                  <v-card-title v-text="card.title"></v-card-title>
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
              </v-col>
            </v-row>
          </v-container>
        </v-card>

      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  name: 'applicationList',

  data: () => ({
    cards: []
  }),

  mounted:function(){
    this.getApplications()
  },

  methods: {
    getApplications () {
      axios.get('http://localhost:8080/api/applications'
      ).then((data) => {
        if(data.status == 200) {
          let cards = [];
          // console.log(data.data)
          const items = data.data

          for(const item in items) {
            // console.log(`${items[item]["name"]}`)
            cards.push({
              id: `${items[item]["id"]}`,
              title: `${items[item]["name"]}`,
              environment: `${items[item]["environment"]}`,
              country: `${items[item]["country"]}`,
              datacenter: `${items[item]["datacenter"]}`,
              platform: `${items[item]["platform"]}`,
              region: `${items[item]["region"]}`,
              flex: 50
            })
            // cards = [...cards, newCards];
            this.cards = cards
          }
        } else {
            console.log("An error occured");
        }
      }).catch()
    },
  },
}
</script>

<style>
</style>