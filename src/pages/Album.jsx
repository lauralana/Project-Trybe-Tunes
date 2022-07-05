import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      collection: '',
      songs: [],
      artist: '',
    };
  }

  componentDidMount() {
    this.funcFetchGetMusics();
  }

funcFetchGetMusics = async () => {
  const { match: { params: { id } } } = this.props;
  const music = await getMusics(id);
  this.setState({
    collection: music[0].collectionName,
    artist: music[0].artistName,
    songs: music,
  });
}

render() {
  const { songs, collection, artist } = this.state;
  return (
    <div data-testid="page-album">
      <Header />
      <section>
        <h3 data-testid="artist-name">{ artist }</h3>
        <h4 data-testid="album-name">{ collection }</h4>
        {songs.map((song, index) => (index > 0 && <MusicCard
          key={ song.trackName }
          trackName={ song.trackName }
          previewUrl={ song.previewUrl }
        />))}
      </section>
    </div>
  );
}
}
Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
