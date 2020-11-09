import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MainService {

    constructor(private httpClient: HttpClient){}

    loadData():Observable<Question[]>{
        return this.httpClient.get<Question[]>("../assets/quizquestions.json");
    }
}

export class Question {
    constructor(
            public id: number,
            public question: string,
            public one: string,
            public two: string,
            public three: string,
            public four: string,
            public ans: string
            ){
    }
}