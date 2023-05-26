import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';
import './QuizList.css';

const Quiz = () => {
    const CardQuizes = useLoaderData();
    const cardQuezs = CardQuizes.data;

    return (
        <div>
            <h2>What Subject would you like to given exam?</h2>
            <QuizCard key={cardQuezs.id} cardQuezs={cardQuezs}></QuizCard>
            
        </div>
    );
};

export default Quiz;