import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-situacion-laboral',
  templateUrl: './situacion-laboral.component.html',
  styleUrls: ['./situacion-laboral.component.scss']
})
export class SituacionLaboralComponent implements OnInit {

  info = {};
  loading = false;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.dataService.getDataCollection('situacion-laboral')
      .then((resp) => {
        this.info = resp;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

  onSubmit() {
    this.loading = true;
    this.dataService.setDataCollection('situacion-laboral', this.info)
      .then(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

}