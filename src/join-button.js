import React from "react";
import "./App.css";
import "./Button.css";


class Button extends React.Component {
  render() {
    return (
        <div class="button">
            <a href="https://discord.gg/Vg7gEcZf" class="btn btn--orange btn--cubic btn--shadow">わくせいに出発する</a>
        </div>
    );
  }
}

export default Button;
