import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { HeaderComponent } from './header/header.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { ContactComponent } from './contact/contact.component';



// links für die seiten
const routes: Routes = [ {path:'',component:HeaderComponent},
{path:'impressum',component:ImpressumComponent},
{path:'datenschutz',component:DatenschutzComponent},
{path:'projekte',component:ProjekteComponent},
{path:'about-me',component:AboutMeComponent},
{path:'contact',component:ContactComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
