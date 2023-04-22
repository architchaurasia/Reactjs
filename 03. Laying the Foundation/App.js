/** HMR - Hot Module Replacement (It tracks the changes)
 * How it know? because of 
 * File Watcher algorithm - written in C++
 * parcel-cache as parcel needs a space to run HMR, File watcher algorithm and more
 * 
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";
         
         //React Begins
        // const heading = React.createElement("h1", {}, "Hello React bhai");
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);


        //How react works in background
        // let heading = document.createElement("h1");
        // heading.innerHTML = "Hello React bhai";
        // let root = document.getElementById("root");
        // root.appendChild(heading);

        
        const heading = React.createElement("h1", {
            id: "title",
            key: "1",
        }, "Heading1");
        
        const heading2 = React.createElement("h2", {
            id: "title",
            key: "2",
        }, "Heading2");

        const container = React.createElement("div", {
            id: "container",
        }, [heading, heading2])

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(container);