import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  
  ngOnInit(){
    this.mySnap = new FaceSnap(
      'Cloud Architect',
      'Mon projet professionnel sur 5 ans',
      "http://www.applixia.com/wp-content/uploads/2018/03/Cloud_Slide.png",
      new Date(),
      50
    );
    this.myOtherSnap = new FaceSnap(
      'Développeur Full-Stack Java/Angular',
      'Mon projet professionnel sur un an',
      'https://1.bp.blogspot.com/-kueM4yv4SDA/W38-n4Fi-eI/AAAAAAAAAb4/CC-dliJOjsY0gYhtndUKPpWlbbtcGeQ1QCLcBGAs/s1600/spring_angular.png',
      new Date(),
      50
    );
    this.myLastSnap = new FaceSnap(
      'Cybersecurité',
      'Mon projet professionnel sur un an',
       "https://cdn-icons-png.flaticon.com/512/2092/2092654.png",
      new Date(),
      50
      )
  }
}
