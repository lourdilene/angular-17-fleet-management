import { Component } from '@angular/core';
import {GoogleMap, MapPolyline} from '@angular/google-maps';
  
import { TaxiService } from '../taxi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Taxi } from '../taxi';
  
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [GoogleMap, MapPolyline],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
  center: google.maps.LatLngLiteral = { lat: -14.2350, lng: -51.9253 }; // Centro do Brasil
  zoom = 5;

  vertices: google.maps.LatLngLiteral[] = [
    { lat: -15.7942, lng: -47.8825 }, // Brasília
    { lat: -23.5505, lng: -46.6333 }, // São Paulo
    { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
    { lat: -3.71839, lng: -38.5434 }, // Fortaleza
    { lat: -16.6809, lng: -49.2532 }, // Goiânia
    { lat: -25.4296, lng: -49.2719 }, // Curitiba
    { lat: -30.0331, lng: -51.23 }    // Porto Alegre
  ];
  
  id!: number;
  taxi!: Taxi;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public taxiService: TaxiService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['taxiId'];
          
    this.taxiService.find(this.id).subscribe((data: Taxi)=>{
      this.taxi = data;
    });
  }
  
}