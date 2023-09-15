import {useRef, useEffect} from 'react';
import { gsap } from "gsap";
const VideoBlock = ({ video, main }) => {
  const videoContainer = useRef();
  const textContainer = useRef();
  
  useEffect(() => {
    if(main) {
      let ctx = gsap.context(() => {
        gsap.from("p", {
          x: -600,
          opacity: 0
        });
        gsap.from("video", {
          x: 600,
          opacity: 0
        });
    }, videoContainer);
    return () => ctx.revert();
    }
    let ctx = gsap.context(() => {
      gsap.from("video", {
        scale: 1.1,
        scrollTrigger: {
          trigger: ".services__video",
          start: 'top bottom',
          end: 'top center',
          scrub: 2,
         
        }
      });
  }, videoContainer);
  return () => ctx.revert();
  }, []);
  let clazz;
  main ? clazz = "services__text" : clazz = "services__text none"
  return (
    <div className="services__video" ref={videoContainer}>
      <video muted loop playsInline autoPlay src={require("../../resourses/video/" + video)} />
      <p className={clazz} ref={textContainer}>Creating creativity for business purposes</p>
    </div>
  );
};
export default VideoBlock;
