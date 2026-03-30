import sneakers from "../../public/img/projects/denelSneakers.png"
import pomodoro from "../../public/img/projects/pomodoro.png"
import tictac from "../../public/img/projects/ticTacToe.png"

export interface Projects {
  id: number,
  name: string,
  description: string,
  image: string,
  techs: string[],
  links: {
    figma?: string,
    live: string,
    github: string,
  }
}

export const projects: Projects[] = [
  {
    id: 1,
    name: 'Denel Sneaker',
    description: 'Shop market',
    image: sneakers,
    techs: ['React', 'CSS', 'Redux', 'Express.js'],
    links: {
      figma: 'https://figma.com/community/file/1198393124994627983',
      live: 'https://deplos.github.io',
      github: 'https://github.com/Deplos/deplos.github.io'
    }
  },
  {
    id: 2,
    name: 'Pomodoro Timer',
    description: 'Timer',
    image: pomodoro,
    techs: ['JS', 'SCSS'],
    links: {
      figma: 'https://www.figma.com/design/JHbFL5kV72vlsOv2NGiPCy/⏰-Pomo---Pomodoro-Timer-App-Prototype--v-0.1.0---Community-?t=SsHd7l8sTyMC0tTE-0',
      live: 'https://pomodoro-wt4w.onrender.com',
      github: 'https://github.com/Dene1/Pomodoro'
    }
  },
  {
    id: 3,
    name: 'Todo list',
    description: 'Todo list different state-managers',
    image: sneakers,
    techs: ['React', 'CSS', 'Context', 'Redux', 'Zustand', 'RTK', 'RTK Query'],
    links: {
      live: 'https://deplos.github.io',
      github: 'https://github.com/Dene1/to-do-list-on-different-state-managers'
    }
  },
  {
    id: 4,
    name: 'Tic-Tac-Toe',
    description: 'Mini Game',
    image: tictac,
    techs: ['JS', 'CSS',],
    links: {
      figma: 'https://figma.com/community/file/1198393124994627983',
      live: 'https://deplos.github.io',
      github: 'https://github.com/Dene1/React.tic-tac-toe'
    }
  }
]