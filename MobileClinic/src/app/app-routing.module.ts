import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },

  {
    path: 'forgot',
    loadChildren: () =>
      import('./pages/forgot/forgot.module').then((m) => m.ForgotPageModule),
  },
  {
    path: 'result',
    loadChildren: () =>
      import('./pages/result/result.module').then((m) => m.ResultPageModule),
  },
  {
    path: 'clinic/:cid',
    loadChildren: () =>
      import('./pages/clinic/clinic.module').then((m) => m.ClinicPageModule),
  },
  {
    path: 'doctor/:did',
    loadChildren: () =>
      import('./pages/doctor/doctor.module').then((m) => m.DoctorPageModule),
  },
  {
    path: 'clinic/:cid/doctor/:did',
    loadChildren: () =>
      import('./pages/doctor/doctor.module').then((m) => m.DoctorPageModule),
  },

  {
    path: 'profile-edit',
    loadChildren: () =>
      import('./pages/profile-edit/profile-edit.module').then(
        (m) => m.ProfileEditPageModule
      ),
  },
  {
    path: 'profile-address',
    loadChildren: () =>
      import('./pages/profile-address/profile-address.module').then(
        (m) => m.ProfileAddressPageModule
      ),
  },
  {
    path: 'profile-password',
    loadChildren: () =>
      import('./pages/profile-password/profile-password.module').then(
        (m) => m.ProfilePasswordPageModule
      ),
  },
  {
    path: 'appointment-view/:aid',
    loadChildren: () =>
      import('./pages/appointment-view/appointment-view.module').then(
        (m) => m.AppointmentViewPageModule
      ),
  },
  {
    path: 'appointment-detail',
    loadChildren: () =>
      import('./pages/appointment-detail/appointment-detail.module').then(
        (m) => m.AppointmentDetailPageModule
      ),
  },

  {
    path: 'review-details',
    loadChildren: () =>
      import('./pages/review-details/review-details.module').then(
        (m) => m.ReviewDetailsPageModule
      ),
  },
  {
    path: 'medical-list',
    loadChildren: () =>
      import('./pages/medical-list/medical-list.module').then(
        (m) => m.MedicalListPageModule
      ),
  },
  {
    path: 'search-modal/:searchid',
    loadChildren: () =>
      import('./pages/search-modal/search-modal.module').then(
        (m) => m.SearchModalPageModule
      ),
  },
  {
    path: 'search-clinic',
    loadChildren: () =>
      import('./pages/search-clinic/search-clinic.module').then(
        (m) => m.SearchClinicPageModule
      ),
  },
  {
    path: 'search-doctor',
    loadChildren: () =>
      import('./pages/search-doctor/search-doctor.module').then(
        (m) => m.SearchDoctorPageModule
      ),
  },
  {
    path: 'filter',
    loadChildren: () =>
      import('./pages/filter/filter.module').then((m) => m.FilterPageModule),
  },
  {
    path: 'filter-result/:lowerprice/:higherprice/:gender',
    loadChildren: () =>
      import('./pages/filter-result/filter-result.module').then(
        (m) => m.FilterResultPageModule
      ),
  },

  {
    path: 'review',
    loadChildren: () =>
      import('./pages/review/review.module').then((m) => m.ReviewPageModule),
  },
  {
    path: 'provider-login',
    loadChildren: () =>
      import('./service-provider/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },

  {
    path: 'appointment-detail-provider',
    loadChildren: () =>
      import(
        './service-provider/appointment-detail-provider/appointment-detail-provider.module'
      ).then((m) => m.AppointmentDetailProviderPageModule),
  },
  {
    path: 'appointment-view-provider',
    loadChildren: () =>
      import(
        './service-provider/appointment-view-provider/appointment-view-provider.module'
      ).then((m) => m.AppointmentViewProviderPageModule),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./service-provider/patients/patients.module').then(
        (m) => m.PatientsPageModule
      ),
  },
  {
    path: 'filter-provider',
    loadChildren: () =>
      import('./service-provider/filter-provider/filter-provider.module').then(
        (m) => m.FilterProviderPageModule
      ),
  },
  {
    path: 'filter-result-provider',
    loadChildren: () =>
      import(
        './service-provider/filter-result-provider/filter-result-provider.module'
      ).then((m) => m.FilterResultProviderPageModule),
  },

  {
    path: 'forgot-provider',
    loadChildren: () =>
      import('./service-provider/forgot-provider/forgot-provider.module').then(
        (m) => m.ForgotProviderPageModule
      ),
  },
  {
    path: 'clinic-provider',
    loadChildren: () =>
      import('./service-provider/clinic-provider/clinic-provider.module').then(
        (m) => m.ClinicProviderPageModule
      ),
  },
  {
    path: 'medical-list-provider',
    loadChildren: () =>
      import(
        './service-provider/medical-list-provider/medical-list-provider.module'
      ).then((m) => m.MedicalListProviderPageModule),
  },

  {
    path: 'profile-address-provider',
    loadChildren: () =>
      import(
        './service-provider/profile-address-provider/profile-address-provider.module'
      ).then((m) => m.ProfileAddressProviderPageModule),
  },
  {
    path: 'profile-edit-provider',
    loadChildren: () =>
      import(
        './service-provider/profile-edit-provider/profile-edit-provider.module'
      ).then((m) => m.ProfileEditProviderPageModule),
  },
  {
    path: 'profile-password-provider',
    loadChildren: () =>
      import(
        './service-provider/profile-password-provider/profile-password-provider.module'
      ).then((m) => m.ProfilePasswordProviderPageModule),
  },
  {
    path: 'register-provider',
    loadChildren: () =>
      import(
        './service-provider/register-provider/register-provider.module'
      ).then((m) => m.RegisterProviderPageModule),
  },
  {
    path: 'result-provider',
    loadChildren: () =>
      import('./service-provider/result-provider/result-provider.module').then(
        (m) => m.ResultProviderPageModule
      ),
  },
  {
    path: 'review-provider',
    loadChildren: () =>
      import('./service-provider/review-provider/review-provider.module').then(
        (m) => m.ReviewProviderPageModule
      ),
  },
  {
    path: 'review-details-provider',
    loadChildren: () =>
      import(
        './service-provider/review-details-provider/review-details-provider.module'
      ).then((m) => m.ReviewDetailsProviderPageModule),
  },

  {
    path: 'search-clinic-provider',
    loadChildren: () =>
      import(
        './service-provider/search-clinic-provider/search-clinic-provider.module'
      ).then((m) => m.SearchClinicProviderPageModule),
  },
  {
    path: 'search-doctor-provider',
    loadChildren: () =>
      import(
        './service-provider/search-doctor-provider/search-doctor-provider.module'
      ).then((m) => m.SearchDoctorProviderPageModule),
  },
  {
    path: 'search-modal-provider',
    loadChildren: () =>
      import(
        './service-provider/search-modal-provider/search-modal-provider.module'
      ).then((m) => m.SearchModalProviderPageModule),
  },
  {
    path: 'provider',
    loadChildren: () =>
      import('./service-provider/tabs-provider/tabs-provider.module').then(
        (m) => m.TabsProviderPageModule
      ),
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./service-provider/business/business.module').then(
        (m) => m.BusinessPageModule
      ),
  },
  {
    path: 'calander',
    loadChildren: () => import('./service-provider/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
