import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Empty-Project';
  comment:string=""
  spesa : {dati : string, visibile : boolean}[] = [{dati :"banana",visibile :false},
  {dati:"fragola",visibile :false},{dati : "lampone", visibile :false},{dati : "melone",visibile :false}];
  search(){
    console.log("ciao")
    for (let i = 0; i < this.spesa.length ; i++){
      console.log(this.spesa[i].dati.search(this.comment))
      if (this.spesa[i].dati.search(this.comment) == -1){
        this.spesa[i].visibile = true;
      }
      else{ 
        this.spesa[i].visibile = false;
      }
    }

  }
}
