import PsQuiz1 from './PsQuiz1';
import './Subject.css'

const PsQuiz = (props) => {
    const {quiz, children} = props;
    return (
        <div>
            <h1 style={{marginBottom: '15px'}}>Total Subject: {quiz.length}</h1>
            <div className='quizes'>
                {
                    quiz.map(qz => <PsQuiz1 key={qz.id} qz={qz}></PsQuiz1>)
                }
            </div>
            <br/>
            {children}
            <br/><br/>
        </div>
    );
};

export default PsQuiz;