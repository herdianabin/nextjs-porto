import { div } from "framer-motion/client";
import RotatingText from "../components/RotatingText/RotatingText";
import CircularGallery from "../components/CircularGallery/CircularGallery";

export default function Pengalaman () {
    return (
        <div className="min-h-screen overflow-y-auto">
            <div className="flex flex-row items-center justify-center py-5 gap-3">
                <h1 className="font-bold text-7xl">My</h1>
                <RotatingText
                    texts={['Explore', 'Explore', 'Explore', 'Explore']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black text-4xl font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                    />
            </div>
            <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
            </div>
            
        </div>
    );
}