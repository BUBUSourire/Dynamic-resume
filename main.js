/*将code写到#code和style标签中*/
let domCode = document.querySelector('#code')
function writeCode(prefix, code, fn) {
    let n = 0
    let timeId = setInterval(() => {
        n += 1
        domCode.innerHTML =Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
        styleCode.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop=10000
        if (n >= code.length) {
            clearInterval(timeId)
            fn&&fn.call()
        }
    }, 10)
}


let result = `/*
*你好，我叫xxx，来自江苏泰州
*毕业于xxx
*/

// .token.property {
//     color: #0A4A42;
// }

* {
    padding: 0;
    margin: 0;
    transition: all 1s;
}

body {
    width: 50%;
    background: #906D8C;
    height: 100vh;
    font-size: 15px;
}

/*加点效果*/

html {
    perspective: 1000px;
}
#code {
    width: 40%;
    height: 100vh;
    overflow: hidden;
    margin: 10px;
    padding: 10px;
    position: fixed;
    left: 0;
    top: 0;
    border: 1px solid rgba(255,255,255,1);
    box-shadow: 9px -1px 28px -14px rgba(23,23,23,1);
    transform: rotateY(10deg) translateZ(-100px);
    overflow: auto;
   
}

/*简历开始*/

`

let result2 = `
#paper {
    width: 50%;
    height: 100vh;
    margin: 10px;
    position: fixed;
    top: 0;
    right: 0;
    background: #fff; 
    display:flex;
}
#paper>.paperContent {
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px;
    justify-content: center;
    align-center: center;
}
`

let result3 = `

/*加入Markdown*/

`


let md =`
## 自我介绍

|xxx|xxx|
|:-------------|:------------- |
|xxx|xxx|
|xxx|xxx|


    

`

let result4 = `
/*加一点样式*/
`

writeCode('', result, () => {
    createPaper(() => {
        writeCode(result, result2,() => {
            writeMarkdown(md, () => {
                writeCode(result+result2,result3,() => {
                    introduceMarkdown(() => {
                        writeCode(result+result2+result3,result4, () => {
                            console.log('finish')
                        })
                    })
                })
            })
        })
    })
})

function createPaper(fn) {
    let paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    let paperContent=document.createElement('per')
    paperContent.className='paperContent'
    paper.appendChild(paperContent)
    fn&&fn.call()
}

function writeMarkdown (markdown,fn){
    let domPaperContent =document.querySelector('#paper>.paperContent')
    let n = 0
    let timeId=setInterval(() => {
        n+=1
        domPaperContent.innerHTML = markdown.substring(0, n)
        domPaperContent.scrollTop=10000
        if (n >= markdown.length) {
            clearInterval(timeId)
            fn&&fn.call()
        }
    },10)
}

function introduceMarkdown(fn){
    let introduceMarkdownBody = document.createElement('div')
    introduceMarkdownBody.className='markdown-body'
    introduceMarkdownBody.innerHTML = marked(md)
    let domPaperCon =document.querySelector('#paper>.paperContent')
    domPaperCon.replaceWith(introduceMarkdownBody)
    fn&&fn.call()
}






