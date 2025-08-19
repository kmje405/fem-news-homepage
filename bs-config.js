module.exports = {
  server: {
    baseDir: "./",
    index: "index.html"
  },
  files: [
    "*.html",
    "*.css", 
    "*.js",
    "!node_modules/**/*"
  ],
  port: 3000,
  ui: {
    port: 3001
  },
  open: true,
  notify: true,
  reloadOnRestart: true,
  watchOptions: {
    ignoreInitial: true,
    ignored: ['node_modules/**', '.git/**']
  }
};