import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, Users, Calculator, CreditCard, Calendar, Award, ChevronRight, ArrowLeft, Monitor, Smartphone, Tablet } from 'lucide-react';

const ChatProj = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(null);

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Employee Management",
      description: "Store and manage employee details, salaries, and job roles with comprehensive profiles."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Payroll Processing",
      description: "Automate salary calculations, overtime, bonuses, and deductions with precision."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payments & Transfers",
      description: "Record salary disbursements via different payment methods and bank transfers."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Tax Management",
      description: "Automatically calculate tax deductions, insurance, and other contributions."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Leave Management",
      description: "Track employee leave requests, approvals, and maintain leave balances."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Benefits Management",
      description: "Manage employee benefits such as medical and travel allowances."
    }
  ];

  const techStack = [
    { name: "PHP", category: "Backend", color: "#decfb8" },
    { name: "MySQL", category: "Database", color: "#d4c5a9" },
    { name: "PDO", category: "Database Layer", color: "#cab99a" },
    { name: "HTML/CSS", category: "Frontend", color: "#c0ad8b" },
    { name: "JavaScript", category: "Frontend", color: "#b6a17c" }
  ];

  const databaseTables = [
    "Employees", "Payroll", "Deductions", "Payments", "Taxes", "Leaves", "Benefits"
  ];

  const mockImages = [
    { id: 1, title: "Dashboard Overview", type: "desktop" },
    { id: 2, title: "Employee Management", type: "desktop" },
    { id: 3, title: "Payroll Processing", type: "desktop" },
    { id: 4, title: "Mobile Interface", type: "mobile" }
  ];

  const challenges = [
    {
      title: "Complex Salary Calculations",
      solution: "Implemented automated calculation engine for overtime, bonuses, and various deduction types with configurable rules."
    },
    {
      title: "Tax Compliance",
      solution: "Built flexible tax calculation system that adapts to different tax brackets and regulatory requirements."
    },
    {
      title: "Data Security",
      solution: "Implemented secure authentication, encrypted sensitive data, and established proper access controls."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2eb] to-[#ede6d3]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#decfb8] to-[#d4c5a9] text-[#5a4a3a]">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <ArrowLeft 
                className="w-6 h-6 mr-4 cursor-pointer hover:scale-110 transition-transform"
                onClick={() => window.history.back()}
              />
              <h1 className="text-5xl font-bold mb-4">Payroll Management System</h1>
            </div>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              A comprehensive solution for handling employee payroll processes, including salary calculations, 
              deductions, bonuses, tax management, leave tracking, and payments with regulatory compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://github.com/IsaacVic-Dark/Payroll-System"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#5a4a3a] text-white rounded-lg hover:bg-[#4a3a2a] transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </a>
              <button className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg hover:bg-opacity-30 transition-colors">
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white bg-opacity-50 backdrop-blur-sm border-b border-[#decfb8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Features' },
              { id: 'tech', label: 'Technology' },
              { id: 'screenshots', label: 'Screenshots' },
              { id: 'challenges', label: 'Challenges' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#5a4a3a] text-[#5a4a3a]'
                    : 'border-transparent text-gray-500 hover:text-[#5a4a3a] hover:border-[#decfb8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#5a4a3a] mb-6">Project Overview</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The Payroll Management System is a robust, full-stack web application designed to streamline 
                  and automate payroll operations for businesses of all sizes. Built with PHP and MySQL, 
                  this system ensures accurate payroll processing while maintaining compliance with financial regulations.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white bg-opacity-60 p-4 rounded-lg border border-[#decfb8]">
                    <h4 className="font-semibold text-[#5a4a3a] mb-2">Duration</h4>
                    <p className="text-gray-600">3 months</p>
                  </div>
                  <div className="bg-white bg-opacity-60 p-4 rounded-lg border border-[#decfb8]">
                    <h4 className="font-semibold text-[#5a4a3a] mb-2">Role</h4>
                    <p className="text-gray-600">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#decfb8] to-[#d4c5a9] p-8 rounded-2xl shadow-xl">
                  <div className="bg-white bg-opacity-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-[#5a4a3a] mb-4">Key Achievements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-[#5a4a3a] mt-0.5 mr-2 flex-shrink-0" />
                        <span>Automated payroll processing reducing manual work by 85%</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-[#5a4a3a] mt-0.5 mr-2 flex-shrink-0" />
                        <span>Implemented comprehensive tax calculation system</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-[#5a4a3a] mt-0.5 mr-2 flex-shrink-0" />
                        <span>Built secure employee data management system</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-[#5a4a3a] mt-0.5 mr-2 flex-shrink-0" />
                        <span>Designed intuitive user interface for HR teams</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div>
            <h2 className="text-3xl font-bold text-[#5a4a3a] mb-8 text-center">Core Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white bg-opacity-60 p-6 rounded-xl border border-[#decfb8] hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#decfb8] rounded-lg text-[#5a4a3a] mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#5a4a3a]">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-[#decfb8] to-[#d4c5a9] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#5a4a3a] mb-6 text-center">Database Structure</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {databaseTables.map((table, index) => (
                  <div 
                    key={index}
                    className="bg-white bg-opacity-70 p-4 rounded-lg text-center border border-white border-opacity-50"
                  >
                    <Database className="w-6 h-6 mx-auto mb-2 text-[#5a4a3a]" />
                    <p className="font-medium text-[#5a4a3a]">{table}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Technology Tab */}
        {activeTab === 'tech' && (
          <div>
            <h2 className="text-3xl font-bold text-[#5a4a3a] mb-8 text-center">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#5a4a3a] mb-6">Technologies Used</h3>
                <div className="space-y-4">
                  {techStack.map((tech, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-white bg-opacity-60 rounded-lg border border-[#decfb8]"
                    >
                      <div>
                        <h4 className="font-semibold text-[#5a4a3a]">{tech.name}</h4>
                        <p className="text-sm text-gray-600">{tech.category}</p>
                      </div>
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-[#5a4a3a] mb-6">Architecture Highlights</h3>
                <div className="bg-gradient-to-br from-[#decfb8] to-[#d4c5a9] p-6 rounded-xl">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Code className="w-5 h-5 text-[#5a4a3a] mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <strong className="text-[#5a4a3a]">MVC Architecture:</strong>
                        <span className="text-gray-700 ml-2">Clean separation of concerns with Model-View-Controller pattern</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Database className="w-5 h-5 text-[#5a4a3a] mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <strong className="text-[#5a4a3a]">PDO Integration:</strong>
                        <span className="text-gray-700 ml-2">Secure database operations with prepared statements</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-[#5a4a3a] mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <strong className="text-[#5a4a3a]">User Authentication:</strong>
                        <span className="text-gray-700 ml-2">Role-based access control with encrypted sessions</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Screenshots Tab */}
        {activeTab === 'screenshots' && (
          <div>
            <h2 className="text-3xl font-bold text-[#5a4a3a] mb-8 text-center">Project Screenshots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockImages.map((image) => (
                <div 
                  key={image.id}
                  className="bg-white bg-opacity-60 rounded-xl overflow-hidden border border-[#decfb8] hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-video bg-gradient-to-br from-[#decfb8] to-[#d4c5a9] flex items-center justify-center">
                    {image.type === 'desktop' ? (
                      <Monitor className="w-16 h-16 text-[#5a4a3a] opacity-50" />
                    ) : image.type === 'mobile' ? (
                      <Smartphone className="w-16 h-16 text-[#5a4a3a] opacity-50" />
                    ) : (
                      <Tablet className="w-16 h-16 text-[#5a4a3a] opacity-50" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#5a4a3a]">{image.title}</h3>
                    <p className="text-sm text-gray-600 capitalize">{image.type} View</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Want to see the system in action?</p>
              <button className="inline-flex items-center px-6 py-3 bg-[#decfb8] text-[#5a4a3a] rounded-lg hover:bg-[#d4c5a9] transition-colors">
                <ExternalLink className="w-5 h-5 mr-2" />
                Request Live Demo
              </button>
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div>
            <h2 className="text-3xl font-bold text-[#5a4a3a] mb-8 text-center">Challenges & Solutions</h2>
            <div className="space-y-8">
              {challenges.map((challenge, index) => (
                <div 
                  key={index}
                  className="bg-white bg-opacity-60 p-8 rounded-xl border border-[#decfb8]"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-[#5a4a3a] mb-4">Challenge</h3>
                      <p className="text-gray-700 leading-relaxed">{challenge.title}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#5a4a3a] mb-4">Solution</h3>
                      <p className="text-gray-700 leading-relaxed">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-[#decfb8] to-[#d4c5a9] p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-[#5a4a3a] mb-4">What I Learned</h3>
              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                This project deepened my understanding of complex business logic implementation, 
                database optimization for financial data, and the importance of regulatory compliance 
                in financial software systems. It also enhanced my skills in PHP backend development 
                and secure data handling practices.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full">
            <div className="aspect-video bg-gradient-to-br from-[#decfb8] to-[#d4c5a9] flex items-center justify-center">
              {selectedImage.type === 'desktop' ? (
                <Monitor className="w-24 h-24 text-[#5a4a3a] opacity-50" />
              ) : selectedImage.type === 'mobile' ? (
                <Smartphone className="w-24 h-24 text-[#5a4a3a] opacity-50" />
              ) : (
                <Tablet className="w-24 h-24 text-[#5a4a3a] opacity-50" />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#5a4a3a] mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">Click outside to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatProj;