/****************************************************************************
**
**
**
**
****************************************************************************/

import React from "react";

function Item(props) {
    var styles = Object.assign({}, props);

    return (
        <div style={styles}>
          {props.children}
        </div>
    );
}

function Rectangle(props) {
    var styles = Object.assign({}, props);

    return (
        <div style={styles} onClick={props.onClick}>
          {props.children}
        </div>
    );
}

function Button(props) {
    var styles = Object.assign({}, props);
    return (
        <button style={styles} onClick={props.onClick}>
          {props.text}
        </button>
    );
}

function RadioButton(props) {
    var styles = Object.assign({}, props);
    return (
                <input
                style={styles} 
                type="radio"
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
              />
    );
}

function Input(props) {
    var styles = Object.assign({}, props);
    return (
               
            <input
                style={styles} 
                name ={props.name}
                value={props.value}
                onChange={props.onChange} 
                type="text" 
                placeholder={props.placeholder}
            /> 
    );
}

function Text(props) {
    var styles = Object.assign({
        color: "#cecece",
        fontSize: "16px"
    }, props);

    return (
        <span style={styles}>
          {props.text}
        </span>
    );
}




export {
    Item,
    Rectangle,
    Text,
    Input,
    Button,
    RadioButton
};
