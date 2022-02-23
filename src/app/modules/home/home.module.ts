import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OfferComponent } from './components/offer/offer.component';
import { ProductComponent } from './components/product/product.component';
import { ServiceComponent } from './components/service/service.component';
import { TeamComponent } from './components/team/team.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    ProductComponent,
    FooterComponent,
    TeamComponent,
    AboutComponent,
    ServiceComponent,
    OfferComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MenubarModule,
    InputTextModule,
    CarouselModule,
    ButtonModule,
  ]
})
export class HomeModule { }
