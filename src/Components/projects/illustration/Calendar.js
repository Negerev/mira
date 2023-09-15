import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Calendar = () => {
    return (
        <>
            <MainBlock
                image={"calendar/title.jpg"}
                alt={"calendar"}/>
            <Concept
                title={"Task"}
                descr={"To develop the idea and visual concept of illustrations for the annual calendar of the KorsGroup automobile holding"}/>
            <DoubleBlock
                image1={"calendar/1.jpg"}
                alt1={"1"}
                image2={"calendar/2.jpg"}
                alt2={"2"}
                clazz={"project__container project__container--big"}/>
            <Description
                descr={"In the concept and illustrations, we have depicted various sights of countries that can be reached by your own car. Stylistically, the buildings consist of many different parts, symbolizing the belonging of the company's activities to the automotive theme."}/>
            <DoubleBlock
                image1={"calendar/3.jpg"}
                alt1={"3"}
                image2={"calendar/4.jpg"}
                alt2={"4"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"calendar/5.jpg"}
                alt={"5"}/>
            <DoubleBlock
                image1={"calendar/6.jpg"}
                alt1={"6"}
                image2={"calendar/7.jpg"}
                alt2={"7"}
                clazz={"project__container project__container--big"}/>
            <DoubleBlock
                image1={"calendar/8.jpg"}
                alt1={"8"}
                image2={"calendar/9.jpg"}
                alt2={"9"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"calendar/10.jpg"}
                alt={"10"}/>
        </>
    )
}

export default Calendar;