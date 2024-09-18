import { Component } from '@angular/core';
import { Country } from '../../model/country.model';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { Landmark } from '../../model/landmark.model';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  countries: Array<Country>;
  selectedLandmark: Landmark;

  constructor(private data: DataService, private http: HttpClient,
              private dialogRef: MatDialogRef<EditComponent>) {
    this.countries = data.countries;
    this.selectedLandmark = data.selectedLandmark;
  }

  close() {
    this.dialogRef.close();
  }

  save(name: string, detail: string, url: string, country: number, idx: number) {
    const jsonObj = { name, detail, url, country };
    this.http.put(`${this.data.apiEndpoint}/landmark/${idx}`, jsonObj, { observe: 'response' })
      .subscribe({
        next: (response) => {
          console.log('Response Status:', response.status);
          console.log('Response Body:', response.body);
          this.dialogRef.close();
        },
        error: (error) => {
          console.error('Error updating landmark:', error);
          // Optionally show an error message to the user
        }
      });
  }
}
