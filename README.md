# Terminal Portfolio

An interactive portfolio that works like a command line. Visitors type commands to explore my background, projects, skills, and contact info.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Status](https://img.shields.io/badge/status-in%20progress-39ff6a?style=for-the-badge)

[**Live demo**](https://ambermorrisdev.netlify.app) &nbsp;|&nbsp; [GitHub](https://github.com/ambermorris97) &nbsp;|&nbsp; [LinkedIn](https://linkedin.com/in/ambermorris97)

## About

I'm Amber, a full stack software engineer with over a year of professional experience at Redfin. This project is my portfolio, built as a terminal so that exploring it feels like using one.

## Features

- **Command registry:** each command is an entry in a single object, so adding a new one is a few lines
- **Terminal window design:** title bar, black background, green accents, and content that scrolls inside the window
- **Clickable command buttons** for phones, where typing commands is awkward
- **Resume download** straight from the terminal
- **Auto-scroll** that keeps the newest output in view
- **Unknown command handling** that points visitors back to `help`

## Commands

| Command | What it does |
| --- | --- |
| `help` | Lists every available command |
| `about` | Short bio |
| `projects` | Things I've built |
| `skills` | Technologies I work with |
| `experience` | Work history |
| `education` | Education history |
| `resume` | View or download my resume |
| `contact` | Email, GitHub, and LinkedIn |
| `clear` | Clears the screen |

## Built with

- [React](https://react.dev/) with hooks (`useState`, `useRef`, `useEffect`)
- [Vite](https://vitejs.dev/) for the dev server and build
- Plain CSS, with no UI library

## Getting started

```bash
# clone the repo
git clone https://github.com/ambermorris97/ambermorrisdev.git
cd ambermorrisdev

# install dependencies
npm install

# start the dev server
npm run dev
```

Build for production with `npm run build`. The output goes to `dist/`.

## Project structure

```
public/
  resume.pdf              # downloaded by the resume command
src/
  index.css
  components/
    terminal/
      Terminal.jsx        # state, input handling, and rendering
      Terminal.css        # window and terminal styling
      commands.jsx        # command registry (name -> function)
```

## Adding a command

1. Add an entry to the `commands` object in `commands.jsx`:

   ```jsx
   export const commands = {
     hello: () => "Hi there!",
   };
   ```

2. Add the name to the `help` output and to the `quickCommands` list so it appears as a mobile button.

## Contact

- Email: [ambermorris1997@gmail.com](mailto:ambermorris1997@gmail.com)
- GitHub: [ambermorris97](https://github.com/ambermorris97)
- LinkedIn: [ambermorris97](https://linkedin.com/in/ambermorris97)