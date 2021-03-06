/**
 *  The Rectangle class is a utility class used in many different parts of the
 *  framework. Please note that there are cases where the framework uses
 *  absolute (pixel) measurements, and cases where relative measurements are
 *  required (0 being the left/top edges and 1 being the right/bottom edges.)
 *
 *  Please check the documentation of each function to determine the necessary
 *  parameters for the Rectangle to be created.
 */
export class Rectangle {
  private _top: number;
  private _left: number;
  private _width: number;
  private _height: number;
  private _right: number;
  private _bottom: number;

  /** Gets the top value */
  getTop(): number {
    return this._top;
  }

  /** Sets the top value */
  setTop(top: number): Rectangle {
    this._top = top;

    if (this._bottom !== undefined &&
      this._height !== (this._top - this._bottom)) {
      this.setHeight(Math.abs(this._top - this._bottom));
    } else if (this._height !== undefined &&
      this._bottom !== (this._top + this._height)) {
      this.setBottom(this._top + this._height);
    }

    return this;
  }

  /** Gets the left value */
  getLeft(): number {
    return this._left;
  }

  /** Sets the left value */
  setLeft(left: number): Rectangle {
    this._left = left;

    if (this._right !== undefined &&
      this._width !== Math.abs(this._right - this._left)) {
      this.setWidth(Math.abs(this._right - this._left));
    } else if (this._width !== undefined &&
      this._height !== (this._left + this._width)) {
      this.setRight(this._left + this._width);
    }

    return this;
  }

  /** Gets the right value */
  getRight(): number {
    return this._right;
  }

  /** Sets the right value */
  setRight(right: number): Rectangle {
    this._right = right;

    if (this._left !== undefined &&
      this._width !== Math.abs(this._right - this._left)) {
      this.setWidth(Math.abs(this._right - this._left));
    } else if (this._width !== undefined &&
      this._left !== (this._right - this._width)) {
      this.setLeft(this._right - this._width);
    }

    return this;
  }

  /** Gets the bottom value */
  getBottom(): number {
    return this._bottom;
  }

  /** Sets the bottom value */
  setBottom(bottom: number): Rectangle {
    this._bottom = bottom;

    if (this._top !== undefined &&
      this._height !== Math.abs(this._top - this._bottom)) {
      this.setHeight(Math.abs(this._top - this._bottom));
    } else if (this._height !== undefined &&
      this._top !== (this._bottom - this._height)) {
      this.setTop(this._bottom - this._height);
    }

    return this;
  }

  /** Gets the width value */
  getWidth(): number {
    return this._width;
  }

  /** Sets the width value */
  setWidth(width: number): Rectangle {
    this._width = width;

    if (this._right !== undefined &&
      this._left !== (this._right - this._width)) {
      this.setLeft(this._right - this._width);
    } else if (this._left !== undefined &&
      this._right !== (this._left + this._width)) {
      this.setRight(this._left + this._width);
    }

    return this;
  }

  /** Gets the height value */
  getHeight(): number {
    return this._height;
  }

  /** Sets the height value */
  setHeight(height: number): Rectangle {
    this._height = height;

    if (this._top !== undefined &&
      this._bottom !== (this._top + this._height)) {
      this.setBottom(this._top + this._height);
    } else if (this._bottom !== undefined &&
      this._top !== (this._bottom - this._height)) {
      this.setTop(this._bottom - this._height);
    }

    return this;
  }

  /**
   *  param: (width: number, height: number)
   *  ```
   *  return: Rectangle
   *  ```
   *  Creates a rectangle from width and height dimensions. Absolute (pixels)
   *  and relative (0-1) dimensions are accepted. Refer to the documentation
   *  of each individual function to see which one is necessary.
   */
  static fromDimensions(width: number, height: number): Rectangle {
    if (width < 0 || height < 0) {
      throw new Error('Rectangle dimensions cannot be negative.');
    }

    let rect = new Rectangle();
    rect._width = width;
    rect._height = height;
    return rect;
  }

  /**
   *  param: (left: number, top: number, right: number, bottom: number)
   *  ```
   *  return: Rectangle
   *  ```
   *  Creates a rectangle from coordinates. Absolute (pixels)
   *  and relative (0-1) dimensions are accepted. Refer to the documentation
   *  of each individual function to see which one is necessary.
   */
  static fromCoordinates(left: number, top: number,
    right: number, bottom: number): Rectangle {
    if (top > bottom) {
      throw new Error('Top coordinate must be smaller than bottom.');
    } else if (left > right) {
      throw new Error('Right coordinate must be smaller than left.');
    }

    let rect = new Rectangle();
    rect._top = top;
    rect._left = left;
    rect.setRight(right); // calculates width
    rect.setBottom(bottom); // calculates height
    return rect;
  }

  /**
   *  return: string
   *
   *  Returns a comma-separated string containing the width and height values.
   */
  toDimensionString(): string {
    return this._width + ',' + this._height;
  }

  /**
   *  return: string
   *
   *  Returns a comma-separated string containing the coordinates in the order:
   *  left, top, right, bottom.
   */
  toCoordinateString(): string {
    if (this._left === undefined) {
      throw new Error('This Rectangle instance does not have coordinates.');
    } else {
      return this._left + ',' + this._top + ',' + this._right + ',' + this._bottom;
    }
  }

  /**
   *  return: string
   *  ```
   *  param: (format ?: string)
   *  ```
   *  Returns a string representation of the Rectangle object. If the format
   *  optional parameter is omitted, then this is simply the string from
   *  `toDimensionString()`. Sample usage:
   *
   *  ```javascript
   *  console.log(rect.toString('Origin is at (:left, :top)'));```
   *
   *  You can format the output string by specifying the following markers in
   *  the parameter:
   *  - :left
   *  - :top
   *  - :right
   *  - :bottom
   *  - :width
   *  - :height
   */
  toString(value ?: string): string {
    if (value === undefined) {
      return this.toDimensionString(); // all rectangles have dimensions
    } else {
      let format: string = value;

      format = format.replace(':left', String(this._left));
      format = format.replace(':top', String(this._top));
      format = format.replace(':right', String(this._right));
      format = format.replace(':bottom', String(this._bottom));
      format = format.replace(':width', String(this._width));
      format = format.replace(':height', String(this._height));

      return format;
    }
  }
}
