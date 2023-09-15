import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import DescriptionDouble from "../../blocks/descriptionDouble";

const Cafeteria = () => {
    return (
        <>
            <MainBlock
                image={"cafeteria/title.jpg"}
                alt={"cafeteria"}/>
            <Concept
                title="Task"
                descr={"To develop the interior of a city cafe, to work out planning and decorative solutions, to make a specification for materials and furniture"}/>
            <DoubleBlock
                image1={"cafeteria/chiars.jpg"}
                alt1={"chiars"}
                image2={"cafeteria/windows.jpg"}
                alt2={"windows"}/>
            <MainBlock
                image={"cafeteria/bar.jpg"}
                alt={"bar"}/>
            <DoubleBlock
                image1={"cafeteria/plan1.jpg"}
                alt1={"plan1"}
                image2={"cafeteria/plan2.jpg"}
                alt2={"plan2"}/>
            <MainBlock
                image={"cafeteria/end-slide.jpg"}
                alt={"end-slide"}/>
        </>
    )
}

export default Cafeteria;