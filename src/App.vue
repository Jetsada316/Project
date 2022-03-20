<template>
  <v-app id="inspire">
    <v-navigation-drawer color="grey lighten-2" app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">MENU</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="grey lighten-4" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>MENU</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home", to: "/Home" },
      { title: "Shop", icon: "mdi-basket", to: "Shop" },
      { title: "login", icon: "mdi-login", to: "/Login" },
      {
        title: "Register",
        icon: "mdi-registered-trademark",
        to: "/RegisterUser",
      },
      { title: "admin", icon: "mdi-laptop", to: "/about" },
    ],
  }),
};
</script>
