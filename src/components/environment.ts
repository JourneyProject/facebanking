export const IS_MOBILE = /mobile/i.test(navigator.userAgent);

export const IS_FIREFOX_DESKTOP =
  /Firefox/i.test(navigator.userAgent) && !IS_MOBILE;

export const IS_LOCAL_SERVER =
  /localhost/i.test(window.location.toString()) ||
  /127.0.0.1/i.test(window.location.toString());
