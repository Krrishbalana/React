import React from 'react'

function About() {
  return (
    <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="h-[750px] w-[550px] object-center object-cover">
                        <img
                            className='rounded-4xl shadow-xl hover:shadow-2xl hover:shadow-amber-300 duration-500'
                            src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12 selection:text-amber-500">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About Me
                        </h2>
                        <p className="mt-6 text-gray-600">
                        I'm Krish Balana, a passionate and self-driven full-stack web developer currently pursuing my Bachelor's in Computer Science at Chandigarh University. With a solid foundation in C++, JavaScript, React.js, Node.js, and modern tools like Framer Motion and Tailwind CSS, I specialize in building visually engaging and user-focused web applications.
                        <br/>
                        I have a strong interest in solving real-world problems through code and have demonstrated this through various projects. My DSA Visualizer helps students understand sorting, searching, and graph algorithms through animated simulations, while my AI-Powered Career Path Generator leverages OpenAI to create custom learning roadmaps based on user goals. I’ve also built a Smart Interview Dashboard for tracking DSA progress, mock interviews, and GitHub-style streaks—all with a beautiful, responsive UI.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Beyond frontend creativity, I have hands-on experience in backend development using Node.js, Express.js, and MongoDB, and I ensure security with tools like JWT and bcrypt. I’ve completed a virtual internship with Accenture Nordics, gaining exposure to real-world software practices in architecture, testing, and security.
                        <br />
                        With over 250+ Leetcode problems solved, I consistently refine my problem-solving and algorithmic thinking. I believe in writing clean, efficient code and am always eager to learn new technologies and best practices in software development.
                        <br />
                        Whether it’s designing a clean UI or debugging a tricky backend issue, I approach every challenge with curiosity and persistence. I'm currently looking for opportunities to contribute to innovative tech teams and grow as a developer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About
