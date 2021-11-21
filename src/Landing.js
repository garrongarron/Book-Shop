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
    <div>
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
                        <li>
                            <svg width="30" height="30" role="img" alt="facebook-icon" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><title>facebook</title><path d="M18 9.05502C18 4.05407 13.9706 0 9 0C4.02944 0 0 4.05407 0 9.05502C0 13.5746 3.29117 17.3207 7.59375 18V11.6725H5.30859V9.05502H7.59375V7.06009C7.59375 4.79067 8.9374 3.53712 10.9932 3.53712C11.9779 3.53712 13.0078 3.71397 13.0078 3.71397V5.94236H11.8729C10.7549 5.94236 10.4062 6.64035 10.4062 7.35645V9.05502H12.9023L12.5033 11.6725H10.4062V18C14.7088 17.3207 18 13.5746 18 9.05502Z" fill="#677389"></path></svg>
                        </li>
                        <li>
                            <svg width="30" height="25" role="img" alt="twitter-icon" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><title>twitter</title><path d="M6.2896 16.251C13.8368 16.251 17.9648 9.99824 17.9648 4.57584C17.9648 4.39824 17.9648 4.22144 17.9528 4.04544C18.7559 3.46457 19.4491 2.74534 20 1.92144C19.2511 2.25328 18.4567 2.4709 17.6432 2.56704C18.4998 2.05423 19.1409 1.24766 19.4472 0.29744C18.6417 0.775404 17.7605 1.11225 16.8416 1.29344C16.2229 0.635588 15.4047 0.199975 14.5135 0.0540106C13.6223 -0.0919534 12.7079 0.0598692 11.9116 0.485984C11.1154 0.9121 10.4819 1.58875 10.109 2.41123C9.73605 3.23371 9.64462 4.15616 9.8488 5.03584C8.2174 4.95405 6.62144 4.53011 5.16451 3.79151C3.70759 3.05292 2.42227 2.0162 1.392 0.74864C0.867274 1.65197 0.70656 2.72133 0.942583 3.73899C1.17861 4.75665 1.79362 5.6461 2.6624 6.22624C2.00939 6.20689 1.37062 6.03073 0.8 5.71264C0.8 5.72944 0.8 5.74704 0.8 5.76464C0.800259 6.71201 1.12821 7.63014 1.72823 8.36328C2.32824 9.09642 3.16338 9.59945 4.092 9.78704C3.4879 9.95179 2.85406 9.97588 2.2392 9.85744C2.50141 10.6728 3.01189 11.3858 3.69926 11.8967C4.38662 12.4076 5.21649 12.691 6.0728 12.707C4.61979 13.849 2.82485 14.4689 0.9768 14.467C0.650323 14.4664 0.324163 14.4466 0 14.4078C1.87651 15.6121 4.05993 16.2508 6.2896 16.2478" fill="#677389"></path></svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" alt="email-icon" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="30" height="25" x="0" y="0" viewBox="0 0 511.626 511.626" style="enable-background:new 0 0 512 512" xml:space="preserve"><title>mail</title><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099    c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277    c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569    c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852    c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116    c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679    c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974    C26.169,159.743,37.307,170.736,49.106,178.729z" fill="#677389" data-original="#000000" style=""></path><path d="M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699    c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287    c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699    c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265    c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265    V184.437C503.441,193.569,493.927,201.854,483.072,209.275z" fill="#677389" data-original="#000000" style=""></path></g></g></g></svg>
                        </li>
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

