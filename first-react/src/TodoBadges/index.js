import React from "react";
import "./styles.css"

function TodoBadges() {

    const badges = [
        { id: 'one', image: 'one.png', label: 'Great Start!!', achived: true },
        { id: 'two', image: 'two.png', label: 'You are doing well!!', achived: false },
        { id: 'three', image:'three.jpg', label:'Keep going!!', achived: false},
        { id: 'four', image:'four.png', label:'!!', achived: false},
        { id: 'five', image:'five.png', label:'Keep going!!', achived: false},
        { id: 'six', image:'six.png', label:'Keep going!!', achived: false},
        { id: 'seven', image:'seven.png', label:'Keep going!!', achived: false},
        { id: 'eigth', image:'eigth.png', label:'Keep going!!', achived: false},
        { id: 'nine', image:'nine.png', label:'Keep going!!', achived: false},
    ];
    

    return (
        <div className="badges-main-section">
            {badges.map((badge) => (
                <section key={badge.id} className="badge-box">
                    <section className="badges-section" >
                        <img className="badge-img" src={`../assets/img/${badge.image}`} />
                        <p>{badge.label}</p>
                    </section>
                </section>
            ))}
        </div>
    );
}

export { TodoBadges };