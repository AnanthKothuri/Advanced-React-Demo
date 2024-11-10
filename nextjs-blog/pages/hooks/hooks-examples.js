import Link from 'next/link';
import { useState, useEffect, createContext, useContext } from 'react';

// Create a context for theme
const ThemeContext = createContext('light');

export default function HooksExamples() {
  // useState Hook Example
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  
  // useEffect Hook Example
  useEffect(() => {
    setMessage(`Count is currently ${count}`);
  }, [count]); // Runs every time count changes

  // useContext Hook Example
  const theme = useContext(ThemeContext);
  
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h1 style={{ color: theme === 'dark' ? '#eee' : '#333' }}>React Hooks Examples</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>

        {/* useState Example */}
        <div style={styles.section}>
          <h3>useState Example</h3>
          <p>Current Count: <strong>{count}</strong></p>

          <button 
            onClick={() => setCount(count + 1)}
            style={styles.button}
          >
            Increment Count
          </button>
        </div>

        {/* useEffect Example */}
        <div style={styles.section}>
          <h3>useEffect Example</h3>
          <p>{message}</p>
        </div>

        {/* useContext Example */}
        <div style={styles.section}>
          <h3>useContext Example</h3>
          <p>Current Theme: <strong>{theme}</strong></p>
          
          <button
            onClick={() => alert(`You are in ${theme} mode`)}
            style={{...styles.button, backgroundColor: theme === 'dark' ? '#555' : '#ddd'}}
          >
            Show Current Theme
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

// Inline styling
const styles = {
  section: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  button: {
    padding: '10px 20px',
    marginTop: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: '#fff',
    fontSize: '16px',
  }
};
