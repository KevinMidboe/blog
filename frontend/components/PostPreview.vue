<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p><span>{{ post.date }}</span> by <span>{{ post.author }}</span></p>

    <img v-if="post.thumbnail" :src="post.thumbnail" />

    <div class="preview">
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

h2 {
  font-size: 2rem;
}

img {
  width: 100%;
}

p, span {
  font-family: monospace;
}
</style>
