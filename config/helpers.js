const path = require('path');

const _root = path.resolve(__dirname, '..');

class Helpers {
};

Helpers.root = function(args) {
  args = Array.prototype.slice.call(arguments, 0);

  return path.join.apply(path, [_root].concat(args));
};

Helpers.assetsPath = function(_path) {
  return path.posix.join('public/assets', _path);
};

module.exports = Helpers;