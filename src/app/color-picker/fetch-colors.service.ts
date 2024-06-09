import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchColorsService {
  private colors:string[]=[];
  private endpoint:string="http://localhost/colorapi.php"
  constructor() {}
  async fetchColors() {
    try {
      await fetch(this.endpoint)
        .then((res) => res.json())
        .then((data) => (this.colors = data))
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log('Error', error);
    }
    console.log(this.colors);    
    return this.colors;
  }
}
