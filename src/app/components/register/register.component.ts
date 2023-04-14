import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  phone=""
  url="assets/add.png"
  fn=""
  text=""

  categories: string[] = ['ecole', 'minime', 'cadet', 'junior'];
  

  myForm:FormGroup;
  
  constructor(){
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      phoneNumber:new FormControl(''),
      email:new FormControl('')
    })
  }
  

  selectFile(event:any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.url = event.target.result
      }
    }
  }
  sayhi()
  {
    this.url="assets/add.png"
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

  
  register(){
    var password =this.myForm.get('password')?.value
    
    var confirmPassword =this.myForm.get('confirmPassword')?.value
    if(password !== confirmPassword || (password=="")){
      alert("Verif password")  
    }else alert("fasle")
  }
  test(){
    console.log(this.myForm.get('firstName')?.value);
    console.log(this.myForm.get('lastName')?.value);
    console.log(this.myForm.get('email')?.value);
    console.log(this.myForm.get('phoneNumber')?.value);
    console.log(this.myForm.get('password')?.value);
    console.log(this.myForm.get('confirmPassword')?.value);
  }
}
