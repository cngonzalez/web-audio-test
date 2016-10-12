module.exports = {
  entry: './app.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  node: {
    fs: "empty",
    child_process: "empty"
  }
}
