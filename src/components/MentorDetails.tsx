import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { Sidebar } from "../components/Sidebar";
import "./MentorDetails.css";

const MentorDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to access route state
  const [activeSection, setActiveSection] = useState("projects");

  // Retrieve the mentor's image URL from the route state
  const mentorImage = location.state?.image || "/default-mentor.jpg"; // Fallback to a default image

  const showSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="flex p-6 bg-[#fff1b8] min-h-screen flex-col md:flex-row">
      {/* Sidebar component */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 p-6 ml-0 md:ml-24 relative">
        {/* Back button to navigate to the previous page */}
        <button
          className="back-button absolute top-6 -left-5 bg-[#facc15] text-black p-2 rounded-full shadow-md hover:bg-[#f59e0b] transition-colors"
          onClick={() => navigate(-1)}
        >
          &lt; {/* Unicode arrow for "back" */}
        </button>

        {/* Flex container for video and mentor sidebar */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Video container */}
          <div className="video-container w-full md:w-[100%]">
            <video controls className="w-full h-auto">
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Mentor sidebar with profile picture and navigation */}
          <div className="mentor-sidebar w-full md:w-[20%] bg-white p-5 rounded-lg shadow-lg">
            {/* Mentor profile picture */}
            <img
              src={mentorImage} // Use the mentor's image URL from route state
              alt="Mentor"
              className="w-[100px] h-[100px] rounded-full mx-auto mb-5"
            />
            {/* Mentor's name */}
            <h2 className="text-xl font-semibold text-center mb-5 capitalize">
              {name} {/* Display the mentor's name from URL parameters */}
            </h2>
            {/* Separator line */}
            <div className="separator border-t border-gray-200 my-4"></div>
            {/* List of sections (projects, education, resume) */}
            <ul className="list-none p-0">
              {["projects", "education", "resume"].map((section) => (
                <li
                  key={section}
                  className={`m-[15px_0] cursor-pointer transition-colors duration-300 
                    ${activeSection === section 
                      ? "font-bold underline text-[#facc15]" // Active section styling
                      : "hover:text-[#facc15]" // Hover styling
                    }`}
                  onClick={() => showSection(section)} // Set active section on click
                >
                  {/* Capitalize the first letter of the section name */}
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content sections for projects, education, and resume */}
        <div className="mt-6">
          {["projects", "education", "resume"].map((section) => (
            <div
              key={section}
              className={`content-section ${
                activeSection === section ? "block" : "hidden" // Show/hide based on active section
              }`}
            >
              {/* Section heading */}
              <h2 className="font-semibold text-2xl mb-4 capitalize">
                {section}
              </h2>
              {/* Section content */}
              <div className={section === "projects" 
                ? "projects-box bg-white p-5 rounded-lg shadow-lg" // Projects-specific styling
                : "bg-white p-4 shadow rounded-lg" // Default styling for other sections
              }>
                {/* Projects section content */}
                {section === "projects" && (
                  <>
                    <h3 className="text-xl font-semibold mb-2.5">Project 1</h3>
                    <p className="mb-[15px]">Description of Project 1.</p>
                    <h3 className="text-xl font-semibold mb-2.5">Project 2</h3>
                    <p className="mb-[15px]">Description of Project 2.</p>
                    <h3 className="text-xl font-semibold mb-2.5">Project 3</h3>
                    <p className="mb-[15px]">Description of Project 3.</p>
                  </>
                )}
                {/* Education section content */}
                {section === "education" && (
                  <>
                    <h3 className="font-semibold">University Name</h3>
                    <p>Degree in Computer Science.</p>
                  </>
                )}
                {/* Resume section content */}
                {section === "resume" && (
                  <p>
                    Download the resume{" "}
                    <a href="#" className="text-blue-500 underline">
                      here
                    </a>
                    .
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MentorDetails;