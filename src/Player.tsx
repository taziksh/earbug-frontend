import { Spinner, Intent, Icon, Colors, Classes } from '@blueprintjs/core';
import * as React from 'react';
import { start } from 'repl';
import * as Songs from './songs';
import ReactHowler from 'react-howler';
import ReactAudioPlayer from 'react-audio-player';

const SNIPCHAT_URL = 'https://snipchat.herokuapp.com';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
// TODO: hardcode
const raw = JSON.stringify({ title: 'wait for it' });

const requestOptions: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
};

interface InterfacePlayer {
  song: Songs.InterfaceSong;
}

interface InterfaceTimer {
  currentTime: number;
  isReady: boolean;
}

function handleError(message: string, err: Error) {
  return;
}

// 15s
const startTime = Date.now();
const waitTime = 1000 * 10;

export function Player({ song }: InterfacePlayer) {
  const [url, setUrl] = React.useState('');
  const [timer, setTimer] = React.useState<InterfaceTimer>({
    currentTime: Date.now(),
    isReady: false,
  });

  React.useEffect(
    () => {
      fetch(SNIPCHAT_URL + '/deezer', requestOptions)
        .then(
          (response) => {
            return response.json();
          },
          (err) => handleError('Fetch Error: ', err)
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
          (err) => handleError('Error: ', err)
        );
    }, 
    []
  );

  React.useEffect(
    () => {
      const currentTime = Date.now() - startTime;
      if (!timer.isReady && currentTime > waitTime) {
        setTimer((prevState) => {
          return { ...prevState, isReady: true };
        });
        return;
      }
      // else...still working?
      const interval = setInterval(
        () => {
          setTimer((prevState) => {
            return {
              ...prevState,
              currentTime: Date.now(),
            };
          });
        }, 
        1000
      );
      return () => clearInterval(interval);
    }, 
    [timer.isReady, timer.currentTime]
  );

  return (
    // main axis: col
    <div className={'flex flex-column items-center'}>
      <Spinner
        intent={Intent.PRIMARY}
        size={40}
        value={!timer.isReady ? (Date.now() - startTime) / waitTime : 1}
      />
      <div className={!timer.isReady ? Classes.SKELETON : undefined}>
        <img
          src={song.art}
          alt={'An album cover'}
          className={'br-100 ma2'}
          height={'200px'}
        />
      </div>
      <ReactAudioPlayer src={url || ''} controls={true} autoPlay={true} />
      <span>
        {/* 
        <Icon
          className={!timer.isReady ? Classes.SKELETON : undefined}
          icon='share'
          color={!timer.isReady ? Intent.NONE : Colors.GREEN4}
          iconSize={16}
        />
        <Icon
          className={!timer.isReady ? Classes.SKELETON : undefined}
          icon='download'
          color={Colors.GREEN5}
        />{' '}*/}
      </span>
    </div>
  );
}
