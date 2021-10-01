import Component from "../js/Component.js"
import AssideComponent from "./AssideComponent.js";
import Header from "./Header.js";
// import Content from './Content.js'
// import Info from "./Info.js";
// import ChapterList from "./ChapterList.js";
// import Footer from "./Footer.js";
import Book from "./Book.js";
import Landing from "./Landing.js";
import eventBus from "./EventBus.js";

class Body extends Component {
    setState() {
        eventBus.subscribe('goto',(page)=>{
            this.state.page = page
            localStorage.setItem('page', JSON.stringify(page));
            this.setNewState(this.state)
        })
        return {
            page: JSON.parse(localStorage.getItem('page')) || 'Book'
        }
    }
    setChildComponent() {
        return [Book, Header, AssideComponent, Landing];
    }
    template() {
        return `
    <div>
        <Header></Header>
        <${this.state.page}></${this.state.page}>
        <AssideComponent></AssideComponent>
    </div>`
    }
}
let content = new Body()
content.querySelector('body')

export default Body
/**/