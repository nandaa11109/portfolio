import SplitText from "../Components/SplitText/SplitText";

const Hero = () => { 
    return(
        <>
        <section id="home">
            <div className="h-screen flex flex-col justify-center items-center">
                <SplitText 
                text="Hi I'm Aulia Muhammad Fernanda"
                className="text-[38px] md:text-5xl font-bold text-center font-family mb-5"
                delay={20}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                />
                <SplitText 
                text="I'm a Frontend Developer"
                className=" text-[32px]  md:text-4xl font-medium text-center font-family"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                />
            </div>
        </section>
        </>
    );
}

export default Hero;
