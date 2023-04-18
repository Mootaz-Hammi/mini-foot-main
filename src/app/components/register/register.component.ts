import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth:AuthService,private cookie:CookieService,private route :Router){

  }
  phone=""
  url="assets/add.png"
  fn=""
  text=""
  defaultSection="Select Categorie"

  categories: string[] = ['Select Categorie','Ecole', 'Minime', 'Cadet', 'Junior'];
  

  // myForm:FormGroup;
  
  // constructor(){
  //   this.myForm = new FormGroup({
  //     firstName: new FormControl(''),
  //     lastName: new FormControl(''),
  //     password: new FormControl(''),
  //     confirmPassword: new FormControl(''),
  //     phoneNumber:new FormControl(''),
  //     email:new FormControl('')
  //   })
  // }
  

  selectFile(event:any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.url = event.target.result
      }
    }
  }
  
  onFilePickerClick() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', (event: any) => {
      const file: File = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result as string;
      };
    });
    input.click();
  }

  
  // register(){
  //   var password =this.myForm.get('password')?.value
    
  //   var confirmPassword =this.myForm.get('confirmPassword')?.value
  //   if(password !== confirmPassword || (password=="")){
  //     alert("Verif password")  
  //   }else alert("fasle")
  // }
  // test(){
  //   console.log(this.myForm.get('firstName')?.value);
  //   console.log(this.myForm.get('lastName')?.value);
  //   console.log(this.myForm.get('email')?.value);
  //   console.log(this.myForm.get('phoneNumber')?.value);
  //   console.log(this.myForm.get('password')?.value);
  //   console.log(this.myForm.get('confirmPassword')?.value);
  // }
  selectedValue:string | undefined;
  add(f:NgForm){
    //console.log(f.value);
    this.auth.SignupPlayer(f.value).subscribe((data:any)=>{    
      console.log(data)
      alert(data.msg)
      this.route.navigateByUrl("/");
      this.auth.isAuthenticated=true
      localStorage.setItem('isAuthenticated', JSON.stringify(this.auth.isAuthenticated));
    }),
    (error:any)=>{console.log(error)}
  }
}
