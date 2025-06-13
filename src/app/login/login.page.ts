import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonInput
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonContent, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  @ViewChild('emailInput', { static: false, read: IonInput }) emailInput!: IonInput;

  constructor(private router: Router) {}

  ngOnInit() {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.emailInput?.setFocus().catch(err => console.error('Focus error:', err));
    }, 300);
  }

  onLogin() {
    console.log('Email:', this.email, 'Password:', this.password);
    this.router.navigateByUrl('/tabs').catch(err => console.error('Navigation error:', err));
  }
}
