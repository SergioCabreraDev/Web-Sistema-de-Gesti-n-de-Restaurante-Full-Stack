import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { OverlayComponent } from './overlay/overlay.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CartaComponent } from './carta/carta.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NavBarComponent, FooterComponent,OverlayComponent, 
    NewsletterComponent,CartaComponent, LocalizacionComponent, ReviewsComponent, RouterOutlet],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  

}
