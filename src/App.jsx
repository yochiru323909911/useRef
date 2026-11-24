import { useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import TextBox from './components/textBox'

function App() {
  const [text, setText] = useState('')
  const text2 = useRef('');
  const text3 = useRef('');
  const [counter, setCounter] = useState(0);
  const prev = useRef(null);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [seconds2, setSeconds2] = useState(0);
  const intervalId2 = useRef(null);
  const clicks = useRef(0);

  const count = (num) => {
    prev.current = counter;
    setCounter(pre => pre + num)
  }

  const startClock = () => {
    setIntervalId(setInterval(() => {
      setSeconds(pre => pre += 1);
    }, 1000));
  }

  const stopClock = () => {
    clearInterval(intervalId);
  }

  const startClock2 = () => {
    intervalId2.current = setInterval(() => {
      setSeconds2(pre => pre += 1);
    }, 1000);
  }

  const stopClock2 = () => {
    clearInterval(intervalId2.current);
  }

  return (
    <>
    <div className='wrp'>
      <h3>React Exercise: useRef with HTML Elements</h3>
      <h5>Task 1</h5>
      <p>With useState</p>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={() => setText('')}>Clear input</button>
    </div>
    <div className='wrp'>
      <p>With useRef</p>
      <input ref={text2} type="text"></input>
      <button onClick={() => text2.current.value = ''}>Clear input</button>
    </div>
    <div className='wrp'>
      <h5>Task 2</h5>
      <TextBox myRef={text3}/>
      <button onClick={() => alert(text3.current.value)}>Show value</button>
    </div>
    <div className='wrp'>
      <h3>React Exercise: useRef to Avoid Extra Re-renders</h3>
      <h5>Exercise 1</h5>
      <button onClick={() => count(-1)}>-</button>
      <button onClick={() => count(1)}>+</button>
      <p>Current: {counter} Previous: {prev.current}</p>
    </div>
    <div className='wrp'>
      <h3>React Exercise: Timer with useState vs useRef</h3>
      <h5>Part 1</h5>
      <label>Seconds: {seconds}</label>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
    <div className='wrp'>
      <h5>Part 2</h5>
      <label>Seconds: {seconds2}</label>
      <button onClick={startClock2}>Start</button>
      <button onClick={stopClock2}>Stop</button>
    </div>
    <div className='wrp'>
      <h5>Exercise 3</h5>
      <button onClick={() => clicks.current += 1}>Click Me</button>
      <button onClick={() => alert("Total Clicks: " + clicks.current)}>Show Total Clicks</button>
    </div>
    </>
  )
}

export default App
