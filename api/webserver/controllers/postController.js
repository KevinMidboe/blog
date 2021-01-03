const logger = require(`${__base}/logger`);

const PostRepository = require(`${__base}/post`);
const postRepository = new PostRepository();

function getPost(req, res) {
  const { id } = req.params;
  
  return postRepository.getPost(id)
    .then(post => res.json({
      success: true,
      post: post
    }))
}

function renderPost(req, res) {
  const { id } = req.params;

  return postRepository.renderPost(id)
    .then(markdown => res.json({
      success: true,
      markdown: markdown
    }))
}

function updatePost(req, res) {
  const { id } = req.params;
  const { markdown } = req.body;

  return postRepository.updatePost(id, markdown)
    .then(fileUpdated => res.json({
      message: "Successfully updated post " + id,
      filename: fileUpdated,
      success: true
    }))
    .catch(error => {
      const { httpStatus, message } = error;

      return res.status(httpStatus || 500).json({
        message: message,
        success: false
      })
    })
}

module.exports = {
  getPost,
  renderPost,
  updatePost
};
