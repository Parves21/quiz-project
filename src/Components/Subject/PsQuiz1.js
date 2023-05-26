import React from 'react';
import './PsQuiz.css';

const PsQuiz1 = ({ qz }) => {
    return (
        <div className='quiz-card' key={qz.id}>
            <img src={qz.logo}></img>
            <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ color: 'red' }}>{qz.name}</h2>
                <h4><span
                    style={{ fontWeight: 'bold' }}
                >Total quiz:</span> {qz.total}</h4>
                <p>Mark Dristribution: {qz.mark}</p>
            </div>
        </div>
    );
};

export default PsQuiz1;