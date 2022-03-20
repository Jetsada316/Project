<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/275550389_532797571534369_8525818651011286360_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHXVvZ91QtTMg4IHp1yXf3LqMGysoY5eOmowbKyhjl46YWWoZTJ9snMvQJKoqe7yPO-y2mld5eJM5uNl3yAOMQW&_nc_ohc=cdzXb5_lt5AAX9jrG_E&_nc_ht=scontent.fcnx3-1.fna&oh=03_AVIBD5OnUXkgwmXyGAjb3GXqLUdA5jQiGDi9RCga_eZFvw&oe=6259C25C"
    ></v-img>

    <v-card-title>FinalProject</v-card-title>

    <v-card-text>
      <div>เว็บไซน์เป็นเว็บไซน์สำหรับการเรียนรู้และส่งอาจารย์</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>คะแนน</v-card-title>

    <v-card-text>
      <v-slider
        v-model="fruits"
        :tick-labels="ticksLabels"
        :max="3"
        step="1"
        ticks="always"
        tick-size="4"
      ></v-slider>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="logout()">
        Logout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { auth } from "../plugins/firebaseInit";
import { signOut } from "firebase/auth";
export default {
  data() {
    return {
      value: 0,
      fruits: 0,
      ticksLabels: ["0", "50", "75", "100"],
    };
  },
  methods: {
    logout() {
      //const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("logout");
          this.$router.replace("/Home");
          alert("Logout");
          // Sign-out successful.
        })
        .catch((error) => {
          console.log(error);
          // An error happened.
        });
    },
  },
};
</script>

<style></style>
