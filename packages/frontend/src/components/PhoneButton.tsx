import React from 'react';
import '../css/App.css';
import {PhoneButtonObject} from '../model/PhoneButtonObject'

function PhoneButton(props: PhoneButtonObject) {
    return (
        <button disabled={props.isDisabled} onClick={() => props.onClick(props.number)}>{props.number}</button>
    );
}

export default PhoneButton;
