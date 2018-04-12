module.exports = {

    source: {
        templates: 'src/templates/**/*.pug',
        slides: 'src/slides/*.pug',
        js: 'src/js/**/*.js',
        video: 'src/videos/**/*',
        styl: 'src/styl/*.styl',
        img: 'src/img/**/*',
        files: {
          pug: 'src/templates/index.pug',
          styl: 'src/styl/main.styl',
          notes: 'src/js/vendor/notes/notes.html'
        }

    },

    browserSync: {
      html: 'build/**/*.html',
      js: 'build/js/**/*.js',
      css: 'build/css/**/*.css',
      img: 'build/img/**/*'
    },

    build: {
      html: './build/',
      js: 'build/js',
      video: 'build/videos',
      css: 'build/css',
      img: 'build/img',
      notes: 'build/js/vendor/notes/'
    },

    deploy: {
      pages: 'build/**/*'
    }
};
