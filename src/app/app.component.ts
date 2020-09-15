import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MailService } from './service/mail.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private mail: MailService){}
  title = 'portfolio';
  contactForm: FormGroup;
  onSuccess = false;
  onError = false

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null),
      company: new FormControl(null),
      email: new FormControl(null),
      message: new FormControl(null),
    });
  }

  onSubmit(){

    //do something
    this.mail.sendMail(this.contactForm.value);
    
    //if success
    if(true){
      this.onSuccess = true;
    }
    else{
      this.onError = true;
    }

    setTimeout(()=>{                           
      this.onSuccess = false;
      this.onError = false;
    }, 5000);

  }
}
