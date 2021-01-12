import { Component, OnInit } from '@angular/core';
import { CorporateServiceService } from '../corporate-service.service';

@Component({
  selector: 'app-corporate-login',
  templateUrl: './corporate-login.component.html',
  styleUrls: ['./corporate-login.component.css']
})
export class CorporateLoginComponent implements OnInit {

  data:any;
  corporate:any;
  status:any;
  constructor(public corporateService:CorporateServiceService) {

   this.status={corporateName:'',corporateId:'',location:'',contact:'',emailId:'',established:'',password:''};
   }

  ngOnInit(): void {
  }
  async SubmitCorporateDetails(corporateLoginForm:any){
    await this.corporateService.corporateLoginAuthentication(corporateLoginForm.corporateId,corporateLoginForm.password).subscribe((data:any) =>{this.corporate=data; console.log(data); });
      if(this.corporate != null){
        return alert("successful");
      }
      return alert("unsuccessful");
  
  }
}
