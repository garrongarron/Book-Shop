import Component from "../js/Component.js"

class Content extends Component {
    template() {
        return `
        <div class="content">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque excepturi quo veniam. At
                    consequatur quos reprehenderit similique quibusdam accusantium incidunt aliquid, tenetur,
                    temporibus, corrupti dolore ab magnam quam ea?</p>
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MOPfClRGb1g?controls=0"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
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