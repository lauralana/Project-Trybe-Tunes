import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      btn: true,
    };
  }

  onInputChange = (event) => {
    const minCharacter = 2;
    this.setState({ btn: true });
    if (event.target.value.length >= minCharacter) {
      this.setState({
        btn: false,
      });
    }
  }
  // onImputChange =({ target }) => {
  //   const { name, value } = target;
  //   this.setState({ [name]: value }, () => this.validateBtn);
  // }

  // validateBtn = () => {
  //   const minCharacter = 2;
  //   const { search } = this.state;
  //   this.setState({
  //     btn: search.length >= minCharacter,
  //   });
  // }

  render() {
    const { btn } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            placeholder="artista"
            type="text"
            key="search"
            data-testid="search-artist-input"
            onChange={ this.onInputChange }
          />
          <button
            type="button"
            key="btn"
            data-testid="search-artist-button"
            // onClick={ this.validateBtn }
            disabled={ btn }
          >
            Pesquisar
          </button>
        </form>
      </div>

    );
  }
}
