import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private http: HttpClient) {}
  baseUrl = environment.apiUrl;
  members = signal<Member[]>([]);
  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'user').subscribe({
      next: (members) => this.members.set(members),
    });
  }

  getMember(username: string) {
    const member = this.members().find((x) => x.userName === username);
    if (member != undefined) {
      return of(member);
    }
    return this.http.get<Member>(this.baseUrl + 'user/' + username);
  }

  updateMember(member: Member) {
    return this.http.put(this.baseUrl + 'user', member).pipe(
      tap(() => {
        this.members.update((members) =>
          members.map((m) => (m.userName === member.userName ? member : m))
        );
      })
    );
  }
}
