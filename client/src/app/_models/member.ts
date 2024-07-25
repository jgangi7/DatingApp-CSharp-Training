import { Photo } from './photo';

export interface Member {
  id: number;
  userName: string;
  interests: string;
  age: number;
  photoUrl: string;
  knownAs: string;
  created: Date;
  lastActive: Date;
  gender: string;
  introduction: string;
  lookingFor: string;
  city: string;
  country: string;
  photos: Photo[];
}
