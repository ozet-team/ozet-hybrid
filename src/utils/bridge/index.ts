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

export function getAccessToken() {
  if (window.webkit) {
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'token',
      }),
    );
  }
}

export function backSwipe() {
  if (window.webkit) {
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'back',
      }),
    );
  }
}

export function setToEnabledSwipe(enabled = true) {
  if (window.webkit) {
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'swipe',
        isEnableSwipe: enabled,
      }),
    );
  }
}
