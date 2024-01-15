export type Relationship =
  | "Mom"
  | "Dad"
  | "Brother"
  | "Sister"
  | "Wife"
  | "Husband"
  | "Son"
  | "Daughter"
  | "Parents"
  | "Parent"
  | "Spouse"
  | "Children"
  | "Child";

export type Member = {
  _id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email?: string;
  spouseId?: string;
  spouse?: Member[];
  childrenIds?: string[];
  children?: Member[];
  father?: Member
  mother?: Member
}

export type User = {
  id: number
  firstName: string
  middleName?: string
  lastName: string
  email?: string
  gender: 'male' | 'female'
  dob?: Date
}