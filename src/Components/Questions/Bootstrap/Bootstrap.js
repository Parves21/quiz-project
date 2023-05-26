import '../QuizQuestions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Bootstrap = () => {
    const FirstResult = () => {
        const firstAnswer = document.getElementById('first-correct-answer');
        firstAnswer.style.backgroundColor = 'green'
    }
    const SecondResult = () => {
        const firstAnswer = document.getElementById('second-correct-answer');
        firstAnswer.style.backgroundColor = 'green'
    }
    const ThirdResult = () => {
        const firstAnswer = document.getElementById('third-correct-answer');
        firstAnswer.style.backgroundColor = 'green'
    }
    const FourthResult = () => {
        const firstAnswer = document.getElementById('fourth-correct-answer');
        firstAnswer.style.backgroundColor = 'green'
    }
    const FifthResult = () => {
        const firstAnswer = document.getElementById('fifth-correct-answer');
        firstAnswer.style.backgroundColor = 'green'
    }
    const SixthResult = () => {
        const firstAnswer = document.getElementById('sixth-correct-answer');
        firstAnswer.style.backgroundColor = 'green'
    }

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <h2>If you want to go to Quiz sections then_</h2>
                <Button variant="info">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/quiz'>&lt;Click me</Link>
                </Button>
            </div>
            <form style={{ border: '1px solid lightblue' }}>
                <div>
                    <h3 style={{ color: 'cyan' }}>Here you can practice your quiz test !!</h3>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>1. What do you know about Bootstrap?</h3>
                        <FontAwesomeIcon onClick={FirstResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>development framework </p>
                        </div>
                        <div id='first-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>Bootstrap is a free and open-source web development framework</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p> mobile-first websites by providing a collection</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>It is a front-end framework used for easier and faster </p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>2. What is Bootstrap best for?</h3>
                        <FontAwesomeIcon onClick={SecondResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p> image manipulation,dynamic changes of content</p>
                        </div>
                        <div id='second-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>the most popular HTML, CSS and JavaScript framework </p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p> frontend development framework that enables developerse</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>giving you more time to spend on designing webpages. </p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>3.Why do we learn Bootstrap?</h3>
                        <FontAwesomeIcon onClick={ThirdResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>Bootstrap is a valuable skill to have as a Front-End Engineer.</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>The best part about Bootstrap is that it builds on other front-end development</p>
                        </div>
                        <div id='third-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p> it builds on other front-end development skills such as CSS, HTML, and JavaScript.</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p> you can learn Bootstrap with our courses in just a few hours and start building your first Bootstrap website in no time at all</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>4.What is the process of bootstrap?</h3>
                        <FontAwesomeIcon onClick={FourthResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>Creates directories for MySQL.</p>
                        </div>
                        <div id='fourth-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>Transmits data files from the build system on a remote server by using the FTP client</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>Creates mysql exec files by using the ZFILE command</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>the ZFILE command (under /bin/mysql* and /usr/libexec/mysqld ).</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>5.What are the advantages of Bootstrap?</h3>
                        <FontAwesomeIcon onClick={FifthResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>It makes it possible for a web page</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>multi-paradigm, dynamic language</p>
                        </div>
                        <div id='fifth-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>Bootstrap makes responsive web design a reality</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>a dynamic computer programming language</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>6.Why Bootstrap is better than CSS?</h3>
                        <FontAwesomeIcon onClick={SixthResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>CSS is a style sheet language that allows you to change the look and feel of HTML documents.</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>multi-paradigm, prosedc schedule is very fast.</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>You don't need to have used Bootstrap to create a CSS style sheet.</p>
                        </div>
                        <div id='sixth-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>lets you build websites faster, without having to code your CSS from scratch.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        type='submit'
                        style={{ border: 'none', backgroundColor: 'lightsalmon', padding: '10px', borderRadius: '7px', marginBottom: '15px' }}
                    >Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Bootstrap;