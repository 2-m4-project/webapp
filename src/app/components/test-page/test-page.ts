import { Component } from '@angular/core';

@Component({
    templateUrl: './test-page.html',
    styles: ['ul { color: blue; }']
})
export class TestComponent  {
    vriendelijkeMensen = ['Max', 'Matthew', 'Jeroen', 'Harrie', 'Daan ook wel hoor'];
}
