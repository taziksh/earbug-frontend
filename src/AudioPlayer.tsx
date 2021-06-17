import {
  Spinner,
  Intent,
  Icon,
  Colors,
  Classes
} from "@blueprintjs/core";
import * as React from "react";
import { start } from "repl";
import * as Songs from "./songs";
import ReactHowler from "react-howler";
import ReactAudioPlayer from "react-audio-player";

const SNIPCHAT_URL = "https://snipchat.herokuapp.com";

type Timer = {
  currentTime: number;
  isReady: boolean;
};

function handleError(message: string, err: Error) {
  console.log(message, err);
}

// 15s
const startTime = Date.now();
const waitTime = 1000 * 10;

export function AudioPlayer({ song, query }) {
  const [url, setUrl] = React.useState("");
  const [timer, setTimer] = React.useState<Timer>({
    currentTime: Date.now(),
    isReady: false
  });

  React.useEffect(() => {
    const body = JSON.stringify({
      title: song.title,
      query: query,
      duration: song.duration
    });
    console.log(body);

    const requestOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body
    };

    fetch(SNIPCHAT_URL + "/deezer", requestOptions)
      .then(
        (response) => {
          return response.json();
        },
        (err) => handleError("Fetch Error: ", err)
      )
      .then(
        (json) => {
          if (!timer.isReady) {
            setTimer((oldState) => {
              return { ...oldState, isReady: true };
            });
          }
          console.log(json);
          setUrl(JSON.stringify(json));
        },
        (err) => handleError("Error: ", err)
      );
  }, []);

  React.useEffect(() => {
    const currentTime = Date.now() - startTime;
    if (!timer.isReady && currentTime > waitTime) {
      setTimer((oldState) => {
        return { ...oldState, isReady: true };
      });
      return;
    }
    // else...still working?
    const interval = setInterval(() => {
      setTimer((oldState) => {
        return {
          ...oldState,
          currentTime: Date.now()
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer.isReady, timer.currentTime]);

  return (
    // main axis: col
    <div className={"flex flex-column items-center"}>
      <Spinner
        intent={Intent.PRIMARY}
        size={40}
        value={
          !timer.isReady ? (Date.now() - startTime) / waitTime : 1
        }
      />
      <div className={!timer.isReady ? Classes.SKELETON : undefined}>
        <img
          src={song.art}
          alt={"An album cover"}
          className={"br-100 ma2"}
          height={"200px"}
        />
      </div>
      <ReactAudioPlayer
        src={url || ""}
        controls={true}
        autoPlay={true}
      />
    </div>
  );
} 
