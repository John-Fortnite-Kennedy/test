import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'add-service',
    loadChildren: () => import('./add-service/add-service.module').then( m => m.AddServicePageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'announcements',
    loadChildren: () => import('./announcements/announcements.module').then( m => m.AnnouncementPageModule)
  },
  {
    path: 'add-announcement',
    loadChildren: () => import('./add-announcement/add-announcement.module').then( m => m.AddAnnouncementPageModule)
  },
  {
    path: 'announcement',
    loadChildren: () => import('./announcement/announcement.module').then( m => m.AnnouncementPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'add-report',
    loadChildren: () => import('./add-report/add-report.module').then( m => m.AddReportPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'repairs',
    loadChildren: () => import('./repairs/repairs.module').then( m => m.RepairsPageModule)
  },
  {
    path: 'add-repair',
    loadChildren: () => import('./add-repair/add-repair.module').then( m => m.AddRepairPageModule)
  },
  {
    path: 'repair',
    loadChildren: () => import('./repair/repair.module').then( m => m.RepairPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'code-confirmation',
    loadChildren: () => import('./code-confirmation/code-confirmation.module').then( m => m.CodeConfirmationPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'osi-info',
    loadChildren: () => import('./osi-info/osi-info.module').then( m => m.OsiInfoPageModule)
  },
  {
    path: 'votes',
    loadChildren: () => import('./votes/votes.module').then( m => m.VotesPageModule)
  },
  {
    path: 'finish-registration',
    loadChildren: () => import('./finish-registration/finish-registration.module').then( m => m.FinishRegistrationPageModule)
  },
  {
    path: 'createorjoin',
    loadChildren: () => import('./createorjoin/createorjoin.module').then( m => m.CreateorjoinPageModule)
  },
  {
    path: 'apartmentdetails',
    loadChildren: () => import('./apartmentdetails/apartmentdetails.module').then( m => m.ApartmentdetailsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'osi-join',
    loadChildren: () => import('./osi-join/osi-join.module').then( m => m.OsiJoinPageModule)
  },
  {
    path: 'residents-list',
    loadChildren: () => import('./residents-list/residents-list.module').then( m => m.ResidentsListPageModule)
  },
  {
    path: 'join-requests',
    loadChildren: () => import('./join-requests/join-requests.module').then( m => m.JoinRequestsPageModule)
  },
  {
    path: 'osi-create',
    loadChildren: () => import('./osi-create/osi-create.module').then( m => m.OsiCreatePageModule)
  },
  {
    path: 'finds',
    loadChildren: () => import('./finds/finds.module').then( m => m.FindsPageModule)
  },
  {
    path: 'find',
    loadChildren: () => import('./find/find.module').then( m => m.FindPageModule)
  },
  {
    path: 'add-find',
    loadChildren: () => import('./add-find/add-find.module').then( m => m.AddFindPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'add-request',
    loadChildren: () => import('./add-request/add-request.module').then( m => m.AddRequestPageModule)
  },
  {
    path: 'wait',
    loadChildren: () => import('./wait/wait.module').then( m => m.WaitPageModule)
  },  {
    path: 'vote',
    loadChildren: () => import('./vote/vote.module').then( m => m.VotePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
