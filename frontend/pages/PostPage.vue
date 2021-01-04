<template>
  <div v-if="post">
    <header>
      <div class="title">
        <h2>{{ post.title }}</h2>
        <router-link v-if="admin" :to="'/edit/' + id" class="icon">✏️ </router-link>
      </div>

      <p>created {{ humanReadableDate(post.created) }},</p>
      <p>by {{ author }}</p>
    </header>

    <article class="markdown-body">
      <p v-html="description"></p>

      <img :src="thumbnail" />
      <p v-html="markdown" v-if="markdown"></p>
      <img :src="thumbnail" />
    </article>
  </div>
</template>

<script>
import { humanReadableDate } from "@/utils";

export default {
  data() {
    return {
      admin: false,
      markdown: undefined,
      id: this.$route.params.id,
      post: undefined,
      author: 'Kevin',
      thumbnail: "https://blog.monstermuffin.org/wp-content/uploads/2020/09/DSC05655-1024x683.jpg",
      description: `<p>Building Another NAS.
A lot has changed in my life over the last 6 months or so, moving out of my flat and quitting my job to travel the world only to have 2020 suck all meaning out of every fibre of my being making me yearn for the eventuality of Earth being obliterated into inexistence, but until that time my storage as of late left much to be desired.</p>

<p>I have been reminded, daily, by my Macbook that my last backup was almost 1 year ago and on top of this the storage I use at home is nearing it’s capacity as well as being degraded. I’ve been overlooking these things for quite some time but I have finally decided to remedy the situation.</p>

<p>Join me on my newest endeavour to build a new NAS, or don’t of course.</p>` 
    }
  },
  created() {
    this.fetchPost();
    this.fetchMarkdown();
  },
  methods: {
    humanReadableDate(date) { return humanReadableDate(date) },
    fetchPost() {
      fetch(`/api/post/${this.id}`)
        .then(resp => resp.json())
        .then(response => this.post = response.post)
    },
    fetchMarkdown() {
      fetch(`/api/post/${this.id}/render`)
        .then(resp => resp.json())
        .then(response => this.markdown = response.markdown)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/public/assets/styles/markdown.css';

header {
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-top: 4rem;
    margin-bottom: 0;
    font-weight: normal;
    display: inline-block;
  }

  .title {
    position: relative;
    display: inline-block;
  }

  .icon {
    position: absolute;
    bottom: 0;
    right: -3rem;
    opacity: 0;
    font-size: 2.5rem;
  }

  .title:hover {
    .icon {
      opacity: 1;
    }
  }

  p {
    font-size: 1.1rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }

  margin-bottom: 4rem;
}



article {
  margin: 0 auto;
  width: 80vw;

  font-size: 1.2rem;

  p, span {
    width: 80%;
    margin: 0 auto;
  }
}

img {
  width: 100%;
}
</style>
