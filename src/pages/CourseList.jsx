import React, { useState } from "react";
import { FaRegClock, FaChalkboardTeacher, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const courses = [
	{
		id: 1,
		title: "Full-Stack Web Development",
		slug: "Full-Stack-Web-Development",
		description: "Learn to build dynamic websites and web apps with HTML, CSS, JavaScript, React, and Node.js.",
		instructor: "John Doe",
		duration: "12 Weeks",
		price: "$199",
		category: "Web Development",
		image: "https://via.placeholder.com/400x250",
	},
	{
		id: 2,
		title: "Python for Data Science",
		slug: "Full-Stack-Web-Development",
		description: "Master Python and use it for data analysis, machine learning, and data visualization.",
		instructor: "Jane Smith",
		duration: "8 Weeks",
		price: "$149",
		category: "Data Science",
		image: "https://via.placeholder.com/400x250",
	},
	{
		id: 3,
		title: "UI/UX Design Bootcamp",
		slug: "Full-Stack-Web-Development",
		description: "Learn the basics of UI/UX design and become proficient with design tools like Figma and Adobe XD.",
		instructor: "Alice Brown",
		duration: "10 Weeks",
		price: "$179",
		category: "Design",
		image: "https://via.placeholder.com/400x250",
	},
	// Add more course data as needed
];

const CourseList = () => {
	const [categoryFilter, setCategoryFilter] = useState("All");

	// Filter courses based on selected category
	const filteredCourses = categoryFilter === "All"
		? courses
		: courses.filter(course => course.category === categoryFilter);

	return (
		<div className="bg-gray-50 py-16">
			<div className="container mx-auto px-6 text-center">
				<h2 className="text-4xl font-bold text-gray-800 mb-8">Our Courses</h2>

				{/* Filter Section */}
				<div className="mb-12">
					<select
						value={categoryFilter}
						onChange={(e) => setCategoryFilter(e.target.value)}
						className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none"
					>
						<option value="All">All Categories</option>
						<option value="Web Development">Web Development</option>
						<option value="Data Science">Data Science</option>
						<option value="Design">Design</option>
						{/* Add more categories if needed */}
					</select>
				</div>

				{/* Course Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					{filteredCourses.map((course) => (
						<div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
							<img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
							<div className="p-6">
								<h3 className="text-2xl font-semibold text-gray-800 mb-2">{course.title}</h3>
								<p className="text-gray-600 mb-4">{course.description}</p>
								<div className="flex items-center text-gray-600 mb-4">
									<FaRegClock className="text-lg mr-2" />
									<span>{course.duration}</span>
								</div>
								<div className="flex items-center text-gray-600 mb-4">
									<FaChalkboardTeacher className="text-lg mr-2" />
									<span>{course.instructor}</span>
								</div>
								<div className="text-xl font-bold text-blue-600 mb-4">{course.price}</div>
								<Link
									to={`/course/${course.slug}`}
									className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
								>
									Enroll Now
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* Pagination (optional) */}
				<div className="mt-12">
					<ul className="flex justify-center space-x-4">
						<li>
							<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
								Previous
							</button>
						</li>
						<li>
							<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
								1
							</button>
						</li>
						<li>
							<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
								2
							</button>
						</li>
						<li>
							<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
								Next
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CourseList;
