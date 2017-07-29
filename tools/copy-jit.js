var fs = require('fs');
var copydir = require('copy-dir');
var mkdirp = require('mkdirp');

var resources = [
  {
    'source': 'node_modules/core-js/client/shim.min.js'
  },
  {
    'source': 'node_modules/zone.js/dist/zone.min.js'
  },
  {
    'source': 'node_modules/systemjs/dist/system.src.js'
  },
  {
    'source': 'source/angular_atlogo.png'
  },
  {
    'source': 'source/loader-preview.svg'
  },
  {
    'source': 'source/favicon.ico'
  },
  {
    'source': 'source/favicon.ico'
  },
  {
    'source': 'source/.htaccess'
  },
  {
    'source': 'source/index-jit.html',
    'dest': 'index.html'
  },
];

function main() {

  mkdirp('dist/jit', function(err) {
    // path exists unless there was an error
  });

  resources.map((f) => {
    // Папка с билдом
    let path_dest = 'dist/jit/';
    // Сплитим путь для получении имени файла
    let path = f.source.split('/');
    // Файл назначения, если не указано имя файла остается без изменений
    let dest = f.dest == null ? path_dest + path[path.length - 1] : path_dest + f.dest;
    fs.createReadStream(f.source).pipe(fs.createWriteStream(dest));
  });

  copydir('assets', 'dist/jit',
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('ok');
      }
    }
  );
};

new main();
