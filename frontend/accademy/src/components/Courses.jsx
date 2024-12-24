import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://codecraftacademey.onrender.com/courses/level/normal'); // Use Axios to fetch data
        setCourses(response.data); // Set the response data
      } catch (err) {
        setError('Failed to fetch courses'); // Set error message
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchCourses();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading text while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's an issue with fetching
  }

  return (
    <section id="courses" className="py-16 bg-cyber-bg/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-neon-blue font-orbitron heading-font">Our Tech Courses</h2>
        <div className="grid grid-cols-1 justify-between md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-cyber-card p-6 rounded-lg course-card transition-transform duration-300 hover:scale-105 hover:shadow-lg "
            >
              {/* Display Course Image */}
              {course.imageUrl && (
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-2xl font-semibold mb-3 text-neon-blue font-orbitron heading-font">
                {course.title}
              </h3>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-neon-blue">PKR {course.price}</span>
                <a
                  href="#contact"
                  className="px-4 py-2 bg-neon-blue text-cyber-bg rounded-full hover:scale-105 transition-transform"
                >
                  Enroll
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
