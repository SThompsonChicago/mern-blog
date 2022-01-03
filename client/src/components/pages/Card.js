import React from 'react';

export default function Card() {
    const cardStyle = {
        widtch: '25rem',
    };

    return (
        <div className="box">
            <div className="card" style={cardStyle}>
                <card className="content">
                    <h1 className="card-title">Book Talk</h1>
                    </card>
            <img
                className="card-img-top"
                src={`https://sthompsonchicago.github.io/My_portfolio/assets/bookTalkPic.png`}
                alt="App image"
            />
            <div className="card-body">
                
                <p className="card-text">Blah blah</p>
                <a href="https://book-club-chicago.herokuapp.com" className="btn btn-primary">
                    Link to deployed application.
                </a>
            </div>
            </div>
        </div>
    )
}