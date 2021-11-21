class DataHandler {
    constructor() {
        this.url = 'http://localhost:3000/chapters/'
        this._id = null
    }
    update(content) {
        if(!this._id) return
        fetch(this.url + this._id, {
            method: 'PATCH',
            body: JSON.stringify({ content }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }
    start() {

        let firstChapter = new Promise((resolve, reject) => {
            fetch(this.url)
                .then(res => res.json())
                .then((data) => {
                    let url = data.chapters[0].request.url
                    resolve(url)
                    this.users = data;
                    this._id = data.chapters[0]._id
                })
                .catch(console.log)
        })
        let data = new Promise((resolve, reject) => {
            firstChapter.then(url => {
                fetch(url)
                    .then(res => res.json())
                    .then((data) => {
                        resolve(data.chapter)
                    })
                    .catch(console.log)
            })
        })

        return data

    }
    stop() { }
}

const dataHandler = new DataHandler()

export default dataHandler


        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         title: 'Jhon Doe',
        //         content: '1asdasd'
        //     }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // })
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log(json)
        //     })