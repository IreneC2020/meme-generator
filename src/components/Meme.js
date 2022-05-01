import React from "react"
import memesData from "./memesData.js"

export default function Meme(){
    const[meme, setMeme] = React.useState({
        bottomText:"",
        topText:"",
        randomImage:"https://i.imgflip.com/vdz0.jpg"
    })
    let allMemeImages = memesData
    const[memeImg, setMemeImg] = React.useState("https://i.imgflip.com/vdz0.jpg") 

    function getMemesImg() {
        const memesArray = memesData.data.memes
        const randomInt = Math.floor(Math.random() * memesArray.length)
        setMemeImg(memesArray[randomInt].url)
        // don't need the prevImg so no =>
    }

    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form-input" />
                <input type="text" placeholder="Bottom text"className="form-input" />
                <button className="form-button" onClick={getMemesImg}>Get new meme image</button>
            </div>
            <img src={memeImg} alt="meme-img"className="meme-img" />
        </main>
    )

}