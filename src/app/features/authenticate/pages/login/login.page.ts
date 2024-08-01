import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonImg,
  IonInput,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { key, people } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonInput, IonImg, IonContent, CommonModule, FormsModule, IonIcon],
})
export class LoginPage {
  constructor() {
    addIcons({ people, key });
  }

  public logo: string = '../../../../../assets/logo/logo.svg';
}
