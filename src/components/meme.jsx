import React from "react";
import memeData from "../memeData.jsx"


export default function Meme(){
    // const [memeImage, setMemeImage] =  React.useState("http://i.imgflip.com/1bij.jpg")

    const[meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const[allMemeImage, setAllMemeImage] = React.useState(memeData)

    function getMemeImage(){
        const memeArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage: url
        }))
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme-image" />
        </main>
    )
}