const logger = require(`${__base}/logger`)
const establishedDatabase = require(`${__base}/database`);

const md = require("markdown-it")();

class PostRepository {
  constructor(database) {
    this.database = database || establishedDatabase;
  }

  renderPost(id) {
    return this.getPost(id)
      .then(post => {
        if (post) {
          return Promise.resolve(md.render(post.markdown))
        }

        throw new Error("Post not found");
      })
  }

  getPost(id) {
    const query = "SELECT * from posts where id = $1";
    return this.database.get(query, [id])
  }

  updatePost(id, markdown="## database testost", title="undefined title") {
    const query = `UPDATE posts SET markdown = $1, title = $2 WHERE id = $3`;

    const post = this.database.update(query, [markdown, title, id]);

    return post
      .then(post => true)
  }
};

module.exports = PostRepository;
