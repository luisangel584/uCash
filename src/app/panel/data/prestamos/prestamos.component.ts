import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PrestamoModel } from 'src/app/models/prestamo-model.model';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {

  info: PrestamoModel;
  loading = false;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.dataService.getDataCollection('prestamos')
      .then((resp) => {
        this.info = resp;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

  onSubmit(f) {
    this.loading = true;
    this.dataService.setDataCollection('prestamos', this.info)
      .then(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }

}
