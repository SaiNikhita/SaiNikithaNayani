import { Component } from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: string[];
  currentIndex: number;

  constructor(private skillsService: SkillsService) {
    this.skills = [];
    this.currentIndex = 0;
  }

  ngOnInit() {
    this.skillsService.getSkills().subscribe((skillsJson) => {
      Object.values(skillsJson).forEach((i) => {
        this.skills.push(i);
      });
    });
  }

  getCurrentIndices() {
    return this.skills.slice(0, 3);
  }

  getCategory(index: any) {
    return index.category;
  }

  getCategorySkills(item: any) {
    return JSON.parse(item.skills);
  }
}
