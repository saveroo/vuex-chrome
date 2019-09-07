import BackgroundScript from './backgroundScript';
import { isBackgroundScript } from './chromeUtils';
import ContentScript from './contentScript';

/**
 * @description Paramater is your Chrome Extension ID, look upon extensions screen, and copy/paste the id. or you coan use chrome.runtime.id to get the id. but somehow it will not suppress the errors in my case with script injection.
 * @param  {string} extensionID
 */
export default function (extensionID) {
  return (store) => {
    isBackgroundScript(window).then((isBackground) => {
      if (isBackground) {
        return new BackgroundScript(store);
      }
      return new ContentScript(store, extensionID);
    });
  };
}
