import Component from "../js/Component.js"

class ChapterTitle extends Component {
    template({links}) {
        return `<ul>
            ${links.map(link => `<li> <span class="progress"></span> <span class="chapter">${link}</span></li>`)}
        </ul>`
    }
}

export default ChapterTitle