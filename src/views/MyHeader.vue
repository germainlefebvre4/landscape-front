<template>
  <div>
      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
  </div>
</template>



<script>
export default {
    name: 'myheader'
}
</script>

<style>

</style>