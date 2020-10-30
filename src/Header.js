import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { useGesture } from 'react-with-gesture';
import ReactDOM from 'react-dom';
import './App.css';
import { useSpring, animated as a } from 'react-spring';
import { useTransition, animated, config } from 'react-spring';

const slides = [
    { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
    { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
    { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
    { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
]

function Header() {
    const propsFade = useSpring({ opacity: 1, from: { opacity: 0 } })
    const anotherprops = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    })

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    const myfirst = useSpring({
        to: async (next, cancel) => {
            await next({ opacity: 1, color: 'yellow' })
            await next({ opacity: 1, color: 'red' })
            await next({ color: 'blue' })
            await next({ color: 'green' })
        },
        from: { color: 'blue' }
    })

    // const [index, setIndex] = useState(0)
    // const transitions = useTransition(slides[index], item => item.id, {
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    //     config: config.molasses
    // })
    // useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 4), 2000), [])

    const [index, setIndex] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opactiy: 0 },
        enter: { opacity: 1},
        leave: { opacity: 0},
        config: config.molasses,
    });
    useEffect(() => void setInterval(() => setIndex(state => (state + 1) % 4), 2000), [])

    return (
        <div className="webHeader">
            <a.div className="myName" style={propsFade}>I will fade in</a.div>
            <a.h1 style={anotherprops}>hello</a.h1>
            <a.h3 style={myfirst}>Colors</a.h3>
            <div onClick={() => set(state => !state)}>
                {flipped ?
                <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} ><h1>pa</h1></a.div> :
                <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} ><h1>ul</h1></a.div>
                }
            </div>

            {JSON.stringify(transitions)}
            {transitions.map(({ item, props, key }) => {
                return(
                    <animated.div
                    key={key}
                    class="bg"
                    style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
                />
                )
            })}

        </div>

    );

}

render(<Header />, document.getElementById('root'))
export default Header;