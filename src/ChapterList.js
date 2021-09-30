import Component from "../js/Component.js"
import ChapterTitle from "./ChapterTitle.js";

class ChapterList extends Component {
    chapter() {
        let arr = []
        for (let index = 0; index < 20; index++) {
            arr.push(`Capitulo ${index}`)
        }
        return arr;
    }
    setChildComponent() {
        return [ChapterTitle];
    }
    template() {
        return `<ChapterTitle links="chapter"></ChapterTitle>`
    }
}

// let content = new ChapterList()
// content.querySelector('section')

export default ChapterList