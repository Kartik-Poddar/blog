import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import {FormControl,FormGroup,FormControlName,Validator} from '@angular/forms';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import {WeatherDataService} from './services/weather-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // standalone:true,
  // imports: [MatFormFieldModule,MatInputModule],
})
export class AppComponent {
  title = 'blog'; 
  // hide = true;
  // navbarOpen = false;
  // toggleNavbar() {
  //   this.navbarOpen = !this.navbarOpen;
  // }
  // pwd = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,}$"
  // loginForm = new FormGroup({
  //   name: new FormControl('kartik', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
  //   contact: new FormControl('9311176858', [Validators.required, Validators.pattern("[0-9]{10}")]),
  //   username: new FormControl('dssdac@cdasc', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.pattern(this.pwd)])
  // })

  // loginuser() {
  //   console.warn(this.loginForm.value)
  // }

  // get username() {
  //   return this.loginForm.get('username')
  // }

  // get password() {
  //   return this.loginForm.get('password')
  // }
  // get name() {
  //   return this.loginForm.get('name')
  // }
  // get contact() {
  //   return this.loginForm.get('contact')
  // }
  weather:any;
  constructor(private weaatherData:WeatherDataService){
    weaatherData.users().subscribe((data)=>{
      this.weather=data
      console.warn(data)
    });
    
  }
  
  // show = false
  // color='red'
  // bgcolor = 'blue'
  // users = [
  //   {name:'kartik',email:'kartik@gmail.com',phone:'12345',social:['facebook','insta','snap']},
  //   {name:'kunj',email:'kunj@gmail.com',phone:'332432',social:['facebook','insta','snap']},
  //   {name:'aayush',email:'aayush@gmail.com',phone:'3534543',social:['facebook','insta','snap']},
  //   {name:'raghav',email:'raghav@gmail.com',phone:'1657657',social:['facebook','insta','snap']}
  // ]
  // func()
  // {
  //     this.show==true?this.show=false:this.show=true
  // }

  // updatecolor()
  // {
  //   this.color=='red'?this.color='blue':this.color='red'
  //   this.bgcolor=='red'?this.bgcolor='blue':this.bgcolor='red'
  // }
  // userdata:any={};
  // getdata(data:NgForm)
  // {
  //   console.warn(data)
  //   this.userdata=data
  // }
  // dispval = 0
  // name='kartik'
  // // i = 0
  // // num = 0
  // dis = true
  // bin(type:string)
  // {
  //     type == 'true' ? this.dis=true:this.dis=false;
  // }
  // count(type:string)
  // {
  //   type == 'add' ?this.num++:this.num--;
  // }
  // decr()
  // {
  //     this.i--
  //     console.log(this.i)
  //     this.dispval=this.i
  // }
  // incr()
  // {
  //     this.i++
  //     console.log(this.i)
  //     this.dispval=this.i
  // }
//   func(name:any)
//   {
//     console.log(name)
//     this.dispval=name
//   }
// display=false
// turn(){
//   // this.display==false?this.display=true:this.display=false
//   this.display=!this.display
// }
// list:any[]=[]
// add_task(item:string)
// {
//   console.log(item)
//   this.list.push({id:this.list.length,name:item})
// }
// remove(id:number)
// {
//   console.log(id)
//   this.list=this.list.filter(item=>item.id!==id)
// }
// data1=10
// data2=0
// string='you won'
// str = false
// updatechild()
// {
//   this.data1 = Math.floor(Math.random()*10)
//   this.data2 = Math.floor(Math.random()*10)
//   if (this.data1==this.data2){
//     console.log("you won")
//     this.str = true
//   }
//   else{
//     this.str=false
//   }
// }
// data=''
// updatedata(item:string)
// {
//   console.warn(item)
//   this.data=item
// }
// name:any;
// item = ''
// update(data4:string)
// {
//   this.item=data4
// }
// check(str:boolean
// }
}


