import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = {
      title: 'Cloud Architect',
      description: 'Mon projet professionnel sur 5 ans',
      imageUrl:
        'http://www.applixia.com/wp-content/uploads/2018/03/Cloud_Slide.png',
      createdDate: new Date(),
      likes: 50,
      location: 'Bordeaux',
    };
    this.myOtherSnap = {
      title: 'Développeur Full-Stack Java/Angular',
      description: 'Mon projet professionnel sur un an',
      imageUrl:
        'https://1.bp.blogspot.com/-kueM4yv4SDA/W38-n4Fi-eI/AAAAAAAAAb4/CC-dliJOjsY0gYhtndUKPpWlbbtcGeQ1QCLcBGAs/s1600/spring_angular.png',
      createdDate: new Date(),
      likes: 50,
      location: '',
    };
    this.myLastSnap = {
      title: 'Cybersecurité',
      description: 'Mon projet professionnel sur un an',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/2092/2092654.png',
      createdDate: new Date(),
      likes: 50,
      location: 'chez moi',
    };
  }
}
