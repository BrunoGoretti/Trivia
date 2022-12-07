import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from 'src/environment/environment';
import { AddQuestion } from 'src/app/models/question-model';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {
  private url = "AddQuestion";

<<<<<<< HEAD
  constructor(private http: HttpClient) { }
  
  public updateQuestion(question : AddQuestion) : Observable<AddQuestion[]> {

    return this.http.put<AddQuestion[]>(
      `${enviroments.apiUrl}/${this.url}`,
      question);
   }
=======
  public getQuestion() : Observable<AddQuestion[]> {
   return this.http.get<AddQuestion[]>(`${enviroments.apiUrl}/${this.url}`);
  }
>>>>>>> parent of 99d0fc3 (Merge branch 'main' into RudikBranch)

   public createQuestion(question : AddQuestion) : Observable<AddQuestion[]> {

    return this.http.post<AddQuestion[]>(
      `${enviroments.apiUrl}/${this.url}`,
      question);
   }

  //  public deleteSuperHero(hero : AddQuestion) : Observable<AddQuestion[]> {

  //   return this.http.delete<AddQuestion[]>(
  //     `${enviroments.apiUrl}/${this.url}/${hero.id}`
  //     );
  //  }
}
