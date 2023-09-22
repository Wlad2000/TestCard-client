/****************************************************************************
**
**
**
**
****************************************************************************/

import React, { useState, useEffect } from "react";

function Svg(props) {
    useEffect(() => {
    });

    var styles = Object.assign({}, props.style);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox={props.viewBox}
            preserveAspectRatio={props.preserveAspectRatio}
            style={styles}
            onClick={props.onClick}
        >
          <defs>
            {props.defs}
          </defs>
          {props.children}
        </svg>
    );
}

function Path(props) {
    useEffect(() => {
    });

    var styles = Object.assign({}, props);

    return (
        <path
            stroke={props.stroke}
            strokeWidth={props.strokeWidth}
            d={props.d}
            style={styles}
        >
          {props.children}
        </path>
    );
}

function LinearGradient(props) {
    useEffect(() => {
    });

    var styles = Object.assign({}, props);

    return (
        <linearGradient id={props.id} x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} gradientUnits={props.gradientUnits}>
          {props.children}
        </linearGradient>
    );
}

function GradientStop(props) {
    useEffect(() => {
    });

    var styles = Object.assign({}, props);

    return (
          <stop offset={props.offset} stopColor={props.stopColor} />
    );
}

export {
    Svg,
    Path,
    LinearGradient,
    GradientStop
};
