import De from "./De";
import { useState } from "react";
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import six from './6.png';

const LancerDe = () => {
    const [score, setScore] = useState(0);
    const [numberOfTimes, setNumberOfTimes] = useState(0);

    const [result, setResult] = useState('')
    let lancer = () => {
        if(numberOfTimes < 10){
            setNumberOfTimes(numberOfTimes + 1);
            let num1 = Math.floor(Math.random() * 6);
            let num2 = Math.floor(Math.random() * 6);

            if(num1 === num2){
                setResult('You Win');
                setScore(score + 1);
            }else{
                setResult('Try Again');
                setScore(score - 1);
            }

            setFace1(faces[num1]);
            setFace2(faces[num2]);
        }
    }
    let faces = [one, two, three, four, five, six];
    const [face1, setFace1] = useState(one);
    const [face2, setFace2] = useState(one);
    return (
        <div className="game">
            <div className="dices">
                <De img={face1}/>
                <De img={face2}/>
            </div>
            <button onClick={lancer}>Lancer</button>
            <div className="result">{result}</div>
            <div className="score">Score : {score}</div>
            <div className="numberOfTimes">Nombre de jets : {numberOfTimes}</div>
            <button onClick={() => {
                setResult('');
                setScore(0);
                setNumberOfTimes(0);
            }}>Reset</button>
        </div>    
    );
}
 
export default LancerDe;