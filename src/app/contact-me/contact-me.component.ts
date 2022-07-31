import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  name:any = "";
  phone:string = ""
  mail:string = "";
  massage:string = "";

  dataIn() {
    console.log("test")
    if (this.name == "" || this.phone == "" || this.massage == "") {
      $("body").addClass("over-lay")
      $(".pop-up2").css("visibility","visible")
      $(".pop-up2").html("<p class = 'fs-2'> please Enter Your full Data </p>")
      $(".pop-up2").fadeOut(4000)
    } else {
      $(".pop-up2").addClass("over-lay")
      $(".pop-up2").css("visibility","visible")
    }

  }

  close(){
      $(".pop-up2").html("<p class = 'fs-2'> thank you , we will be in touch soon </p>")
      $(".pop-up2").fadeOut(4000)
  }

  ngOnInit(): void {
  }

}
