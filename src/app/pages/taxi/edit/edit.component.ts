import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { TaxiService } from '../taxi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Taxi } from '../taxi';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  
  id!: number;
  taxi!: Taxi;
  form!: FormGroup;
      
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
        
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.taxiService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Taxi updated successfully!');
         this.router.navigateByUrl('taxi/index');
    })
  }
  
}