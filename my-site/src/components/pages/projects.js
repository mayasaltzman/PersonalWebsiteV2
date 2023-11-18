import React from 'react'
import { Link } from "react-router-dom";

const projects = () => {
    return (
        <div>
            <h1>Featured Projects</h1>
            <Link to="https://github.com/mayasaltzman/Molecule-Manipulation-Library"><button>Molecule Manipulation Library</button></Link>
            <Link to="https://github.com/mayasaltzman/TicTacToe-Game-Suite"><button>TicTacToe Game Suite</button></Link>
            <Link to="https://github.com/mayasaltzman/habit_tracker"><button>Habit Tracker</button></Link>
        </div>
    )
}

export default projects