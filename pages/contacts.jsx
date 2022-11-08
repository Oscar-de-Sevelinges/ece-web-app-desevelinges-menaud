function Contacts() {
  return (
    <main>
      <h1>Contacts</h1>
      <form>
        <label htmlFor="name">Name:</label><br/>
        <input className="rounded" type="text" id="name" name="name" placeholder="Jean Dupont"/><br/>
        <label htmlFor="email">Email:</label><br/>
        <input className="rounded" type="text" id="email" name="email" placeholder="jeandupont@mail.com"/><br/>
        <label htmlFor="phone">Phone:</label><br/>
        <input className="rounded" type="text" id="phone" name="phone" placeholder="0611223344"/><br/>
        <input type="submit" value="Submit"/>
      </form>
    </main>
  );
}

export default Contacts;