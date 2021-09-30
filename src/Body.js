import Component from "../js/Component.js"
import AssideComponent from "./AssideComponent.js";
import Header from "./Header.js";
import Content from './Content.js'
import Info from "./Info.js";
import ChapterList from "./ChapterList.js";
import Footer from "./Footer.js";

class Body extends Component {
    setChildComponent() {
        return [Header, AssideComponent, Content, Info, ChapterList, Footer];
    }
    template() {
        return `
    <div>
        <Header></Header>
        <div class="container">
            <div class="left">
                <section>
                    <Info></Info>
                    <ChapterList></ChapterList>
                </section>
            </div>
            <main>
                <Content></Content>
                <Footer></Footer>
            </main>
        </div>
        <AssideComponent></AssideComponent>
    </div>`
    }
}
let content = new Body()
content.querySelector('body')

export default Body
/**/