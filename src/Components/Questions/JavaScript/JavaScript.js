import React from 'react';
import '../QuizQuestions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const JavaScript = () => {
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
    const SeventhResult = () => {
        const firstAnswer = document.getElementById('seventh-correct-answer');
        firstAnswer.style.backgroundColor = 'green'
    }
    const EightResult = () => {
        const firstAnswer = document.getElementById('eighth-correct-answer');
        firstAnswer.style.backgroundColor = 'green'
    }
    const NinethResult = () => {
        const firstAnswer = document.getElementById('nineth-correct-answer');
        firstAnswer.style.backgroundColor = 'green'
    }
    const TenthResult = () => {
        const firstAnswer = document.getElementById('tenth-correct-answer');
        firstAnswer.style.backgroundColor = 'green'
    }

    /*  onClick={() =>
             alert('Your Answer is Correct !!')
        } */


    return (
        <div>
            <form>
                <div>
                    <h3 style={{ color: 'green' }}>Here you can give JavaScript Quiz !!</h3>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>1. What is JavaScript?</h3>
                        <FontAwesomeIcon onClick={FirstResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p> image manipulation,dynamic changes of content</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>multi-paradigm, dynamic language</p>
                        </div>
                        <div id='first-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>JavaScript is a scripting language</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>a dynamic computer programming language</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>2.What are JavaScript Data Types?</h3>
                        <FontAwesomeIcon onClick={SecondResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>Number,String</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>Boolean</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>Object,Undefined</p>
                        </div>
                        <div id='second-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>All above</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>3.What is the use of isNaN function?</h3>
                        <FontAwesomeIcon onClick={ThirdResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div id='third-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>isNan function returns true if the argument is not a number</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>the assistance of the webserver to execute.</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>P is a server-side language and hence</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>Javascript now is also a server-side language</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>4.What is negative Infinity?</h3>
                        <FontAwesomeIcon onClick={FourthResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>eed the assistance of the webserver to execu</p>
                        </div>
                        <div id='fourth-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>a dynamic computer programming language,a server-side language</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>5.Which company developed JavaScript?</h3>
                        <FontAwesomeIcon onClick={FifthResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div id='fifth-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>Netscape is the software company that developed JavaScript.</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>multi-paradigm, dynamic language</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>JavaScript is a scripting language</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>a dynamic computer programming language</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>6.How you can submit a form using JavaScript?</h3>
                        <FontAwesomeIcon onClick={SixthResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>automatic type conversion. It is the common,dynamic changes of content</p>
                        </div>
                        <div id='sixth-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>document.form[0].submit();</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>automatic type conversion. It is the common</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>a dynamic computer automatic type conversion. It is the common</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>7.What is an undefined value in JavaScript?</h3>
                        <FontAwesomeIcon onClick={SeventhResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p> image manipulation,dynamic changes of content</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>multi-paradigm, dynamic language</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>The NULL value is used to represent no value or no object</p>
                        </div>
                        <div id='seventh-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>Variable used in the code doesn't exist</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>8.What is the function of the delete operator?</h3>
                        <FontAwesomeIcon onClick={EightResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>. Platform string (property) should be used.</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>ject or null string, no valid boolean value</p>
                        </div>
                        <div id='eighth-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>var student= {"age:20, batch:ABC"};
                                Delete student. age;</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>ent no value or no object. It impliesogramming language</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>9.What is the use of Void (0)?</h3>
                        <FontAwesomeIcon onClick={NinethResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>Variable is not assigned to any valuef content</p>
                        </div>
                        <div id='nineth-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>Void(0) is used to prevent the page from refreshing, and parameter “zero” is passed while calling.</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>Jsed in the code doesn’t eng language</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>aVariable is not assigned to any valueg language</p>
                        </div>
                    </div>
                </div>
                <div className='quizQuestions-1'>
                    <div className='question-eye'>
                        <h3>10.What a pop()method in JavaScript is?</h3>
                        <FontAwesomeIcon onClick={TenthResult} icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className='form-1'>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>the Shift method works at the array's start. The pop() method takes the last element off of the given array and retur</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>ples could be User Name details and shopp</p>
                        </div>
                        <div className='radio-button-flex'>
                            <input type="checkbox" value="Male" name="gender" />
                            <p>sits the websites to store information thguage</p>
                        </div>
                        <div id='tenth-correct-answer' className='radio-button-flex'>
                            <input onClick={() =>
                                alert('Your Answer is Correct !!')
                            } type="checkbox" value="Male" name="gender" />
                            <p>The pop() method is similar to the shift() method, but the difference is that the Shift method works at the array;s start.</p>
                        </div>
                    </div>
                </div>
                <Button type='submit' variant='info'>Submit</Button>
            </form>
        </div>
    );
};

export default JavaScript;