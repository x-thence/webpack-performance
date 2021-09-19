//index.js
import a from './a.js';
import b from './b.js';
import(/* webpackChunkName: 'ccc' */'./c')
function fn() {
    console.log('index-------');
}
fn();
