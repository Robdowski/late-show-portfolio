import skyline from '../images/skyline.jpg'
import skyline2 from '../images/skyline2.jpg'
import sauti from '../images/sauti.png'
import cowboy from '../images/spacecowboy.png'
import animal from '../images/saveanimals.png'

export default [
    {
        title: "Sauti Databank",
        desc: "Sauti Databank is a data visualization tool built for the non-profit company Sauti Africa using React, Node, GraphQL and SQL. This project was designed to give Sauti Africa an easy way to see what kinds of demographics are using their services. The app is also used by legislators and governmental organizations.",
        img:  sauti,
        code: "https://github.com/Lambda-School-Labs/sauti-databank-fe",
        live: "https://sauti.now.sh",
        bullets: ["Collaborated directly with CTO to develop product to exact speciﬁcations", "Improved graph load times by more than 50% by switching to GraphQL architecture", "Upgraded old, ineﬃcient code with better structured and simpler code "]
    },
    {
        title: "Space Cowboys",
        desc: "Space Cowboys is a video game built using React, Django, and PostgreSQL by a team of 4 during a 4-day hackathon. The game utilizes Django as a backend and React for the front-end client. I utilized an algorithm to randomly create rooms, walls, and names and descriptions for each room on each planet.",
        img: cowboy,
        code: "https://github.com/python-django-unchained",
        live: "https://space-cowboys.netlify.app/",
        bullets: ["Wrote algorithm to procedurally generate rooms, including walls, with random names and descriptions.", "Utilizing Unique User IDs allows for multiple players to be logged in at once.", "The player can choose from up to 9 planets to explore."]
    },
    {
        title: "Save Animals",
        desc: "Save The Animals was built using React, Node, and PostgreSQL over the course of a week with a team of three developers. The client will allow a user to register as an organization or a supporter, and either create campaigns to help save endangered species, or as a supporter, donate to those causes.",
        img: animal,
        code: "https://github.com/save-the-animals-bw/save-the-animals",
        live: "https://savetheanimals.now.sh/",
        bullets: ["User can log in as either a supporter or organization, and each role can perform different operations.", "Supporters can donate to campaigns to raise funds.", "Organizations can create and delete campaigns under their organization name."]
    }
]