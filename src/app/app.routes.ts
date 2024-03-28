import { Routes } from '@angular/router';
  
import { IndexComponent } from './pages/taxi/index/index.component';
import { ViewComponent } from './pages/taxi/view/view.component';
import { CreateComponent } from './pages/taxi/create/create.component';
import { EditComponent } from './pages/taxi/edit/edit.component';

export const routes: Routes = [
      { path: 'taxi', redirectTo: 'taxi/index', pathMatch: 'full'},
      { path: 'taxi/index', component: IndexComponent },
      { path: 'taxi/:taxiId/view', component: ViewComponent },
      { path: 'taxi/create', component: CreateComponent },
      { path: 'taxi/:taxiId/edit', component: EditComponent }, 
  ];