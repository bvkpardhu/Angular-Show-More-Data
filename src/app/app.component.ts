import {Component, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CommonModule, NgLocalization, NgLocaleLocalization} from '@angular/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[{ provide: NgLocalization, useClass: NgLocaleLocalization }]
})
export class AppComponent {
  counter:number=0;
  name:string;
  findB:Boolean;
  data = [{
            "colorName":"red",
            "hexValue":"#f00"
        },
        {
            "colorName":"green",
            "hexValue":"#0f0"
        },
        {
            "colorName":"blue",
            "hexValue":"#00f"
        },
        {
            "colorName":"cyan",
            "hexValue":"#0ff"
        },
        {
            "colorName":"magenta",
            "hexValue":"#f0f"
        },
        {
            "colorName":"yellow",
            "hexValue":"#ff0"
        },
        {
            "colorName":"black",
            "hexValue":"#000"
        },{
            "colorName":"red",
            "hexValue":"#f00"
        },
        {
            "colorName":"green",
            "hexValue":"#0f0"
        },
        {
            "colorName":"blue",
            "hexValue":"#00f"
        },
        {
            "colorName":"cyan",
            "hexValue":"#0ff"
        },
        {
            "colorName":"magenta",
            "hexValue":"#f0f"
        },
        {
            "colorName":"yellow",
            "hexValue":"#ff0"
        },
        {
            "colorName":"black",
            "hexValue":"#000"
        },{
            "colorName":"red",
            "hexValue":"#f00"
        },
        {
            "colorName":"green",
            "hexValue":"#0f0"
        },
        {
            "colorName":"blue",
            "hexValue":"#00f"
        },
        {
            "colorName":"cyan",
            "hexValue":"#0ff"
        },
        {
            "colorName":"magenta",
            "hexValue":"#f0f"
        },
        {
            "colorName":"yellow",
            "hexValue":"#ff0"
        },
        {
            "colorName":"black",
            "hexValue":"#000"
        },{
            "colorName":"red",
            "hexValue":"#f00"
        },
        {
            "colorName":"green",
            "hexValue":"#0f0"
        },
        {
            "colorName":"blue",
            "hexValue":"#00f"
        },
        {
            "colorName":"cyan",
            "hexValue":"#0ff"
        },
        {
            "colorName":"magenta",
            "hexValue":"#f0f"
        },
        {
            "colorName":"yellow",
            "hexValue":"#ff0"
        },
        {
            "colorName":"black",
            "hexValue":"#000"
        },{
            "colorName":"red",
            "hexValue":"#f00"
        },
        {
            "colorName":"green",
            "hexValue":"#0f0"
        },
        {
            "colorName":"blue",
            "hexValue":"#00f"
        },
        {
            "colorName":"cyan",
            "hexValue":"#0ff"
        },
        {
            "colorName":"magenta",
            "hexValue":"#f0f"
        },
        {
            "colorName":"yellow",
            "hexValue":"#ff0"
        },
        {
            "colorName":"black",
            "hexValue":"#000"
        },{
            "colorName":"red",
            "hexValue":"#f00"
        },
        {
            "colorName":"green",
            "hexValue":"#0f0"
        },
        {
            "colorName":"blue",
            "hexValue":"#00f"
        },
        {
            "colorName":"cyan",
            "hexValue":"#0ff"
        },
        {
            "colorName":"magenta",
            "hexValue":"#f0f"
        },
        {
            "colorName":"yellow",
            "hexValue":"#ff0"
        },
        {
            "colorName":"black",
            "hexValue":"#000"
        }
    ]
  content:any[]=new Array();
  
  constructor() {
    
    this.getData();
    this.name = 'Angular2'
  }
  
  getData(){
    console.log(this.counter + 'dat size'+this.data.length)
    for(let i=this.counter+1;i<this.data.length;i++)
    {
    let  rem=this.data.length-this.counter;
    console.log(rem)
    this.content.push(this.data[i]);
    if(i%10==0) break;
    }
    this.counter+=10;
    if(this.counter>=this.data.length)
    {
      this.findB=false;
    }
    else
    {
      this.findB=true;
    }
  }
  getDataLess(){
    console.log(this.counter + 'dat size'+this.data.length)
    for(let i=this.counter+1;i<this.data.length;i++)
    {
    this.content.pop();
    if(i%10==0) break;
    }
    this.counter-=10;
    if(this.counter<=10)
    {
      this.findB=true;
    }
    else
    {
      this.findB=false;
    }
  }
}

