import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from 'src/environments/environment';
import { AddQuestion } from 'src/app/models/question-model';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {
  constructor(private http: HttpClient) { }
  private url = "CreateQuestion";

  public getQuestion() : Observable<AddQuestion[]> {
   return this.http.get<AddQuestion[]>(`${enviroments.apiUrl}/${this.url}`);
  }

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
