const userAgent = window.navigator.userAgent;
export default {
  isAndroid: userAgent.indexOf("Android") > -1 || userAgent.indexOf("Adr") > -1, //android终端
  isiOS: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
};
