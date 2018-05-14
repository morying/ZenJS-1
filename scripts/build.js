const rollup = require('rollup');
const extend = require('extend');
const fs = require('fs');
const zlib = require('zlib');
const uglify = require('uglify-js');

const defaultConfig = require('./config');
const allConfig = [
  {}, {
    input: 'dist/Zen.js',
    output: 'dist/Zen.min.js'
  }
];

!async function(){

  for( let config of allConfig ){

    const input = config.input || defaultConfig.input;
    const output = config.output || defaultConfig.output.file;

    const isMinify = /min\.js$/.test( output );
    const rollupConfig = extend(
      {
        input,
        output: { file: output }
      },
      defaultConfig
    );

    await new Promise(( resolve, reject ) => {

      rollup
        .rollup( rollupConfig )
        .then( bundle => {
          return bundle.generate( rollupConfig.output )
        })
        .then( ({ code }) => {
          if( isMinify ){
            code = defaultConfig.output.banner + '\n' + uglify.minify( code ).code;
          }
          return write( output, code );
        })
        .then( ([ size, gzip ]) => {
          console.log(`${ output } 已构建完毕!\n      size: ${ size }\n      gzip: ${ gzip }`);
          resolve();
        })
        .catch( error => {
          console.log( error );
          reject();
        });
    });
  }
}();


function write( output, code ){
  return new Promise(( resolve, reject ) => {
    fs.writeFile( output, code, err => {
      if( err ) return reject( err );

      zlib.gzip( code, ( err, zipped ) => {
        if( err ) return reject( err );

        resolve([
          getSize( code ),
          getSize( zipped )
        ]);
      });
    });
  });
}

function getSize( code ){
  return ( code.length / 1024 ).toFixed( 2 ) + 'kb';
}