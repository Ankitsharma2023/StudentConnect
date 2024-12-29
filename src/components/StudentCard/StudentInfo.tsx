import React from 'react';

type StudentInfoProps = {
  usn: string;
  branch: string;
};

export const StudentInfo: React.FC<StudentInfoProps> = ({ usn, branch }) => {
  return (
    <div className="space-y-1 mt-2">
      <p className="text-sm text-gray-600">
        <span className="font-medium">USN:</span> {usn}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Branch:</span> {branch}
      </p>
    </div>
  );
};