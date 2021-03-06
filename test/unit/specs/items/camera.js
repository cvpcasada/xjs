/* globals describe, it, expect, require, beforeEach, spyOn */

describe('CameraItem', function() {
  'use strict';

  var XJS = require('xjs');
  var appVersion = navigator.appVersion;
  var env = new window.Environment(XJS);
  var mockPresetConfig = '<placement name="Work Scene" defpos="0"><item type="2" item="@device:cm:{33D9A762-90C8-11D0-BD43-00A0C911CE86}\Microphone (5- Logitech USB Hea" itemaudio="" name="Microphone (5- Logitech USB Hea" cname="" pos_left="0.000000" pos_top="0.500000" pos_right="0.500000" pos_bottom="1.000000" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="0" volume="100" mute="0" sounddev="1" lockmove="0" keep_ar="1" fdeinterlace="0" mipmaps="0" autoresdet="1" visible="1" keeploaded="1" alpha="255" border="0" cc_pin="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="1" key_pin="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" key_smartcamenable="0" key_smartcamconfig="" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" syncid0="136616549" syncid1="1280476358" syncid2="3579510198" syncid3="2848617205" id="{CB4EB352-D86F-4478-8BFD-55FF53216697}" StreamDelay="0" AudioDelay="0" AudioGainEnable="1" AudioGain="5" AudioGainLatency="0" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="1" GameCapPlSmoothness="1.000000" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" custom=""/><item type="8" item="http://repo.dev" itemaudio="" name="http://repo.dev" cname="" pos_left="0.500000" pos_top="0.500000" pos_right="1.000000" pos_bottom="1.000000" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="1" volume="100" mute="0" sounddev="0" lockmove="0" keep_ar="1" fdeinterlace="0" mipmaps="0" autoresdet="1" visible="1" keeploaded="0" alpha="255" border="0" cc_pin="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="0" key_pin="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" key_smartcamenable="0" key_smartcamconfig="" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" syncid0="2991991585" syncid1="1266732367" syncid2="2115964573" syncid3="2487861362" id="{8CE59BE8-6D70-4A79-9FFE-0FBA22EC4A4B}" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="1" GameCapPlSmoothness="1.000000" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" custom=""/><item type="2" item="@DEVICE:PNP:\\?\USB#VID_046D&amp;PID_082C&amp;MI_02#6&amp;16FD2F8D&amp;0&amp;0002#{65E8773D-8F56-11D0-A3B9-00A0C9223196}\GLOBAL" itemaudio="@device:cm:{33D9A762-90C8-11D0-BD43-00A0C911CE86}\Microphone (VIA High Definition" name="HD Webcam C615" cname="" pos_left="0.786237" pos_top="0.000000" pos_right="1.000000" pos_bottom="0.285156" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="2" volume="100" mute="0" sounddev="0" lockmove="0" keep_ar="1" fdeinterlace="0" mipmaps="0" autoresdet="1" visible="1" keeploaded="0" alpha="255" border="0" cc_pin="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="1" key_pin="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" key_smartcamenable="0" key_smartcamconfig="" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" syncid0="3358421231" syncid1="1080907201" syncid2="134476455" syncid3="2508986164" id="{24E610F4-30AC-4AAC-B8B1-F8B57AF77759}" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="1" GameCapPlSmoothness="1.000000" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" custom=""/></placement>';
  var local = {};
  local.StreamPause = "0";
  var attachedId;
  var shouldFail = false, shouldFail2 = false;

  var mix = new window.Mixin([
    function() {
      navigator.__defineGetter__('appVersion', function() {
        return 'XSplit Broadcaster 2.7.1702.2231 ';
      });
    },
    function() {
      navigator.__defineGetter__('appVersion', function() {
        return 'XSplit Broadcaster 2.8.1603.0401 ';
      });
    }
  ]);
  var exec = mix.exec.bind(mix);

  var parseXml = function(xmlStr) {
      return ( new window.DOMParser() ).parseFromString(xmlStr, 'text/xml');
  };

  var xCallback = function(id, result) {
    setTimeout(function() {
      window.OnAsyncCallback(id, result);
    }, 10);
  };

  var getLocal = function(property) {
    var asyncId = (new Date()).getTime();

    if (property.substring(0, 5) === 'prop:') {
      property = property.replace(/^prop:/, '');
    }

    if (property === 'itemaudio' && shouldFail) {
      xCallback(asyncId, '');
    } else if (typeof local[attachedId] !== 'undefined' && local[attachedId].hasOwnProperty(
      property)) {
      xCallback(asyncId, local[attachedId][property]);
    } else {
      if (property === 'StreamPause') {
        xCallback(asyncId, '0');
      } else if (property === 'hwencoder') {
        if (shouldFail) {
          xCallback(asyncId, '0');
        } else {
          xCallback(asyncId, '1');
        }
      } else if (property === 'activestate') {
        if (shouldFail2) {
          xCallback(asyncId, 'not_present');
        } else {
          xCallback(asyncId, 'active');
        }
      } else {
        var placement = parseXml(mockPresetConfig)
          .getElementsByTagName('placement')[0];
        var selected = '[id="' + attachedId + '"]';
        var itemSelected = placement.querySelector(selected);
        xCallback(asyncId, itemSelected.getAttribute(property));
      }
    }

    return asyncId;
  };

  var setLocal = function(property, value) {
    var asyncId = (new Date()).getTime();

    if (property.substring(0, 5) === 'prop:') {
      property = property.replace(/^prop:/, '');
    }

    if (typeof local[attachedId] === 'undefined') {
      local[attachedId] = {};
    }

    if (!shouldFail) {
      local[attachedId][property] = value;
    }
    xCallback(asyncId, '0');
    return asyncId;
  };

  beforeEach(function(done) {
    env.set('extension');

    navigator.__defineGetter__('appVersion', function() {
      return 'XSplit Broadcaster 2.7.1702.2231 ';
    });

    // Reset the attached IDS
    var item1 = new XJS.Item({id : '{CAMERAID}' });
    var item2 = new XJS.Item({id : '{CAMERAID2}'});

    spyOn(window.external, 'AppGetPropertyAsync')
      .and.callFake(function(funcName) {
      var asyncId = (new Date()).getTime();
      switch (funcName) {
        case 'dshowenum:vsrc':
          xCallback(asyncId, encodeURIComponent('<list><dev disp="clsid:{39F50F4C-99E1-464A-B6F9-D605B4FB5918}" name="Elgato Game Capture HD"/><dev disp="@device:pnp:\\\\?\\usb#vid_046d&amp;pid_082c&amp;mi_02#6&amp;37c59c5d&amp;0&amp;0002#{65e8773d-8f56-11d0-a3b9-00a0c9223196}\\global" name="HD Webcam C615"/></list>'));
        break;

        case 'dshowenum:asrc':
          if (!shouldFail2) {
            xCallback(asyncId, encodeURIComponent('<list><dev disp="@device:sw:{33D9A762-90C8-11D0-BD43-00A0C911CE86}\{AAA22F7E-5AA0-49D9-8C8D-B52B1AA92EB7}" name="Decklink Audio Capture"/><dev disp="@device:cm:{33D9A762-90C8-11D0-BD43-00A0C911CE86}\Line 1 (Virtual Audio Cable)" name="Line 1 (Virtual Audio Cable)" WaveInId="1"/><dev disp="@device:cm:{33D9A762-90C8-11D0-BD43-00A0C911CE86}\Microphone (VIA High Definition" name="Microphone (VIA High Definition" WaveInId="0"/><dev disp="@device:sw:{33D9A762-90C8-11D0-BD43-00A0C911CE86}\{VHSplitProc}_XSplitBroadcaster_1_staticsource_AUDIO" name="XSplitBroadcaster"/></list>'));
          } else {
            xCallback(asyncId, encodeURIComponent('<list><dev disp="@device:sw:{33D9A762-90C8-11D0-BD43-00A0C911CE86}\{AAA22F7E-5AA0-49D9-8C8D-B52B1AA92EB7}" name="Decklink Audio Capture"/><dev disp="@device:cm:{33D9A762-90C8-11D0-BD43-00A0C911CE86}\Microphone (HD Pro Webcam C920)" name="Line 1 (Virtual Audio Cable)" WaveInId="1"/><dev disp="@device:sw:{33D9A762-90C8-11D0-BD43-00A0C911CE86}\{VHSplitProc}_XSplitBroadcaster_1_staticsource_AUDIO" name="XSplitBroadcaster"/></list>'));
          }

        break;

        case 'preset:0':
          xCallback(asyncId, '0');
        break;

        case 'presetcount':
          xCallback(asyncId, '12');
        break;

        default:
          if (funcName.indexOf('presetconfig:') !== -1) {
            xCallback(asyncId, encodeURIComponent(mockPresetConfig));
          }
      }

      return asyncId;
    });

    spyOn(window.external, 'SearchVideoItem')
    .and.callFake(function(id) {
      attachedId = id;
    });

    spyOn(window.external, 'SearchVideoItem2')
    .and.callFake(function(id) {
      attachedId = id;
    });

    spyOn(window.external, 'AttachVideoItem')
    .and.callFake(function(id) {
      attachedId = id;
    });

    spyOn(window.external, 'AttachVideoItem2')
    .and.callFake(function(id) {
      attachedId = id;
    });

    spyOn(window.external, 'GetLocalPropertyAsync')
    .and.callFake(getLocal);

    spyOn(window.external, 'GetLocalPropertyAsync2')
    .and.callFake(getLocal);

    spyOn(window.external, 'SetLocalPropertyAsync')
    .and.callFake(setLocal);

    spyOn(window.external, 'SetLocalPropertyAsync2')
    .and.callFake(setLocal);

    var _this = this;
    XJS.Scene.getActiveScene().then(function(scene) {
      scene.getItems().then(function(items) {
        for (var i in items) {
          if (items[i] instanceof XJS.CameraItem) {
            _this.cameraItem = items[i];
            break;
          }
        }
        done();
      });
    });
  });

  afterAll(function() {
    navigator.__defineGetter__('appVersion', function() {
      return appVersion;
    });
  })

  describe('cameraItem-specific methods checking, ', function() {
    afterEach(function() {
      navigator.__defineGetter__('appVersion', function() {
        return appVersion;
      });
    });

    it('should be able to get its own device ID', function(done) {
      var self = this;
      exec(function(next) {
        var promise = self.cameraItem.getDeviceId();
        expect(promise).toBeInstanceOf(Promise);
        promise.then(function(id) {
          expect(id).toBeTypeOf('string');
          next();
        });
      }).then(done);
    });

    it('should be able to get and set if stream is paused', function(done) {
      var self = this;
      exec(function(next) {
        var promise = self.cameraItem.isStreamPaused();
        var pauseValue;
        expect(promise).toBeInstanceOf(Promise);
        promise.then(function(isPaused) {
          expect(isPaused).toBeTypeOf('boolean');
          pauseValue = !isPaused;
          shouldFail = true;
          return self.cameraItem.setStreamPaused(pauseValue);
        }).then(function() {
          done.fail('Set failure was not detected');
        }).catch(function(err) {
          expect(err).toEqual(jasmine.any(Error));
          shouldFail = false;
          return self.cameraItem.setStreamPaused(pauseValue);
        }).then(function() {
          return self.cameraItem.isStreamPaused();
        }).then(function(val) {
          expect(val).toEqual(pauseValue);
          next();
        });
      }).then(done);
    });

    it('should be able to get and set audio input', function(done) {
      var self = this;
      exec(function(next) {
        var promise = self.cameraItem.getAudioInput();
        var micDevice;
        promise.then(function(audioInput) {
          expect(audioInput).toBeInstanceOf(XJS.MicrophoneDevice);
          return System.getMicrophones();
        }).then(function(micDevices) {
          micDevice = micDevices[0];
          return self.cameraItem.setAudioInput(micDevice);
        }).then(function() {
          return self.cameraItem.getAudioInput();
        }).then(function(newDevice) {
          expect(newDevice).toEqual(micDevice);
          shouldFail = true;
          return self.cameraItem.getAudioInput();
        }).then(function() {
          done.fail('No audio input not detected');
        }).catch(function(err) {
          expect(err).toEqual(jasmine.any(Error));
          shouldFail = false;
          shouldFail2 = true;
          return self.cameraItem.getAudioInput();
        }).then(function(value) {
          done.fail('Audio input not in dshowenum not detected');
        }).catch(function(err) {
          expect(err).toEqual(jasmine.any(Error));
          shouldFail2 = false;
          next();
        });
      }).then(done);
    });

    it('should be able to check if hardware encoder or not', function(done) {
      var self = this;
      exec(function(next) {
        shouldFail = false;
        shouldFail2 = false;
        var promise = self.cameraItem.isHardwareEncoder();

        promise.then(function(isHardwareEncoder) {
          expect(isHardwareEncoder).toBeTypeOf('boolean');
          expect(isHardwareEncoder).toBe(true);
          shouldFail = true;
          return self.cameraItem.isHardwareEncoder();
        }).then(function(isHardwareEncoder2) {
          expect(isHardwareEncoder2).toBe(false);
          shouldfail2 = true;
          return self.cameraItem.isHardwareEncoder();
        }).then(function() {
          done.fail('Camera Device not present');
        }).catch(function(err) {
          expect(err).toEqual(jasmine.any(Error));
          shouldFail = false;
          shouldFail2 = false;
          next();
        });
      }).then(done);
    });

    it('should be able to check if active or not', function(done) {
      var self = this;
      exec(function(next) {
        var promise = self.cameraItem.isActive();

        promise.then(function(isActive) {
          expect(isActive).toBeTypeOf('boolean');
          next();
        });
      }).then(done);
    });
  });

  describe('interface method checking', function() {

    it('should implement the layout interface', function() {
      expect(this.cameraItem).hasMethods([
        'isKeepAspectRatio',
        'setKeepAspectRatio',
        'isPositionLocked',
        'setPositionLocked',
        'isEnhancedResizeEnabled',
        'setEnhancedResizeEnabled',
        'getPosition',
        'setPosition'
        ].join(','));
    });

    it('should implement the color interface', function() {
      expect(this.cameraItem).hasMethods([
        'getTransparency',
        'setTransparency',
        'getBrightness',
        'setBrightness',
        'getContrast',
        'setContrast',
        'getHue',
        'setHue',
        'getSaturation',
        'setSaturation',
        'getBorderColor',
        'setBorderColor'
        ].join(','));
    });

    it('should implement the chroma interface', function() {
      expect(this.cameraItem).hasMethods([
        'isChromaEnabled',
        'setChromaEnabled',
        'getKeyingType',
        'setKeyingType',
        'getChromaAntiAliasLevel',
        'setChromaAntiAliasLevel',
        'getChromaLegacyBrightness',
        'setChromaLegacyBrightness',
        'getChromaLegacySaturation',
        'setChromaLegacySaturation',
        'getChromaLegacyHue',
        'setChromaLegacyHue',
        'getChromaLegacyThreshold',
        'setChromaLegacyThreshold',
        'getChromaLegacyAlphaSmoothing',
        'setChromaLegacyAlphaSmoothing',
        'getChromaRGBKeyPrimaryColor',
        'setChromaRGBKeyPrimaryColor',
        'getChromaRGBKeyThreshold',
        'setChromaRGBKeyThreshold',
        'getChromaRGBKeyExposure',
        'setChromaRGBKeyExposure',
        'getChromaColorKeyThreshold',
        'setChromaColorKeyThreshold',
        'getChromaColorKeyExposure',
        'setChromaColorKeyExposure',
        'getChromaColorKeyColor',
        'setChromaColorKeyColor'
        ].join(','));
    });

    it('should implement the transition interface', function() {
      expect(this.cameraItem).hasMethods([
        'isVisible',
        'setVisible',
        'getTransition',
        'setTransition',
        'getTransitionTime',
        'setTransitionTime'
        ].join(','));
    });

    it('should have color and chroma key options pinning', function() {
      expect(this.cameraItem).hasMethods([
        'setColorOptionsPinned',
        'getColorOptionsPinned',
        'setKeyingOptionsPinned',
        'getKeyingOptionsPinned'
        ].join(','));
    });

    it('should implement the transition interface', function() {
      expect(this.cameraItem).hasMethods([
        'isVisible',
        'setVisible',
        'getTransition',
        'setTransition',
        'getTransitionTime',
        'setTransitionTime'
        ].join(','));
    });

    it('should implement audio interface', function() {
      expect(this.cameraItem).hasMethods([
        'isMute',
        'setMute',
        'getVolume',
        'setVolume',
        'isStreamOnlyAudio',
        'setStreamOnlyAudio',
        'isAudioAvailable'
      ].join(','));
    });
  });
});
