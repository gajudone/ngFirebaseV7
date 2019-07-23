import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
//import { CustomersComponent } from './customers/customers.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { EmployeesComponent } from '/var/www/html/ngFirebaseV7/src/app/employees/employees.component'
import { EmployeeComponent } from '/var/www/html/ngFirebaseV7/src/app/employees/employee/employee.component'
import { EmployeeListComponent } from '/var/www/html/ngFirebaseV7/src/app/employees/employee-list/employee-list.component'
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
     EmployeesComponent, EmployeeComponent, EmployeeListComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule,ToastrModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, AngularFireDatabaseModule // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }