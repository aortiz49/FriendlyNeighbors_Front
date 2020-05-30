import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PostService} from "../post.service";
import {ToastrService} from "ngx-toastr";
import {Post} from "../post";
import {CommentP} from "../commentP";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {PostDetail} from "../post-detail";
import {Resident} from "../../home/resident";
import {ImageService} from "../../shared/file-picker/image.service";
import {FilePickerComponent} from "../../shared/file-picker/file-picker.component";
import {DatePipe, formatDate} from "@angular/common";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private datepipe: DatePipe, private postService: PostService, private toastrService: ToastrService, private imageService: ImageService, private fb: FormBuilder) {
  }


  @ViewChild(FilePickerComponent, {static: true}) picker: FilePickerComponent;
  @Input() post: PostDetail;
  @Input() residen_id: number;
  @Input() neigh_id: number;
  @Input() residents: Resident[];
  selected: Resident[];
  postID: number;
  images: File[];
  selectedImages: File[];
  form: FormGroup;
  album: string[];

  @Output() updatePost = new EventEmitter();


  addPost(reviewForm: NgForm): PostDetail {


    this.post.album = this.album;

    this.postService.createpost(this.neigh_id, this.post, this.residen_id)
      .subscribe(post => {
        reviewForm.resetForm();
        this.toastrService.success("Post was successfully created", 'Post added');

        this.postID = post.id;

        this.postService.addViewers(this.neigh_id, this.postID, this.selected).subscribe(() => {

          this.toastrService.success(this.selected.length + " viewers were successfully added", 'Viewers added');

          for (var i = 0; i < this.images.length; i++) {
            let item = this.images[i];
            let infoObject = {
              title: "title",
              description: "desc"
            }
            this.imageService.uploadImage(item, infoObject).subscribe(value => {

              this.postService.addPicture(this.neigh_id, this.postID, value['data'].link).subscribe();


              this.updatePost.emit();

            }, err => {
              this.toastrService.error(err, 'Error');
            });
          }

        }, err => {
          this.toastrService.error(err, 'Error');
        });


      }, err => {
        this.toastrService.error(err, 'Error');
      });

    return this.post;
  }


  ngOnInit() {
    this.post = new PostDetail();
    this.post.album = [];
    this.album = [];
    this.images = [];
    this.selectedImages = [];
    this.form = this.fb.group({
      demo: ''
    })
  }


  addImage() {
    this.images.push(this.picker.file);
    this.form.get('demo').patchValue(this.images);

  }


  selectAll() {
    this.form.get('demo').patchValue(this.images);
  }

}
