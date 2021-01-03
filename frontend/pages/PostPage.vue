<template>
  <div>
    <h2>{{ post.title }}</h2>

    <article>
      <p>{{ post.date }} by {{ post.author }}</p>

      <img :src="post.thumbnail" />
      <p v-html="post.description"></p>
    </article>
  </div>
</template>

<script>
import { humanReadableDate } from "@/utils";

export default {
  data() {
    return {
      post: {
        title: "Building (another) NAS.",
        date: humanReadableDate(new Date()),
        author: "Kevin",
        thumbnail: "https://blog.monstermuffin.org/wp-content/uploads/2020/09/DSC05655-1024x683.jpg",
        description: `<p>Building Another NAS.
A lot has changed in my life over the last 6 months or so, moving out of my flat and quitting my job to travel the world only to have 2020 suck all meaning out of every fibre of my being making me yearn for the eventuality of Earth being obliterated into inexistence, but until that time my storage as of late left much to be desired.</p>

<p>I have been reminded, daily, by my Macbook that my last backup was almost 1 year ago and on top of this the storage I use at home is nearing it’s capacity as well as being degraded. I’ve been overlooking these things for quite some time but I have finally decided to remedy the situation.</p>

<p>Join me on my newest endeavour to build a new NAS, or don’t of course.</p>` 
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 3rem;
  text-align: center;
  margin-top: 4rem;
}

article {
  margin: 0 auto;
  width: 80vw;

  font-size: 1.2rem;
}

img {
  width: 100%;
}
</style>
