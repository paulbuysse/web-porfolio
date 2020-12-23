import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './App.css'

//contains picture info
const slides = [
    { id: 0, url: 'https://imgur.com/oTqu0xQ.jpg', name: 'Hotdog' },
    { id: 1, url: 'https://imgur.com/Lk19zsz.jpg', name: 'Burger' },
    { id: 2, url: 'https://imgur.com/mGcrMF7.jpg', name: 'Pizza' },
    { id: 3, url: 'https://imgur.com/m77Ahdi.jpg', name: 'Pie' },
]

const SlideShow = () => {
    const [textHover, setTextHover] = useState(false)

    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 5000), [])
    return transitions.map(({ item, props, key }) => (
        <div className="slideShowDiv">
            <animated.div
                key={key}
                class="bg"
                style={{ ...props, backgroundColor: "#222" }}
            >
                {textHover && <p className="onHover">{item.name}</p>}

                <img
                    className="imgSlide"
                    src={`${item.url}`}
                    onMouseEnter={() => setTextHover(true)}
                    onMouseLeave={() => setTextHover(false)} />

            </animated.div>

        </div>
    ))
}

export default SlideShow;
