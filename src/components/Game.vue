<template>
  <v-card :class="{'ma-3': $vuetify.breakpoint.smAndDown, 'ma-3': $vuetify.breakpoint.mdAndUp}"
          class="elevation-8 mb-2">
    <v-card-title class="justify-center">{{ game.name }}</v-card-title>
    <v-img
        :src="getBoxArt(game.boxArtPath)"
        height="200px"
        :contain="true">
      <v-container
          fill-height
          fluid
          pa-2>
      </v-container>
    </v-img>
    <v-card-text>
      <p><b>Publisher:</b> {{ game.publisher }}</p>
      <p><b>Platform:</b> {{ game.platform }}</p>
      <p><b>Release Date:</b> {{ new Date(game.releaseDate).toDateString() }}</p>
      <p><b>Number of Players:</b> {{ game.numberOfPlayers }}</p>
      <p><b>Genre:</b> {{ game.genre }}</p>
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

<style scoped>

</style>