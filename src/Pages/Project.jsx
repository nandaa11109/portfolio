
const Project = () => {

    return (
        <section id="project" className="bg-white py-10 min-h-screen font-paragraf">
            <h1 className="text-center text-3xl font-bold mb-6">Project</h1>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:scale-110 transition duration-200 ">
                            <img src="/project2.png" alt="" />
                            <div className="p-6">
                                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Movie App
                                </h5>
                                <p className="block font-sans text-base text-gray-400 font-light leading-relaxed antialiased">
                                Website yang menyediakan berbagaai macam film terbaru dan populer
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <a href="https://movie-app-xi-smoky-58.vercel.app/">Read More</a>
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:scale-110 transition duration-200">
                            <img src="/project3.png" alt="" />
                            <div className="p-6">
                                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Landing Page
                                </h5>
                                <p className="block font-sans text-base font-light text-gray-400 leading-relaxed  antialiased">
                                Website landing page yang berisi digital agency . 
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <a href="https://landingpage-eight-silk.vercel.app/">Read More</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <div className="grid grid-cols-1">
                        <div className="relative flex w-80 flex-col rounded-xl bg-black bg-clip-border text-gray-700 shadow-md hover:scale-110 transition duration-200">
                            <img src="/project1.png" alt="" />
                            <div className="p-6">
                                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                                E-Commerce
                                </h5>
                                <p className="block font-sans text-base font-light text-gray-400 leading-relaxed  antialiased">
                                Website yang menyediakan berbagai macam sepatu.
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-blue-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <a href="https://e-commerce-lac-mu-60.vercel.app/">Read More</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Project;

