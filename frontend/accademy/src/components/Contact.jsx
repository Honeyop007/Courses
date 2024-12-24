import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [courses, setCourses] = useState([]);
  const [advancedCourses, setAdvancedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    message: '',
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const responseCourses = await axios.get('https://codecraftacademey.onrender.com/courses/level/normal');
        const responseAdvancedCourses = await axios.get('https://codecraftacademey.onrender.com/courses/level/advance');
        setCourses(responseCourses.data); // Regular courses
        setAdvancedCourses(responseAdvancedCourses.data); // Advanced courses
      } catch (err) {
        setError('Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://codecraftacademey.onrender.com/send-email', formData);
      alert('Enrollment submitted successfully!');
    } catch (error) {
      alert('Error submitting enrollment');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Combine both regular and advanced courses
  const allCourses = [...courses, ...advancedCourses];

  return (
    <section id="contact" className="py-16 bg-cyber-bg/70">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-neon-blue font-orbitron heading-font">
          Course Enrollment
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-cyber-card p-8 rounded-lg shadow-neon space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-cyber-bg text-white border border-cyber-accent rounded-lg focus:ring-2 focus:ring-neon-blue"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-cyber-bg text-white border border-cyber-accent rounded-lg focus:ring-2 focus:ring-neon-purple"
            />
          </div>
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-300">
              Select Course
            </label>
            <select
              id="course"
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-cyber-bg text-white border border-cyber-accent rounded-lg focus:ring-2 focus:ring-green-400"
            >
              <option value="">Choose a Course</option>
              {allCourses.map((course, index) => (
                <option key={index} value={course.title}>
                  {course.title} - {course.price}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Additional Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-cyber-bg text-white border border-cyber-accent rounded-lg focus:ring-2 focus:ring-neon-blue"
              placeholder="Any questions or special requirements?"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-neon-blue text-cyber-bg font-semibold rounded-lg hover:bg-opacity-80 transition-all shadow-neon"
            >
              Submit Enrollment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
