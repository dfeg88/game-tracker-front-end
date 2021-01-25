<template>
  <v-card :class="{'ma-3': $vuetify.breakpoint.smAndDown, 'ma-3': $vuetify.breakpoint.mdAndUp}" class="elevation-8 mb-2">
    <v-card-title class="">{{game.name}}</v-card-title>
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
    <v-card-text><b>Publisher:</b> {{game.publisher}}</v-card-text>
    <v-card-text><b>Platform:</b> {{game.platform}}</v-card-text>
    <v-card-text><b>Release Date:</b> {{new Date(game.releaseDate).toDateString()}}</v-card-text>
    <v-card-text><b>Number of Players:</b> {{game.numberOfPlayers}}</v-card-text>
    <v-card-text><b>Genre:</b> {{game.genre}}</v-card-text>

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