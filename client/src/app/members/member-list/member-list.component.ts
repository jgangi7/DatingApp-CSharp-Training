import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { MemberCardComponent } from "../../memebers/member-card/member-card.component";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];
  constructor(private memberService: MembersService) {}
  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    // this.memberService.getMembers().subscribe({
    //   next: (members) => (this.members = members),
    //   error: (error) => console.log(error),
    // });
    this.memberService.getMembers().subscribe({
      next: (m) => (this.members = m),
    });
  }
}
