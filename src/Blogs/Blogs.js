import React from "react";

const Blogs = () => {
  return (
    <div className="my-5 mx-2">
      <h2 className="text-center my-4 fs-1">Frequently asked questions</h2>
      <section>
        <h3>What is the difference between javascript and nodejs?</h3>
        <p className=" text-secondary fw-bold">
          Javascript is a high level programming language. Js can manipulate
          html tags and browser DOM. It also has OOP. JS is largely used for
          both frontEnd and backend development. <br /> On the other hand, Node
          js is not a programming language. It is javascript runtime environment
          which is used for backend development only. It can run javascript
          outside the browser.
        </p>
      </section>
      <section>
        <h3>When should you use nodejs and when should you use mongodb?</h3>
        <p className=" text-secondary fw-bold">
          Nodejs and mongodb are two different technologies used for two
          different purpose. Nodejs is tool to write and run javascript code in
          the backend. Mongodb is a database management system which is used to
          store and use data as per the need of the user. With node js we can
          write code and access to mongodb for data management. <br /> So we
          should use Mongodb- for database management; nodejs- to run javascript
          Differences between sql and nosql databases code in the backend
        </p>
      </section>
      <section>
        <h3>What is the Differences between sql and nosql databases?</h3>
        <p className=" text-secondary fw-bold">
          SQL databases are relational database(RDBMS). To manipulate sql
          database structured query language in needed. These type of databases
          are best suited for complex queries and are vertically scalable. It
          also has fixed schema.
          <br />
          NoSQL databases are non relational database. These are not suited for
          complex queries and are horizontally scalable. It has dynamic schema.
        </p>
      </section>
      <section>
        <h3>What is the purpose of jwt and how does it work?</h3>
        <p className=" text-secondary fw-bold">
          jwt is short for jsonwebtoken. Which is one of the most popular way to
          secure api. <br />
          jwt works as a middleware. jwt is used for authorization. It has there
          parts.
          <li>Header - contains the type of token</li>
          <li>
            Payload - typically used by the server to verify the user and if the
            user has permission for the data that is requested
          </li>
          <li>Signature - ensures the token is not damaged</li>
        </p>
      </section>
    </div>
  );
};

export default Blogs;
