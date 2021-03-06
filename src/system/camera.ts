/// <reference path="../../defs/es6-promise.d.ts" />

import {JSON as JXON} from '../internal/util/json';
import {XML} from '../internal/util/xml';
import {Addable} from './iaddable';
import {App as iApp} from '../internal/app';

/**
 * The CameraDevice Class is the object returned by
 * {@link #system/System System Class'} getCameraDevices method. It provides
 * you with methods to fetch the Camera Device's id, name, and to add it as
 * a source in the current scene.
 *
 * ### Basic Usage
 *
 * ```javascript
 * var XJS = require('xjs');
 * var System = XJS.System;
 *
 * System.getCameraDevices().then(function(cameras) {
 *   for (var i in cameras) {
 *     // Do not include the imaginary xsplit camera if that ever exist
 *     if (cameras[i].getName().indexOf('xsplit') === -1) {
 *       xml = cameras[i].toXML();
 *       // do something with the XML here
 *     }
 *   }
 * });
 * ```
 */
export class CameraDevice implements Addable {
  private _id: string;
  private _name: string;

  constructor(props?: {}) {
    this._id   = props['id'];
    this._name = props['name'];
  }

  /**
   * return: string
   *
   * Get the ID of the device. The ID of the device is based on the `disp`
   * attribute of the devices XML
   *
   * #### Usage
   *
   * ```javascript
   * var cameraID = device.getId();
   * ```
   */
  getId(): string {
    return this._id;
  }

  /**
   * return: string
   *
   * Get the Name of the device.
   *
   * #### Usage
   *
   * ```javascript
   * var cameraName = device.getName();
   * ```
   */
  getName(): string {
    return this._name;
  }

  /**
   * return: XML
   *
   * Convert the current CameraDevice object to XML
   *
   * #### Usage
   *
   * ```javascript
   * var xml = device.toXML();
   * ```
   */
  toXML(): XML {
    var json = new JXON();
    json['disp'] = this._id;
    json['name'] = this._name;
    return XML.parseJSON(json);
  }

  /**
   * param: (deviceJSON: JXON)
   * ```
   * return: CameraDevice
   * ```
   *
   * Create a CameraDevice object based on a JXON object
   *
   * #### Usage
   *
   * ```javascript
   * var camera = CameraDevice.parse(JSONObj);
   * ```
   */
  static parse(deviceJSON: JXON): CameraDevice {
    var cam = new CameraDevice({
      id:   deviceJSON['disp'].replace(/&amp;/ig, '&'),
      name: deviceJSON['name']
    });

    return cam;
  }

  /**
   *  Adds this camera device to the current scene.
   */
  addToScene(): Promise<boolean> {
    return new Promise(resolve => {
      iApp.callFunc('addcamera', 'dev:' + this._id).then(() => {
        resolve(true);
      });
    });
  }
}