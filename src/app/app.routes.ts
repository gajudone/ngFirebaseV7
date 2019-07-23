import { Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
//import { CustomersComponent } from './customers/customers.component'
import { EmployeesComponent } from '/var/www/html/ngFirebaseV7/src/app/employees/employees.component'
import { EmployeeComponent } from '/var/www/html/ngFirebaseV7/src/app/employees/employee/employee.component'
import { EmployeeListComponent } from '/var/www/html/ngFirebaseV7/src/app/employees/employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  // { path: 'user', component: UserComponent,   resolve: { data: UserResolver}, children: [
  //   { path: '', redirectTo: 'Employees', pathMatch: 'full' },
  //   { path: 'Employees', component: EmployeesComponent},
  //   { path: 'AddEmployees', component: EmployeeComponent},
  //   { path: 'AddEmployees/:id', component: EmployeeComponent}
  // ]},
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}, children: [
    { path: '', redirectTo: 'Employees', pathMatch: 'full',  resolve: { data: UserResolver}},
    { path: 'Employees', component: EmployeesComponent,  resolve: { data: UserResolver}},
    { path: 'AddEmployees', component: EmployeeComponent,  resolve: { data: UserResolver}},
    { path: 'AddEmployees/:id', component: EmployeeComponent,  resolve: { data: UserResolver}}
  ]}
];