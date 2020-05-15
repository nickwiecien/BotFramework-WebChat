import { Constants, createStore, version } from 'botframework-webchat-core';
import ReactWebChat, { Components, concatMiddleware, connectToWebChat, createStyleSet, hooks } from 'botframework-webchat-component';
import createBrowserWebSpeechPonyfillFactory from './createBrowserWebSpeechPonyfillFactory';
declare const renderWebChat: any;
export declare const createDirectLine: (options: any) => any;
export default ReactWebChat;
export { Components, concatMiddleware, connectToWebChat, Constants, createBrowserWebSpeechPonyfillFactory, createStore, createStyleSet, hooks, renderWebChat, version };
