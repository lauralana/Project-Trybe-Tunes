import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Data extends Component {
  render() {
    const { input, arrayData } = this.props;
    return (
      <div className="searchResult">
        { arrayData.length < 1
          ? <h3>Nenhum álbum foi encontrado</h3>
          : (
            <>
              <h3>{ `Resultado de álbuns de: ${input}`}</h3>
              {arrayData.map((element) => (
                <div key={ element.collectionId }>
                  <Link
                    data-testid={ `link-to-album-${element.collectionId}` }
                    to={ `/album/${element.collectionId}` }
                  >
                    {element.collectionName}
                  </Link>
                </div>
              ))}
            </>)}
      </div>
    );
  }
}

Data.propTypes = {
  input: PropTypes.string,
  arrayData: PropTypes.shape({
    collectionName: PropTypes.string,
    collectionId: PropTypes.number,
  }),
}.isRequired;
