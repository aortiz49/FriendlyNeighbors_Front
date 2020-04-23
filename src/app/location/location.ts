/**
 * Class that represents a location in the location.
 */
export class Location {
  //===================================================
  // Attributes
  //===================================================
  /**
   * The id of the location.
   */
  private _id: number;

  /**
   * The name of the location.
   */
  private _name: string;

  /**
   * The address of the location.
   */
  private _address: string;

  /**
   * The open time of the location.
   */
  private _openTime: string;

  /**
   * The close time of the location.
   */
  private _closeTime: string;

  /**
   * The latitude of the location.
   */
  private _latitude: number;

  /**
   * The longitude of the location.
   */
  private _longitude: number;

  //===================================================
  // Constructor
  //===================================================

  /**
   * Constructs a new location.
   * @param _id the id of the new location
   * @param _name the name of the new location
   * @param _address the locality of the new location
   * @param _openTime the open time of the location
   * @param _closeTime the close time of the location
   * @param _latitude the latitude of the location
   * @param _longitude the longitude of the location
   */
  constructor(
    id: number,
    name: string,
    address: string,
    openTime: string,
    closeTime: string,
    latitude: number,
    longtidue: number
  ) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._openTime = openTime;
    this._closeTime = closeTime;
    this._latitude = latitude;
    this._longitude = longtidue;
  }
  //===================================================
  // Getter & Setters
  //===================================================

  /**
   * Returns the id of the location.
   */
  get id(): number {
    return this._id;
  }

  /**
   * Returns the name of the location.
   */
  get name(): string {
    return this._name;
  }

  /**
   * Returns the address of the location.
   */
  get address(): string{
    return this._address;
  }

  /**
   * Returns the locality of the location.
   */
  get locality(): string {
    return this._address;
  }

  /**
   * Returns the open time of the locality.
   */
  get openTime(): string {
    return this._openTime;
  }
  /**
   * Returns the close time of the locality.
   */
  get closeTime(): string {
    return this._closeTime;
  }

  /**
   * Returns the latitude of the location.
   */
  get latitude(): number {
    return this._latitude;
  }

  /**
   * Returns the longitude of the location.
   */
  get longitude(): number {
    return this._longitude;
  }
}
