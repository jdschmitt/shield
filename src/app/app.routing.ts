import { Routes, RouterModule } from '@angular/router';
import { SecondPotComponent } from "./components/second-pot.component";
import { HomeComponent } from "./components/home.component";

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
