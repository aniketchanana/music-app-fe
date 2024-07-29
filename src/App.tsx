/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import './App.css';
import Button from './components/Button';
import SongPanel from './module/Songs/SongPanel';
import {
  EAudioPlayerId,
  SWITCH_SPEED,
  change,
  getActivePlayer,
  getInActivePlayer,
} from './songSwitcher';
function App() {
  const increaseInterval = useRef<any>(null);
  const decreaseInterval = useRef<any>(null);
  const [reRender, setReRender] = useState(0);
  const onSwitch = () => {
    change();
    clearInterval(increaseInterval.current);
    clearInterval(decreaseInterval.current);

    setReRender(reRender + 1);
    const activePlayer = document.getElementById(
      getActivePlayer()
    ) as HTMLAudioElement;

    const inActivePlayer = document.getElementById(
      getInActivePlayer()
    ) as HTMLAudioElement;
    increaseInterval.current = setInterval(() => {
      if (activePlayer.volume === 1) {
        activePlayer.muted = false;
        clearInterval(increaseInterval.current);
        return;
      }
      activePlayer.volume += 0.1;
    }, SWITCH_SPEED);
    decreaseInterval.current = setInterval(() => {
      if (inActivePlayer.volume === 0) {
        inActivePlayer.muted = true;
        clearInterval(decreaseInterval.current);
        return;
      }
      inActivePlayer.volume -= 0.1;
    }, SWITCH_SPEED);
  };
  return (
    <div className='dj-bg p-10 flex flex-col items-center'>
      <Button onClick={onSwitch} className='w-fit p-4'>
        Current :: {getActivePlayer()}
      </Button>
      <div className='flex justify-between w-full'>
        <SongPanel audioPlayerId={EAudioPlayerId.PLAYER1} />
        <SongPanel audioPlayerId={EAudioPlayerId.PLAYER2} />
      </div>
    </div>
  );
}

export default App;
