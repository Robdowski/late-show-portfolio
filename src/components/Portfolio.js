import React, { useState } from 'react'

import { motion } from 'framer-motion'

import data from './portfolioData'

const variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
    }
}



const Portfolio = () => {
    const [slide, setSlide] = useState(0)

    const handleClick = e => {
        if (e.target.className === 'left-btn') {
            if (slide > 0) {
                setSlide(slide - 1)
            } else {
                setSlide(data.length - 1)
            }
        } else if (e.target.className === 'right-btn') {
            if (slide < data.length - 1) {
                setSlide(slide + 1)
            } else {
                setSlide(0)
            }
        }
    }

    return (
        <div className='portfolio-container'>
            <motion.div initial='hidden' animate='visible' variants={variants} className='portfolio-card-outer'>
                <h1>{data[slide].title}</h1>
                <div className='portfolio-card'>
                    <img className='portfolio-image' src={`${data[slide].img}`} />
                    <p>{data[slide].desc}</p>
                    <a href={data[slide].live}>Live</a>
                    <a href={data[slide].code}>Code</a>
                    <p className='portfolio-tech'>{data[slide].tech}</p>
                    <button className='left-btn' onClick={e => handleClick(e)}>LEFT</button>
                    <button className='right-btn' onClick={e => handleClick(e)}>RIGHT</button>
                </div>
            </motion.div>
        </div>
    )
}

export default Portfolio
