import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
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
    console.log(this.contactForm)
    //http post request
    
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
