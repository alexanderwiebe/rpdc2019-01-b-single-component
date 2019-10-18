import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
`<hello name="{{ name }}"></hello>
<p>
  Start editing to see some magic happen :)
</p>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements ngOnInit, ngOnDestroy {
  name = 'Angular';
}
