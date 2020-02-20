import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-libreta-direcciones',
  templateUrl: './libreta-direcciones.component.html',
  styleUrls: ['./libreta-direcciones.component.scss']
})
export class LibretaDireccionesComponent implements OnInit {

  info = {};
  loading = false;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.dataService.getDataCollection('libreta-direcciones')
      .then((resp) => {
        this.info = resp;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

  onSubmit() {
    this.loading = true;
    this.dataService.setDataCollection('libreta-direcciones', this.info)
      .then(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

}