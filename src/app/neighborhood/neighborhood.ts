/*
MIT License

Copyright (c) 2020 Universidad de los Andes - ISIS2603

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
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
  