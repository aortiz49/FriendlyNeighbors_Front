import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastrNotificationService {
  constructor(private toastr: ToastrService) {}

  /**
   * displays a Toastr success message
   * @param message  the message to be sent
   * @param title  the title of the message
   */
  successMessage(message: string, title: string) {
    this.toastr.success(message, title);
  }

  showHTMLMessage(message, title) {
    this.toastr.success(message, title, {
      enableHtml: true,
    });
  }
}
