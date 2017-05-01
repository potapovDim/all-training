import {Component, Input} from '@angular/core';

@Component({
  selector: 'output',
  templateUrl: 'output.template.html'
})
export class Output {
  @Input() text: String;
  constructor(){}
}