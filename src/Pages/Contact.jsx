import Lanyard from "../Components/Lanyard/Lanyard"

const Contact = () =>{
    return(
        <>
            <section id="contact" className=" pb-10 min-h-screen bg-black font-paragraf">
                <div className="w-full">
                    <div className="grid grid-cols-12 md:grid-cols-2 ">
                        <div className="col-span-12 md:col-span-1 ">
                        <Lanyard  position={[0, 0, 15]} gravity={[0, -40, 0]}/>
                        </div>
                        <div className="col-span-12 md:col-span-1 flex justify-center md:justify-start items-center px-4 ">
                           <div className="flex flex-col w-4/5 md:2/3 ">
                                <h1 className="text-3xl font-bold text-white text-center md:text-left ">Contact</h1>
                                <form className="mt-10 space-y-6">
                                    <input type="text" placeholder="Your Name" required className="pb-2 w-full border-b-2 border-white outline-none placeholder:text-gray-400  text-white"/>
                                    <input type="email" placeholder="Your Email" required className=" pb-2 w-full border-b-2 border-white outline-none placeholder:text-gray-400 text-white" />
                                    <input type="text" placeholder="Subject"  required className=" pb-2 w-full border-b-2 border-white outline-none placeholder:text-gray-400 text-white "/>
                                    <textarea name="" placeholder="Your Message" id="" cols="20" rows="5" className="pb-2 w-full border-b-2 border-white text-white outline-none placeholder:text-gray-400"></textarea>
                                    <button className="bg-white py-2 px-5 text-black rounded-lg cursor-pointer">Submit</button>
                                </form>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact

{/*  */}