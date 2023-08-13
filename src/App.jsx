import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    return (
        <div className="app">
            <div className="mainHeading">
                <h1>ToDo App</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>Task List</h2>
            </div>
            <div className="input">
                <input type="text" placeholder="🖊️ Add item..." />
                <i className="fas fa-plus"></i>
            </div>
            <div className="todos">
                <div className="todo">
                    <div className="left">
                        <input type="checkbox" name="" id="" />
                        <p>React tutorial</p>
                    </div>
                    <div className="right">
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
    

export default App
