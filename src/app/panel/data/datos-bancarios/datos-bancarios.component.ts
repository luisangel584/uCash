import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.scss']
})
export class DatosBancariosComponent implements OnInit {

  info = {};
  loading = false;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.dataService.getDataCollection('datos-bancarios')
      .then((resp) => {
        this.info = resp;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

  onSubmit() {
    this.loading = true;
    this.dataService.setDataCollection('datos-bancarios', this.info)
      .then(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

}