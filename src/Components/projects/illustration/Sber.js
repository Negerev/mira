import MainBlock from "../../blocks/mainBlock";
import VideoBlock from "../../blocks/videoBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";
import "./../../../style/main.scss";

const Sber = () => {
    return (
        <>
            <VideoBlock
                video={"ekosistema-sber.mp4"}
                main = {false}/>
            <Concept
                atitle="Task"
                descr={"The main task was to develop a style, structure and arrange the company's services in an understandable order for the user, observing the ease of perception on mobile and stationary devices"}/>
            <DoubleBlock
                image1={"sber/1.jpg"}
                alt1={"1"}
                image2={"sber/2.jpg"}
                alt2={"2"}/>
            <Description
                descr={"Each service of the Sber ecosystem on the map is represented by a pavilion stylized as the company's activity with an icon above it. The services-companies are grouped by activity areas: auto, entertainment, it, food, etc."}/>
            <DoubleBlock
                image1={"sber/3.jpg"}
                alt1={"3"}
                image2={"sber/4.jpg"}
                alt2={"4"}/>
            <MainBlock
                image={"sber/5.jpg"}
                alt={"5"}/>
            <MainBlock
                image={"sber/6.jpg"}
                alt={"6"}/>
            <Description
                descr={"In the initial stages of the work were proposed several conceptually different planning and stylistic solutions"}/>
            <DoubleBlock
                image1={"sber/7.jpg"}
                alt1={"7"}
                image2={"sber/8.jpg"}
                alt2={"8"}/>
            <DoubleBlock
                image1={"sber/9.jpg"}
                alt1={"9"}
                image2={"sber/10.jpg"}
                alt2={"10"}/>
            <DoubleBlock
                image1={"sber/11.jpg"}
                alt1={"11"}
                image2={"sber/12.jpg"}
                alt2={"12"}/>
            
        </>
    )
}

export default Sber;