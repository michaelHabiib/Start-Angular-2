import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-porto',
  templateUrl: './porto.component.html',
  styleUrls: ['./porto.component.css']
})
export class PortoComponent implements OnInit {

  constructor() { }



  arr:any = [
    {"picName":"capin", "picUrl":"assets/cabin.png"},
    {"picName":"cake", "picUrl":"assets/cake.png"},
    {"picName":"circus", "picUrl":"assets/circus.png"},
    {"picName":"Game", "picUrl":"assets/game.png"},
    {"picName":"Safe", "picUrl":"assets/safe.png"},
    {"picName":"Submarine", "picUrl":"assets/submarine.png"}
  ]

  x:number =0
  createPopup (i:number) {
    // console.log(i)
    this.x =i
    // console.log(this.x)
    $(".f").addClass("over-lay")
    $(".pop-up").fadeToggle()
    $(".pop-up")
    $("body").css("overflow-y","hidden")
    $("body").css("overflow-x","hidden")
    $("body").css("padding-right","15px")
  }

  closeWindow () {
    // $(".pop-up").addClass("collapse")
    $(".pop-up").fadeToggle()
    $(".f").removeClass("over-lay")
    $("body").css("overflow","scroll")
    $("body").css("overflow-x","hidden")
    $("body").css("padding-right","0px")
  }


  ngOnInit(): void {
  }

}
