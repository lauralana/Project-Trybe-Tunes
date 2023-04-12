import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loading from '../pages/Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      favCheck: false,
    };
  }

  async componentDidMount() {
    await getFavoriteSongs();
  }

  funcAddFavorites = async (song, event) => {
    const { checked } = event.target;
    this.setState({ loading: true, favCheck: checked });
    if (checked) {
      await addSong(song);
    }
    await removeSong(song);
    this.setState({ loading: false });
  }

  render() {
    const { loading, favCheck } = this.state;
    const { trackName, previewUrl, trackId, song } = this.props;
    return (
      <div>
        { loading ? <Loading /> : (
          <>
            <h3>{trackName}</h3>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
            <label
              htmlFor="favmusic"
            >
              Favorita
              <input
                type="checkbox"
                id="favmusic"
                onClick={ (event) => this.funcAddFavorites(song, event) }
                defaultChecked={ favCheck }
                data-testid={ `checkbox-music-${trackId}` }
              />
            </label>
          </>
        )}

      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
}.isRequired;
