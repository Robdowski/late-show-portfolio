import React from 'react'

import { motion } from 'framer-motion'

const variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
    }
}

const About = () => {
    return (
        <div className='about-content-container'>
            <motion.div initial='hidden' animate='visible' variants={variants} className="about-content">
            <h1>About</h1>
            <div className='about-paragraph'>
                <p>I'm a past multiple award winning Risk Coordinator at Capital One now turned Full Stack Software Engineer. My specialties include full-stack development with React, Node, Express, Relational Databses, RESTful and GraphQL APIs.</p>
                <br /><p>After years spent working on a team in the finance industry, I've developed strong teamwork, organizational, communication, and problem-solving skills. I am interested in combining those skills with web development to create cutting edge web applications as part of a team.</p>
                <br /><p>If I'm not programming you can likely find me in the kitchen. One of my lifelong passions is cooking, because like software engineering, you will never find yourself without something to learn. If you'd like to know more, feel free to get in touch!</p>
            </div>
            </motion.div>
        </div>
    )
}

export default About
