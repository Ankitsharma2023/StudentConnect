import { auth } from "@/auth";
import { SuggestionBox } from "@/components/About/SuggestionBox";
import { Tags } from "@/components/About/Tags";
import Socials from "@/components/Socials/SocialLinks";
import db from "@/lib/db";
import { redirect } from "next/navigation";

const About = async () => {
    const session = await auth();
    if (session) {
        const currentProfile = await db.profile.findUnique({
            where: { email: session?.user?.email ?? undefined }
        });
        if (!currentProfile) {
            redirect("/profile");
        }
    }

    return (
        <div className="min-h-screen h-full flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-['Poppins']">
            
            <div className="max-w-4xl mx-auto flex flex-col justify-center items-center md:items-start">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full flex flex-col justify-center items-center">
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-48 h-48 relative group">
                                <img
                                    src="/profile.jpg"
                                    alt="Ankit Sharma"
                                    className="rounded-2xl object-cover w-full h-full shadow-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl group-hover:bg-opacity-20 transition-all duration-300"></div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-4xl font-bold text-gray-800 mb-2 hover:text-gray-700 transition-colors duration-300">
                                    Ankit Sharma
                                </h1>
                                <div className="space-y-2 text-gray-600">
                                    <p className="text-lg">2nd Year</p>
                                    <p className="text-lg">CSE (Data-Science)</p>
                                </div>
                            </div>
                        </div>

                        
                        <Tags />
                        <div className="w-full flex justify-center items-center">
                            <Socials links={{ github: "https://github.com/Ankitsharma2023", linkedin: "https://www.linkedin.com/in/ankit-sharma-4a727828b/", instagram: "https://www.instagram.com/ankit__sharma_0866/" }} />
                        </div>
                        
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Hello! I’m an engineering student at Bangalore Institute of Technology, specializing in full-stack development and machine learning. I’m passionate about building innovative projects and using technology to solve real-world problems.
                                <br />
                                <br />
                                As the Google Developer Group Lead 2024 (former GDSC), I’ve created a tech community of over 1000+ members, where we collaborate, share ideas, and grow together.

                                I love learning, exploring new technologies, and helping others along the way.
                                <br />
                                Let’s connect and make something amazing!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="max-w-4xl mx-auto flex flex-col justify-center items-center md:items-start">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full flex flex-col justify-center items-center">
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-48 h-48 relative group">
                                <img
                                    src="https://lh3.googleusercontent.com/a/ACg8ocLJO8V2dzEB09C0u0MpowJ1H4RTbJ_te6hDtP0r-qOC4wthvw=s96-c"
                                    alt="Ankit Sharma"
                                    referrerPolicy="no-referrer"
                                    className="rounded-2xl object-cover w-full h-full shadow-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl group-hover:bg-opacity-20 transition-all duration-300"></div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-4xl font-bold text-gray-800 mb-2 hover:text-gray-700 transition-colors duration-300">
                                    Aditya Srivastava
                                </h1>
                                <div className="space-y-2 text-gray-600">
                                    <p className="text-lg">2nd Year</p>
                                    <p className="text-lg">CSE (IoT)</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="w-full flex justify-center items-center mt-4">
                            <Socials links={{ github: "https://github.com/Addy897", linkedin: null, instagram: null }} />
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="w-full col-span-2 flex justify-center items-center mt-8 px-4">
                <div className="w-full sm:w-1/2">
                    <SuggestionBox />
                </div>
            </div>
        </div>
    );
};

export default About;
