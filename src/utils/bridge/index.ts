import { nativeInfo } from '../storage';

function setAccessToken(accessToken: string) {
  console.log('setAccessToken', accessToken);
  nativeInfo.setData({
    accessToken: accessToken,
  });
}

function backEvent() {
  console.log('backEvent');
  history.back();
}

if (window) {
  window.setAccessToken = setAccessToken;
  window.backEvent = backEvent;
}

export function getAccessToken() {
  if (window.webkit) {
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'token',
      }),
    );
  } else {
    window?.webviewBridge?.token();
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

export function applyRecruitment() {
  if (window.webkit) {
    window.webkit.messageHandlers.callbackHandler.postMessage(
      JSON.stringify({
        event: 'apply',
      }),
    );
  } else {
    window?.webviewBridge?.apply();
  }
}
