import { Component, Input } from '@angular/core';

type Type = 'text';
type Size = 'sm' | 'md';
export interface HeroInputProps {
  type?: Type;
  size?: Size;
  placeholder?: string;
}

@Component({
  selector: 'hero-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type?: Type = 'text';
  @Input() size?: Size = 'md';
  @Input() placeholder?: string = '';
}
