import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Score from "./Score";

const Main = () => {
    const [clicked, setClick] = useState([])
    const [cardList, setCard] = useState([])
    const [score, setScore] = useState(0)
    const [highScore, setHigh] = useState(0)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://api.atlasacademy.io/nice/NA/item/search?background=bronze&background=silver&background=gold&use=ascension&lang=en")
                const data = await response.json()
                const asset = data.slice(0, 16)
                setCard(asset)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    const shuffler = () => {
        let cardCopy = [...cardList]
        for (let i = cardCopy.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = cardCopy[i]
            cardCopy[i] = cardCopy[j]
            cardCopy[j] = k
        }
        setCard(cardCopy)
    }

    const winCheck = (index) => {
        let current = cardList[index].id
        if (!clicked.includes(current)) {
            setClick(clicked => [...clicked, current])
            setScore(score + 1)
            if (highScore <= score) {
                setHigh(highScore + 1)
            }
        } else {
            setClick([])
            setScore(0)
        }
        shuffler()
    }

    return (
        <div className="game" style={{display: "flex", flexDirection: "column", justifyContent:"center", alignContent:"center"}}>
            <Score score={score} high={highScore} />
            <Cards item={cardList} refresh={winCheck} />
        </div>
    )
}

export default Main