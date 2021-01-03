<template>
  <div>
    <router-link :to="`/post/${ post.id }`">
      <h2>{{ post.title }}</h2>
    </router-link>

    <p><span>{{ humanReadableDate(post.date) }}</span> by <span>{{ post.author }}</span></p>

    <img v-if="post.thumbnail" :src="post.thumbnail" />

    <div class="preview">
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
import { humanReadableDate } from "@/utils";

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    humanReadableDate(date) { return humanReadableDate(date) }
  }
}
</script>

<style lang="scss" scoped>

h2 {
  font-size: 2rem;
  display: inline-block;
}

img {
  width: 100%;
}

p, span {
  font-family: monospace;
}
</style>
