import { Resident } from '../resident/resident';

/**
 * Class that represents a Resident Login.
 */
export class Login {
  //===================================================
  // Attributes
  //===================================================
  /**
   * The id of the login.
   */
  public id: number;

  /**
   * The username of the login.
   */
  public userName: string;

  /**
   * The password of the login.
   */
  public password: string;

  /**
   * The government id of the login.
   */
  public governmentId: number;

  /**
   * Indicates if the account is active or inactive.
   */
  public isActive: boolean;

  public resident: Resident;

  //===================================================
  // Constructor
  //===================================================

  constructor(username:string, password: string, govId: number) {
   this.userName = username;
   this.password = password;
   this.governmentId = govId;
   this.isActive = false;
  }



}


