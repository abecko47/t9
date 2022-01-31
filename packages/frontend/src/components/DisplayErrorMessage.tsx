import React from 'react';
import '../css/App.css';
import {PhoneButtonObject} from '../model/PhoneButtonObject'
import {DisplayErrorObject} from "../model/DisplayErrorObject";

function DisplayErrorMessage(props: DisplayErrorObject) {
    return (
        <p className={props.displayError !== '' ? 'showError' : 'hideError'}>
            {props.displayError}
        </p>
    );
}

export default DisplayErrorMessage;
