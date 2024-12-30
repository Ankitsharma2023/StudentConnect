import React from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { years } from "@/data/branches";

interface StudentProfileProps {
  student: {
    name: string;
    email:string;
    usn: string;
    photoURL: string|null;
    branch: string | '';
    year: number;
    tags: string[];
    about: string;
    linkedin: string|null;
    github: string|null;
    instagram: string|null;
    
  };
}

// Define the StudentProfile component
const StudentProfile: React.FC<StudentProfileProps> = ({ student }) => {
  return (
    <div className="min-h-screen py-8 px-4">
      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Header Section with Profile Circle */}
          <div className="flex items-center gap-6 mb-8">
            <div>
            <img className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold" src={student.photoURL||""} alt='Profile Photo' referrerPolicy="no-referrer"/>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{student.name}</h1>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">USN:</span>
                  <span className="font-medium text-violet-600">{student.usn}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Branch:</span>
                  <span className="font-medium text-violet-600">{student.branch}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Year Badge */}
          <div className="mb-8">
            <span className="inline-block bg-violet-100 text-violet-800 px-4 py-1 rounded-full text-sm font-medium">
              {years[student.year-1]}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {student.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed">{student.about}</p>
          </div>

          {/* Social Links */}
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Connect With Me</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={student.github??""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a
                href={student.linkedin??""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a
                href={student.instagram??""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </a>
              <a
                href={`mailto:${student.email}`}
                className="flex items-center gap-2 text-gray-600 hover:text-violet-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
