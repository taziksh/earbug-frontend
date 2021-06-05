import * as React from "react";
import { debounce } from "lodash";
import { Suggest } from "@blueprintjs/select";

import "./app.scss";

import { CardExample } from "./CardExample";
import { Player } from "./Player";
import * as Songs from "./songs";

require("dotenv").config();
let Spotify = require("spotify-web-api-js");
let spotify = new Spotify();

const songSuggestStyles = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "5%"
};

const SongSuggest = Suggest.ofType<Songs.InterfaceSong>();

interface InterfaceSuggestExample {
  song: Songs.InterfaceSong;
  songs: Songs.InterfaceSong[];
}

function handleError(message: string, err: Error) {
  return;
}

export class SuggestExample extends React.PureComponent<
  {},
  InterfaceSuggestExample
> {
  public state: InterfaceSuggestExample = {
    song: Songs.TOP_100_SONGS[0],
    songs: Songs.TOP_100_SONGS
  };

  public render() {
    return (
      <div>
        <CardExample header="What's That Song?" icon="music">
          <div style={songSuggestStyles}>
            <SongSuggest
              items={this.state.songs}
              itemRenderer={Songs.renderSong}
              onItemSelect={this.handleItemSelect}
              inputValueRenderer={this.handleValueRender}
              onQueryChange={this.handleQueryChange}
              resetOnClose={true}
              fill={false}
              popoverProps={{ minimal: true }}
            />
          </div>
          <Player song={this.state.song} />
        </CardExample>
      </div>
    );
  }

  private handleItemSelect = (song: Songs.InterfaceSong) => {
    this.setState((prevState) => {
      return { ...prevState, song: song };
    });
  };
  private handleValueRender = (item: Songs.InterfaceSong) => {
    return JSON.stringify(item.title);
  };

  // async Spotify API caller
  private handleQueryChange = async (song: Songs.InterfaceSong) => {
    console.log("Query: ", song);
    let accessToken = null;
    let results: Songs.InterfaceSong[] = [];

    await fetch("https://accounts.spotify.com/api/token", {
      body: "grant_type=client_credentials",
      headers: {
        Authorization:
          "Basic ZmE5Y2IwN2M4ZmZjNDM1ZjlhMWIzZTk4NGZhYWYyOWM6OTM3ODk4Njc1NDU3NGI4ZTk3ZGVkMThhNTc2ZGI3ZTQ=",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((data) => {
        let accessTokenField = "access_token";
        accessToken = data[accessTokenField];
        spotify.setAccessToken(accessToken);
        spotify.searchTracks(song).then(
          (data2) => {
            console.log("Searching for ", song, data);
            let tracks = data2.tracks.items;
            tracks.forEach((track) => {
              let result: Songs.InterfaceSong = {
                title: track.name,
                artist: track.album.artists[0].name,
                art: track.album.images[0].url
              };
              results.push(result);
              this.setState((prevState) => {
                return { ...prevState, songs: results };
              });
            });
          },
          (err) => {
            handleError("Spotify Error: ", err);
          }
        );
      })
      .catch((err) => {
        handleError("Error: ", err);
      });
  };

  // debounce Spotify API requests
  private debounceHandleQueryChange = () => {
    console.log("Debouncing now...");
    debounce(this.handleQueryChange, 500);
  };
}
