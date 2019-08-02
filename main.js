let result = `/*
*你好，我叫xxx，来自江苏泰州
*毕业于xxx，学习旅游管理（会展）专业
*/

.token.punctuation {
    color:#fff !important;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all 1s;
}

.token.property {
    color: #0A4A42;
}

body {
    padding:10px;
    background: #F4F4FE;
    border: 1px solid rgba(255,255,255,1) 0.3;
    width: 50%;
    height: 100vh;
    font-size: 16px;
    box-shadow: 9px -1px 28px -14px rgba(23,23,23,1);
}








`
let n = 0
let timeId = setInterval(() => {
    let domCode = document.querySelector('#code')
    n += 1
    domCode.innerHTML = result.substring(0, n)
    domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css, 'css');
    styleCode.innerHTML = result.substring(0, n)
    if (n >= result.length) {
        clearInterval(timeId)
    }
}, 10)