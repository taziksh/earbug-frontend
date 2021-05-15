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

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
//TODO: hardcode
let raw = JSON.stringify({ title: "wait for it" });

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

interface IPlayer {
  song: Songs.ISong;
}

interface ITimer {
  currentTime: number;
  isReady: boolean;
}

//15s
const startTime = Date.now();
const waitTime = 1000 * 10;

export function Player({ song }: IPlayer) {
  const [url, setUrl] = React.useState("");
  const [timer, setTimer] = React.useState<ITimer>({
    currentTime: Date.now(),
    isReady: false
  });

  React.useEffect(() => {
    fetch(SNIPCHAT_URL + "/deezer", requestOptions)
      .then(
        (response) => {
          return response.json();
        },
        (err) => console.log("Fetch Error: ", err)
      )
      .then(
        (json) => {
          if (!timer.isReady) {
            setTimer((prevState) => {
              return { ...prevState, isReady: true };
            });
          }
          setUrl(json);
        },
        (err) => console.log("Error: ", err)
      );
  }, []);

  React.useEffect(() => {
    const currentTime = Date.now() - startTime;
    //console.log(Date.now() - startTime);
    if (!timer.isReady && currentTime > waitTime) {
      setTimer((prevState) => {
        return { ...prevState, isReady: true };
      });
      return;
    }
    //else...still working?
    const interval = setInterval(() => {
      setTimer((prevState) => {
        return {
          ...prevState,
          currentTime: Date.now()
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer.isReady, timer.currentTime]);

  return (
    //main axis: col
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
          height={"100px"}
        />
      </div>
      <ReactAudioPlayer src={url || ""} controls autoPlay />
      <span>
        {/* 
        <Icon
          className={!timer.isReady ? Classes.SKELETON : undefined}
          icon="share"
          color={!timer.isReady ? Intent.NONE : Colors.GREEN4}
          iconSize={16}
        />
        <Icon
          className={!timer.isReady ? Classes.SKELETON : undefined}
          icon="download"
          color={Colors.GREEN5}
        />{" "}*/}
      </span>
    </div>
  );
}
