import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PlacesPage} from './places.page';

const routes: Routes = [
    /*{
        path: 'tabs',
        component: PlacesPage,
        children: [
            {
            path: '',
            loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
        },
          {
            path: ':placeId',
            loadChildren: () => import('./discover/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
          }
        ]
    },*/
  {
    path: '',
    loadChildren: () => import('./places.module').then(m => m.PlacesPageModule)
  },
    {
        path: 'discover',
        loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
    },
    {
        path: 'offers',
        loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlacesPageRoutingModule {
}
