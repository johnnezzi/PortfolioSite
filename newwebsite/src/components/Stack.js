import React, { useState } from 'react';
import Modal from '../components/StackModal'
import '../css/Stack.css'

const stackContent = {
    "Front-End" : "Javascript, React, React-Native, HTML, CSS, SCSS, Bootstrap",
    "Back-End" : "AWS, NodeJS, PostgreSQL, Knex, Express, Firebase, Serverless, GraphQL, .NET",
    "Testing" : "Mocha, Chai, Supertest, Sinon, Cypress, Nunit",
    "DevTools" : "Pair Programing, Version Control (Git, BitBucket, GitHub), Jira, Slack, CI/CD",
};

const Stack = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [stack, setStack] = useState("");

    const openModal = (title, stack, show) => {
        setTitle(title);
        setStack(stack);
        setShow(show);
    };
    const closeModal = () => setShow(false);

    //need a function that sends an id down and sets the show to true


    return (
        <div id="modal-root" className={"stacksection"}>
            <h1 className={"title"}>Tech Stack</h1>
            <div className={"stackcontainer outline"}>
                <h2 className={"stack leftmost"} onClick={() => openModal("Front End", stackContent["Front-End"], true)}>Front End</h2>
                <h2 className={"stack innerleft"} onClick={() => openModal("Back End", stackContent["Back-End"], true)}>Back End</h2>
                <h2 className={"stack rightmost"} onClick={() => openModal("Testing", stackContent["Testing"], true)}>Testing</h2>
                <h2 className={"stack inneright"} onClick={() => openModal("Dev Tools", stackContent["DevTools"], true)}>Dev Tools</h2>
            </div>
            {show && <Modal closeModal={closeModal} title={title} stack={stack} show={{show}}/>}
        </div>
    );
};

export default Stack;
