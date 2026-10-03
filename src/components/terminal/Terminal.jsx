import { useEffect, useState, useRef } from 'react';
import { commands } from "./commands";

const Terminal = () => {
  const [cmdHistory, setCmdHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [display, setDisplay] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [display]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
        e.preventDefault();
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
            setInputValue(cmdHistory[historyIndex - 1]);
        }
    } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex < cmdHistory.length - 1) {
            setHistoryIndex(historyIndex + 1);
            setInputValue(cmdHistory[historyIndex + 1]);
        } else {
            setHistoryIndex(cmdHistory.length);
            setInputValue('');
        }
    }
  };

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return; 

    if (cmd === "clear") {
        setDisplay([]);
    } else {
        const cmdFn = commands[cmd];
        const output = cmdFn ? cmdFn() : `command not found: ${cmd}`;

        setDisplay((prev) => [ ...prev, { cmd, output }]);
    }

    setCmdHistory((prev) => [...prev, raw]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(inputValue);
    setInputValue('');
  };

  const renderDisplay = display.map((result, idx) => {
    return (
        <div key={`${idx}-${result.cmd}`} className="output-display">
        <div className="command-line">
            <span className="prompt">guest@ambermorrisdev:~$</span>
            <span className="command">{result.cmd}</span>
        </div>
        <div className="command-output">{result.output}</div>
        </div>
    );
  });

  const renderCommands = ["help", "about", "projects", "exp", "edu", "src", "contact", "skills", "resume", "clear"].map((name) => {
    return (
        <button
            key={name}
            type="button"
            onClick={(e) => {
                e.stopPropagation();
                runCommand(name);
            }}
        >
            {name}
        </button>
    );
  });


  return (
    <main className="desktop">
        <section className="terminal-window" onClick={() => inputRef.current.focus()}>
        <div className="title-bar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="title">guest@ambermorrisdev: ~</span>
        </div>

        <div className="terminal-body">
            <div className="intro">
            <h1 className="intro-title">Amber Morris</h1>
            <p>Full stack engineer. JavaScript, React, Java, Spring Boot, MySQL.</p>
            <p className="dim">
                Type <span className="prompt">help</span> to see what you can do.
            </p>
            </div>

            {renderDisplay}

            <form onSubmit={handleSubmit} className="input-line">
            <span className="prompt">guest@ambermorrisdev:~$</span>
            <input
                ref={inputRef}
                autoFocus
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            </form>
            <div ref={bottomRef} />
        </div>
        <div className="chips">
            {renderCommands}
        </div>
        </section>
    </main>
  );
};

export default Terminal;