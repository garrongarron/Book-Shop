import Component from "../js/Component.js"
import toggle from "./Toggle.js"

class AssideComponent extends Component {
    addEventListener() {
        return ['click']
    }
    preview(){
        toggle.preview()
    }
    edit(){
        toggle.edit()
    }
    template() {
        return `
        <aside>
            <ul>
                <li>
                    <div class="img" click="preview"></div>
                </li>
                <li>
                    <div class="img" click="edit"></div>
                </li>
                <li>
                    <div class="img"></div>
                </li>
                <li>
                    <div class="img"></div>
                </li>

            </ul>
        </aside>`
    }
}
// let content = new AssideComponent()
// content.querySelector('aside')

export default AssideComponent