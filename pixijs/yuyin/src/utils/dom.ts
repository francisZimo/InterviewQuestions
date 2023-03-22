export const stopPropagation = (event: Event) => event.stopPropagation();
// 暂停当前页面所有正在进行播放的语音
export function pauseAllMediaVoices() {
  const audioOrVideo = ([...Array.from(document.querySelectorAll('audio')), ...Array.from(document.querySelectorAll('video'))] as unknown) as Array<HTMLAudioElement>;
  audioOrVideo.forEach((item) => {
    if (!item.paused && item.played.length > 0) {
      item.pause();
    }
  });
}

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}
