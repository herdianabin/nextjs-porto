import Lanyard from "./components/Lanyard/Lanyard";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import FuzzyText from "./components/FuzzyText/FuzzyText";
import Squares from "./Squares/Squares";
import About from "./about/About";
import Pengalaman from "./pengalaman/Pengalaman";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#023047'
          hoverFillColor='#222'
          />
      </div>
      <div className="contaier mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex flex-col justify-center h-screen">
              <div className="my-5">
                <FuzzyText>HRNMXYZ
                </FuzzyText>
              </div>
              <div className="mx-5">
                <ScrollVelocity
                texts={['MY PORTO', 'IM Developer']} 
                velocity={100} 
                className="custom-scroll-text text-[#219ebc]"
              />
              </div>
              <div className="mx-5">
                <ScrambledText>Hi, I'm Herdian — a passionate Web Developer focused on building clean, interactive, and responsive websites.  
                  <br />
                  With experience in React, Next.js, and Tailwind CSS, Ive created several real-world projects ranging from portfolio websites to complex dashboards.
                  <br />
                  I love solving problems with code and turning ideas into smooth digital experiences.
              </ScrambledText>
              </div>
            </div>
          </div>


          <div className="col-span-6">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]}/>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-2.5">
        <FadeInOnScroll><About/></FadeInOnScroll>
      </div>
      <div>
        <FadeInOnScroll><Pengalaman/></FadeInOnScroll>
      </div>
    </div>
  );
}
