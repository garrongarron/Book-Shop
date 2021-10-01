import Component from "../js/Component.js"
import ChapterList from "./ChapterList.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import Info from "./Info.js";

class Book extends Component {
    setChildComponent() {
        return [Content, Info, ChapterList, Footer];
    }
    template(){
        return `
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
    </div>`
    }
}

export default Book