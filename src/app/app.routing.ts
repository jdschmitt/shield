import { Routes, RouterModule } from '@angular/router';
import { SecondPotComponent } from "./second-pot.component";
import { HomeComponent } from "./home.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'secondPot',
    component: SecondPotComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
