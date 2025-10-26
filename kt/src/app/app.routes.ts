import { Routes } from '@angular/router';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';

export const routes: Routes = [
    {
        path:'',
        component:AppLayoutComponent,
        children:[
            {
                path: '',
                component: EcommerceComponent,
                pathMatch: 'full',
                title:
                'kt',
            },
        ]
    }
];
