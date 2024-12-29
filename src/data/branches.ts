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

export type Branch = typeof branches[number];