<template>
  <div>
    <h1>Admin page</h1>

    <h2 contenteditable @input="updateTitle">{{ localTitle }}</h2> 
    <div class="container">
      <textarea v-model="localMarkdown"></textarea>

      <div class="markdown-body" v-html="html"></div>
    </div>

    <button @click="updatePost">Update post</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id || 2,
      localMarkdown: undefined,
      html: undefined,
      post: undefined
    }
  },
  created() {
    this.fetchPost();
    this.getPostHTML();
  },
  watch: {
    localMarkdown(newValue, oldValue) {
      return
      if (newValue) {
        this.getPostHTML()
          .then(html => this.html = html)
      }
    }
  },
  methods: {
    updateTitle(event) {
      this.localTitle = event.target.innerText;
      console.log(this.localTitle)
    },
    fetchPost() {
      const url = `/api/post/${this.id}`

      return fetch(url)
        .then(resp => resp.json())
        .then(response => {
          this.post = response.post;
          this.localTitle = response.post.title;
          this.localMarkdown = response.post.markdown;
        })
    },
    updatePost() {
      const url = `/api/post/${this.id}`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.localTitle,
          markdown: this.localMarkdown
        })
      };

      return fetch(url, options)
        .then(resp => resp.json())
        .then(console.log)
        .then(_ => this.getPostHTML())
    },
    getPostHTML() {
      const url = `/api/post/${this.id}/render`;

      return fetch(url)
        .then(resp => resp.json())
        .then(response => this.html = response.markdown)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 3rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  font-weight: normal;
}

h2 {
  font-size: 2rem;
}

.container {
  width: 90vw;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
}

textarea, .markdown-body {
  width: 48%;
  min-height: 70vh;
}
</style>
