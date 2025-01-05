import { auth } from "@/auth";
import { SuggestionBox } from "@/components/About/SuggestionBox";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import db from "@/lib/db";
import { redirect } from "next/navigation";

const About = async () => {
  const session = await auth();
  if (session) {
    const currentProfile = await db.profile.findUnique({
      where: { email: session?.user?.email ?? undefined },
    });
    if (!currentProfile) {
      redirect("/profile");
    }
  }

  return (
    <div className="min-h-screen p-8 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-black text-center mb-6 rotate-[-1deg] hover:rotate-[1deg] transition-transform">
          Meet the Team
        </h1>

        <p className="text-xl text-center mb-12 max-w-3xl mx-auto p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[1deg] hover:rotate-[-1deg] transition-transform">
          We&apos;re passionate about connecting students in a hassle-free,
          meaningful way. Our mission is to foster effortless networking and
          empower students to earn side incomes by growing the community.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Team Member Card 1 */}
          <div className="bg-pink-300 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="flex gap-4 items-start">
              <div className="w-24 h-24 bg-blue-400 border-4 border-black flex items-center justify-center text-4xl font-black">
                AS
              </div>
              <div>
                <h2 className="text-3xl font-black mb-1">Ankit Sharma</h2>
                <p className="text-xl font-bold mb-2">2nd Year</p>
                <p className="text-lg font-bold mb-4">CSE (Data-Science)</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "fullstack",
                    "finance",
                    "machinelearning",
                    "googledevelopergrouplead",
                    "webdevelopment",
                    "ai",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white px-3 py-1 border-2 border-black font-bold text-sm rotate-[-1deg] hover:rotate-[1deg] transition-transform"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="default"
                    className="bg-white border-2 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="default"
                    className="bg-white border-2 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="default"
                    className="bg-white border-2 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member Card 2 */}
          <div className="bg-green-300 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="flex gap-4 items-start">
              <div className="w-24 h-24 bg-purple-400 border-4 border-black flex items-center justify-center text-4xl font-black">
                AS
              </div>
              <div>
                <h2 className="text-3xl font-black mb-1">Aditya Srivastava</h2>
                <p className="text-xl font-bold mb-2">2nd Year</p>
                <p className="text-lg font-bold mb-4">CSE (IoT)</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white px-3 py-1 border-2 border-black font-bold text-sm rotate-[1deg] hover:rotate-[-1deg] transition-transform">
                    #iot
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="default"
                    className="bg-white border-2 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-300 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="flex gap-4 items-start">
              <div className="w-24 h-24 bg-purple-400 border-4 border-black flex items-center justify-center text-4xl font-black">
                KS
              </div>
              <div>
                <h2 className="text-3xl font-black mb-1">Kushal Srinivas</h2>
                <p className="text-xl font-bold mb-2">2nd Year</p>
                <p className="text-lg font-bold mb-4">Mechanical</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white px-3 py-1 border-2 border-black font-bold text-sm rotate-[1deg] hover:rotate-[-1deg] transition-transform">
                    #cool af
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="default"
                    className="bg-white border-2 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion Box */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">
            Have Suggestions?
          </h2>
          <SuggestionBox />
        </div>
      </div>
    </div>
  );
};

export default About;
