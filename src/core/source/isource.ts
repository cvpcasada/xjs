/// <reference path="../../../defs/es6-promise.d.ts" />

import {Source} from './source';
import {Item as iItem} from '../../internal/item';
import {
  minVersion,
  versionCompare,
  getVersion
} from '../../internal/util/version';
import {XML} from '../../internal/util/xml';
import {JSON as JXON} from '../../internal/util/json';
import {Environment} from '../environment';
import {Scene} from '../scene';
import {ItemTypes} from '../items/item'

/**
 * Used by Source and Item to implement methods that are used on both classes
 * More info to be added soon.
 */


export interface IiSource {
  /**
   * param: (value: string)
   * ```
   * return: Promise<Source>
   * ```
   *
   * Sets the name of the item.
   *
   * *Chainable.*
   *
   * #### Usage
   *
   * ```javascript
   * item.setName('newNameHere').then(function(item) {
   *   // Promise resolves with same Item instance when name has been set
   *   return item.getName();
   * }).then(function(name) {
   *   // 'name' should be the updated value by now.
   * });
   * ```
   */
  setName(value: string): Promise<IiSource>

  /**
   * return: Promise<string>
   *
   * Gets the name of the item.
   *
   * #### Usage
   *
   * ```javascript
   * item.getName().then(function(name) {
   *   // Do something with the name
   * });
   * ```
   */
  getName(): Promise<string>

  /**
   * param: (value: string)
   * ```
   * return: Promise<IiSource>
   * ```
   *
   * Sets the custom name of the item.
   *
   * The main difference between `setName` and `setCustomName` is that the CustomName
   * can be edited by users using XBC through the bottom panel. `setName` on
   * the other hand would update the item's internal name property.
   *
   * *Chainable.*
   *
   * #### Usage
   *
   * ```javascript
   * item.setCustomName('newNameHere').then(function(item) {
   *   // Promise resolves with same Item instance when custom name has been set
   *   return item.getCustomName();
   * }).then(function(name) {
   *   // 'name' should be the updated value by now.
   * });
   * ```
   */
  setCustomName(value: string): Promise<IiSource>

  /**
   * return: Promise<string>
   *
   * Gets the custom name of the item.
   *
   * #### Usage
   *
   * ```javascript
   * item.getCustomName().then(function(name) {
   *   // Do something with the name
   * });
   * ```
   */
  getCustomName(): Promise<string>

  /**
   * return: Promise<string|XML>
   *
   * Gets a special string that refers to the item's main definition.
   *
   * This method can resolve with an XML object, which is an object generated by
   * the framework. Call `toString()` to transform into an XML String. (See the
   * documentation for `setValue` for more details.)
   *
   * #### Usage
   *
   * ```javascript
   * item.getValue().then(function(value) {
   *   // Do something with the value
   * });
   * ```
   */
  getValue(): Promise<string | XML>

  /**
   * param: (value: string)
   * ```
   * return: Promise<IiSource>
   * ```
   *
   * Set the item's main definition; this special string defines the item's
   * "identity". Each type of item requires a different format for this value.
   *
   * *Chainable.*
   *
   * **WARNING:**
   * Please do note that using this method COULD break the current item, possibly modifying
   * its type IF you set an invalid string for the current item.
   *
   * #### Possible values by item type
   * - FILE - path/URL
   * - LIVE - Device ID
   * - BITMAP - path
   * - SCREEN - XML string
   * - FLASHFILE - path
   * - GAMEIiSource - XML string
   * - HTML - path/URL or html:<plugin>
   *
   * #### Usage
   *
   * ```javascript
   * item.setValue('@DEVICE:PNP:\\?\USB#VID_046D&amp;PID_082C&amp;MI_02#6&amp;16FD2F8D&amp;0&amp;0002#{65E8773D-8F56-11D0-A3B9-00A0C9223196}\GLOBAL')
   *   .then(function(item) {
   *   // Promise resolves with same Item instance
   * });
   * ```
   */
  setValue(value: string | XML): Promise<IiSource>

  /**
   * return: Promise<boolean>
   *
   * Check if item is kept loaded in memory
   *
   * #### Usage
   *
   * ```javascript
   * item.getKeepLoaded().then(function(isLoaded) {
   *   // The rest of your code here
   * });
   * ```
   */
  getKeepLoaded(): Promise<boolean>

  /**
   * param: (value: boolean)
   * ```
   * return: Promise<IiSource>
   * ```
   *
   * Set Keep loaded option to ON or OFF
   *
   * Items with Keep loaded set to ON would emit `scene-load` event each time
   * the active scene switches to the item's current scene.
   *
   * *Chainable.*
   *
   * #### Usage
   *
   * ```javascript
   * item.setKeepLoaded(true).then(function(item) {
   *   // Promise resolves with same Item instance
   * });
   * ```
   */
  setKeepLoaded(value: boolean): Promise<IiSource>

  /**
   * return: Promise<string>
   *
   * Get the Source ID of the item.
   * *Available only on XSplit Broadcaster verions higher than 2.8.1603.0401*
   *
   * #### Usage
   *
   * ```javascript
   * item.getSourceId().then(function(id) {
   *   // The rest of your code here
   * });
   * ```
   */
  getSourceId(): Promise<string>

}

export class iSource implements IiSource {
  protected _id: string;
  protected _value: any;
  protected _name: string;
  protected _cname: string;
  protected _keepLoaded: boolean;
  protected _globalsrc: boolean;
  protected _isItemCall: boolean;

  constructor(props?: {}) {
    props = props ? props : {};

    this._name = props['name'];
    this._cname = props['cname'];
    this._id = props['id'];
    this._value = props['value'];
    this._keepLoaded = props['keeploaded'];
    this._globalsrc = props['globalsrc'];
  }
  setName(value: string): Promise<Source> {
    if(this._isItemCall){
      console.warn('Should only be called on Sources. Improve this message.')
    }
    return new Promise(resolve => {
      this._name = value;

      if (
        versionCompare(getVersion())
          .is
          .lessThan(minVersion)
      ) {
        iItem.set('prop:name', this._name, this._id).then(() => {
          resolve(this);
        });
      } else {
        iItem.get('itemlist', this._id).then(itemlist => {
          const promiseArray: Promise<boolean>[] = [];
          const itemsArray = itemlist.split(',');

          itemsArray.forEach(itemId => {
            promiseArray.push(new Promise(itemResolve => {
              iItem.set('prop:name', this._name, itemId).then(() => {
                itemResolve(true);
              });
            }));
          });

          Promise.all(promiseArray).then(() => {
            resolve(this);
          });
        });
      }
    });
  }

  getName(): Promise<string> {
    if(this._isItemCall){
      console.warn('Should only be called on Sources. Improve this message.')
    }
    return new Promise(resolve => {
      iItem.get('prop:name', this._id).then(val => {
        this._name = val;
        resolve(val);
      });
    });
  }

  setCustomName(value: string): Promise<Source> {
    if(this._isItemCall){
      console.warn('Should only be called on Sources. Improve this message.')
    }
    return new Promise(resolve => {
      this._cname = value;
      iItem.set('prop:cname', this._cname, this._id).then(() => {
        resolve(this);
      });
    });
  }

  getCustomName(): Promise<string> {
    if(this._isItemCall){
      console.warn('Should only be called on Sources. Improve this message.')
    }
    return new Promise(resolve => {
      iItem.get('prop:cname', this._id).then(val => {
        this._cname = val;
        resolve(val);
      });
    });
  }

  getValue(): Promise<string | XML> {
    if(this._isItemCall){
      console.warn('Should only be called on Sources. Improve this message.')
    }
    return new Promise(resolve => {
      iItem.get('prop:item', this._id).then(val => {
        val = (val === 'null') ? '' : val;
        if (val === '') { // don't return XML for null values
          this._value = '';
          resolve(val);
        } else {
          try {
            this._value = XML.parseJSON(JXON.parse(val));
            resolve(this._value);
          } catch (e) {
            // value is not valid XML (it is a string instead)
            this._value = val;
            resolve(val);
          }
        }
      });
    });
  }

  setValue(value: string | XML): Promise<Source> {
    if(this._isItemCall){
      console.warn('Should only be called on Sources. Improve this message.')
    }
    return new Promise(resolve => {
      var val: string = (typeof value === 'string') ?
        <string>value : (<XML>value).toString();
      if (typeof value !== 'string') { // XML
        this._value = JXON.parse(val);
      } else {
        this._value = val;
      }
      iItem.set('prop:item', val, this._id).then(() => {
        resolve(this);
      });
    });
  }

  getKeepLoaded(): Promise<boolean> {
    if(this._isItemCall){
      console.warn('Should only be called on Sources. Improve this message.')
    }
    return new Promise(resolve => {
      iItem.get('prop:keeploaded', this._id).then(val => {
        this._keepLoaded = (val === '1');
        resolve(this._keepLoaded);
      });
    });
  }

  setKeepLoaded(value: boolean): Promise<Source> {
    if(this._isItemCall){
      console.warn('Should only be called on Sources. Improve this message.')
    }
    return new Promise(resolve => {
      this._keepLoaded = value;
      this._globalsrc = value;
      iItem.set('prop:globalsrc', (this._globalsrc ? '1' : '0'), this._id)
      iItem.set('prop:keeploaded', (this._keepLoaded ? '1' : '0'), this._id)
        .then(() => {
          resolve(this);
        });
    });
  }

  getSourceId(): Promise<string> {
    if(this._isItemCall){
      console.warn('Should only be called on Sources. Improve this message.')
    }
    return new Promise((resolve, reject) => {
      if (versionCompare(getVersion()).is.lessThan(minVersion)) {
        reject(new Error('Only available on versions above ' + minVersion));
      } else {
        iItem.get('prop:srcid', this._id).then(srcid => {
          resolve(srcid);
        });
      }
    });
  }
}