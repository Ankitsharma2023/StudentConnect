export const branches = [
  'Computer Science',
  'CSE (Data Science)',
  'CSE (IoT)',
  'Information Science',
  'AI & ML',
  'ECE',
  'ETE',
  'EEE',
  'VLSI',
  'Mechanical Engineering',
  'Robotics',
  'Chemical Engineering',
  'Civil Engineering'
] as const;
export const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

export type Branch = typeof branches[number];