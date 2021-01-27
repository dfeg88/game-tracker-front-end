<template>
  <v-container>
    <v-col
        cols="12"
        lg="4"
        offset-lg="4"
    >
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1 class="display-1 font-weight-bold mb-3">
            Add Game
          </h1>

          <v-form id="create" @submit.prevent="saveGame">
            <v-text-field
                v-model="gameRequest.name"
                label="Name"
                required
                data-test="name"
            ></v-text-field>
            <v-select
                v-model="gameRequest.platform"
                label="Platform"
                :items=platforms
                required
                data-test="platform"
            ></v-select>
            <v-text-field
                v-model="gameRequest.publisher"
                label="Publisher"
                required
                data-test="publisher"
            ></v-text-field>
            <v-select
                v-model="gameRequest.genre"
                label="Genre"
                :items=genres
                required
                data-test="genre"
            ></v-select>
            <br>
            <v-slider
                v-model="gameRequest.numberOfPlayers"
                label="Number of Players"
                thumb-color="blue"
                thumb-label="always"
                :thumb-size="18"
                min="1"
                max="32"
                data-test="numberOfPlayers"
            ></v-slider>

            <v-menu
                ref="releaseDateCalendar"
                v-model="releaseDateCalendar"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="gameRequest.releaseDate"
                    label="Release Date"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    data-test="release-date"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="gameRequest.releaseDate"
                  no-title
                  @input="releaseDateCalendar = false"
              ></v-date-picker>
            </v-menu>
            <v-file-input
                v-model="boxArt"
                accept=".jpg,.png"
                label="Box Art"
                prepend-icon="mdi-camera"
                hint=".jpg or .png only"
                persistent-hint
                data-test="box-art"
            ></v-file-input>
            <br>
            <v-btn
                type="submit"
                id="submit"
            >
              Submit
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import {api} from "@/service/Api";

export default {
  name: 'AddGame',

  data: () => ({
    gameRequest: {
      name: '',
      platform: '',
      genre: '',
      releaseDate: new Date().toISOString().substr(0, 10),
      numberOfPlayers: 1,
      publisher: '',
    },
    boxArt: null,
    releaseDateCalendar: false,
    platforms: [
      'PS4',
      'PS5'
    ],
    genres: [
      'Action',
      'Adventure',
      'Fantasy',
      'First-Person Shooter',
      'Sport'
    ],

  }),
  methods: {
    saveGame() {
      let formData = new FormData();
      formData.append('boxArt', this.boxArt);
      formData.append('gameRequest', new Blob([JSON.stringify(this.gameRequest)], {
        type: "application/json"
      }))

      api()
          .post('v1/game', formData, {
            headers: {
              'Content-Type': 'multipart/form-date'
            }
          })
          .then(() => this.$router.push({
            name: 'games'
          }))
          .catch(err => console.error(err))
    }
  }
}
</script>
