import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      userName: '',
    };
  }

  componentDidMount() {
    this.userLogin();
  }

  userLogin = async () => {
    const userLogin = await getUser();
    this.setState({ loading: false, userName: userLogin });
  }

  render() {
    const { loading, userName } = this.state;
    return (
      <div data-testid="header-component">
        <nav>
          <Link data-testid="link-to-search" to="/search"> Pesquisa </Link>
          <br />
          <Link data-testid="link-to-favorites" to="/favorites"> Favoritos </Link>
          <br />
          <Link data-testid="link-to-profile" to="/profile"> Perfil </Link>
        </nav>
        {loading ? <Loading />
          : <p data-testid="header-user-name">{userName.name}</p>}
      </div>
    );
  }
}
