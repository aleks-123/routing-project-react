import { useState } from "react";

import { useFetcher } from "react-router-dom";

import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
      handleClick();
    }
  }, [data, state]);

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = () => {
    setEmail("");
  };

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        onChange={emailChange}
        value={email}
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
