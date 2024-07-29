export enum EAudioPlayerId {
  PLAYER1 = 'audio-player-1',
  PLAYER2 = 'audio-player-2',
}

export const SWITCH_SPEED = 500;

let activePlayer = EAudioPlayerId.PLAYER1;

export const change = () => {
  if (activePlayer === EAudioPlayerId.PLAYER1) {
    activePlayer = EAudioPlayerId.PLAYER2;
  } else {
    activePlayer = EAudioPlayerId.PLAYER1;
  }
};

export const getActivePlayer = () => activePlayer;
export const getInActivePlayer = () =>
  activePlayer === EAudioPlayerId.PLAYER1
    ? EAudioPlayerId.PLAYER2
    : EAudioPlayerId.PLAYER1;
