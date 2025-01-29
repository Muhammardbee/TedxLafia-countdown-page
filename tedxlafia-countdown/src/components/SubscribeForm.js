import React, { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing! We’ll keep you updated.");
    setEmail("");
  };

  return (
    <form id="subscribe-form" onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Stay Updated</button>
    </form>
  );
};

export default SubscribeForm;
