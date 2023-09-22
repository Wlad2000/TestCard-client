/****************************************************************************
**
**
** 
**
****************************************************************************/

import React from "react";

function RowLayout(props) {
    var styles = Object.assign({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }, props);

    return (
        <div style={styles}>
          {props.children}
        </div>
    );
}

function ColumnLayout(props) {
    var styles = Object.assign({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }, props);

    return (
        <div style={styles}>
          {props.children}
        </div>
    );
}

function GridLayout(props) {
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
    RowLayout,
    ColumnLayout,
    GridLayout
};
