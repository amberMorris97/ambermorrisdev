import { useEffect, useState, useRef } from 'react';
import { commands } from "./commands";

const Terminal = () => {
  const [cmdHistory, setCmdHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [display, setDisplay] = useState([]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [display]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cmd = inputValue.trim().toLowerCase();

    if (!cmd) return;

    if (cmd === "clear") {
        setDisplay([]);
    } else {
        const cmdFn = commands[cmd];
    
        const output = cmdFn ? cmdFn() : `command not found: ${cmd}`;
    
        setDisplay([...display, { cmd, output }]);
    }

    setCmdHistory([...cmdHistory, inputValue]);
    setInputValue('');
  };

  const renderDisplay = display.map((result, idx) => {
    return (
        <div key={`${idx}-${result.cmd}`} className='output-display'>
            <span>{result.cmd}</span>
            <div>{result.output}</div>
        </div>
    );
  });

  return (
    <section onClick={() => inputRef.current.focus()}>
        <div className="terminal-input-container">
            {renderDisplay}
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoFocus
                />
            </form>
            <div ref={bottomRef} />
        </div>
    </section>
  );
};

export default Terminal;