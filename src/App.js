import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    contador: 0,
    info: {}
  };

  componentWillMount() {
    axios
      .get("https://swapi.co/api/people/12", {
        responseType: "json"
      })
      .then(informacoes => this.setState({ info: informacoes.data }))
      .catch(erro => console.log(erro));
  }

  render() {
    return (
    <div class="container">
      <div class="col-xl-12">
        <p>teste contador</p>
        {this.state.contador}
        <br />

        {/* <div class="card" style={{ width: "18rem" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}

        <div class="card">
          <div class="card-body">
            <div class="alert alert-dark" role="alert">
              <p>{this.state.info.name}</p>
              <p>{this.state.info.height}</p>
              <p>{this.state.info.mass}</p>
              <p>{this.state.info.hair_color}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            this.setState({ contador: this.state.contador + 1 });
          }}
        >
          Adicionar +1
        </button>
        {/* {JSON.stringify(this.state.info)} */}
      </div>
      </div>
    );
  }
}

export default App;
