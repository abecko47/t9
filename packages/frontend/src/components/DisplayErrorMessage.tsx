import React from 'react';
import '../css/App.css';
import {DisplayErrorObject} from "../model/DisplayErrorObject";

function DisplayErrorMessage(props: DisplayErrorObject) {
    return (
        <span className={`absolute-top ${props.displayError !== '' ? 'show-error' : 'hide-error'}`}>
            {props.displayError}
        </span>
    );
}

export default DisplayErrorMessage;
