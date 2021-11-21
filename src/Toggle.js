import dataHandler from "./data/DataHandler.js";

var md = '[**Showdown**](http://www.showdownjs.com) is *great*\n' +
    'because:\n\n' +
    ' - it\'s easy to use\n' +
    ' - it\'s extensible\n' +
    ' - works in the server and in the browser';
class Toggle {
    constructor() {
        this.converter = new Showdown.converter();
        this.data = null
        this.dataPrev = null
        this.textArea = document.createElement('textarea')
        this.textArea.classList.add('editor')
        this.textArea.addEventListener('change',(e)=>{
            this.data = this.textArea.value
        })
        this.yt = document.createElement('div')
        this.yt.innerHTML = `<div class="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/StTqXEQ2l-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    }
    init(content){
        this.data = content
    }
    edit() {
        document.querySelector('.content').innerHTML = ''
        document.querySelector('.content').appendChild(this.textArea)
        this.textArea.value = this.data
        console.log('edit');
    }
    preview() {
        if(!this.data) return;
        var html = this.converter.makeHtml(this.data);
        document.querySelector('.content').innerHTML = html
        document.querySelectorAll('.content *').forEach(node=>{
            node.setAttribute('data-tts', 1)
        })
        document.querySelectorAll('a').forEach(e=>{
            if(e.getAttribute('title')=='YT'){
                console.log(e.innerText);
                let clone = this.yt.childNodes[0].cloneNode(true)
                clone.childNodes[0].setAttribute('src', 'https://www.youtube.com/embed/'+e.innerText)
                console.log(clone);
                e.parentNode.replaceChild(clone,e);
            }
            // e.setAttribute('target', '_black')
        })
        if(this.dataPrev === this.data) return;
        dataHandler.update(this.data)
        this.dataPrev = this.data
    }
}

const toggle = new Toggle()

export default toggle