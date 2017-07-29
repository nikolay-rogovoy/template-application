import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
  entry: 'tmp/aot-js/src/main.js',
  dest: 'dist/aot/build.js', // output a single application bundle
  sourceMap: true,
  format: 'iife',
  onwarn: function(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }

    // console.warn everything else
    console.warn( warning.message );
  },
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: [
        //'node_modules/core-js/**',
        //'node_modules/zone.js/**',
        'node_modules/rxjs/**'
      ]
    }),
    uglify()
  ]
};
