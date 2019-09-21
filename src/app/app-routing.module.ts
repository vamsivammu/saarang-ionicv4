import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'content', loadChildren: './content/content.module#ContentPageModule' },
  { path: 'callback', loadChildren: './callback/callback.module#CallbackPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'favourites', loadChildren: './favourites/favourites.module#FavouritesPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'reg', loadChildren: './reg/reg.module#RegPageModule' },
  { path: 'procards', loadChildren: './procards/procards.module#ProcardsPageModule' },
  { path: 'login-modal', loadChildren: './login-modal/login-modal.module#LoginModalPageModule' },
  { path: 'side-bar', loadChildren: './side-bar/side-bar.module#SideBarPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'proshows', loadChildren: './proshows/proshows.module#ProshowsPageModule' },
  { path: 'developers', loadChildren: './developers/developers.module#DevelopersPageModule' },
  { path: 'event-category', loadChildren: './event-category/event-category.module#EventCategoryPageModule' },
  { path: 'event-modal', loadChildren: './event-modal/event-modal.module#EventModalPageModule' },
  { path: 'event-schedule', loadChildren: './event-schedule/event-schedule.module#EventSchedulePageModule' },
  { path: 'home-tab', loadChildren: './home-tab/home-tab.module#HomeTabPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
