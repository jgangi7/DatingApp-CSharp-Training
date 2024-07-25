import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Photo } from 'src/app/_models/photo';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css',
})
export class MemberDetailComponent implements OnInit {
  member?: Member;
  aboutTabVisable = true;
  interestTabVisable = false;
  photosTabVisable = false;
  messagesTabVisable = false;
  images?: Photo[];
  constructor(
    private memberService: MembersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get('username');
    if (!username) return;
    this.memberService.getMember(username).subscribe({
      next: (member) => {
        this.member = member;
        this.member.photos.map((p) => this.images?.push(p));
      },
    });
  }

  openTab(tabName: string): void {
    if (tabName == 'Intro') {
      this.aboutTabVisable = true;
      this.interestTabVisable = false;
      this.messagesTabVisable = false;
      this.photosTabVisable = false;
    } else if (tabName == 'Interests') {
      this.aboutTabVisable = false;
      this.interestTabVisable = true;
      this.messagesTabVisable = false;
      this.photosTabVisable = false;
    } else if (tabName == 'Photos') {
      this.aboutTabVisable = false;
      this.interestTabVisable = false;
      this.messagesTabVisable = false;
      this.photosTabVisable = true;
    } else if (tabName == 'Messages') {
      this.aboutTabVisable = false;
      this.interestTabVisable = false;
      this.messagesTabVisable = true;
      this.photosTabVisable = false;
    }
  }
}
