//index.js
import a from './a.js';
import b from './b.js';

const obtn = document.createElement('button')
    obtn.innerHTML = 'button'
    document.body.appendChild(obtn)
    obtn.addEventListener('click', function() {
        // 引入自定的模块
        import('./module').then(({ default: _ }) => {
            console.log(_);
        })
    })
function fn() {
    console.log('index-------');
}
fn();
