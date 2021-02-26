import React, {useState} from 'react';


function App() {

    const signs = ['+', '-', '*'];
    const [question, setQuestion] = useState([]);
    const [serialNumber, setSerialNumber] = useState(1);
    const [userAnswer, setUserAnswer] = useState('');


    const getQuestion = (serialNumber) => {
        const firstNumber = Math.floor(Math.random() * 10);
        const sign = signs[Math.floor(Math.random() * 3)];
        const secondNumber = Math.floor(Math.random() * 10);

         function getRightAnswer  (sign, firstNumber, secondNumber)  {
            switch (sign){
                case '+' :
                    return firstNumber + secondNumber;

                case '-' :
                    return firstNumber - secondNumber;

                case '*' :
                    return firstNumber * secondNumber;

            }
        }

        const newQuestion = {
            serial: serialNumber,
            firstNumber: firstNumber,
            sign: sign,
            secondNumber: secondNumber,
            rightAnswer: getRightAnswer(sign, firstNumber, secondNumber)
        };
         console.log(newQuestion)

        setSerialNumber(serialNumber + 1)
        setQuestion([...question, newQuestion]);
    }

    const userAnswed = (answed) => {
        console.log(answed, typeof answed)
        setUserAnswer('');
       return  question[question.length - 1].rightAnswer === +answed ? console.log("true") : console.log("false");
    }


    return (
        <div>

            <h1>Math quiz</h1>


            {question.map(el => <div key={el.serial}> {el.serial}) {el.firstNumber}{el.sign}{el.secondNumber} =
                    <input value={userAnswer} type='number'
                       onChange={(event) => setUserAnswer(event.target.value)}/>
                       <button onClick={() => userAnswed(userAnswer)}>ok</button>
            </div>)}

            <button onClick={() => getQuestion(serialNumber)}>next</button>
            {serialNumber === 1 && <button onClick={() => getQuestion(serialNumber)}>start</button>}


        </div>


    );
}

export default App;
