import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pallette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pallette.component.html',
  styleUrl: './pallette.component.css',
})
export class PalletteComponent {
  @Input() color: string = '';

  @Output() pickColorEvent = new EventEmitter<string>();

  // getting the className and passing it to parent using Output decorator
  onClick(event: MouseEvent) {
    const e = event.target as HTMLElement;
    const pickedColor = e.id;
    this.pickColorEvent.emit(pickedColor);
  }
}
