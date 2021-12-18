import { nativeInfo } from '../storage';

function setAccessToken(accessToken: string) {
  console.log('setAccessToken', accessToken);
  nativeInfo.setData({
    accessToken: accessToken,
  });
}

if (window) {
  window.setAccessToken = setAccessToken;
}

export function backSwipe() {
  window.webkit.messageHandlers.callbackHandler.postMessage(
    JSON.stringify({
      event: 'back',
    }),
  );
}
