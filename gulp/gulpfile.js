/*
 * Title: Aprendendo Gulp
 * Fonte: https://www.turbosite.com.br/blog/tutorial-gulp-saiba-como-a-comecar-utilizar-em-seus-projetos/
 */
var js  = [
    './js-source/vendor/jquery/*',         // Todos os arquivos do diretório Jquery
    './js-source/vendor/bootstrap/*.*',     // Todos os arquivos do diretório bootstrap e sub diretórios
    './js-source/main.js'                  // Arquivo único
];
 
// Núcleo do Gulp
var gulp = require('gulp');
 
// Transforma o javascript em formato ilegível para humanos
var uglify = require("gulp-uglify");
 
// Agrupa todos os arquivos em um
var concat = require("gulp-concat");
 
// Tarefa de minificação do Javascript
gulp.task('minify-js', function () {
    gulp.src(js)                        // Arquivos que serão carregados, veja variável 'js' no início
    .pipe(concat('script.min.js'))      // Arquivo único de saída
    .pipe(uglify())                     // Transforma para formato ilegível
    .pipe(gulp.dest('./js/'));          // pasta de destino do arquivo(s)
});
 
// Tarefa padrão quando executado o comando GULP
gulp.task('default',['minify-js']);
 
// Tarefa de monitoração caso algum arquivo seja modificado, deve ser executado e deixado aberto, comando "gulp watch".
gulp.task('watch', function() {
    gulp.watch(js, ['minify-js']);
});
