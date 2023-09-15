import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const CircleIllustration = () => {
    return (
        <>
            <MainBlock
                image={"circle-illustration/title.jpg"}
                alt={"circle-illustration"}/>
            <Concept
                descr={"Circle Gen is a company engaged in the production and maintenance of systems with immersion cooling. Within the framework of the project, visualizations of equipment and functioning schemes have been created."}/>
            <DoubleBlock
                image1={"circle-illustration/1.jpg"}
                alt1={"1"}
                image2={"circle-illustration/2.jpg"}
                alt2={"2"}/>
            <img className="project__img" src={require("../../../resourses/img/projects/circle-illustration/3.jpg")} alt='1'/>
            <MainBlock
                image={"circle-illustration/4.jpg"}
                alt={"4"}/>
            <DoubleBlock
                image1={"circle-illustration/5.jpg"}
                alt1={"5"}
                image2={"circle-illustration/6.jpg"}
                alt2={"6"}
                clazz={"project__container project__container--big"}/>
            <Description
                descr={"Design and layout of immersion cooling units for video cards and motherboards."}/>
            <MainBlock
                image={"circle-illustration/7.jpg"}
                alt={"7"}/>
            <DoubleBlock
                image1={"circle-illustration/8.jpg"}
                alt1={"8"}
                image2={"circle-illustration/9.jpg"}
                alt2={"9"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"circle-illustration/10.jpg"}
                alt={"10"}/>
            <DoubleBlock
                image1={"circle-illustration/11.jpg"}
                alt1={"11"}
                image2={"circle-illustration/12.jpg"}
                alt2={"12"}/>
            <MainBlock
                image={"circle-illustration/13.jpg"}
                alt={"13"}/>
            <MainBlock
                image={"circle-illustration/14.jpg"}
                alt={"14"}/>
        </>
    )
}

export default CircleIllustration;