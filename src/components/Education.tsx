
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "Brahma Valley College",
    period: "2021 – 2025",
    description: "Specialized in Computer Science with focus on cybersecurity and AI applications in security."
  },
  {
    degree: "Junior College",
    institution: "Progressive Science and Commerce",
    period: "2019 – 2021",
    description: "Studied science with computer science as a specialization."
  },
  {
    degree: "High School",
    institution: "Deolali High School",
    period: "2018 – 2019",
    description: "Completed secondary education with distinction."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-cyber-light/20"></div>
          
          {education.map((item, index) => (
            <div 
              key={index} 
              className={`mb-12 md:mb-0 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 p-4">
                <div 
                  className={`cyber-card h-full ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                >
                  <div className="flex items-center mb-3">
                    <GraduationCap className="text-cyber-light mr-2" size={20} />
                    <h3 className="text-xl font-semibold text-cyber-light">{item.degree}</h3>
                  </div>
                  <h4 className="text-cyber-muted text-lg mb-2">{item.institution}</h4>
                  <p className="text-gray-500 mb-4">{item.period}</p>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
              
              {/* Timeline circle */}
              <div className="hidden md:flex absolute left-1/2 top-24 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyber-dark border-2 border-cyber-light rounded-full shadow-lg shadow-cyber-light/20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
