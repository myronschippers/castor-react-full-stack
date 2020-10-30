import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';

class App extends React.Component {
  state = {
    songs: [],
    errorMsg: null,
  };

  componentDidMount() {
    // component loaded and is ready
    // get any data that I need

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
          {this.state.errorMsg != null && <p>{this.state.errorMsg}</p>}
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Artist</th>
                <th>Track</th>
                <th>Published</th>
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
