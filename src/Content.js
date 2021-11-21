import Component from "../js/Component.js"
import dataHandler from "./data/DataHandler.js";
import toggle from "./Toggle.js";
import './Tts.js'

class Content extends Component {
    beforeAppendChild(node) {
        let p = node.querySelector('.content')
        dataHandler.start().then(data=>{
            console.log(data);
            p.innerHTML = data.content
            toggle.init(data.content)
        })
        
    }
    template() {
        return `
        <div class="content">
                <h1>Title</h1>
                <p data-tts="1">En un lugar de la <b>Mancha</b>, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino.</p>
                <div class="video">
                
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque excepturi quo veniam. At
                    consequatur quos reprehenderit similique quibusdam accusantium incidunt aliquid, tenetur,
                    temporibus, corrupti dolore ab magnam quam ea?</p>

            </div>`
    }
}
// let content = new Content()
// content.querySelector('main')

export default Content

// <iframe width="560" height="315" src="https://www.youtube.com/embed/MOPfClRGb1g?controls=0"
// title="YouTube video player" frameborder="0"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// allowfullscreen></iframe>