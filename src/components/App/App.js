import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from '../Header/Header';

class App extends React.Component {
  state = {
    form: {
      rank: '',
      artist: '',
      track: '',
      published: '',
    },
    songs: [],
    errorMsg: null,
  };

  componentDidMount() {
    // component loaded and is ready
    // get any data that I need

    this.getSongs();
  }

  handleFieldChange = (event, fieldKey) => {
    // event - is an event object
    // event.target - is our <input/>
    // event.target.value - is the value off of the field
    this.setState({
      form: {
        ...this.state.form,
        [fieldKey]: event.target.value,
      },
    });
  };

  handleSubmitSong = (event) => {
    event.preventDefault();
    console.log('handleSubmitSong');
    this.setState({
      form: {
        rank: '',
        artist: '',
        track: '',
        published: '',
      },
    });
    this.postSong(this.state.form);
  };

  getSongs() {
    axios({
      method: 'GET',
      url: '/songs',
    })
      .then((response) => {
        // {
        //   data: []
        // }
        console.log(response);
        this.setState({
          songs: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'Something went terribly wrong.',
        });
      });
  }

  postSong(newSong) {
    console.log('newSong:', newSong);
    axios({
      method: 'POST',
      url: '/songs',
      data: newSong,
    })
      .then((response) => {
        //GET new data
        this.getSongs();
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'Could not save your song.',
        });
      });
  }

  render() {
    // conditional rendering
    // let errorMessage = null;

    // if (this.state.errorMsg != null) {
    //   errorMessage = <p>{this.state.errorMsg}</p>;
    // }

    return (
      <div>
        <Header />
        <main className="container">
          <h2>Checkout Our Songs</h2>
          {/* FULL LIST OF SONGS GOES HERE */}
          <form onSubmit={this.handleSubmitSong}>
            <input
              type="number"
              placeholder="Song Rank"
              name="rank"
              onChange={(event) => this.handleFieldChange(event, 'rank')}
              value={this.state.form.rank}
            />
            <input
              type="text"
              placeholder="Artist Name"
              name="artist"
              required
              onChange={(event) => this.handleFieldChange(event, 'artist')}
              value={this.state.form.artist}
            />
            <input
              type="text"
              placeholder="Track Name"
              name="track"
              required
              onChange={(event) => this.handleFieldChange(event, 'track')}
              value={this.state.form.track}
            />
            <input
              type="text"
              placeholder="Published"
              name="published"
              onChange={(event) => this.handleFieldChange(event, 'published')}
              value={this.state.form.published}
            />
            <button>Add Song</button>
          </form>

          {this.state.errorMsg != null && <p>{this.state.errorMsg}</p>}
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Artist</th>
                <th scope="col">Track</th>
                <th scope="col">Published</th>
              </tr>
            </thead>
            <tbody>
              {this.state.songs.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.rank}</td>
                    <td>{item.artist}</td>
                    <td>{item.track}</td>
                    <td>{item.published}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

export default App;
