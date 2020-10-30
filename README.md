# React Full Stack

We are incorporating a server with an API already built out. No longer having access to `$.ajax()` we will be taking a look at using a new library with Axios (`axios()`) instead.

> NOTE: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Axios

1. Install axios on our project with `npm install axios`

1. Usage with `POST`:

    ```JS
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
    ```

1. Usage with `GET`:

    ```JS
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
    ```