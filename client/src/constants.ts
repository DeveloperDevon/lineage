interface MemberI {
  firstName: string
  middleName?: string
  lastName: string
  id: string
  parentIds: string[]
  siblingIds?: string[]
  spouseId?: string
  childrenIds?: string[]
  gender: 'MALE' | 'FEMALE'
}

export const members: MemberI[] = [
  {
    // familyId: '1', // Use if we want to extend app for other families
    firstName: 'Devon',
    middleName: 'Scott',
    lastName: 'Reichardt',
    id: '1',
    parentIds: ['10', '11'],
    siblingIds: ['20', '21'],
    spouseId: '2',
    childrenIds: ['3', '4'],
    gender: 'MALE'
  },
  {
    firstName: 'Chandler',
    middleName: 'Rae',
    lastName: 'Reichardt',
    id: '2',
    parentIds: ['30', '31'],
    siblingIds: ['32', '33'],
    spouseId: '1',
    childrenIds: ['3', '4'],
    gender: 'FEMALE'
  },
  {
    firstName: 'Clayton',
    middleName: 'Scott',
    lastName: 'Reichardt',
    id: '3',
    parentIds: ['1', '2'],
    siblingIds: ['4'],
    gender: 'MALE'
  },
  {
    firstName: 'Holland',
    middleName: 'Marie',
    lastName: 'Reichardt',
    id: '4',
    parentIds: ['1', '2'],
    siblingIds: ['3'],
    gender: 'FEMALE'
  },
]
