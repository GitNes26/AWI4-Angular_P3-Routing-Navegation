import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component'
import { EdadGuard } from './Guards/edad.guard';

const routes: Routes = [
  { path: 'index', component: FirstComponent },
  { path: 'info/:id', component: SecondComponent, canActivate: [EdadGuard] },
  { path: '', redirectTo: '/index', pathMatch: 'full' }, // redireccion por default a INDEX
  { path: '**', component: PageNoFoundComponent}, // pagina que se muestra si no encuentra ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
