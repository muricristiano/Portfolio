import React from 'react'
import './portfolio.css'
import PORTFOLIO_BANNER from '../../assets/portfolio-banner.png'
import HABIT_TRACKER_WEB_BANNER from '../../assets/habit-tracker-web-banner.png'
import HABIT_TRACKER_MOBILE_BANNER from '../../assets/habit-tracker-mobile-banner.jpg'
import HABIT_TRACKER_SERVER_BANNER from '../../assets/habit-tracker-server-banner.jpg'
import SPOTIFY_V2_BANNER from '../../assets/spotify-banner.jpg'
import CHAT_BANNER from '../../assets/chat-banner.jpg'

{/* Array map for the projects*/}
const data = [
  {
    id: 1,
    image: HABIT_TRACKER_WEB_BANNER,
    title: 'Habit Tracker - Web',
    techs: 'React.js | Tailwind',
    description: 'With this app, users can define their own set of habits they wish to adopt, Each day, the app provides a color representation based on the percentage of habits completed, creating a visually engaging and motivating experience. Find the list of technologies used for this project on the project page by clicking the github link below:',
    github: 'https://github.com/muricristiano/habit-web',
  },
  {  
    id: 2,
    image: HABIT_TRACKER_MOBILE_BANNER,
    title: 'Habit Tracker - Mobile App',
    techs: 'React Native | Tailwind Native',
    description: 'With this app, users can define their own set of habits they wish to adopt, Each day, the app provides a color representation based on the percentage of habits completed, creating a visually engaging and motivating experience. Find the list of technologies used for this project on the project page by clicking the github link below:',
    github: 'https://github.com/muricristiano/habit-tracker-mobile',
  },
  {
    id: 3,
    image: HABIT_TRACKER_SERVER_BANNER,
    title: 'Habit Tracker - Server App',
    techs: 'TypeScript | Node.js | Fastify | Prisma ORM | SQLite ',
    description: 'The Backend for both Web and Mobile Habit Tracker applications. It provides the necessary routes and integrates with the frontend to create a seamless experience. Secure API handling and reliable database operations. Enables users to define and manage their own set of habits. Find the list of technologies used for this project on the project page by clicking the github link below:',
    github: 'https://github.com/muricristiano/habit-tracker-server'
  },
  {
    id: 4,
    image: PORTFOLIO_BANNER,
    title: 'This Portfolio Page',
    techs: 'React.js',
    description: 'This portfolio page presents a project that combines React components with state-of-the-art animations and stylish modern and effective design elements. Find the list of technologies used for this project on the project page by clicking the github link below:',
    github: 'https://github.com/muricristiano/portfolio',
  },  {
    id: 5,
    image: SPOTIFY_V2_BANNER,
    title: 'Spotify 2.0',
    techs: 'React.js | Tailwind | Redux | RapidAPI',
    description: 'Next developments...',
    github: '',
  },  {
    id: 6,
    image: CHAT_BANNER,
    title: 'Chat Platform Miscrosoft Teams 2.0',
    techs: 'React.js | Tailwind | Redux | RapidAPI',
    description: 'Next developments...',
    github: '',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Latest Creations</h5>
      <h2>Personal Projects</h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, techs, github, description}) => (
          <a key={id} href={github} target="_blank" rel="noopener noreferrer">
            <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h4>{techs}</h4>
              <p>{description}</p>
              {github && (
                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                </div>
              )}
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;