import { Link, useLoaderData } from 'react-router-dom';
import PsQuiz from './PsQuiz';
import './PsQuiz.css';
import './Subject.css';


const Subject = () => {
    const quizs = useLoaderData();
    const quiz = quizs.data;

    return (
        <div>
            {/* <h1 style={{ marginBottom: '15px' }}>Total Subject Quiz: {quiz.length}</h1>
            <div className='quizes'>
                <div className='quiz-card'>
                    <img src={quiz[0].logo}></img>
                    <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 style={{ color: 'red' }}>{quiz[0].name}</h2>
                        <h4><span
                            style={{ fontWeight: 'bold' }}
                        >Total quiz:</span> {quiz[0].totol}</h4>
                        <p>Mark Dristribution: {quiz[0].mark}</p>
                    </div>
                    <button style={{ color: 'deepskyblue', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>Go to Quiz &gt;</button>
                </div>
                <div className='quiz-card'>
                    <img src={quiz[1].logo}></img>
                    <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 style={{ color: 'red' }}>{quiz[1].name}</h2>
                        <h4><span
                            style={{ fontWeight: 'bold' }}
                        >Total quiz:</span> {quiz[1].totol}</h4>
                        <p>Mark Dristribution: {quiz[1].mark}</p>
                    </div>
                    <button style={{ color: 'deepskyblue', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>Go to Quiz &gt;</button>
                </div>
            </div>
            <br /> */}

            {/* <div>
                <button
                    className='ButtonLoadMore'
                    onClick={() => OnClickSubject()}
                    style={{ border: 'none', borderRadius: '5px' }}
                >Load More Data &gt;</button>


            </div> */}

            <PsQuiz
                key={quiz.id}
                quiz={quiz}
            >
                <Link to='/quiz'>
                    <button className='btn-quiz'>Go to Quiz &gt;</button>
                </Link>
            </PsQuiz>
            
        </div>
    );
};

export default Subject;