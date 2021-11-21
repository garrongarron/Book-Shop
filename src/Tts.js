class Tts {
    constructor() {
        this.n = 0
    }
    start() {
        window.addEventListener('beforeunload', this.clean)
        document.querySelector('body').addEventListener('click', this.click)
    }
    stop() {
        window.removeEventListener('beforeunload', this.beforeUnload)
        document.querySelector('body').removeEventListener('click', this.click)
    }
    clean = (node = null) => {
        if (node) node.classList.remove('reading')
        if (window.speechSynthesis.speaking) speechSynthesis.cancel()
        clearTimeout(this.n)
    }
    setListener = (root) => {
        console.log(root);
        // root.addEventListener('click', () => {
        //     console.log('ooooooooooooooooooooook');
        //     this.click()
        // })
    }
    click = (e) => {
        
        if (window.speechSynthesis.speaking) {
            return this.clean(e.target)
        }
        if (!window.speechSynthesis.speaking && e.target.dataset.tts) {
            let utterance = new SpeechSynthesisUtterance(e.target.innerText);
            utterance.lang = 'es-ES'
            utterance.localService = false;
            clearTimeout(this.n)
            if (window.speechSynthesis.speaking) speechSynthesis.cancel()
            speechSynthesis.speak(utterance);
            utterance.addEventListener('start', () => {
                e.target.classList.add('reading')
            });
            utterance.addEventListener('end', () => {
                this.clean(e.target)
                this.n = setInterval(() => { speechSynthesis.pause(); speechSynthesis.resume(); }, 3000);
            })
        }
    }
}

const tts = new Tts()
tts.start()

export default tts