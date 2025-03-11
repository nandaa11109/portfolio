import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white z-50 p-4 shadow-md ">
        <div className="flex justify-end items-center ">
            <button onClick={() => setIsOpen(true)} className="text-black bg-white p-2 rounded-3xl cursor-pointer mr-5 md:mr-0">
            <Menu size={28} />
            </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
      )}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 z-50"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-700"
        >
          <X size={28} />
        </button>
        <ul className="mt-10 space-y-4">
          {menuItems.map((item) => (
            <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true} // Membuat scroll smooth
                  duration={700} // Durasi animasi (ms)
                  offset={-70} // Jarak tambahan (misal untuk navbar fixed)
                  className="cursor-pointer text-gray-800 text-lg "
                >
                {item.label}
                </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
