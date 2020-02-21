import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DatosGeneralesModel } from 'src/app/models/datos-generales-model.model';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.scss']
})
export class DatosGeneralesComponent implements OnInit {

  info: DatosGeneralesModel;
  loading = false;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.dataService.getDataCollection('datos-generales')
      .then((resp) => {
        this.info = resp;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

  onSubmit(f) {
    this.loading = true;
    this.dataService.setDataCollection('datos-generales', this.info)
      .then(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

}
