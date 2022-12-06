import { Component, OnInit, Input, Sanitizer } from '@angular/core';

type Type = 'text';
type Size = 'sm' | 'md' | 'lg';
interface InputProps {
  type: Type;
  size: Size; 
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() type: Type = 'text';
  @Input() size: Size = 'md';

  constructor() { }

  ngOnInit(): void {
  }

}
