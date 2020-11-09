import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Question, MainService} from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  questions: Question[];
  answers: number[] = [0,0,0,0,0,0,0,0,0,0];
  selected: number[] = [0,0,0,0,0,0,0,0,0,0];

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.service.loadData().subscribe(data => this.questions = data);
  }

  select(id: number, choice: string, event){
    if(this.selected[id-1] == 0){
    // check if answer is correct
    this.questions.forEach(question =>{
      if(id == question.id){
        if(choice == question.ans){
          this.answers[id-1] = 1;
        } else {
          this.answers[id-1] = 0;
        }
      }
    });
    // highlight selected answer
    
      this.selected[id-1] = 1;
      event.currentTarget.classList.add("active");
    } else {
      alert("Answer already chosen for selected question");  
    }
    
  }

  dispScore(){
    let score = 0;
    this.answers.forEach(mark =>{
      score+=mark;
    });
    let div = document.getElementById("score");
    div.innerHTML = "Total Score: "+ score + "/10";
  }

}
