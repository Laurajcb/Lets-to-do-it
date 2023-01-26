import React from "react";
import { TodoContext } from "../TodoContext";
import "./styles.css"

function TodoBadges() {
    const { completedTodos } = React.useContext(TodoContext);
    const badges = [
        { id: 'zero', image: 'zero.png', goal: 1 },
        { id: 'one', image: 'one.png', goal: 2 },
        { id: 'two', image: 'two.png', goal: 3 },
        { id: 'three', image: 'three.jpg', goal: 5 },
        { id: 'four', image: 'four.png', goal: 10 },
        { id: 'five', image: 'five.png', goal: 11 },
        { id: 'six', image: 'six.png', goal: 15 },
        { id: 'seven', image: 'seven.png', goal: 18 },
        { id: 'eigth', image: 'eigth.png', goal: 20 },
        { id: 'nine', image: 'nine.png', goal: 21 },
    ];


    return (
        <section>
            <div className="container">
                <h3 className="badges-tittle">Your badges</h3>
                <div className="badges-main-section">
                    {badges.map((badge) => (
                        <section key={badge.id} className={`badge-box ${(completedTodos < badge.goal) ? 'disabled' : ''}`}>
                            <section className="badges-section">
                                <div className="overlay"></div>
                                <img className="badge-img" src={`../assets/img/${badge.image}`} />
                            </section>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { TodoBadges };
