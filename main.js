let result = `/*
*你好，我叫xxx，来自江苏泰州
*毕业于xxx，学习旅游管理（会展）专业
*/

* {
    padding: 0;
    margin: 0;
    transition: all 1s;
}

.token.property {
    color: #0A4A42;
}

body {
    width: 50%;
    background: #F4F4FE;
    height: 100vh;
    font-size: 15px;
}
/*加点效果*/
html {
    perspective: 1000px;
}
#code {
    width:40%;
    margin:10px;
    padding:10px;
    position:fixed;
    left:0;
    top:0;
    border: 1px solid rgba(255,255,255,1);
    box-shadow: 9px -1px 28px -14px rgba(23,23,23,1);
    transform: rotateY(10deg) translateZ(-100px);
   
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