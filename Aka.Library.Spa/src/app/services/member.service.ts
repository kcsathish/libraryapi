import { Member } from './../members/interfaces/member';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SignedOutBook } from '../shared/signed-out-book';
import { MemberBook } from '../members/interfaces/member-book';

@Injectable()
export class MemberService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}${environment.apiPath}/members`;
  }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }

  getMember(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.apiUrl}/${id}`);
  }

  create(member: Member): Observable<Member> {
    return this.http.post<Member>(this.apiUrl, member);
  }

  update(member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.apiUrl}/${member.memberId}`, member);
  }

  getSignedOutBooks(member: Member): Observable<SignedOutBook []> {
    return this.http.get<SignedOutBook[]>(`${this.apiUrl}/${member.memberId}/books/signedOut`);
  }

  getMemberBookHistory(member: Member): Observable<SignedOutBook []> {
    return this.http.get<SignedOutBook[]>(`${this.apiUrl}/${member.memberId}/books/history`);
  }

  getProfileSignedOutBooks(member: Member): Observable<MemberBook []> {
    console.log('getSignedOutBooks');
    
    return this.http.get<MemberBook[]>(`${this.apiUrl}/${member.memberId}/books/signedOut`);
  }

  getProfileMemberBookHistory(member: Member): Observable<MemberBook []> {
    return this.http.get<MemberBook[]>(`${this.apiUrl}/${member.memberId}/books/history`);
  }
}
