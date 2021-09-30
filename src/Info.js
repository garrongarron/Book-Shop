import Component from "../js/Component.js"

class Info extends Component {
    template() {
        return `
        <div class="info">
            <div class="image-book"></div>
            <div class="details">
                <h2>Author</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>`
    }
}
// let content = new Info()
// content.querySelector('section')

export default Info