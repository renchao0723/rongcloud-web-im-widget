;
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: {
        src: ["./build/*"]
      },
      demo: {
        src: [
          "./demo/widget/**/*",
          "./demo/widget/**"
        ]
      },
      release:{
        src:["./dist/*"]
      },
      temp:{
        src:['./temp']
      }
    },

    copy: {
      demo: {
        files: [{
          expand: true,
          cwd: "./build/",
          src: "./**",
          dest: "./demo/widget/"
        }]
      },
      build: {
        files: [
          {
            expand: true,
            cwd: "./src/images/",
            src: "./**",
            dest: "./build/images/"
          }
        ]
      },
      release:{
        files:[
          {
            expand: true,
            cwd: "./src/images/",
            src: "./**",
            dest: "./dist/images/"
          }
        ]
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
        dest: "./temp/main.js"
      },
      release:{
        src: ["./src/main.ts", "./src/**/*.ts"],
        option: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          //basePath: 'path/to/typescript/files',
          sourceMap: true,
          declaration: false
        },
        dest: "./temp/main.js"
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

    concat: {
      build: {
        files:[
          {
            src:[
              './bower_components/jquery/dist/jquery.js',
              './vendor/jqueryrebox/jquery-rebox.js',
              './bower_components/jquery.nicescroll/dist/jquery.nicescroll.min.js',
              './temp/main.js','./temp/myAppHTMLCache.js',
              './vendor/loadscript/script.min.js','./vendor/qiniu/qiniu.js'],
            dest:'./build/main.js'
          },
          {
            src:[
              './vendor/jqueryrebox/jquery-rebox.css','./src/css/conversation.css',
            ],
            dest:'./build/css/conversation.css'
          }
        ]
      },
      release:{
        files:[
          {
            src:[
              './bower_components/jquery/dist/jquery.js',
              './vendor/jqueryrebox/jquery-rebox.js',
              './bower_components/jquery.nicescroll/dist/jquery.nicescroll.min.js',
              './temp/main.js','./temp/myAppHTMLCache.js',
            './vendor/loadscript/script.min.js','./vendor/qiniu/qiniu.js'],
            dest:'./dist/main.js'
          },
          {
            src:[
              './vendor/jqueryrebox/jquery-rebox.css','./src/css/conversation.css',
            ],
            dest:'./dist/css/conversation.css'
          }
        ]
      }
    },
    uglify:{
      build:{
        src:'./build/main.js',
        dest:'./build/main.min.js'
      },
      release:{
        src:'./dist/main.js',
        dest:'./dist/main.min.js'
      }
    },
    cssmin:{
      build:{
        src:'./build/css/conversation.css',
        dest:'./build/css/conversation.min.css'
      },
      release:{
        src:'./dist/css/conversation.css',
        dest:'./dist/css/conversation.min.css',
      }
    },

    ngtemplates: {
      app: {
        src: ["./src/ts/**/*.tpl.html"],
        dest: "./temp/myAppHTMLCache.js",
        options: {
          module: 'RongWebIMWidget', //name of our app
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask("default", function() {
    grunt.log.writeln("env" + process.env.path);
  });

  grunt.registerTask("build", ["clean:build", "typescript:build",
    "ngtemplates:app","concat:build", "copy:build","clean:temp","uglify:build","cssmin:build"
  ]);

  grunt.registerTask("release", ["clean:release", "typescript:release",
    "ngtemplates:app","concat:release", "copy:release","clean:temp","uglify:release","cssmin:release"
  ]);


  grunt.registerTask("demo", ["build", "clean:demo", "copy:demo",
    "watch:demo"
  ]);

}
