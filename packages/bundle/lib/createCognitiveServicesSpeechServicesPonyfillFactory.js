"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createCognitiveServicesSpeechServicesPonyfillFactory;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _AudioConfig = require("microsoft-cognitiveservices-speech-sdk/distrib/lib/src/sdk/Audio/AudioConfig");

var _SpeechServices = _interopRequireDefault(require("web-speech-cognitive-services/lib/SpeechServices"));

function resolveFunction(fnOrValue) {
  return typeof fnOrValue === 'function' ? fnOrValue() : fnOrValue;
}

function createCognitiveServicesSpeechServicesPonyfillFactory(_ref) {
  var audioConfig = _ref.audioConfig,
      audioContext = _ref.audioContext,
      audioInputDeviceId = _ref.audioInputDeviceId,
      authorizationToken = _ref.authorizationToken,
      credentials = _ref.credentials,
      enableTelemetry = _ref.enableTelemetry,
      region = _ref.region,
      speechRecognitionEndpointId = _ref.speechRecognitionEndpointId,
      speechSynthesisDeploymentId = _ref.speechSynthesisDeploymentId,
      speechSynthesisOutputFormat = _ref.speechSynthesisOutputFormat,
      subscriptionKey = _ref.subscriptionKey,
      textNormalization = _ref.textNormalization;

  if (!window.navigator.mediaDevices && !audioConfig) {
    console.warn('botframework-webchat: Your browser does not support Web Audio or the page is not loaded via HTTPS or localhost. Cognitive Services Speech Services is disabled. However, you may pass a custom AudioConfig to enable speech in this environment.');
    return function () {
      return {};
    };
  }

  if (!credentials && (authorizationToken || region || subscriptionKey)) {
    console.warn('botframework-webchat: "authorizationToken", "region", and "subscriptionKey" are deprecated and will be removed on or after 2020-12-17. Please use "credentials" instead.');

    credentials = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!authorizationToken) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return resolveFunction(authorizationToken);

              case 3:
                _context.t0 = _context.sent;
                _context.t1 = region;
                return _context.abrupt("return", {
                  authorizationToken: _context.t0,
                  region: _context.t1
                });

              case 6:
                _context.t2 = region;
                _context.next = 9;
                return resolveFunction(subscriptionKey);

              case 9:
                _context.t3 = _context.sent;
                return _context.abrupt("return", {
                  region: _context.t2,
                  subscriptionKey: _context.t3
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function credentials() {
        return _ref2.apply(this, arguments);
      };
    }();
  }

  if (audioConfig && audioInputDeviceId) {
    console.warn('botframework-webchat: "audioConfig" and "audioInputDeviceId" cannot be set at the same time; ignoring "audioInputDeviceId".');
  } // HACK: We should prevent AudioContext object from being recreated because they may be blessed and UX-wise expensive to recreate.
  //       In Cognitive Services SDK, if they detect the "end" function is falsy, they will not call "end" but "suspend" instead.
  //       And on next recognition, they will re-use the AudioContext object.


  if (!audioConfig) {
    audioConfig = audioInputDeviceId ? _AudioConfig.AudioConfig.fromMicrophoneInput(audioInputDeviceId) : _AudioConfig.AudioConfig.fromDefaultMicrophoneInput();
    var source = audioConfig.privSource; // This piece of code is adopted from microsoft-cognitiveservices-speech-sdk/common.browser/MicAudioSource.ts.
    // Instead of closing the AudioContext, it will just suspend it. And the next time it is needed, it will be resumed (by the original code).

    source.destroyAudioContext = function () {
      if (!source.privContext) {
        return;
      }

      source.privRecorder.releaseMediaResources(source.privContext);
      source.privContext.state === 'running' && source.privContext.suspend();
    };
  }

  return function () {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        referenceGrammarID = _ref3.referenceGrammarID;

    var _createPonyfill = (0, _SpeechServices.default)({
      audioConfig: audioConfig,
      audioContext: audioContext,
      credentials: credentials,
      enableTelemetry: enableTelemetry,
      referenceGrammars: referenceGrammarID ? ["luis/".concat(referenceGrammarID, "-PRODUCTION")] : [],
      speechRecognitionEndpointId: speechRecognitionEndpointId,
      speechSynthesisDeploymentId: speechSynthesisDeploymentId,
      speechSynthesisOutputFormat: speechSynthesisOutputFormat,
      textNormalization: textNormalization
    }),
        SpeechGrammarList = _createPonyfill.SpeechGrammarList,
        SpeechRecognition = _createPonyfill.SpeechRecognition,
        speechSynthesis = _createPonyfill.speechSynthesis,
        SpeechSynthesisUtterance = _createPonyfill.SpeechSynthesisUtterance;

    return {
      SpeechGrammarList: SpeechGrammarList,
      SpeechRecognition: SpeechRecognition,
      speechSynthesis: speechSynthesis,
      SpeechSynthesisUtterance: SpeechSynthesisUtterance
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVDb2duaXRpdmVTZXJ2aWNlc1NwZWVjaFNlcnZpY2VzUG9ueWZpbGxGYWN0b3J5LmpzIl0sIm5hbWVzIjpbInJlc29sdmVGdW5jdGlvbiIsImZuT3JWYWx1ZSIsImNyZWF0ZUNvZ25pdGl2ZVNlcnZpY2VzU3BlZWNoU2VydmljZXNQb255ZmlsbEZhY3RvcnkiLCJhdWRpb0NvbmZpZyIsImF1ZGlvQ29udGV4dCIsImF1ZGlvSW5wdXREZXZpY2VJZCIsImF1dGhvcml6YXRpb25Ub2tlbiIsImNyZWRlbnRpYWxzIiwiZW5hYmxlVGVsZW1ldHJ5IiwicmVnaW9uIiwic3BlZWNoUmVjb2duaXRpb25FbmRwb2ludElkIiwic3BlZWNoU3ludGhlc2lzRGVwbG95bWVudElkIiwic3BlZWNoU3ludGhlc2lzT3V0cHV0Rm9ybWF0Iiwic3Vic2NyaXB0aW9uS2V5IiwidGV4dE5vcm1hbGl6YXRpb24iLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJjb25zb2xlIiwid2FybiIsIkF1ZGlvQ29uZmlnIiwiZnJvbU1pY3JvcGhvbmVJbnB1dCIsImZyb21EZWZhdWx0TWljcm9waG9uZUlucHV0Iiwic291cmNlIiwicHJpdlNvdXJjZSIsImRlc3Ryb3lBdWRpb0NvbnRleHQiLCJwcml2Q29udGV4dCIsInByaXZSZWNvcmRlciIsInJlbGVhc2VNZWRpYVJlc291cmNlcyIsInN0YXRlIiwic3VzcGVuZCIsInJlZmVyZW5jZUdyYW1tYXJJRCIsInJlZmVyZW5jZUdyYW1tYXJzIiwiU3BlZWNoR3JhbW1hckxpc3QiLCJTcGVlY2hSZWNvZ25pdGlvbiIsInNwZWVjaFN5bnRoZXNpcyIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLFNBQXpCLEVBQW9DO0FBQ2xDLFNBQU8sT0FBT0EsU0FBUCxLQUFxQixVQUFyQixHQUFrQ0EsU0FB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QUt6R3dCLE1BQUFBLGlCQUFpQixFQUFFRCxrQkFBa0IsR0FBRyxnQkFBU0Esa0JBQVQsaUJBQUgsR0FBK0MsRUFMcUI7QUFNekdyQixNQUFBQSwyQkFBMkIsRUFBM0JBLDJCQU55RztBQU96R0MsTUFBQUEsMkJBQTJCLEVBQTNCQSwyQkFQeUc7QUFRekdDLE1BQUFBLDJCQUEyQixFQUEzQkEsMkJBUnlHO0FBU3pHRSxNQUFBQSxpQkFBaUIsRUFBakJBO0FBVHlHLEtBQWYsQ0FEdEQ7QUFBQSxRQUM5Qm1CLGlCQUQ4QixtQkFDOUJBLGlCQUQ4QjtBQUFBLFFBQ1hDLGlCQURXLG1CQUNYQSxpQkFEVztBQUFBLFFBQ1FDLGVBRFIsbUJBQ1FBLGVBRFI7QUFBQSxRQUN5QkMsd0JBRHpCLG1CQUN5QkEsd0JBRHpCOztBQWF0QyxXQUFPO0FBQ0xILE1BQUFBLGlCQUFpQixFQUFqQkEsaUJBREs7QUFFTEMsTUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFGSztBQUdMQyxNQUFBQSxlQUFlLEVBQWZBLGVBSEs7QUFJTEMsTUFBQUEsd0JBQXdCLEVBQXhCQTtBQUpLLEtBQVA7QUFNRCxHQW5CRDtBQW9CRCIsInNvdXJjZVJvb3QiOiJidW5kbGU6Ly8vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9Db25maWcgfSBmcm9tICdtaWNyb3NvZnQtY29nbml0aXZlc2VydmljZXMtc3BlZWNoLXNkay9kaXN0cmliL2xpYi9zcmMvc2RrL0F1ZGlvL0F1ZGlvQ29uZmlnJztcclxuaW1wb3J0IGNyZWF0ZVBvbnlmaWxsIGZyb20gJ3dlYi1zcGVlY2gtY29nbml0aXZlLXNlcnZpY2VzL2xpYi9TcGVlY2hTZXJ2aWNlcyc7XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlRnVuY3Rpb24oZm5PclZhbHVlKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBmbk9yVmFsdWUgPT09ICdmdW5jdGlvbicgPyBmbk9yVmFsdWUoKSA6IGZuT3JWYWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29nbml0aXZlU2VydmljZXNTcGVlY2hTZXJ2aWNlc1BvbnlmaWxsRmFjdG9yeSh7XHJcbiAgYXVkaW9Db25maWcsXHJcbiAgYXVkaW9Db250ZXh0LFxyXG4gIGF1ZGlvSW5wdXREZXZpY2VJZCxcclxuICBhdXRob3JpemF0aW9uVG9rZW4sXHJcbiAgY3JlZGVudGlhbHMsXHJcbiAgZW5hYmxlVGVsZW1ldHJ5LFxyXG4gIHJlZ2lvbixcclxuICBzcGVlY2hSZWNvZ25pdGlvbkVuZHBvaW50SWQsXHJcbiAgc3BlZWNoU3ludGhlc2lzRGVwbG95bWVudElkLFxyXG4gIHNwZWVjaFN5bnRoZXNpc091dHB1dEZvcm1hdCxcclxuICBzdWJzY3JpcHRpb25LZXksXHJcbiAgdGV4dE5vcm1hbGl6YXRpb25cclxufSkge1xyXG4gIGlmICghd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgIWF1ZGlvQ29uZmlnKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICdib3RmcmFtZXdvcmstd2ViY2hhdDogWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgV2ViIEF1ZGlvIG9yIHRoZSBwYWdlIGlzIG5vdCBsb2FkZWQgdmlhIEhUVFBTIG9yIGxvY2FsaG9zdC4gQ29nbml0aXZlIFNlcnZpY2VzIFNwZWVjaCBTZXJ2aWNlcyBpcyBkaXNhYmxlZC4gSG93ZXZlciwgeW91IG1heSBwYXNzIGEgY3VzdG9tIEF1ZGlvQ29uZmlnIHRvIGVuYWJsZSBzcGVlY2ggaW4gdGhpcyBlbnZpcm9ubWVudC4nXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiAoe30pO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjcmVkZW50aWFscyAmJiAoYXV0aG9yaXphdGlvblRva2VuIHx8IHJlZ2lvbiB8fCBzdWJzY3JpcHRpb25LZXkpKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICdib3RmcmFtZXdvcmstd2ViY2hhdDogXCJhdXRob3JpemF0aW9uVG9rZW5cIiwgXCJyZWdpb25cIiwgYW5kIFwic3Vic2NyaXB0aW9uS2V5XCIgYXJlIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBvbiBvciBhZnRlciAyMDIwLTEyLTE3LiBQbGVhc2UgdXNlIFwiY3JlZGVudGlhbHNcIiBpbnN0ZWFkLidcclxuICAgICk7XHJcblxyXG4gICAgY3JlZGVudGlhbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChhdXRob3JpemF0aW9uVG9rZW4pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYXV0aG9yaXphdGlvblRva2VuOiBhd2FpdCByZXNvbHZlRnVuY3Rpb24oYXV0aG9yaXphdGlvblRva2VuKSxcclxuICAgICAgICAgIHJlZ2lvblxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVnaW9uLFxyXG4gICAgICAgIHN1YnNjcmlwdGlvbktleTogYXdhaXQgcmVzb2x2ZUZ1bmN0aW9uKHN1YnNjcmlwdGlvbktleSlcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAoYXVkaW9Db25maWcgJiYgYXVkaW9JbnB1dERldmljZUlkKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICdib3RmcmFtZXdvcmstd2ViY2hhdDogXCJhdWRpb0NvbmZpZ1wiIGFuZCBcImF1ZGlvSW5wdXREZXZpY2VJZFwiIGNhbm5vdCBiZSBzZXQgYXQgdGhlIHNhbWUgdGltZTsgaWdub3JpbmcgXCJhdWRpb0lucHV0RGV2aWNlSWRcIi4nXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gSEFDSzogV2Ugc2hvdWxkIHByZXZlbnQgQXVkaW9Db250ZXh0IG9iamVjdCBmcm9tIGJlaW5nIHJlY3JlYXRlZCBiZWNhdXNlIHRoZXkgbWF5IGJlIGJsZXNzZWQgYW5kIFVYLXdpc2UgZXhwZW5zaXZlIHRvIHJlY3JlYXRlLlxyXG4gIC8vICAgICAgIEluIENvZ25pdGl2ZSBTZXJ2aWNlcyBTREssIGlmIHRoZXkgZGV0ZWN0IHRoZSBcImVuZFwiIGZ1bmN0aW9uIGlzIGZhbHN5LCB0aGV5IHdpbGwgbm90IGNhbGwgXCJlbmRcIiBidXQgXCJzdXNwZW5kXCIgaW5zdGVhZC5cclxuICAvLyAgICAgICBBbmQgb24gbmV4dCByZWNvZ25pdGlvbiwgdGhleSB3aWxsIHJlLXVzZSB0aGUgQXVkaW9Db250ZXh0IG9iamVjdC5cclxuICBpZiAoIWF1ZGlvQ29uZmlnKSB7XHJcbiAgICBhdWRpb0NvbmZpZyA9IGF1ZGlvSW5wdXREZXZpY2VJZFxyXG4gICAgICA/IEF1ZGlvQ29uZmlnLmZyb21NaWNyb3Bob25lSW5wdXQoYXVkaW9JbnB1dERldmljZUlkKVxyXG4gICAgICA6IEF1ZGlvQ29uZmlnLmZyb21EZWZhdWx0TWljcm9waG9uZUlucHV0KCk7XHJcblxyXG4gICAgY29uc3Qgc291cmNlID0gYXVkaW9Db25maWcucHJpdlNvdXJjZTtcclxuXHJcbiAgICAvLyBUaGlzIHBpZWNlIG9mIGNvZGUgaXMgYWRvcHRlZCBmcm9tIG1pY3Jvc29mdC1jb2duaXRpdmVzZXJ2aWNlcy1zcGVlY2gtc2RrL2NvbW1vbi5icm93c2VyL01pY0F1ZGlvU291cmNlLnRzLlxyXG4gICAgLy8gSW5zdGVhZCBvZiBjbG9zaW5nIHRoZSBBdWRpb0NvbnRleHQsIGl0IHdpbGwganVzdCBzdXNwZW5kIGl0LiBBbmQgdGhlIG5leHQgdGltZSBpdCBpcyBuZWVkZWQsIGl0IHdpbGwgYmUgcmVzdW1lZCAoYnkgdGhlIG9yaWdpbmFsIGNvZGUpLlxyXG4gICAgc291cmNlLmRlc3Ryb3lBdWRpb0NvbnRleHQgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghc291cmNlLnByaXZDb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzb3VyY2UucHJpdlJlY29yZGVyLnJlbGVhc2VNZWRpYVJlc291cmNlcyhzb3VyY2UucHJpdkNvbnRleHQpO1xyXG4gICAgICBzb3VyY2UucHJpdkNvbnRleHQuc3RhdGUgPT09ICdydW5uaW5nJyAmJiBzb3VyY2UucHJpdkNvbnRleHQuc3VzcGVuZCgpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoeyByZWZlcmVuY2VHcmFtbWFySUQgfSA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCB7IFNwZWVjaEdyYW1tYXJMaXN0LCBTcGVlY2hSZWNvZ25pdGlvbiwgc3BlZWNoU3ludGhlc2lzLCBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UgfSA9IGNyZWF0ZVBvbnlmaWxsKHtcclxuICAgICAgYXVkaW9Db25maWcsXHJcbiAgICAgIGF1ZGlvQ29udGV4dCxcclxuICAgICAgY3JlZGVudGlhbHMsXHJcbiAgICAgIGVuYWJsZVRlbGVtZXRyeSxcclxuICAgICAgcmVmZXJlbmNlR3JhbW1hcnM6IHJlZmVyZW5jZUdyYW1tYXJJRCA/IFtgbHVpcy8ke3JlZmVyZW5jZUdyYW1tYXJJRH0tUFJPRFVDVElPTmBdIDogW10sXHJcbiAgICAgIHNwZWVjaFJlY29nbml0aW9uRW5kcG9pbnRJZCxcclxuICAgICAgc3BlZWNoU3ludGhlc2lzRGVwbG95bWVudElkLFxyXG4gICAgICBzcGVlY2hTeW50aGVzaXNPdXRwdXRGb3JtYXQsXHJcbiAgICAgIHRleHROb3JtYWxpemF0aW9uXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBTcGVlY2hHcmFtbWFyTGlzdCxcclxuICAgICAgU3BlZWNoUmVjb2duaXRpb24sXHJcbiAgICAgIHNwZWVjaFN5bnRoZXNpcyxcclxuICAgICAgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlXHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuIl19