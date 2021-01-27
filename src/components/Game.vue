<template>
  <v-card :class="{'ma-3': $vuetify.breakpoint.smAndDown, 'ma-3': $vuetify.breakpoint.mdAndUp}"
          class="elevation-8 mb-2">
    <v-card-title id="game-name" class="justify-center">{{ game.name }}</v-card-title>
    <v-img
        :src="getBoxArt(game.boxArtPath)"
        height="200px"
        id="boxArt"
        :contain="true">
      <v-container
          fill-height
          fluid
          pa-2>
      </v-container>
    </v-img>
    <v-card-text>
      <p id="publisher"><b>Publisher:</b> {{ game.publisher }}</p>
      <p id="platform"><b>Platform:</b> {{ game.platform }}</p>
      <p id="release-date"><b>Release Date:</b> {{ new Date(game.releaseDate).toDateString() }}</p>
      <p id="number-of-players"><b>Number of Players:</b> {{ game.numberOfPlayers }}</p>
      <p id="genre"><b>Genre:</b> {{ game.genre }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Game",
  props: {
    game: Object
  },
  methods: {
    getBoxArt(boxArtPath) {
      return `http://localhost:4566/game-tracker/${boxArtPath}`
    }
  }
}
</script>