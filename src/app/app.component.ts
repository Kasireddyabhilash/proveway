import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedOfferId: number | null = null;  // Tracks which offer is selected
  totalPrice: number = 0;

  // Function to select an offer and set the total price
  selectOffer(offerId: number, price: number) {
    this.selectedOfferId = offerId;
    this.totalPrice = price;
  }

  // Function to format the total price as a currency
  getFormattedPrice() {
    return `DKK ${this.totalPrice.toFixed(2)}`;
  }

}
