import { Component } from '@angular/core';
  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaxiService } from '../taxi.service';
import { Taxi } from '../taxi';
  
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  
  taxis: Taxi[] = [];
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public taxiService: TaxiService) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.taxiService.getAll().subscribe((data: Taxi[])=>{
      this.taxis = data;
      console.log(this.taxis);
    })  
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteTaxi(id:number){
    this.taxiService.delete(id).subscribe(res => {
         this.taxis = this.taxis.filter(item => item.id !== id);
         console.log('Taxi deleted successfully!');
    })
  }
  
}