import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Person } from './people/models/person';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StarwarsService {
  http = inject(HttpClient);

  get people(): Promise<Person[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}/people`));
  }

  async addPerson(name: string, description: string): Promise<Person> {
    const person = await firstValueFrom(
      this.http.post(`${environment.apiUrl}/people`, {
        name: name,
        description: description,
      })
    );
    // @ts-ignore
    return person;
  }
}
