import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 0,
      textBtn: "INICIAR",
    };

    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar() {
    const state = this.state;
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      state.textBtn = "INICIAR";
    } else {
      this.timer = setInterval(() => {
        state.text += 0.1;
        this.setState(state);
      }, 100);
      state.textBtn = "PAUSAR";
    }

    this.setState(state);
  }

  limpar() {
    const state = this.state;
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    state.textBtn = "INICIAR";
    state.text = 0;
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/cronometro.png")} alt="cronômetro" />
        <h3>{this.state.text.toFixed(1)}</h3>
        <div className="btnGroup">
          <button type="button" onClick={this.iniciar}>
            {this.state.textBtn}
          </button>
          <button type="button" onClick={this.limpar}>
            ZERAR
          </button>
        </div>
      </div>
    );
  }
}

export default App;
