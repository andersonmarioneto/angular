import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    /* route default is Home */
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: '**',
        redirectTo: 'home'
    }
    /* route default is Home */ 
];
