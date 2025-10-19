import {
  Users,
  Lightbulb,
  Rocket,
  BookOpen,
  Laptop,
  Download,
} from "lucide-react";
import { usePDF } from "react-to-pdf";
// import logo from "figma:asset/07d8e17df5e034e28c949e3dae59bf2c6152b1a0.png";
const logo = "/logo-placeholder.png"; // You'll need to add your logo to the public folder

export default function App() {
  const { toPDF, targetRef } = usePDF({
    filename: "kni-poster.pdf",
    page: {
      margin: 0,
      format: "a4",
      orientation: "landscape",
    },
  });

  return (
    <div
      className="w-full h-screen bg-gradient-to-br from-[#3d4049] via-[#454856] to-[#4a4d5c] flex items-center justify-center p-8 relative"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Download Button */}
      <button
        onClick={() => toPDF()}
        className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-[#454856] font-semibold py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200"
      >
        <Download className="w-4 h-4" />
        Download PDF
      </button>

      {/* Poster Container - A3 Landscape (420mm x 297mm = 1.414:1) */}
      <div
        ref={targetRef}
        className="w-full max-w-[1400px] aspect-[1.414/1] bg-white rounded-lg shadow-2xl overflow-hidden relative"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative h-full flex flex-col">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#454856] to-[#525564] px-12 py-8">
            <div className="flex items-center justify-between gap-6">
              <img
                src={logo}
                alt="Koło Naukowe Informatyków"
                className="h-32 object-contain"
              />
              <h1
                className="text-white"
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "600",
                }}
              >
                Warsaw University of Technology
              </h1>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="flex-1 grid grid-cols-2 gap-15 px-12 py-8">
            {/* Left Column - About */}
            <div className="flex flex-col justify-center">
              <h2
                className="text-[#454856] mb-6"
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "700",
                }}
              >
                Join Our Community
              </h2>
              <p
                className="text-slate-700 leading-relaxed mb-8"
                style={{ fontSize: "1.6rem", lineHeight: "1.5" }}
              >
                We are a community of students united by a passion for computer
                science and the desire for practical development. Our goal is to
                create a space where you can gain experience, develop your
                technical skills, and collaborate on interesting projects.
              </p>
              <div className="flex flex-col gap-10">
                <div className="bg-[#A8BCE5]/10 border-l-4 border-[#A8BCE5] px-6 py-3 rounded w-fit">
                  <p
                    className="text-[#454856]"
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      marginBottom: "20px",
                    }}
                  >
                    Learn • Create • Innovate
                  </p>
                </div>
                <div className="flex items-center gap-8 mt-8">
                  <div className="flex items-center gap-4">
                    <Laptop
                      className="w-8 h-8 text-[#454856] flex-shrink-0"
                      style={{ marginTop: "10px" }}
                    />
                    <span
                      className="text-[#454856]"
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: "500",
                      }}
                    >
                      Open to all students
                    </span>
                  </div>
                  <div className="h-8 w-px bg-[#A8BCE5]/40"></div>
                  <span
                    className="text-[#454856]"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "500",
                    }}
                  >
                    No experience required
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Activities */}
            <div className="grid grid-cols-2 gap-4">
              {/* Workshop Card */}
              <div className="bg-gradient-to-br from-[#A8BCE5]/15 to-[#A8BCE5]/5 rounded-xl p-8 border-2 border-[#A8BCE5]/30 flex flex-col">
                <div className="bg-[#454856] w-20 h-20 rounded-xl flex items-center justify-center mb-5">
                  <BookOpen className="w-12 h-12 text-[#A8BCE5]" />
                </div>
                <h3
                  className="text-[#454856] mb-4"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                  }}
                >
                  Workshops & Lectures
                </h3>
                <p
                  className="text-slate-600 flex-1"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.4",
                  }}
                >
                  Learn from peers and industry specialists
                </p>
              </div>

              {/* Skills Card */}
              <div className="bg-gradient-to-br from-[#A8BCE5]/15 to-[#A8BCE5]/5 rounded-xl p-8 border-2 border-[#A8BCE5]/30 flex flex-col">
                <div className="bg-[#454856] w-20 h-20 rounded-xl flex items-center justify-center mb-5">
                  <Lightbulb className="w-12 h-12 text-[#A8BCE5]" />
                </div>
                <h3
                  className="text-[#454856] mb-4"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                  }}
                >
                  Skill Development
                </h3>
                <p
                  className="text-slate-600 flex-1"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.4",
                  }}
                >
                  Combine theory with practice
                </p>
              </div>

              {/* Collaboration Card */}
              <div className="bg-gradient-to-br from-[#A8BCE5]/15 to-[#A8BCE5]/5 rounded-xl p-8 border-2 border-[#A8BCE5]/30 flex flex-col">
                <div className="bg-[#454856] w-20 h-20 rounded-xl flex items-center justify-center mb-5">
                  <Users className="w-12 h-12 text-[#A8BCE5]" />
                </div>
                <h3
                  className="text-[#454856] mb-4"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                  }}
                >
                  Collaboration
                </h3>
                <p
                  className="text-slate-600 flex-1"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.4",
                  }}
                >
                  Work together on exciting challenges
                </p>
              </div>

              {/* Projects Card */}
              <div className="bg-gradient-to-br from-[#A8BCE5]/15 to-[#A8BCE5]/5 rounded-xl p-8 border-2 border-[#A8BCE5]/30 flex flex-col">
                <div className="bg-[#454856] w-20 h-20 rounded-xl flex items-center justify-center mb-5">
                  <Rocket className="w-12 h-12 text-[#A8BCE5]" />
                </div>
                <h3
                  className="text-[#454856] mb-4"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                  }}
                >
                  Real Projects
                </h3>
                <p
                  className="text-slate-600 flex-1"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.4",
                  }}
                >
                  From web apps to university solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements - Removed to prevent PDF rendering issues */}
      </div>
    </div>
  );
}
