/****************************************************************************
**
**
**
**
****************************************************************************/

import React from "react";
import { vs, vspx } from "./QuickCommon";
//import images from "../../images/images.js";

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

function Text(props) {
    var styles = Object.assign({
        color: "#cecece",
        fontSize: vspx(16)
    }, props);

    return (
        <span style={styles}>
          {props.text}
        </span>
    );
}

function Label(props) {
    var styles = Object.assign({
    }, props);

    return (
        <label style={styles} htmlFor={props.htmlFor} className={props.className}>{props.text}</label>
    )
}

function Image(props) {
    var styles = Object.assign({}, props);

    return (
        <img src={props.src} style={styles} onClick={props.onClick} alt={props.alt}>
          {props.children}
        </img>
    );
}

function Icon(props) {
    var styles = Object.assign({
        color: props.color === undefined ? "#cecece" : props.color,
        fontSize: props.width === undefined ? vspx(20) : props.width,
        cursor: "pointer"
    }, props);

    return (
        <i className={"fa-" + props.name} style={styles} onClick={props.onClick}>
          {props.children}
        </i>
    );
}

function Separator(props) {
    var styles = Object.assign({
        backgroundColor: "#cecece"
    }, props);

    return (
        <div style={styles}>
          {props.children}
        </div>
    );
}

function Row(props) {
    var styles = Object.assign({
        display: "flex",
        position: "relative",
        flexDirection: "row"
    }, props);

    return (
        <div style={styles}>
          {props.children}
        </div>
    );
}

function Column(props) {
    var styles = Object.assign({
        display: "flex",
        position: "relative",
        flexDirection: "column"
    }, props);

    return (
        <div style={styles}>
          {props.children}
        </div>
    );
}

function Grid(props) {
    var styles = Object.assign({
        display: "grid"
    }, props);

    return (
        <div style={styles}>
          {props.children}
        </div>
    );
}

export {
    Item,
    Rectangle,
    Text,
    Label,
    Image,
    Icon,
    Separator,
    Row,
    Column,
    Grid
};
