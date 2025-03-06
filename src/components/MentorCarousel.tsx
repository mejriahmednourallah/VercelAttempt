// Import necessary modules and components
import React, { useState, useEffect, useRef } from "react"; // React hooks for state, effects, and refs
import { useNavigate } from "react-router-dom"; // Hook for programmatic navigation
import "./MentorCarousel.css"; // Custom CSS for additional styling
import { Sidebar } from "./Sidebar"; // Import the Sidebar component

// Define the MentorCarousel component
const MentorCarousel: React.FC = () => {
  // State to track the current index of the mentor carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track the current index of the success story
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  // Ref to access the carousel container DOM element
  const carouselRef = useRef<HTMLDivElement>(null);
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Array of mentor objects, each containing a name and image
  const mentors = [
    { name: "John", image: "/mentor.jpg" },
    { name: "Mark", image: "/mentor2.jpg" },
    { name: "Tony", image: "/mentor3.jpg" },
  ];

  // Array of success story objects, each containing a title, description, and video URL
  const successStories = [
    {
      title: "Success Story 1",
      description:
        "Notre mentor a dirigé des projets transformateurs, tels que le lancement d’une plateforme e-commerce mondiale.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Success Story 2",
      description: "Un autre projet réussi avec des résultats impressionnants.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Success Story 3",
      description: "Un troisième projet qui a changé la donne.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  // Function to handle moving to the next mentor in the carousel
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, mentors.length - 1));
  };

  // Function to handle moving to the previous mentor in the carousel
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Function to handle changing the displayed success story
  const handleStoryChange = (index: number) => {
    setCurrentStoryIndex(index);
  };

  // useEffect to handle carousel animation when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      // Get the width of the first mentor card
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
      // Define the space between cards
      const spaceBetween = 20;
      // Get the width of the carousel container
      const containerWidth = carouselRef.current.clientWidth;
      // Calculate the offset to center the active card
      const offset =
        -currentIndex * (cardWidth + spaceBetween) +
        containerWidth / 2 -
        cardWidth / 2;
      // Apply the offset to the carousel using CSS transform
      carouselRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentIndex]);

  // Return the JSX structure of the component
  return (
    <div className="flex p-6 bg-[#fff1b8] min-h-screen flex-col md:flex-row">
      {/* Sidebar component */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 p-6 ml-0 md:ml-24">
        {/* Carousel container */}
        <div
          className="relative w-full max-w-full md:max-w-3xl overflow-hidden"
          id="carousel-container"
        >
          {/* Previous button for the carousel */}
          <button
            id="prev"
            className="bg-gray-300 p-2 rounded-full shadow-md absolute left-10 top-1/2 transform -translate-y-1/2 z-10"
            onClick={handlePrev}
          >
            &#9664; {/* Unicode arrow for "previous" */}
          </button>

          {/* Carousel with mentor cards */}
          <div
            id="carousel"
            className="flex transition-transform duration-300 ease-in-out"
            ref={carouselRef}
          >
            {/* Map through the mentors array to render each mentor card */}
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className={`mentor-card ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                {/* Mentor image */}
                <img
                  src={mentor.image}
                  className="mx-auto rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
                  alt={mentor.name}
                />
                {/* Mentor name */}
                <h2 className="font-semibold mt-2 text-lg">{mentor.name}</h2>
                {/* Button to navigate to mentor details */}
                <button
                  onClick={() => navigate(`/mentor/${mentor.name}`, { state: { image: mentor.image } })}
                  className="bg-[#004d4d] text-white p-2 mt-2 rounded"
                >
                  Détails
                </button>
              </div>
            ))}
          </div>

          {/* Next button for the carousel */}
          <button
            id="next"
            className="bg-gray-300 p-2 rounded-full shadow-md absolute right-10 top-1/2 transform -translate-y-1/2 z-10"
            onClick={handleNext}
          >
            &#9654; {/* Unicode arrow for "next" */}
          </button>
        </div>

        {/* Success stories section */}
        <div className="mt-6 bg-white p-6 shadow rounded-lg">
          {/* Success stories heading */}
          <h2 className="font-semibold text-2xl mb-6">Success Stories</h2>

          {/* Map through the successStories array to render each story */}
          {successStories.map((story, index) => (
            <div
              key={index}
              className={`success-story ${
                index === currentStoryIndex ? "active" : ""
              } mb-4`}
            >
              {/* Video container */}
              <div className="video-container mb-4">
                <video controls className="w-full max-w-full">
                  <source src={story.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Story content (title and description) */}
              <div className="story-content">
                <h3 className="text-xl font-semibold">{story.title}</h3>
                <p>{story.description}</p>
              </div>
            </div>
          ))}

          {/* Story navigation dots */}
          <div className="story-navigation mt-4 flex justify-center space-x-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentStoryIndex ? "bg-[#004d4d]" : "bg-gray-300"
                }`}
                onClick={() => handleStoryChange(index)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// Export the MentorCarousel component as the default export
export default MentorCarousel;