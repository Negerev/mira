import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Paveletsky = () => {
    return (
        <>
            <MainBlock
                image={"paveletsky/title.jpg"}
                alt={"paveletsky"}/>
            <Concept
                title="Task"
                descr={"Visualize the explosion of the building scheme according to the drawings and draw the thematic directions of each of the eight sites."}/>
            <img className="project__img" src={require("../../../resourses/img/projects/paveletsky/1.jpg")} alt='1'/>
            <Description
                descr={"To solve the problem, the building of the site was drawn floor by floor and a fixed 3/4 angle was selected for the correct display of interiors with maximum saturation in details"}/>
            <MainBlock
                image={"paveletsky/3.jpg"}
                alt={"3"}/>
            <DoubleBlock
                image1={"paveletsky/4.jpg"}
                alt1={"4"}
                image2={"paveletsky/5.jpg"}
                alt2={"5"}/>
            <Description
                descr={"Each site of the complex was drawn in three variations corresponding to different types of events held on it"}/>
            <MainBlock
                image={"paveletsky/6.jpg"}
                alt={"6"}/>
            <DoubleBlock
                image1={"paveletsky/7.jpg"}
                alt1={"7"}
                image2={"paveletsky/8.jpg"}
                alt2={"8"}/>
            <MainBlock
                image={"paveletsky/9.jpg"}
                alt={"9"}/>
            <DoubleBlock
                image1={"paveletsky/10.jpg"}
                alt1={"10"}
                image2={"paveletsky/11.jpg"}
                alt2={"11"}/>
            <MainBlock
                image={"paveletsky/12.jpg"}
                alt={"12"}/>
            <DoubleBlock
                image1={"paveletsky/13.jpg"}
                alt1={"13"}
                image2={"paveletsky/14.jpg"}
                alt2={"14"}/>
            <MainBlock
                image={"paveletsky/15.jpg"}
                alt={"15"}/>
            <DoubleBlock
                image1={"paveletsky/23.jpg"}
                alt1={"16"}
                image2={"paveletsky/16.jpg"}
                alt2={"16"}/>
            <MainBlock
                image={"paveletsky/17.jpg"}
                alt={"17"}/>
            <DoubleBlock
                image1={"paveletsky/18.jpg"}
                alt1={"18"}
                image2={"paveletsky/19.jpg"}
                alt2={"19"}/>
            <MainBlock
                image={"paveletsky/20.jpg"}
                alt={"20"}/>
            <DoubleBlock
                image1={"paveletsky/21.jpg"}
                alt1={"21"}
                image2={"paveletsky/22.jpg"}
                alt2={"22"}/>
        </>
    )
}

export default Paveletsky;