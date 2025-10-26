import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Users } from './pages/users/users';
import { User } from './_components/user/user';

/* Aqui especifico todas as minhas rotas "paginas" */
const routes: Routes = [
  {path: '', component: Home}, 
  {path: 'users', component: Users},
  {path: 'users/:username', component: User}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
