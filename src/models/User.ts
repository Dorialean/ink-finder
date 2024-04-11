import { Moment } from 'moment';

export type User = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  fatherName: string;
  birthday: Moment;
} | null;
