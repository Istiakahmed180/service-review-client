import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 my-20">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline font-medium text-[#0D9488]">
                Difference between SQL and NoSQL?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  When choosing a modern database, one of the biggest decisions
                  is picking a relational (SQL) or non-relational (NoSQL) data
                  structure. While both are viable options, there are key
                  differences between the two that users must keep in mind when
                  making a decision.
                  <br />
                  Here, we break down the most important distinctions and
                  discuss the best SQL and NoSQL database systems available.
                  <br />
                  The five critical differences between SQL vs NoSQL are:
                  <br />
                  <br />
                  1.SQL databases are relational, NoSQL databases are
                  non-relational.
                  <br />
                  2.SQL databases use structured query language and have a
                  predefined schema. NoSQL databases have dynamic schemas for
                  unstructured data.
                  <br />
                  3.SQL databases are vertically scalable, while NoSQL databases
                  are horizontally scalable.
                  <br />
                  4.SQL databases are table-based, while NoSQL databases are
                  document, key-value, graph, or wide-column stores.
                  <br />
                  5.SQL databases are better for multi-row transactions, while
                  NoSQL is better for unstructured data like documents or JSON.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline font-medium text-[#0D9488]">
                What is JWT, and how does it work??
              </summary>
              <div className="px-4 pb-4">
                <p>
                  <span className="text-lg font-medium text-[#E8262A]">
                    What Is JWT?
                  </span>
                  <br />
                  JWT, or JSON Web Token, is an open standard used to share
                  security information between two parties — a client and a
                  server. Each JWT contains encoded JSON objects, including a
                  set of claims. JWTs are signed using a cryptographic algorithm
                  to ensure that the claims cannot be altered after the token is
                  issued.
                  <br />
                  <span className="text-lg font-medium text-[#E8262A]">
                    How JWT Works?
                  </span>
                  <br />
                  JWTs differ from other web tokens in that they contain a set
                  of claims. Claims are used to transmit information between two
                  parties. What these claims are depends on the use case at
                  hand. For example, a claim may assert who issued the token,
                  how long it is valid for, or what permissions the client has
                  been granted.
                  <br />A JWT is a string made up of three parts, separated by
                  dots (.), and serialized using base64. In the most common
                  serialization format, compact serialization, the JWT looks
                  something like this: xxxxx.yyyyy.zzzzz.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline font-medium text-[#0D9488] ">
                What is the difference between javascript and NodeJS?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  <span className="text-[#308D46] text-lg font-medium">
                    NodeJS :
                  </span>
                  <br />
                  NodeJS is a cross-platform and opensource Javascript runtime
                  environment that allows the javascript to be run on the
                  server-side. Nodejs allows Javascript code to run outside the
                  browser. Nodejs comes with a lot of modules and mostly used in
                  web development.
                  <br />
                  <span className="text-[#308D46] text-lg font-medium">
                    JavaScript :
                  </span>
                  <br />
                  Javascript is a Scripting language. It is mostly abbreviated
                  as JS. It can be said that Javascript is the updated version
                  of the ECMA script. Javascript is a high-level programming
                  language that uses the concept of Oops but it is based on
                  prototype inheritance.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline font-medium text-[#0D9488] ">
                How does NodeJS handle multiple requests at the same time?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  NodeJS receives multiple client requests and places them into
                  EventQueue. NodeJS is built with the concept of event-driven
                  architecture. NodeJS has its own EventLoop which is an
                  infinite loop that receives requests and processes them.
                  EventLoop is the listener for the EventQueue.
                  <br />
                  If NodeJS can process the request without I/O blocking then
                  the event loop would itself process the request and sends the
                  response back to the client by itself. But, it is possible to
                  process multiple requests parallelly using the NodeJS cluster
                  module or worker_threads module.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
