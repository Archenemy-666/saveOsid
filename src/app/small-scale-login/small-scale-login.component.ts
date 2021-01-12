import { Component, OnInit } from '@angular/core';
import { SmallScaleService } from '../small-scale.service';

@Component({
  selector: 'app-small-scale-login',
  templateUrl: './small-scale-login.component.html',
  styleUrls: ['./small-scale-login.component.css']
})
export class SmallScaleLoginComponent implements OnInit {
  smallScale:any;
  constructor(public smallScaleService:SmallScaleService) {

  }

  ngOnInit(): void {
  }
  async SubmitSmallScaleDetails(smallScaleLoginForm: any){
    await this.smallScaleService.smallScaleLoginAuthentication(smallScaleLoginForm.smallScaleId,smallScaleLoginForm.password).toPromise().then((data:any) =>{this.smallScale=data; console.log(data); });
      if(this.smallScale != null){
        return alert("successful");
      }
      return alert("unsuccessful");
  }

}
