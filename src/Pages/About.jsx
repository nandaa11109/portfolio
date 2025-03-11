import BlurText from "../Components/BlurText/BlurText"

const About = () =>{
    return(
        <>
            <section id='about'>
                <div className="bg-black text-white  ">
                    <div className="max-w-1/2 mx-auto py-8">
                        <h1 className="text-4xl font-bold mb-4 mt-10">About Me</h1>
                        <BlurText
                        text="As a fresh graduate from Muhammadiyah University of Jember, I have an interest in learning and developing in the field of UI/UX both web and mobile design. I also have interests and talents in the field of web developers, namely Frontend Developer with Html, Css, Bootstrap, Tailwind, React, Javascript tools."
                        delay={50}
                        animateBy="words"
                        direction="top"
                        className="text-[18px] font-normal font-paragraf leading-7 "
                        />
                        <p></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
