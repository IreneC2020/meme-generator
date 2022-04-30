import memesData from "./memesData.js"

export default function Meme(){
    function getMemesImg() {
        const memesArray = memesData.data.memes
        const randomInt = Math.floor(Math.random() * memesArray.length)
        console.log(memesArray[randomInt].url)        
    }
    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form-input" />
                <input type="text" placeholder="Bottom text"className="form-input" />
                <button className="form-button" onClick={getMemesImg}>Get new meme image</button>
            </div>
        </main>
    )

}