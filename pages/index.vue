<template>
  <v-container id="app">
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon v-show="$can('CAN_DELETE')">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>

                <v-btn icon v-show="$can('CAN_LIKE')">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon v-show="$can('CAN_BOOKMARK')">
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>

                <v-btn icon v-show="$can('CAN_SHARE')">
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    ],
  }),
  mounted() {
    this.getOneSignal();
    this.setUpdateDataThread();
  },
  methods: {
    getOneSignal() {
      alert('Ali')
      this.$OneSignal.push(() => {
        this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
          if (isEnabled) {
            console.log('Push notifications are enabled!')
          } else {
            console.log('Push notifications are not enabled yet.')
          }
        })
      })
    },
    testOneSignal() {
      window.$OneSignal.push(['addListenerForNotificationOpened', (data) => {
        console.log('Received NotificationOpened:', data )}
      ]);
    },

    setUpdateDataThread: function () {
      console.log("...................................................... set Building update thread");
      setInterval(this.updateDataThread, 60000);
    },

    updateDataThread: function () {
          console.log("...................................................... Building update thread");
          this.testOneSignal();
        },
  },
}
</script>
