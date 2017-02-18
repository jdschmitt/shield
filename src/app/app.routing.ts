import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from "./login-form.component";
import { SecondPotComponent } from "./second-pot.component";
import { HomeComponent } from "./home.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'secondPot',
    component: SecondPotComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
