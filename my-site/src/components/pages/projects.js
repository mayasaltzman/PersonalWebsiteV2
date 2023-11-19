import React from 'react'
import { Link } from "react-router-dom";
import "./projects.css"

const projects = () => {
    return (
        <div>
            <h1>Featured Projects</h1>
            <div id='buttons'>
                <Link to="https://github.com/mayasaltzman/Molecule-Manipulation-Library" class="project-link"><button class="project"><img src="molecule.png" alt="Black and white cartoon molecule" id='molecule' /><h3>Molecule Manipulation Library</h3>Full stack web app for viewing molecules</button></Link>
                <Link to="https://github.com/mayasaltzman/TicTacToe-Game-Suite" class="project-link"><button class="project"><img src="tictactoe.png" alt="Black and white cartoon tic tac toe game" id='molecule'/><h3>TicTacToe Game Suite</h3>GUI with Tic Tac Toe, Numerical Tic Tac Toe, and Player Profiles</button></Link>
                <Link to="https://github.com/mayasaltzman/habit_tracker" class="project-link"><button class="project"> <img src="tracker.png" id="molecule" alt="cartoon black and white calendar"/><h3>Habit Tracker</h3>Full stack web app to keep on track with your habits (work in progress)</button></Link>
            </div>

        </div>
    )
}

export default projects