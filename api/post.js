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

  updatePost(id, markdown="## database testost") {
    const query = `UPDATE posts SET markdown = $1 WHERE id = $2`;

    const post = this.database.update(query, [markdown, id]);

    return post
      .then(post => true)
  }
};

module.exports = PostRepository;
