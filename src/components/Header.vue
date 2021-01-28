<template>
  <v-app-bar
      app
      color="primary"
      dark
      src="https://gamecrate.com/sites/default/files/field/image/PS5Header.jpg"
  >
    <div class="d-flex align-center">
      <router-link :to="{name: 'games'}">
        <v-img
            class="shrink mr-2"
            contain
            dark
            src="../assets/logo.png"
            transition="scale-transition"
            width="70"
        />
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn plain exact :to="{name: 'games'}">
     My Games
    </v-btn>

    <v-btn plain :to="{name: 'create'}">
     Add Game
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>