import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
template:
`<input type='text' [(ngModel)]='msg'>
<h1>{{msg}}</h1>

`,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app';
  msg = '这是输入框的内容';
}
