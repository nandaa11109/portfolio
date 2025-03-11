import CircularText from "../Components/CircularText/CircularText";

const Skills = () => {
    const ListImg = [
        { id: 1, img: "/html5-color.svg", description: "HTML" },
        { id: 2, img: "/bootstrap-color.svg", description: "Bootstrap" },
        { id: 3, img: "/tailwindcss-color.svg", description: "Tailwind CSS" },
        { id: 4, img: "/javascript-color.svg", description: "JavaScript" },
        { id: 5, img: "/typescript-color.svg", description: "TypeScript" },
        { id: 6, img: "/react-color.svg", description: "React.js" }
    ];

    return (
        <section id="skills" className=" relative min-h-screen py-6 bg-black flex flex-col justify-center items-center font-paragraf">
            <CircularText
            text="Frontend Developer"
            onHover="speedUp"
            spinDuration={20}
            className="absolute right-20 top-10 uppercase hidden md:block"
            />
            <h1 className="text-white text-3xl font-bold mb-8">Skills</h1>
            <div className="relative w-full max-w-6xl h-1 bg-white hidden md:block">
                <div className="flex justify-between w-full absolute top-0 left-0">
                    {ListImg.map((item) => (
                        <div key={item.id} className="relative flex flex-col items-center">
                            <div className="w-1 h-16 bg-white"></div>
                            <img
                                src={item.img}
                                alt={item.description}
                                className="w-16 h-16 mt-3 hover:scale-120 transition duration-300 ease-in-out"
                            />
                            <p className="text-white mt-2 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Tampilan untuk layar kecil */}
            <div className="grid grid-cols-1 gap-10 md:hidden">
                {ListImg.map((item) => (
                    <div key={item.id} className="flex flex-col items-center">
                        <img
                            src={item.img}
                            alt={item.description}
                            className="w-16 h-16 hover:scale-120 transition duration-300 ease-in-out"
                        />
                        <p className="text-white mt-2 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
