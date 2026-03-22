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
    figma: string,
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
    techs: ['JS', 'CSS'],
    links: {
      figma: 'https://figma.com/community/file/1198393124994627983',
      live: 'https://deplos.github.io',
      github: 'https://github.com/Deplos/deplos.github.io'
    }
  },
  {
    id: 3,
    name: 'Tic-Tac-Toe',
    description: 'Mini Game',
    image: tictac,
    techs: ['JS', 'CSS', 'Node.js'],
    links: {
      figma: 'https://figma.com/community/file/1198393124994627983',
      live: 'https://deplos.github.io',
      github: 'https://github.com/Deplos/deplos.github.io'
    }
  }
]