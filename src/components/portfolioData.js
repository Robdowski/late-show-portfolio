import skyline from '../images/skyline.jpg'
import skyline2 from '../images/skyline2.jpg'
import sauti from '../images/sauti.png'
import cowboy from '../images/spacecowboy.png'
import animal from '../images/saveanimals.png'

export default [
    {
        title: "Sauti Databank",
        desc: "Sauti Databank is a data visualization tool built for the non-profit company Sauti Africa. This project was designed to give Sauti Africa an easy way to see what kinds of demographics are using their services. The app is also used by legislators, governmental organizations, and researchers.",
        img:  sauti,
        code: "https://github.com/Lambda-School-Labs/sauti-databank-fe",
        live: "https://sauti.now.sh",
        tech: "React, Node/Express, GraphQL, MySQL"
    },
    {
        title: "Space Cowboys",
        desc: "Space Cowboys is a video game built by a team of 4 during a 4-day hackathon. The game utilizes Django as a backend and React for the front-end client. I utilized an algorithm to randomly create rooms, walls, and names and descriptions for each room on each planet.",
        img: cowboy,
        code: "https://github.com/python-django-unchained",
        live: "https://space-cowboys.netlify.app/",
        tech: "React, Django, PostgreSQL" 
    },
    {
        title: "Save The Animals",
        desc: "Save The Animals was built over the course of a week with a team of two front-end developers and one backend developer. The client will allow a user to register as an organization or a supporter, and either create campaigns to help save endangered species, or as a supporter, donate to those causes.",
        img: animal,
        code: "https://github.com/save-the-animals-bw/save-the-animals",
        live: "https://savetheanimals.now.sh/",
        tech: "React, Node/Express, PostgreSQL"
    }
]