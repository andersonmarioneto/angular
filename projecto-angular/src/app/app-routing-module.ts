import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Users } from './pages/users/users';

/* Aqui especifico todas as minhas rotas "paginas" */
const routes: Routes = [
  {path: '', component: Home}, 
  {path: 'users', component: Users}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
