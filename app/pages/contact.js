import React from "react";

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl mb-4">
            You can reach us using the following methods:
          </p>
          <ul>
            <li className="text-xl"><a href="mailto:oscar.desevelinges@edu.ece.fr">oscar.desevelinges@edu.ece.fr</a></li>
            <li className="text-xl"><a href="mailto:romain.menaud@edu.ece.fr">romain.menaud@edu.ece.fr</a></li>
          </ul>
          <p className="text-xl mb-4">
            You can also leave us a message using the form below:
          </p>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
    );
}