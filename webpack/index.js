const env = process.env.NODE_ENV;
const serve = process.env.SERVE;

const configPath = () => {
  if (serve) {
    return `./serve/${env}.config`;
  }

  return `./${env}.config`;
};

// path starts from project directory
module.exports = require(configPath())({
  paths: {
    // like '../../public/js/<YOUR PATH>'
    js: 'dist',
    // like '../../../design/css/<YOUR PATH>'
    css: 'dist',
  },
});
