'use client'
import { Tags } from "lucide-react";


const About =  () => {
    return  <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-['Poppins']">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Profile Section */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 relative group">
              <img
                src="/profile.jpg"
                alt="Ankit Sharma"
                className="rounded-2xl object-cover w-full h-full shadow-lg 
                         transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl 
                            group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-2 
                           hover:text-gray-700 transition-colors duration-300">
                Ankit Sharma
              </h1>
              <div className="space-y-2 text-gray-600">
                <p className="text-lg">2nd Year</p>
                <p className="text-lg">CSE (Data-Science)</p>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          <Tags />

          {/* About Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

          </div>
    </div>
  </div>
}
export default About;