import Component from "../js/Component.js"
import ChapterList from "./ChapterList.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import Info from "./Info.js";

class Landing extends Component {
    setChildComponent() {
        return [Content, Info, ChapterList, Footer];
    }
    template(){
        return `
    <div>
    <div class="container">
        <main class="landing">
            <div class="image gradient">
                <h2>Cursos Gratis </h2>
                <p>Por tiempo limitado</p>
                <button>Registrate</button>
            </div>
            <div class="banner gradient">
                <p>Por tiempo limitado, para no perderselo</p>
                <div class="img"></div>
                <button>Registrate</button>
            </div>
            <h3>Ultimos Cursos</h3>
            <ul>
                ${[1,2,3,4, 5].map(a=>`<li>
                    <div class="tapa">
                        <h4>Title of the book </h4>
                        <p>Por tiempo limitado, para no perderselo</p>
                        <span>Nombre del Autor<span>
                    </div>
                    <div class="price">
                        <button>Leelo ahora</button>
                    </div>
                </li>`).join('')}
            </ul>
            <div class="promo-container">
                ${[1,2].map(a=> `<div class="promo gradient">
                    <h4>Title of the book </h4>
                    <p>Por tiempo limitado, para no perderselo</p>
                    <span>Nombre del Autor<span>
                </div>`).join('')}
            </div>
            <h3>Ultimos Cursos</h3>
            <ul>
                ${[1,2,3,4, 5].map(a=>`<li>
                    <div class="tapa">
                        <h4>Title of the book </h4>
                        <p>Por tiempo limitado, para no perderselo</p>
                        <span>Nombre del Autor<span>
                    </div>
                    <div class="price">
                        <button>Leelo ahora</button>
                    </div>
                </li>`).join('')}
            </ul>
            <ul>
                ${[1,2,3,4, 5].map(a=>`<li>
                    <div class="tapa">
                        <h4>Title of the book </h4>
                        <p>Por tiempo limitado, para no perderselo</p>
                        <span>Nombre del Autor<span>
                    </div>
                    <div class="price">
                        <button>Leelo ahora</button>
                    </div>
                </li>`).join('')}
            </ul>
            <div class="promo-container">
                ${[1,2].map(a=> `<div class="promo gradient">
                    <h4>Title of the book </h4>
                    <p>Por tiempo limitado, para no perderselo</p>
                    <span>Nombre del Autor<span>
                </div>`).join('')}
            </div>
        </main>     
    </div>
    <div class="landing-footer gradient">
        <div class="container">
            <ul>
                <li>
                    <h5>Cursos</h5>
                    <p>Unity</p>
                    <p>Unreal</p>
                    <p>Godot</p>
                    <p>Game Design</p>
                </li>
                <li>
                    <p>Programacion</p>
                    <p>Networking</p>
                    <p>Bases de Datos y SQL</p>
                    <p>Photoshop</p>
                    <p>Modelado en 3D</p>
                    <p>HTML, CSS, JavaScript</p>
                    <p>Python, C#, PHP</p>
                </li>
                <li>
                    <h5>Social</h5>
                    <ul>
                        <li>FB</li>
                        <li>GG</li>
                        <li>TW</li>
                        <li>INS</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    </div>
    `
    }
}

export default Landing

