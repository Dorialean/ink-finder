import { Moment } from 'moment';

export type User = {
  id: string | undefined;
  email: string | undefined;
  phone: string | null | undefined;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  fatherName: string | null | undefined;
  birthday: Moment | null | undefined;
} | null;
