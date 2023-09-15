import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const DreamEnviroment = () => {
    return (
        <>
            <MainBlock
                image={"dream-enviroment/title.jpg"}
                alt={"dream-enviroment"}/>
            <Concept
                title={"Task"}
                descr={"To develop a planning solution and visualization of the Dream residential complex on the coastal territory. The main main building is located on the territory of the complex, as well as complexes of houses such as town houses and detached villas."}/>
            <DoubleBlock
                image1={"dream-enviroment/bysicle.jpg"}
                alt1={"bysicle"}
                image2={"dream-enviroment/runners.jpg"}
                alt2={"runners"}/>
            <MainBlock
                image={"dream-enviroment/children.jpg"}
                alt={"children"}/>
            <Description
                descr={"As part of the task, a comprehensive solution was developed for the layout and design of the internal territory, including sports and playgrounds, house territories, recreation areas and the embankment."}/>
            <MainBlock
                image={"dream-enviroment/pool.jpg"}
                alt={"pool"}/>
            <DoubleBlock
                image1={"dream-enviroment/building.jpg"}
                alt1={"building"}
                image2={"dream-enviroment/house.jpg"}
                alt2={"house"}
                clazz={"project__container project__container--big"}/>
            <Description
                descr={"The main building is located at the head of the residential complex. On the ground floor there is a central entrance, recreation and negotiation areas, classrooms and cafeterias."}/>
            <MainBlock
                image={"dream-enviroment/reception.jpg"}
                alt={"reception"}/>
            <DoubleBlock
                image1={"dream-enviroment/sofa.jpg"}
                alt1={"sofa"}
                image2={"dream-enviroment/plan.jpg"}
                alt2={"plan"}
                clazz={"project__container project__container--big"}/>
            <DoubleBlock
                image1={"dream-enviroment/men.jpg"}
                alt1={"men"}
                image2={"dream-enviroment/hall.jpg"}
                alt2={"hall"}/>
            <MainBlock
                image={"dream-enviroment/plants.jpg"}
                alt={"plants"}/>
            <DoubleBlock
                image1={"dream-enviroment/sport.jpg"}
                alt1={"sport"}
                image2={"dream-enviroment/blue-wall.jpg"}
                alt2={"blue-wall"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"dream-enviroment/yoga.jpg"}
                alt={"yoga"}/>
            <MainBlock
                image={"dream-enviroment/lifts.jpg"}
                alt={"lifts"}/>
            <DoubleBlock
                image1={"dream-enviroment/2-floor.png"}
                alt1={"2-floor"}
                image2={"dream-enviroment/floor.jpg"}
                alt2={"floor"}/>
            <MainBlock
                image={"dream-enviroment/parking.jpg"}
                alt={"parking"}/>
        </>
    )
}

export default DreamEnviroment;