<template>
  <div>
    <post-preview v-for="post in posts" :post="post"></post-preview>
  </div>
</template>

<script>
import PostPreview from "@/components/PostPreview";

export default {
  components: { PostPreview },
  data() {
    return {
      posts: [{
        title: "Welcome to Kevin's lab!",
        date: new Date(),
        author: "Kevin",
        description: "Welcome to the technical ramblings that go on in my brain. I will post information about my homelab, projects I undergo and tutorials as I find similar blogs on the internet very inspiring and informational; I can only hope that the same comes across here."
      },
      {
        title: "Building (another) NAS.",
        date: new Date(),
        author: "Kevin",
        thumbnail: "https://blog.monstermuffin.org/wp-content/uploads/2020/09/DSC05655-1024x683.jpg",
        description: `Building Another NAS.
A lot has changed in my life over the last 6 months or so, moving out of my flat and quitting my job to travel the world only to have 2020 suck all meaning out of every fibre of my being making me yearn for the eventuality of Earth being obliterated into inexistence, but until that time my storage as of late left much to be desired.

I have been reminded, daily, by my Macbook that my last backup was almost 1 year ago and on top of this the storage I use at home is nearing it’s capacity as well as being degraded. I’ve been overlooking these things for quite some time but I have finally decided to remedy the situation.

Join me on my newest endeavour to build a new NAS, or don’t of course.`
      }]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/media-queries.scss';
@import '@/styles/variables.scss';

section {
  width: 90vw;
  margin: 0 auto;
}
</style>
