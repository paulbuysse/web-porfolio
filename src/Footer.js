import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './App.css'

const slides = [
    { id: 0, url: 'https://i.imgur.com/j6H8gxq.jpg', name: 'Hotdog' },
    { id: 1, url: 'https://i.imgur.com/StV946k.jpg', name: 'Burger' },
    { id: 2, url: 'https://i.imgur.com/YBZacyX.jpg', name: 'Pizza' },
    { id: 3, url: 'https://i.imgur.com/bqUT4kP.jpg', name: 'Pie' },
]

const Footer = () => {
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
        <animated.div
            key={key}
            class="bg"
            style={{ ...props, backgroundImage: `${item.url}` }}
        >
            <img className="imgSlide"
             src={item.url}
             onMouseEnter={() => setTextHover(true)}
             onMouseLeave={() => setTextHover(false)} />

             {textHover && <p className="onHover">{item.name}</p>}
            
        </animated.div>
    ))
}

//render(<Footer />, document.getElementById('root'))
export default Footer;
