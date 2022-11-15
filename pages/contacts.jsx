import React, { useEffect, useState } from 'react';
import Counter from './use_state/counter';

function Contacts() {
  const [data, setData] = useState({})
  const onSubmit = function(e) {
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className="flex justify-center items-center h-center mt-2 text-xl pt-64 pl-96">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label><br/>
        <input className="rounded" type="text" id="name" name="name" placeholder=" Jean Dupont"/><br/>
        <label htmlFor="email">Email:</label><br/>
        <input className="rounded" type="text" id="email" name="email" placeholder=" jeandupont@mail.com"/><br/>
        <label htmlFor="phone">Phone:</label><br/>
        <input className="rounded" type="text" id="phone" name="phone" placeholder=" 0611223344"/><br/>
        <input type="submit" value="Submit"/>
      </form>
      <Counter></Counter>
    </div>
  );
}

export default Contacts;