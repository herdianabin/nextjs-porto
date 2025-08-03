import { div } from "framer-motion/client";
import TrueFocus from "../components/TrueFocus/TrueFocus";
import TiltedCard from "../components/TiltedCard/TiltedCard";
import Image from "../../public/asset/image/gambar1.png";

export default function About() {
  return (
    <div className="min-h-screen overflow-y-auto py-8">
      <div>
        <TrueFocus/>

      </div>
      <div className="grid grid-cols-4 gap-5 my-8 justify-items-center">
        <div>
          <TiltedCard
                imageSrc="/asset/image/html.png"
                altText="HTML"
                captionText=""
                containerHeight="150px"
                containerWidth="150px"
                imageHeight="150px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text font-extrabold">
                    HTML
                  </p>
                }
                />
        </div>
        <div>
          <TiltedCard
                imageSrc="/asset/image/css.png"
                altText="CSS"
                captionText=""
                containerHeight="150px"
                containerWidth="150px"
                imageHeight="150px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text font-extrabold">
                    CSS
                  </p>
                }/>
        </div>
        <div><TiltedCard
                imageSrc="/asset/image/jacascripts.png"
                altText="JAVASCRIPTS"
                captionText=""
                containerHeight="150px"
                containerWidth="150px"
                imageHeight="150px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text font-extrabold">
                    JAVASCRIPTS
                  </p>
                }/>
        </div>
        <div>
          <TiltedCard
                imageSrc="/asset/image/react.png"
                altText="REACT"
                captionText=""
                containerHeight="150px"
                containerWidth="150px"
                imageHeight="150px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text font-extrabold">
                    REACT
                  </p>
                }/>
        </div>
        <div>
          <TiltedCard
                imageSrc="/asset/image/tailwinds.png"
                altText="TAILWINDS"
                captionText=""
                containerHeight="150px"
                containerWidth="150px"
                imageHeight="150px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text font-extrabold">
                    TAILWINDS
                  </p>
                }/>
        </div>
        <div>
          <TiltedCard
                imageSrc="/asset/image/typescrips.png"
                altText="TYPESCRIPTS"
                captionText=""
                containerHeight="150px"
                containerWidth="150px"
                imageHeight="150px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text font-extrabold">
                    TYPESCRIPTS
                  </p>
                }/>
        </div>
        <div><TiltedCard
                imageSrc="/asset/image/python.png"
                altText="PYTHON"
                captionText=""
                containerHeight="150px"
                containerWidth="150px"
                imageHeight="150px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text font-extrabold">
                    PYTHON
                  </p>
                }/>
        </div>
        <div><TiltedCard
                imageSrc="/asset/image/php.png"
                altText="PYTHON"
                captionText=""
                containerHeight="150px"
                containerWidth="150px"
                imageHeight="150px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text font-extrabold">
                    PHP
                  </p>
                }/>
        </div>
      </div>
    </div>
    
  );
}