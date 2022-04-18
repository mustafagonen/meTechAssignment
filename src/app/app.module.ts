import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BannerModule } from '../modules/banner/banner.module';
import { BestSellerModule } from '../modules/best-seller/best-seller.module';
import { CampaignsModule } from '../modules/campaigns/campaigns.module';
import { CategoriesModule } from '../modules/categories/categories.module';
import { ImageSliderModule } from '../modules/image-slider/slider.module';
import { LogoSliderModule } from '../modules/logo-slider/logo-slider.module';
import { PicksForYouModule } from '../modules/picks-for-you/picks-for-you.module';
import { ShoppingProgressModule } from '../modules/shopping-progress/shopping-progress.module';
import { MarketPlacesModule } from '../modules/market-places/marke-places.module';
import { AdvertisementModule } from '../modules/advertisement/advertisement.module';
import { FooterModule } from '../modules/footer/footer.module';
import { FooterBottomModule } from '../modules/footer-bottom/footer-bottom.module';
import { TopBarModule } from '../modules/top-bar/top-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BannerModule,
    ImageSliderModule,
    LogoSliderModule,
    CategoriesModule,
    CampaignsModule,
    BestSellerModule,
    PicksForYouModule,
    ShoppingProgressModule,
    MarketPlacesModule,
    AdvertisementModule,
    FooterModule,
    FooterBottomModule,
    TopBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
