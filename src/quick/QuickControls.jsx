/****************************************************************************
**
**
**
**
****************************************************************************/

import React from "react";
import { vs, vspx } from "./QuickCommon";
//import images from "../../images/images.js";

function ApplicationWindow(props) {
    var styles = Object.assign({}, props);

    return (
        <div style={styles}>
          {props.children}
        </div>
    );
}

function Button(props) {
    var styles = Object.assign({}, props);

    return (
        <button
            type={props.type}
            name={props.name}
            className={props.className}
            style={styles}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.text}
            {props.children}
        </button>
    );
}

/*function ToolButton(props) {
    var styles = Object.assign({
        display: "inline-flex",
        flexDirection: props.iconDisplay === "beside" ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#cecece",
        backgroundColor: "transparent",
        border: "0px solid transparent",
        fontSize: vspx(16),
        cursor: "pointer"
    }, props);

    return (
        <button className="button" style={styles} onClick={props.onClick}>
          <img src={images[props.iconName]} style={{
              width: props.iconWidth,
              height: props.iconHeight
          }} />
          <span>{props.text}</span>
        </button>
    );
}*/

function TabButton(props) {
    var styles = Object.assign({
        fontSize: vspx(16),
        cursor: "pointer"
    }, props);

    return (
        <button style={styles} onClick={props.onClick}>
          {props.text}
        </button>
    );
}

function RadioButton(props) {
    var styles = Object.assign({}, props);

    return (
        <label className="radio-button-label" htmlFor={props.id}>
            <input
                style={styles}
                type="radio"
                id={props.id}
                name={props.name}
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
            />
            {props.children}
        </label>
    );
}

function ToggleButton(props) {
    var styles = Object.assign({

    }, props);

    return (
        <div style={styles} className="switch toggle">
            <input onChange={props.onChange} type="checkbox" />
            <label><span style={styles} className="icon-off">{props.isToggled ? "ON" : "OFF"}</span></label>
        </div>
    )
}

function Checkbox(props) {
    var styles = Object.assign({

    }, props);

    return (
        <label style={styles} className="checkbox">
            <input type="checkbox" />
            <span className="check"></span>
        </label>
    )
}

function Counter(props) {
    var styles = Object.assign({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: vspx(50),
        fontSize: vspx(16),
        color: 'white',
        padding: 0,
        textAlign: 'center',
    }, props);

    return (
        <input style={styles} type="number" />
    )
}

function Input(props) {
    var styles = Object.assign({
    }, props);

    return (
        <input style={styles} accept={props.accept} type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} id={props.id} className={props.className} required={props.required}  />
    )
}


function NumberInput(props) {
    var styles = Object.assign({
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, props);

    return (
        <div className="number-input">
            <button style={{ fontSize: styles.fontSize }} className="number-input-decrease" onClick={props.decreaseValue}>-</button>
            <input min="0" style={styles} type="number" value={props.value} className="number-input-display" onChange={props.changeValue} />
            <button style={{ fontSize: styles.fontSize }} className="number-input-increase" onClick={props.increaseValue}>+</button>
        </div>
    )
}

export {
    ApplicationWindow,
    Button,
    TabButton,
    RadioButton,
    ToggleButton,
    Checkbox,
    Counter,
    Input,
    NumberInput
};
