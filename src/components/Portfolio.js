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


    const handleClickLeft = () => {
        if (slide > 0) {
                setSlide(slide - 1)
            } else {
                setSlide(data.length - 1)
            }
    }

    const handleClickRight = () => {
        if (slide < data.length - 1) {
                setSlide(slide + 1)
            } else {
                setSlide(0)
            }
    }

    return (
        <div className='portfolio-container'>
            <motion.div initial='hidden' animate='visible' variants={variants} className='portfolio-card-outer'>
                <h1>{data[slide].title}</h1>
                <div className='portfolio-card-container'>
                    <div className='portfolio-container-left'>
                        <div className='portfolio-container-icon'>
                            <a href={data[slide].live} target='_blank'><i class="fas fa-desktop"></i>Live</a>
                        </div>
                        <i class="fas fa-chevron-left" onClick={() => handleClickLeft()}></i>
                    </div>
                    <div className='portfolio-card'>
                        <img className='portfolio-image' src={`${data[slide].img}`} />
                        <p>{data[slide].desc}</p>
                        <p className='portfolio-tech'>{data[slide].tech}</p>
                    </div>
                    <div className='portfolio-container-right'>
                        <div className='portfolio-container-icon'>
                            <a href={data[slide].code} target='_blank'><i class="fas fa-laptop-code"></i>Code</a>
                        </div>
                        <i class="fas fa-chevron-right" onClick={() => handleClickRight()}></i>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Portfolio
