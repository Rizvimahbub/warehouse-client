import React from 'react';

const About = () => {
    return (
        <div className='p-5'>
            <div className='p-5'>
                <h1>Difference between javascript and nodejs</h1>
                <p>1. Javascript is a programming language.It runs in every browser with proper browser engine.Node.js is an interpreter and environment for javascript.<br/>
                   2. Javascript mainly uses for any client side activity for a web application. Node.js mainly uses for accessing or performing for any non-blocking operation of any operating system.<br/>
                   3. Javascript runs any engine like Spider Monkey or Javascript Core or V8. Nod.js only runs in V8.</p>
            </div>
            <div className='p-5'>
                <h1>When should you use nodejs and when should you use mongodb?</h1>
                <p>Node.js is an interpreter and environment for javascript and MongoDB is a document-oriented NoSQL database used for high volume data storage.When I work in server site then I have to use node.js and when I have to reserve users data then I have to use mongodb for reserving users data.</p>
            </div>
            <div className='p-5'>
                <h1>Differences between sql and nosql databases</h1>
                <p>1. SQL databases are relational, NoSQL databases are non-relational.<br/>
                   2. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br></br>
                   3. SQL databases are better for multi-row transactions.NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='p-5'>
                <h1>What is the purpose of jwt and how does it work?</h1>
                <p>JWT is an open standard used to share security information between two parties — a client and a server.</p>
            </div>
        </div>
    );
};

export default About;