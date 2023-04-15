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
        }, "Heading1");
        
        const heading2 = React.createElement("h2", {
            id: "title",
        }, "Heading2");

        const container = React.createElement("div", {
            id: "container",
        }, [heading, heading2])

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(container);