import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sightwords',
  templateUrl: './sightwords.component.html',
  styleUrls: ['./sightwords.component.css']
})
export class SightwordsComponent {
  public sWords: any = []
  constructor (private list: DataService) {}

  ngOnInit (): void {
    this.sWords = this.list.getSightlist()
  }

}
