import { Component, OnInit } from '@angular/core'; // OnInit : interface to execute custom initialization logic
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common' // for pipe uppercase usage

@Component({
  selector: 'app-display-name',
  standalone: true,
  imports: [FormsModule,  CommonModule],
  templateUrl: './display-name.component.html',
  styleUrl: './display-name.component.css'
})

export class DisplayNameComponent implements OnInit {
  
  theNameToDisplay = '';
  polices = ["Arial", "Chalkduster", "Courier", "Fantasy", "Optima", "Verdana"];
  selectedPolice = "";
  theNameSize = '';
  selectedAlignement = '';
  left = 'left';
  center = 'center';
  right = 'right';

  // appelée une fois que tous les composants du composant ont été 
  // initialisés, c'est-à-dire que tous les data-bindings sont prêts
  ngOnInit() {
    this.selectedPolice = "Verdana";
    this.selectedAlignement = "center";
  }

  setChosenStyles() {
    return 'font-family: '+ this.selectedPolice + '; font-size: '+ this.theNameSize +'px; text-align: '+ this.selectedAlignement +';';
  }
}
