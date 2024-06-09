import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PalletteComponent } from '../pallette/pallette.component';
import { CommonModule } from '@angular/common';
import { FetchColorsService } from './fetch-colors.service';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [PalletteComponent, CommonModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ColorPickerComponent implements OnInit {
  // colors: string[] = [
  //   'red',
  //   'yellow',
  //   'blue',
  //   'pink',
  //   'purple',
  //   'black',
  //   'orange',
  //   'green',
  //   'peach',
  //   'magenta',
  //   'lavender',
  //   'OliveGreen',
  //   'white',
  // ];
  colors: string[] = [];
  pickedColor: string = '';

  constructor(private fetchColorService:FetchColorsService){

  }

  pickColor(color: string) {
    this.pickedColor = color;
    console.log(color);
  }

  async getColor():Promise<void>{
    this.colors=await this.fetchColorService.fetchColors();
  }

  ngOnInit(): void {
    this.getColor();
  }
}
