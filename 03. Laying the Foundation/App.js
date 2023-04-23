import React from "react";
import ReactDOM from "react-dom/client";
       
        //React.createElement => Object => HTML(DOM)
        //(we sill not using this from now)
            // const heading = React.createElement("h1", {
            //     id: "title",
            //     key: "1",
            // }, "Heading1");


        //JSX =>    React.createElement => Object => HTML(DOM)
        // //? heading or below is known as react element
        //we are not using further more
        // const heading = createElement("h1", {
        //     id: "title",
        //     key: "1",
        // }, "Heading1");

        //React Component
        //? Name of component starts with capital letter(it's not mandidatory, but its a good practice)
        const Heading = () => {
            return (<h1>Using return</h1>)
        };

        // Below without return
        // const Heading = () => (
        //     <h1>Using without return</h1>
        // );

        //? React Element
        const title = (
            <h1 key = "1">React Element</h1>
        );

        //? Fuctional component
        const Element = () => {
            return (<h1 key = "2">React Element 2</h1>)
        };

        //? Another using most
        // const Element = () => (
        //      <h1 key = "2">React Element 2</h1>
        // );

        //! {} Using curly bracket we can use Javascript

        const Header = () => {
            return(
                <div>
                    {title}
                    <Element />
                    <h2>Header</h2>
                </div>
            )
        }


        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<Header />);