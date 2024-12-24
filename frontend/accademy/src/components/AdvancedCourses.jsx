import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdvancedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvancedCourses = async () => {
      try {
        const response = await axios.get('https://codecraftacademey.onrender.com/courses/level/advance');
        setCourses(response.data); // Set the fetched courses data
      } catch (err) {
        setError('Failed to fetch advanced courses'); // Set error message
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchAdvancedCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section id="pricing" className="py-16 bg-cyber-bg/70">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-neon-blue font-orbitron heading-font">
          Advanced Tech Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-cyber-card p-4 rounded-lg course-card transition-transform duration-300 hover:scale-105 hover:shadow-lg "
            >
              {/* Image Section */}
              <img
                src={course.imageUrl || "default-image-url"} // Use the image URL from the course data
                alt={course.title}
                className="w-full h-56 object-cover mb-4 rounded-lg"  // Adjusted image height
              />
              <i className={`${course.icon} text-3xl text-neon-blue mb-4`}></i>  {/* Adjusted icon size */}
              <h3 className="text-xl font-orbitron font-semibold mb-3 text-neon-blue heading-font">  {/* Adjusted font size */}
                {course.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">{course.description}</p>  {/* Adjusted text size */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-neon-blue">{course.price}</span>  {/* Adjusted price font size */}
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

export default AdvancedCourses;
