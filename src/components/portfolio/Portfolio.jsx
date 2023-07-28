import React from 'react'
import './portfolio.css'
import PORTFOLIO_BANNER from '../../assets/portfolio-banner.png'
import HABIT_TRACKER_WEB_BANNER from '../../assets/habit-tracker-web-banner.png'
import HABIT_TRACKER_MOBILE_BANNER from '../../assets/habit-tracker-mobile-banner.jpg'
import TEAM_WORKSPACE_FEED_BANNER from '../../assets/team-workspace-feed-banner.png'
import TO_DO_LIST_APP_BANNER from '../../assets/to-do-list-app-banner.png'
import PRODUCTIVITY_APP_BANNER from '../../assets/productivity-timer-app-pomodoro-banner.png'

/* 
  Holding for next 2 completing line projects
  import HABIT_TRACKER_SERVER_BANNER from '../../assets/habit-tracker-server-banner.jpg' 
*/

const data = [
  {
    id: 1,
    image: HABIT_TRACKER_WEB_BANNER,
    title: 'Habit Tracker - Web',
    techs: 'React.js | Tailwind',
    description: 'With this app, users can define their own set of habits they wish to adopt, Each day, the app provides a color representation based on the percentage of habits completed, creating a visually engaging and motivating experience. Find the list of technologies used for this project on the project page by clicking the github link below:',
    github: 'https://github.com/muricristiano/habit-tracker-web',
  },
  {
   id: 2,
   image: PRODUCTIVITY_APP_BANNER,
   title: 'Productivity Timer App',
   techs: 'TypeScript | React | Styled Components | RHF | Context API ',
   description: 'Currently in daily development, This app goal is to boost your focus and productivity! Manage your time efficiently and stay on track with customized timers for specific activities. Enhance your workflow and achieve your goals. Built with TypeScript, React, and Styled Components.',
   github: 'https://github.com/muricristiano/productivity-timer-pomodoro-app',
  },
  {
    id: 3,
    image: TEAM_WORKSPACE_FEED_BANNER,
    title: 'Team Workspace Feed App',
    techs: 'React.js | JavaScript | TypeScript',
    description: 'Team Workspace Feed is a collaborative project aimed at creating a shared workspace where colleagues can connect openly and transparently. It serves as a platform for sharing updates, ideas, and questions, fostering teamwork and collective progress. Built using React, JavaScript/TypeScript, it offers a modern and intuitive user experience.',
    github: 'https://github.com/muricristiano/team-workspace-feed',
  },
  {
    id: 4,
    image: TO_DO_LIST_APP_BANNER,
    title: 'To-Do | Task List App',
    techs: 'React.js | JavaScript',
    description: 'A To-Do Task List app built with React.js and JavaScript. This app allows users to create and manage their tasks, mark them as completed, and delete tasks when necessary. It provides a simple and intuitive interface for organizing and tracking daily tasks and activities.',
    github: 'https://github.com/muricristiano/to-do-task-list-app',
  },
  {  
    id: 5,
    image: HABIT_TRACKER_MOBILE_BANNER,
    title: 'Habit Tracker - Mobile Version',
    techs: 'React Native | Tailwind Native',
    description: 'With this app, users can define their own set of habits they wish to adopt, Each day, the app provides a color representation based on the percentage of habits completed, creating a visually engaging and motivating experience. Find the list of technologies used for this project on the project page by clicking the github link below:',
    github: 'https://github.com/muricristiano/habit-tracker-mobile',
  },
  {
    id: 6,
    image: PORTFOLIO_BANNER,
    title: 'This Portfolio Page',
    techs: 'React.js | TypeScript',
    description: 'This portfolio page presents a project that combines React components with state-of-the-art animations and stylish modern and effective design elements. Find the list of technologies used for this project on the project page by clicking the github link below:',
    github: 'https://github.com/muricristiano/portfolio',
  },
/*   {
    id: 6,
    image: HABIT_TRACKER_SERVER_BANNER,
    title: 'Habit Tracker - Server App',
    techs: 'TypeScript | Node.js | Fastify | Prisma ORM | SQLite ',
    description: 'The Backend for both Web and Mobile Habit Tracker applications. It provides the necessary routes and integrates with the frontend to create a seamless experience. Secure API handling and reliable database operations. Enables users to define and manage their own set of habits. Find the list of technologies used for this project on the project page by clicking the github link below:',
    github: 'https://github.com/muricristiano/habit-tracker-server'
  }, */
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Latest Creations</h5>
      <h2>Personal Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, techs, github, description }) => (
          <div
            key={id}
            className={`portfolio__item ${github ? 'clickable' : 'non-clickable'}`}
            onClick={() => {
              if (github) {
                window.open(github, '_blank');
              }
            }}
          >
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h2>{title}</h2>
            <h4>{techs}</h4>
            <p>{description}</p>
            {github && (
              <div className="portfolio__item-cta">
                <a href={github} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;