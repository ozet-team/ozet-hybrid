import { nativeInfo } from '../storage';

function setAccessToken(accessToken: string) {
  nativeInfo.setData({
    accessToken: accessToken,
  });
}

window.bridge.setAccessToken = setAccessToken;

export function backSwipe() {
  window.webkit.messageHandlers.callbackHandler.postMessage({
    event: 'back',
  });
}
