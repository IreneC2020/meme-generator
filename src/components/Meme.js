import React from "react"
import memesData from "./memesData.js"

export default function Meme(){
    const[meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/vdz0.jpg"
    })
    
    const[allMemeImages, setAllMemeImages] = React.useState(memesData) 
    //create state var 

    function getMemesImg() {
        const memesArray = allMemeImages.data.memes
        const randomInt = Math.floor(Math.random() * memesArray.length)

        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage:memesArray[randomInt].url
            }))
    }

    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form-input" />
                <input type="text" placeholder="Bottom text"className="form-input" />
                <button className="form-button" onClick={getMemesImg}>Get new meme image</button>
            </div>
            <img src={meme.randomImage} alt="meme-img"className="meme-img" />
        </main>
    )

}