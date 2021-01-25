<template>
  <v-layout row wrap class="ma-3" v-if="games">
      <v-flex xs12 sm6 md4 lg3
              v-for="(game, i) in games"
              :key="i">
        <Game :game="game"></Game>
      </v-flex>
  </v-layout>
</template>

<script>
import {api} from "@/service/Api";
import Game from "@/components/Game";

export default {
  name: "Games",
  components: {
    Game
  },
  data() {
    return {
      games: []
    }
  },
  async mounted() {
    this.games = (await api().get('v1/game')).data
    this.games.forEach(game => console.log(game))
  }
}
</script>

<style scoped>
.v-image__image{
  background-size:100% 100%;
}
</style>