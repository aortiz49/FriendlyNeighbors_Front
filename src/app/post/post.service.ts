import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./post";
import {CommentP} from "./commentP";
import {environment} from "../../environments/environment";
import {PostDetail} from "./post-detail";
import {Resident} from "../home/resident";

const API_URL = environment.apiUrl;
const posts = "/posts";


const API_URL2 = "../../assets/";
const posts2 = "/posts.json";
const comments = "/comments";
const neighborhoods = "neighborhoods";
const residents = "/residents";
const viewers = "/viewers";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }


  /**
   * Returns an Observable object that contains the list of posts received from the API
   * @returns The list of posts in real time
   */
  getposts(neighborhood): Observable<Post[]> {
    return this.http.get<Post[]>(
      API_URL + neighborhoods + "/" + neighborhood + posts
    );
  }

  /**
   * Returns a detailed Observable object that contains the post received from the API
   * @returns A detailed post in real time
   */
  getpostDetail(neighborhood, postId): Observable<PostDetail> {
    return this.http.get<PostDetail>(
      API_URL + neighborhoods + "/" + neighborhood + posts + "/" + postId
    );
  }

  /**
   * Creates new post
   * @param neighborhood
   * @param post New post
   * @param residentId Author of post
   * @returns Post with the new id, false if there is an error
   */
  createpost(neighborhood, post, residentId): Observable<PostDetail> {

    console.log(post)
    return this.http.post<PostDetail>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      residents +
      "/" +
      residentId +
      posts,
      post
    );
  }

  /**
   * Deletes post
   * @param neighborhood
   * @param postId Id from post
   * @returns True if deleted, false otherwise
   */
  deletepost(neighborhood, postId): Observable<PostDetail> {
    return this.http.delete<PostDetail>(
      API_URL + neighborhoods + "/" + neighborhood + posts + "/" + postId
    );
  }

  /**
   * Updates post
   * @param neighborhood
   * @param post  Updated post
   * @returns Updated post
   */
  updatepost(neighborhood, post): Observable<PostDetail> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + posts + "/" + post.id);
    return this.http.put<PostDetail>(
      API_URL + neighborhoods + "/" + neighborhood + posts + "/" + post.id,
      post
    );
  }

  /**
   * G comment
   * @param neighborhood
   * @param postId
   * @param comment Comment to be created
   * @returns True if created, false otherwise
   */
  createcomment(neighborhood, postId, author, comment): Observable<CommentP> {

    console.log(API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments +
      "/" +
      author);

    return this.http.post<CommentP>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments +
      "/" +
      author,
      comment
    );
  }

  /**
   * Gets all comments
   * @returns  Wanted comment
   * @param neighborhood
   * @param postId
   */
  getcomments(neighborhood, postId): Observable<CommentP[]> {
    return this.http.get<CommentP[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments
    );
  }

  /**
   * Gets comment
   * @param neighborhood
   * @param postId
   * @param commentId Id from comment
   * @returns  Wanted comment
   */
  getcomment(neighborhood, postId, commentId): Observable<CommentP> {
    return this.http.get<CommentP>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments +
      "/" +
      commentId
    );
  }

  /**
   * Updates comment
   * @param neighborhood
   * @param postId
   * @param comment  Comment to be updated
   * @returns True if updated, false otherwise
   */
  updatecomment(neighborhood, postId, comment): Observable<CommentP> {
    return this.http.put<CommentP>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments +
      "/" +
      comment.id,
      comment
    );
  }

  /**
   * Deletes comment
   * @param neighborhood
   * @param postId  Id from post
   * @param commentId Comment to be deleted
   * @returns True if deleted, false otherwise
   */
  deletecomment(neighborhood, postId, commentId): Observable<CommentP> {
    return this.http.delete<CommentP>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments +
      "/" +
      commentId
    );
  }


  addViewers(neighborhood, postId, residents): Observable<Resident[]> {
    return this.http.put<Resident[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      viewers +
      "/",
      residents
    );
  }
}
