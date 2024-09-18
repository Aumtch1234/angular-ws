import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ws';
  constructor(private http:HttpClient){
    // this.getLandmark();

    // console.log('Start')
    // let url = 'http://localhost/web_app/webapi/landmark';
    // let obs = this.http.get(url).subscribe((data:any) => {
    //   console.log(data[0]);
    //   console.log('Complete')
    // });
    // console.log('Continue');
    // setTimeout(() => {
    //   obs.unsubscribe();
    //   console.log("Unsubscribed")
    // }, 2500);
  }

  async getLandmark(){
    console.log('Start')
    let url = 'http://localhost/web_app/webapi/landmark';
    let data:any = await lastValueFrom(this.http.get(url));
    console.log('Complete');
    console.log(data[0]);
    
    console.log('Continue');
  }
}
