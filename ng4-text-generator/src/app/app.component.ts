import { Component, OnInit } from '@angular/core';
import {TextGenService} from './textGen.service'
@Component({
  selector: 'app',
  templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit{
  title: string = 'Text generator service';
  text: string = ''
  error: string = ''
  constructor(private textGen: TextGenService){}

  queryOption: any = {
    paras: 4,
    html: true
  }
  getTextFromServer(params: string){
    this.textGen.getText(params).subscribe(
      data => this.text = data,
      error => this.error = error
    )
  }
  ngOnInit() {
    const params = `?paras=${this.queryOption.paras}&html=${this.queryOption.html}`
    this.getTextFromServer(params)
  };
  changeQueryHtml (event: any) {
    if(event.target.value == 'true')
    {
      this.queryOption.html = true
    }
    else {
      this.queryOption.html = false
    }
    const params = `?paras=${this.queryOption.paras}&html=${this.queryOption.html}`
    this.getTextFromServer(params)
  }
  changeQueryParas (event: any) {
    if(typeof +event.target.value == 'number'){
      this.queryOption.paras = +event.target.value
    }
    else {
      this.queryOption.paras = 4
    }
    const params = `?paras=${this.queryOption.paras}&html=${this.queryOption.html}`
    this.getTextFromServer(params)
  }
}