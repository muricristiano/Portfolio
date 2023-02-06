import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

{/* Array map for the projects*/}
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This Portfolio',
    description: '',
    github: 'https://github.com/muricristiano/portfolio',
    demo: 'You are already seeing'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Habit Tracker',
    description: '',
    github: 'https://github.com/muricristiano/habit-tracker',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Lastest Creations</h5>
      <h2>Personal Projects</h2>

    <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, description}) => {
          return (
            <article key={id} className='portfolio__item'>
               <div className="portfolio__item-image">
                  <img src={image} alt={title} />
               </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="portfolio__item-cta">
              <a href={github} className='btn btn-primary' target='_blank'>Github</a>
            </div>
          </article>
          )
        })
      }
    </div>
    </section>
  )
}

export default Portfolio