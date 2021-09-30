import Component from "../js/Component.js"

class Header extends Component {
    beforeAppendChild(parent){
        this.button = parent.querySelector('#buttons')
        window.addEventListener('resize',()=>{
            if(window.innerWidth< 900){
                this.button.classList.add('hide')
            } else {
                this.button.classList.remove('hide')
            }
        })
    }
    addEventListener() {
        return ['click']
    }
    toggle(){
        this.flag = this.flag || true 
        if(this.flag){
            this.button.classList.toggle('hide')
        }
        this.flag = !this.flag  
    }
    template() {
        return `
        <header>
            <ul>
                <li class="logo">Logo</li>
                <li class="hamburger" click="toggle">Menu</li>
                <li id="buttons">
                    <ul>
                        <li><label>Broweser Library: </label><input type="text" placeholder="Book title..."></li>
                        <li class="right"><a href="#">My Library</a></li>
                        <li><a href="#">Profile</a></li>
                    </ul>
                </il>
                
            </ul>
        </header>`
    }
}
// let content = new Header()
// content.querySelector('header')

export default Header