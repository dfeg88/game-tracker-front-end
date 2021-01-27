<template>
  <v-layout row wrap class="ma-3">
    <v-flex v-if="games.length > 0" xs12 sm6 md4 lg3>
      <div v-for="(game, i) in games" :key="i">
        <Game :id="game.name + '-' + game.platform" :game="game"></Game>
      </div>
    </v-flex>
    <v-flex v-else>
      <v-col xs12 sm6 md4 lg12 class="text-center">
        <p>It looks like you don't have any games..</p>
        <v-btn color="accent" elevation="8">
          <router-link :to="{name: 'create'}">Add Game</router-link>
        </v-btn>
      </v-col>
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
  }
}
</script>

<style scoped>
a, a:hover, a:active, a:visited {
  text-decoration: none;
  color: white;
}
</style>