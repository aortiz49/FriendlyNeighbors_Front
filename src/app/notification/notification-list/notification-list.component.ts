import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  private notifications:Array<Notification>;

  constructor(private notificationService: NotificationService) { }

  getAllNotifications(){
    this.notificationService.getNotifications().subscribe(bs => {
        this.notifications = bs; 
      }
    )
  }

  ngOnInit() {
    this.getAllNotifications();
  }

}
