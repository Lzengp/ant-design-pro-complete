export default (api) => {
    api.addHTMLHeadScripts(() => {
      return {
        type: "text/javascript",
        src: 'https://webapi.amap.com/maps?v=2&key=e888fd47d43cae77ccac97c4aa467e4f',
      }
    });
  };