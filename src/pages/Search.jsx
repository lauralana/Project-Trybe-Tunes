import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from './Loading';
import Data from './Data';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      btn: true,
      search: '',
      input: '',
      arrayData: [],
      click: false,
      loading: false,
    };
  }

  onInputChange = (event) => {
    const { value } = event.target;
    this.setState({ search: value, input: value });
    const minCharacter = 2;
    this.setState({ btn: true });
    if (event.target.value.length >= minCharacter) {
      this.setState({
        btn: false,
      });
    }
  }

  validateBtn = async () => {
    this.setState({ loading: true, click: false });
    const { search } = this.state;
    const array = await searchAlbumsAPI(search);
    this.setState({ arrayData: array, click: true, loading: false, search: '' });
    return array;
  }

  render() {
    const { btn, arrayData, click, input, loading } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        { loading ? <Loading />
          : (
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
                onClick={ this.validateBtn }
                disabled={ btn }
              >
                Pesquisar
              </button>
              <div>
                { click ? <Data
                  input={ input }
                  arrayData={ arrayData }
                /> : null }
              </div>
            </form>
          )}
      </div>

    );
  }
}
