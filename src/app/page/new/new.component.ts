import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Country } from '../../model/country.model';
import { DataService } from '../../service/data.service';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
  countries:Array<Country>;
  response:any;

  constructor(private data:DataService, private http:HttpClient,
    private dialogRef:MatDialogRef<NewComponent>){
    this.countries = data.countries;
    console.log(this.countries);
  }

  addNew(name:string, detail:string, url:string, country:number){
    let jsonObj = {
      name:name,
      detail:detail,
      url:url,
      country:country
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.post(this.data.apiEndpoint + "/landmark", jsonString,
      {observe:'response'}).subscribe((response) => {
        console.log(JSON.stringify(response.status));
        console.log(JSON.stringify(response.body));
        this.dialogRef.close();
      });
  }

  close(){
    this.dialogRef.close();
  }
}
