module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: {
        src: [
          "./build/*"
        ]
      },
      demo: {
        src: [
          "./demo/src/**/*",
          "./demo/src/**"
        ]
      }
    },

    copy: {
      demo: {
        files: [{
          expand: true,
          cwd: "./build/",
          src: "./**",
          dest: "./demo/src/"
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd: "./src/css/",
          src: "./*.css",
          dest: "./build/css"
        }]
      }
    },

    connect: {
      demo: {
        options: {
          port: 8000,
          hostname: '*',
          open: true,
          keepalive: true,
          base: ['./demo/']
        }
      }
    },

    typescript: {
      build: {
        src: ["./src/main.ts", "./src/**/*.ts"],
        option: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          //basePath: 'path/to/typescript/files',
          sourceMap: true,
          declaration: false
        },
        dest: "./build/index.js"
      }
    },

    watch: {
      demo: {
        options: {
          spawn: false
        },
        files: ["./src/**"],
        tasks: ["build", "clean:demo", "copy:demo"]
      }
    },

    ngtemplates: {
      app: {
        src: ["./src/ts/**/*.tpl.html"],
        dest: "./build/myAppHTMLCache.js",
        options: {
          module: 'rongWebimWidget', //name of our app
          htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
          }
        }
      }
    }



  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask("default", function() {
    grunt.log.writeln("env" + process.env.path);
  });

  grunt.registerTask("build", ["clean:build", "typescript:build",
    "copy:build", "ngtemplates:app"
  ]);


  grunt.registerTask("demo", ["build", "clean:demo", "copy:demo",
    "watch:demo"
  ]);

}
