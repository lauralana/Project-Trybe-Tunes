import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      loading: false,
      redirect: false,
      btn: true,
    };
  }

onInputChange = (event) => {
  const minCharacter = 3;
  this.setState({ btn: true });
  if (event.target.value.length >= minCharacter) {
    this.setState({
      btn: false,
      userName: event.target.value,
    });
  }
}

  validateBtn = async () => {
    const { userName } = this.state;
    this.setState({ loading: true });
    await createUser({ name: userName });
    this.setState({ loading: false, redirect: true });
  }

  render() {
    const { loading, redirect, btn } = this.state;
    if (loading) return <Loading />;

    return (
      <section>
        { redirect ? <Redirect to="/search" /> : (
          <div data-testid="page-login">
            <label htmlFor="login">
              Login:
              <input
                id="login"
                type="text"
                key="login"
                data-testid="login-name-input"
                onChange={ this.onInputChange }
              />
            </label>
            <button
              type="button"
              key="button"
              data-testid="login-submit-button"
              onClick={ this.validateBtn }
              disabled={ btn }
            >
              Entrar
            </button>
          </div>

        ) }

      </section>
    );
  }
}
