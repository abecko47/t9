import React from 'react';
import '../css/App.css';
import {PhoneButtonObject} from '../model/PhoneButtonObject'

function PhoneButton(props: PhoneButtonObject) {
    return (
        <button className="word-button mobile-button col-flex-container width-auto" disabled={props.isDisabled} onClick={() => props.onClick(props.number)}>
            <div>{props.number}</div>
            <div>{props.letters}</div>
        </button>
    );
}

export default PhoneButton;
