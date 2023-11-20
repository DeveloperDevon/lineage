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

export interface MemberI {
  _id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email?: string;
  spouseId?: string;
  spouse?: MemberI[];
  childrenIds?: string[];
  children?: MemberI[];
}
