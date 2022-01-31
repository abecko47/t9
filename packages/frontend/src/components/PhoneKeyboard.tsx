import React, {useState} from 'react';
import '../css/App.css';
import PhoneButton from './PhoneButton';
import {ApiService} from "../service/ApiService";
import {T9Response} from "../model/T9Response";
import DisplayErrorMessage from "./DisplayErrorMessage";

function PhoneKeyboard() {

    const [phoneInput, setPhoneInput] = useState('');
    const [phoneOutput, setPhoneOutput] = useState('');
    const [historyInput, setHistoryInput] = useState<string|undefined>('');
    const [displayError, setDisplayError] = useState('');
    const [words, setWords] = useState<string[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const api = ApiService();

    const handleInputChange = (value: string) => {
        if (value === '0') {
            setDisplayError('');
            if (words.length > 0) {
                setHistoryInput(`${historyInput}${words[0]} `);
            }
            setPhoneInput('');
            setPhoneOutput('');
            setWords([]);
        } else {
            setIsFetching(true);
            api.getWords(`${phoneInput}${value}`)
                .then((response: any) => {

                    const result: T9Response = response.data;

                    if (result.error === null && result.data !== null) {
                        setPhoneInput(`${phoneInput}${value}`);
                        setWords(result.data);
                        setDisplayError('');
                        setPhoneOutput(`${result.data[0]}`);
                        setIsFetching(false);
                        return;
                    }

                    if (result.error !== null && result.data === null) {
                        setPhoneInput('');
                        setDisplayError(result.error);
                        setWords([]);
                        setPhoneOutput('');
                        setIsFetching(false);
                        return;
                    }
                }).catch(reason => {
                    setDisplayError(reason);
                    setIsFetching(false);
                    setHistoryInput('');
                    setPhoneInput('');
                    setPhoneOutput('');
                    setWords([]);
            });
        }
    }

    const handleWordChoose = (value:string) => {
        setDisplayError('');
        setHistoryInput(`${historyInput}${value} `);
        setPhoneInput('');
        setPhoneOutput('');
        setWords([]);
    }

    const clearState = () => {
        setDisplayError('');
        setHistoryInput('');
        setPhoneInput('');
        setPhoneOutput('');
        setWords([]);
    }

    return (
        <div>
            <DisplayErrorMessage displayError={displayError}/>
            <p>
                {historyInput} {phoneOutput}
            </p>
            <p>
                {words.map((value) => <button key={`word-${value}`} onClick={() => handleWordChoose(value)}>{value}</button>) }
            </p>
            <PhoneButton isDisabled={isFetching} number="1" onClick={(e) => handleInputChange(e)}/>
            <PhoneButton isDisabled={isFetching} number="2" onClick={(e) => handleInputChange(e)}/>
            <PhoneButton isDisabled={isFetching} number="3" onClick={(e) => handleInputChange(e)}/> <br />
            <PhoneButton isDisabled={isFetching} number="4" onClick={(e) => handleInputChange(e)}/>
            <PhoneButton isDisabled={isFetching} number="5" onClick={(e) => handleInputChange(e)}/>
            <PhoneButton isDisabled={isFetching} number="6" onClick={(e) => handleInputChange(e)}/> <br />
            <PhoneButton isDisabled={isFetching} number="7" onClick={(e) => handleInputChange(e)}/>
            <PhoneButton isDisabled={isFetching} number="8" onClick={(e) => handleInputChange(e)}/>
            <PhoneButton isDisabled={isFetching} number="9" onClick={(e) => handleInputChange(e)}/> <br />
            <PhoneButton isDisabled={isFetching} number="0" onClick={(e) => handleInputChange(e)}/> <br />

            <button disabled={isFetching} onClick={() => clearState()}>-</button>
        </div>
    );
}

export default PhoneKeyboard;
