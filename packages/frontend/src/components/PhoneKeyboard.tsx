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
        <div className="col-flex-container center">
            <div className="absolute-top">
                <DisplayErrorMessage displayError={displayError}/>
            </div>
            <div className="row-flex-container height-auto">
                <span>{historyInput} {phoneOutput}</span>
            </div>

            <div className="row-flex-container center height-auto">
                {words.map((value) => <button className="word-button margin-right-12 margin-left-12" key={`word-${value}`} onClick={() => handleWordChoose(value)}>{value}</button>) }
            </div>
            <div className="row-flex-container center width-auto height-auto margin-top-24">
                <div className="col-flex-container center">
                    <div className="row-flex-container center">
                        <PhoneButton isDisabled={isFetching} number="1" letters="(_)" onClick={(e) => handleInputChange(e)}/>
                        <PhoneButton isDisabled={isFetching} number="2" letters="ABC" onClick={(e) => handleInputChange(e)}/>
                        <PhoneButton isDisabled={isFetching} number="3" letters="DEF" onClick={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="row-flex-container center">
                        <PhoneButton isDisabled={isFetching} number="4" letters="GHI" onClick={(e) => handleInputChange(e)}/>
                        <PhoneButton isDisabled={isFetching} number="5" letters="JKL" onClick={(e) => handleInputChange(e)}/>
                        <PhoneButton isDisabled={isFetching} number="6" letters="MNO" onClick={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="row-flex-container center">
                        <PhoneButton isDisabled={isFetching} number="7" letters="PQRS" onClick={(e) => handleInputChange(e)}/>
                        <PhoneButton isDisabled={isFetching} number="8" letters="TUV" onClick={(e) => handleInputChange(e)}/>
                        <PhoneButton isDisabled={isFetching} number="9" letters="WXYZ" onClick={(e) => handleInputChange(e)}/>
                    </div>
                    <div className="row-flex-container right">
                        <PhoneButton letters="___" isDisabled={isFetching} number="0" onClick={(e) => handleInputChange(e)}/>
                        <div className="row-flex-container width-auto">
                            <button className="mobile-button col-flex-container width-auto" disabled={isFetching} onClick={() => clearState()}>
                                <div>C</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneKeyboard;
