/****************************************************************************
**
**
**
**
****************************************************************************/

import React, { useState, useEffect, useRef } from "react";
import { vs } from "./QuickCommon";

function Fan(props) {
    useEffect(() => {
    });

    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path
                d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368
                    8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Z
                    m0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361
                    6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442
                    1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317
                    a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45
                    0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14
                    c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02Z
                    M6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0
                    2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632
                    c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388
                    a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            />
        </svg>
    );
}

function FanBox(props) {
    useEffect(() => {
    });

    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
//            xmlns:xlink="http://www.w3.org/1999/xlink"
//            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            viewBox="0 0 511.997 511.997"
            style={Object.assign({cursor: "pointer"}, props.style)}
        >

            <circle cx="255.998" cy="255.998" r="255.998" fill="#3E3B43" />
            <circle cx="255.998" cy="255.998" r="220.336" fill="#2F2D30" />
            <g
                data-animator-group="true"
                data-animator-type="1"
                style={{
                    animationName: props.running ? "fanboxAnimation" : "none",
                    WebkitAnimationName: props.running ? "fanboxAnimation" : "none",
                    animationDuration: "3s",
                    WebkitAnimationDuration: "3s",
                    animationIterationCount: "infinite",
                    WebkitAnimationIterationCount: "infinite",
                    animationTimingFunction: "cubic-bezier(0, 0, 1, 1)",
                    WebkitAnimationTimingFunction: "cubic-bezier(0, 0, 1, 1)"
                }}
            >
                <path
                    d="M336.74,273.105l-11.29-61.699c43.944-17.033,91.301-17.036,132.978,0.351
                        c-11.871-54.446-45.146-100.896-90.583-130.067c-41.466,17.101-75.288,50.692-94.472,93.286l-62.139,10.795
                        c-16.283-43.523-16.008-90.934,1.175-132.139C157.448,65.444,110.589,99.06,81.339,144.994
                        c17.164,41.124,50.568,74.669,92.873,93.762l11.167,61.874c-43.442,16.129-90.716,15.781-131.804-1.392
                        c11.653,54.937,45.077,101.828,90.83,131.203c41.374-17.062,75.134-50.545,94.341-93.005l62.447-12.062
                        c16.639,43.743,16.51,91.509-0.747,132.991c54.447-11.873,100.897-45.154,130.066-90.595
                        C413.344,326.157,379.556,292.249,336.74,273.105z"
                    fill="#57545C"
                />
            </g>
            <circle cx="255.998" cy="255.998" r="85.239" fill={props.statecolor} />
            <circle cx="255.998" cy="255.998" r="32.593" fill="#04FF00" />
        </svg>
    );
}

function Gate(props) {
    useEffect(() => {
    });

    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 60 30"
        >
            <defs>
                <clipPath id="clip0_1_2">
                    <rect width="60" height="30" fill="white"/>
                </clipPath>
            </defs>
            <g id="gate" clip-path="url(#clip0_1_2)">
                <rect id="gate-border" x="0.5" y="0.5" width="59" height="29" rx="6.5" stroke={props.borderColor}/>
                <rect id="gate-fill" x="1" y="1" width="58" height="28" rx="6" fill={props.fill}/>
            </g>
            <text x="50%" y="50%"  dominantBaseline="middle" textAnchor="middle" fill="#cecece">{props.value}</text>
        </svg>
    );
}

function Burner(props) {
    useEffect(() => {
    });

    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 60 120"
        >
            <path
                stroke="#909090"
                strokeWidth="2"
                fill="transparent"
                d="M0 0 L0 40 L20 60 L20 120 L40 120 L40 60 L60 40 L60 0 Z"
            />
        </svg>
    );
}

function LoadHopper(props) {
    const uid = useRef("loadhopper" + (crypto.randomUUID()));

    useEffect(() => {
    });

    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 120 60"
            style={Object.assign({cursor: "pointer"}, props.style)}
        >
            <defs>
                <linearGradient id={uid.current} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset={100 - props.value + "%"} stopColor="transparent" />
                    <stop offset={120 - props.value + "%"} stopColor={props.color} />
                    <stop offset="100%" stopColor={props.color} />
                </linearGradient>
            </defs>
            <path
                stroke="#909090"
                strokeWidth="1"
                fill={"url(#" + uid.current + ")"}
                d="M50 0 L0 20 L0 60 L120 60 L120 20 L70 0 Z"
            />
            <rect x="90" y="25" width="24" height="6" rx="3" ry="3" style={{fill: "#0a7cc2"}} />
            <rect x="90" y="35" width="24" height="6" rx="3" ry="3" style={{fill: "#0a7cc2"}} />
            <rect x="90" y="45" width="24" height="6" rx="3" ry="3" style={{fill: "green"}} />
        </svg>
    );
}

function UnloadHopper(props) {
    const uid = useRef("unloadhopper" + (crypto.randomUUID()));

    useEffect(() => {
    });

    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 120 80"
            style={Object.assign({cursor: "pointer"}, props.style)}
        >
            <defs>
                <linearGradient id={uid.current} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset={100 - props.value + "%"} stopColor="transparent" />
                    <stop offset={120 - props.value + "%"} stopColor={props.color} />
                    <stop offset="100%" stopColor={props.color} />
                </linearGradient>
            </defs>
            <path
                stroke="#909090"
                strokeWidth="1"
                fill={"url(#" + uid.current + ")"}
                d="M0 0 L0 40 L50 80 L70 80 L120 40 L120 0 Z"
            />
            <rect x="65" y="55" width="24" height="6" rx="3" ry="3" style={{fill: "green"}} />
        </svg>
    );
}

function CircleTemperature(props) {
    const uid = useRef("circletemp" + (crypto.randomUUID()));

    useEffect(() => {
    });

    function currentColor(value) {
        var temp = [
            {tvalue: 0, tcolor: "#6597f7"}, {tvalue: 5, tcolor: "#6597f7"}, {tvalue: 10, tcolor: "#3dbece"},
            {tvalue: 15, tcolor: "#c0dd72"}, {tvalue: 20, tcolor: "#c0c063"}, {tvalue: 25, tcolor: "#c09a54"},
            {tvalue: 30, tcolor: "#c08b49"}, {tvalue: 35, tcolor: "#c07a3c"}, {tvalue: 40, tcolor: "#c06e31"},
            {tvalue: 45, tcolor: "#c0592b"}, {tvalue: 50, tcolor: "#c04a23"}, {tvalue: 55, tcolor: "#c03017"},
            {tvalue: 60, tcolor: "#c00e0a"}, {tvalue: 65, tcolor: "#ff1517"}, {tvalue: 70, tcolor: "#ff0000"},
            {tvalue: 75, tcolor: "#7f1b25"}, {tvalue: 80, tcolor: "#7f0c1e"}, {tvalue: 85, tcolor: "#7f070e"},
            {tvalue: 90, tcolor: "#5e0f1f"}, {tvalue: 95, tcolor: "#5e0911"}, {tvalue: 100, tcolor: "#5e0000"},
            {tvalue: 105, tcolor: "#3d0000"}, {tvalue: 110, tcolor: "#3d0000"}, {tvalue: 115, tcolor: "#3d0000"},
            {tvalue: 120, tcolor: "#3d0000"}, {tvalue: 125, tcolor: "#3d0000"}, {tvalue: 130, tcolor: "#3d0000"},
            {tvalue: 135, tcolor: "#3d0000"}, {tvalue: 140, tcolor: "#3d0000"}, {tvalue: 145, tcolor: "#3d0000"},
            {tvalue: 150, tcolor: "#3d0000"}, {tvalue: 155, tcolor: "#3d0000"}, {tvalue: 160, tcolor: "#3d0000"},
            {tvalue: 165, tcolor: "#3d0000"}, {tvalue: 170, tcolor: "#3d0000"}, {tvalue: 175, tcolor: "#3d0000"},
            {tvalue: 180, tcolor: "#3d0000"}, {tvalue: 185, tcolor: "#3d0000"}, {tvalue: 190, tcolor: "#3d0000"},
            {tvalue: 195, tcolor: "#3d0000"}, {tvalue: 200, tcolor: "#3d0000"}, {tvalue: 205, tcolor: "#3d0000"}
        ];

        for (var i = 0; i < temp.length; ++i)
            if (value <= temp[i].tvalue)
                return temp[i].tcolor;
    }

    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 64 64"
//            style={{cursor: "pointer"}}
        >
            <defs>
                <linearGradient id={uid.current} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#171717" />
                    <stop offset="100%" stopColor={currentColor(props.value)} />
                </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="30" stroke="#606060" strokeWidth="2" fill={"url(#" + uid.current +")"} />
            <text x="18" y="24" fill="#cecece">t, °C</text>
            <text x="14" y="44" fill="#cecece" fontWeight="bold">{props.value}</text>
        </svg>
    );
}

function Fire(props) {
    const flames = [
        {width: vs(26), height: vs(26), left: vs(5), bottom: 0, color: "OrangeRed", shadow: vs(5)},
        {width: vs(26), height: vs(26), left: vs(10), bottom: 0, color: "orange", shadow: vs(9)},
        {width: vs(16), height: vs(16), left: vs(15), bottom: 0, color: "gold", shadow: vs(9)},
        {width: vs(16), height: vs(16), left: vs(15), bottom: vs(-4), color: "white", shadow: vs(9)}
    ];

    useEffect(() => {
    });

    return (
        <div
            style={Object.assign({
                transformOrigin: "center bottom",
                animationName: "fireFlicker",
                animationDuration: "3ms",
                animationDelay: "200ms",
                animationTimingFunction: "ease-in",
                animationIterationCount: "infinite",
                animationDirection: "alternate"
            }, props.style)}
        >
            {flames.map((prop, key) => {
                return <div key={key} style={{
                    position: "absolute",
                    left: prop.left,
                    bottom: prop.bottom,
                    width: prop.width,
                    height: prop.height,
                    background: prop.color,
                    boxShadow: "0px 0px " + prop.shadow + "px " + vs(4) + "px " + prop.color,
                    borderBottomRightRadius: "50%",
                    borderBottomLeftRadius: "50%",
                    borderTopLeftRadius: "50%",
                    transform: "rotate(-45deg) scale(1.5, 1.5)"
                }} />
            })}
        </div>
    );
}

export {
    Fan,
    FanBox,
    Gate,
    Burner,
    LoadHopper,
    UnloadHopper,
    CircleTemperature,
    Fire
};
