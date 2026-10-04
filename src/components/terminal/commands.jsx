import { projects, experience, education } from "./data";

export const commands = {
    help: () => 
        <>
          <ul>
            <li>about: displays more information about me</li>
            <li>projects: displays projects I've built</li>
            <li>skills: displays my current skillset</li>
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
          <p>Hey, I'm Amber! I'm a full stack software engineer with over a year of experience working in a CI/CD environment.
            I have experience with JavaScript, React, Java, Spring Boot, and MySQL. My foundation comes from two intensive
            engineering programs, Hack Reactor and LaunchCode. I'm looking to join a collaborative team where I can
            keep growing while contributing to work that makes a real impact.
          </p>
        </>,

    skills: () => (
        <ul className="entries">
            <li><span className="contact-label">frontend</span> JavaScript, React, HTML, CSS</li>
            <li><span className="contact-label">backend</span> Java, Spring Boot</li>
            <li><span className="contact-label">database</span> MySQL, PostgreSQL, MongoDB</li>
            <li><span className="contact-label">tools</span> Git, Netlify, AWS, Netflix Conductor</li>
        </ul>
    ),
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
        <ul>
            <li>
                <span className="contact-label">email: </span>
                <a href="mailto:ambermorris1997@gmail.com">ambermorris1997@gmail.com</a>
            </li>
            <li>
                <span className="contact-label">github: </span>
                <a href="https://github.com/ambermorris97" target="_blank">github.com/ambermorris97</a>
            </li>
            <li>
                <span className="contact-label">linkedin: </span>
                <a href="https://linkedin.com/in/ambermorris97" target="_blank">linkedin.com/in/ambermorris97</a>
            </li>
        </ul>
    ),
    resume: () => (
        <>
            <a href="/AmberMorrisResume.pdf" download="Amber-Morris-Resume.pdf">
                download resume (PDF)
            </a>
        </>
    ),
};