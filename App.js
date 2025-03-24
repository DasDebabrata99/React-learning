import React from "react";
import ReactDOM from "react-dom";


const heading2 = React.createElement("h1",{id: "heading"}, "Hello World from React!")
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);


const parent =  React.createElement("div",{id: "parent"}, 
    [React.createElement("div", {id: "child1", key: "child1"}, 
        [React.createElement("h1",{key: "child1h1"}, "heading1 in child1!"),
        React.createElement("h2",{key: "child1h2"}, "heading2 in child1!")]
    ),

    React.createElement("div", {id: "child2", key: "child2"}, 
        [React.createElement("h1",{key: "child2h1"}, "heading1 in child2!"),
        React.createElement("h2",{key: "child2h2"}, "heading1 in child2!")]
    )]
)

root.render(parent)