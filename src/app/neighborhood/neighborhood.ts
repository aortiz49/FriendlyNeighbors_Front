/**
 * Class that represents a neighborhood.
 */
export class Neighborhood {
  //===================================================
  // Attributes
  //===================================================
  /**
   * The id of the neighborhood.
   */
  private _id: number;

  /**
   * The name of the neighborhood.
   */
  private _name: string;

  /**
   * The locality of the neighborhood.
   */
  private _locality: string;

  /**
   * The max capacity of residents of the neighborhood.
   */
  private _numberOfResidents: number;

  //===================================================
  // Constructor
  //===================================================

  /**
   * Constructs a new neighborhood.
   * @param _id the id of the new neighborhood
   * @param _name the name of the new neighborhood
   * @param _locality the locality of the new neighborhood
   * @param _numberOfResidents the max capacity of residents of the new neighborhood
   */
  constructor(id:number, name: string, locality: string, numberOfResidents: number) {
    this._id = id;
    this._name = name;
    this._locality = locality;
    this._numberOfResidents = numberOfResidents;
  }
  //===================================================
  // Getter & Setters
  //===================================================

  /**
   * Returns the id of the neighborhood.
   */
  get id(): number {
    return this._id;
  }

  /**
   * Returns the name of the neighborhood.
   */
  get name(): string {
      return this._name;
  }

  /**
   * Returns the locality of the neighborhood.
   */
  get locality(): string {
      return this._locality;
  }

  /**
   * Returns the max number of residents in the neighborhood.
   */
  get numberOfResidents(): number {
      return this._numberOfResidents;
  }
}
