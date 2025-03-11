import { motion } from "framer-motion";
import { GraduationCap, School, BookOpenText } from "lucide-react";

const EducationRoadmap = () => {
  const educationJourney = [
    { title: "Elementary School", subtitle: "SD Negeri Mangli 1", description: "Graduated from elementary school with excellent grades.", icon: School },
    { title: "Junior High School", subtitle: "SMP Negeri 1 Ajung", description: "Started developing an interest in technology and computers.", icon: BookOpenText },
    { title: "Senior High School", subtitle: "SMA Muhammadiyah 3 Jember", description: "Chose the science major.", icon: BookOpenText },
    { title: "University", subtitle: "Universitas Muhammadiyah Jember", description: "Pursued a degree in Informatics Engineering.", icon: GraduationCap },
];


  return (
    <>
    <section id="education" className="font-paragraf">

    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-black">Education</h2>
      <div className="relative w-full md:w-2/3">
        {/* Garis Vertikal */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-black"></div>
        
        {educationJourney.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`mb-10 flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className="relative w-1/2">
                {/* Icon di titik timeline */}
                <div className="absolute -left-5 top-5 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full shadow-lg">
                  <Icon size={24} />
                </div>
                {/* Card Pendidikan */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-semibold text-black">{edu.title}</h3>
                  <h4 className="text-base font-regular text-gray-500 ">( {edu.subtitle} )</h4>
                  <p className="text-gray-600 mt-2">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
    </section>
    </>
  );
}
export default EducationRoadmap