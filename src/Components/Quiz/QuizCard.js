import React from 'react';
import QuizList from './QuizList';

const QuizCard = ({ cardQuezs }) => {
    return (
        <div>
            <div className='quizCardContainer'>
               {
                cardQuezs.map( card => <QuizList key={card.id} card={card}></QuizList>)
               }
            </div>

        </div>
    );
};

export default QuizCard;