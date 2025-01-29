import React from "react";
import CountdownTimer from "./components/CountdownTimer";
import SubscribeForm from "./components/SubscribeForm";
import SocialLinks from "./components/SocialLinks";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1>TEDxLafia is Coming Soon!</h1>
      <p className="event-details">
        Join us on <strong>February 1, 2025</strong> for an inspiring TEDx experience.
      </p>
      <CountdownTimer />
      <p className="about">
        TEDxLafia is an independently organized TED event featuring thought-provoking talks and ideas worth spreading.
      </p>
      <SubscribeForm />
      <SocialLinks />
    </div>
  );
}

export default App;
