import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'


import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div>
      <Header/>
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We’d love to hear from you! Reach out to us for any inquiries, feedback, or collaborations.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaEnvelope className="mx-auto h-10 w-10 text-blue-600" />
            <h2 className="mt-4 text-xl font-bold text-gray-900">Email</h2>
            <p className="mt-2 text-gray-600">support@example.com</p>
            <p className="mt-2 text-gray-600">sales@example.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaPhone className="mx-auto h-10 w-10 text-green-600" />
            <h2 className="mt-4 text-xl font-bold text-gray-900">Phone</h2>
            <p className="mt-2 text-gray-600">+1 (123) 456-7890</p>
            <p className="mt-2 text-gray-600">+1 (987) 654-3210</p>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaMapMarkerAlt className="mx-auto h-10 w-10 text-red-600" />
            <h2 className="mt-4 text-xl font-bold text-gray-900">Address</h2>
            <p className="mt-2 text-gray-600">123 Business St.</p>
            <p className="mt-2 text-gray-600">New York, NY 10001, USA</p>
          </div>

          {/* Working Hours */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaClock className="mx-auto h-10 w-10 text-yellow-600" />
            <h2 className="mt-4 text-xl font-bold text-gray-900">Working Hours</h2>
            <p className="mt-2 text-gray-600">Mon - Fri: 9 AM - 6 PM</p>
            <p className="mt-2 text-gray-600">Sat - Sun: Closed</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
          <form className="mt-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                // rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Follow Us</h2>
          <div className="mt-6 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <FaLinkedin className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <FaTwitter className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-800">
              <FaFacebook className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Our Location</h2>
          <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792036926!2d-73.98773168459413!3d40.74844447932799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633023226781!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  );
}