import React, { useState } from 'react';
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  
  // sync the input form of the psuedo DOM with the "state" of the browser DOM 
  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
  };

  function handleSubmit(e) {
    e.preventDefault();
  };

  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
