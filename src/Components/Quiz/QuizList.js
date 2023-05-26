import React from 'react';
import { Link } from 'react-router-dom';
import './QuizList.css';

const QuizList = ({ card }) => {
    // console.log(card);
    return (
        <div>
            <div className='quizList' key={card.id}>
                <div>
                    <img src={card.logo}></img>
                </div>
                <div className='quizCardPart' style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                    <h2 style={{ color: 'red', fontWeight: 'bold', margin: '0px' }}>{card.name}</h2>
                    <h4><span
                        style={{ margin: '0px' }}
                    >Total quiz:</span> {card.total}</h4>
                    <p>Mark Dristribution: {card.mark}</p>
                    <button
                    style={{border: 'none', borderRadius: '10px'}}
                    >
                     <Link
                     style={{textDecoration: 'none', color: 'red'}} 
                      to={card.link}>Go to quiz &gt;</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizList;