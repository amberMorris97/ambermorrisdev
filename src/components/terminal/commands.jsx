import { projects, experience, education } from "./data";

export const commands = {
    help: () => 
        <>
          <ul>
            <li>about: displays more information about me</li>
            <li>projects: displays projects I've built</li>
            <li>exp: displays my previous experience</li>
            <li>edu: displays my education history</li>
            <li>src: displays a link to the source code</li>
            <li>contact: displays contact information</li>
            <li>resume: displays a link to view/download my resume</li>
            <li>clear: clears the display</li>
          </ul>
        </>,
    about: () => 
        <>
          <p>Hey, I'm Amber! I'm a fullstack software engineer with over a year of experience working at Redfin.
            My journey has been shaped by two intensive engineering bootcamps where I've built strong fundamentals.
            I'm eager to join a collaborative team where I can continue learning while making meaningful contributions.
          </p>
        </>,
    projects: () => 
        <>
            <ul className="entries projects">
                {projects.map((p) => (
                    <li key={p.name}>
                        <strong>{p.name}</strong>
                        <div>{p.description}</div>
                        <div className="meta">{p.stack.join(", ")}</div>
                        <a href={p.link} target="_blank" rel="noreferrer">view project</a>
                    </li>
                ))}
            </ul>
        </>,
    exp: () => 
        <>
            <ul className="entries experience">
                {experience.map((e) => (
                    <li key={e.company}>
                        <strong>{e.company}</strong>, {e.role}
                        <div className="meta">{e.dates}</div>
                    </li>
                ))}
            </ul>
        </>,
    edu: () => (
        <ul className="entries education">
            {education.map((e) => (
                <li key={e.name}>
                    <strong>{e.name}</strong>
                    <div>{e.detail}</div>
                    <div className="meta">{e.dates}</div>
                </li>
            ))}
        </ul>
    ),
    src: () => (
        <div>
            <a href="https://github.com/ambermorris97/ambermorrisdev" target="_blank">view source code</a>
        </div>
    ),
    contact: () => (
        <div>
            Email Me: <a href="mailto:ambermorris1997@gmail.com">ambermorris1997@gmail.com</a>
            GitHub: <a href="https://github.com/ambermorris97" target="_blank">ambermorris97</a>
            LinkedIn: <a href="https://linkedin.com/in/ambermorris97" target="_blank">ambermorris97</a>
        </div>
    ),
    resume: () => (
        <>
            <a href="/resume.pdf" download="Amber-Morris-Resume.pdf">
                download resume (PDF)
            </a>
        </>
    ),
};