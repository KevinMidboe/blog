<template>
  <div class="container">
    <router-link to="/">
      <h1>Kevin's lab</h1>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Home"
    }
  }
}
</script>

<style lang="scss">
@import "styles/global.scss";

body {
  background-color: #f7f4ec;
  color: #342519;
}
</style>

<style lang="scss" scoped>
.container {
  margin: 2rem;
}

h1 {
  font-size: 3rem;
  text-transform: uppercase;
}
</style>
