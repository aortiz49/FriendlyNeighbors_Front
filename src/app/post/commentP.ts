/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Post} from "./post";
import {Resident} from "../home/resident";

export class CommentP {

    /**
     * The id of this comment.
     */
    public id: number;


    /**
     * The author of this comment.
     */
    public author: Resident;

    /**
     * The post the comment belongs to.
     */
    public post: Post;

    /**
     * Represents the date this comment was posted.
     */
    public date: string;

    /**
     * The text body shown in this post.
     */
    public text: string;
    W

}
