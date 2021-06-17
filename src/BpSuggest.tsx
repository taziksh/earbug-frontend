import * as React from "react";
import { debounce } from "lodash";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { Suggest } from "@blueprintjs/select";

import { CardExample } from "./CardExample";
import { AudioPlayer } from "./AudioPlayer";
import * as Songs from "./songs";

require("dotenv").config();
const SNIPCHAT_URL = "https://snipchat.herokuapp.com";

const SuggestStyles = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "5%"
};

const SongSuggest = Suggest.ofType<Songs.Song>();

interface Suggestions {
  selected: Songs.Song;
  options: Songs.Song[];
  query: String;
}

function handleError(message: string, err: Error) {
  return;
}

export class BpSuggest extends React.PureComponent<{}, Suggestions> {
  public state: Suggestions = {
    selected: Songs.TOP_10_MATCHES[0],
    options: Songs.TOP_10_MATCHES,
    query: "i'm willing to wait"
  };

  private handleItemSelect = (selected: Songs.Song) => {
    this.setState((oldState) => {
      return { selected: selected, query: oldState.query };
    });
  };

  private handleRender = (item: Songs.Song) => {
    return JSON.stringify(item.title);
  };

  // async Spotify API caller
  private handleQueryChange = async (searched: Songs.Song) => {
    if (!searched) return;

    console.log("Query: ", searched);
    let results: Songs.Song[] = [];
    const body = JSON.stringify({ query: searched });

    const response = await fetch(SNIPCHAT_URL + "/search/spotify", {
      body: body,
      headers: { "Content-Type": "application/json" },
      method: "POST"
    });

    if (!response.ok) throw new Error("Search Spotify Error");
    const data = await response.json();
    this.setState((oldState) => {
      return { options: data, query: searched };
    });
  };

  // debounce Spotify API requests
  private debounceHandleQueryChange = AwesomeDebouncePromise(
    this.handleQueryChange,
    300
  );

  public render() {
    return (
      <div>
        <CardExample header="What's That Song?" icon="music">
          <div style={SuggestStyles}>
            <SongSuggest
              items={this.state.options}
              itemRenderer={Songs.renderSong}
              onItemSelect={this.handleItemSelect}
              inputValueRenderer={this.handleRender}
              onQueryChange={this.debounceHandleQueryChange}
              resetOnClose={true}
              fill={false}
              popoverProps={{ minimal: true }}
            />
          </div>
          <AudioPlayer
            song={this.state.selected}
            query={this.state.query}
          />
        </CardExample>
      </div>
    );
  }
}
