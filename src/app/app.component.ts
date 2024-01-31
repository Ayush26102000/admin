import { Component } from '@angular/core';
import {environment} from '../../src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  apiurl = environment.apiUrl;


}
