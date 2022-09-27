import { FC } from "react";
import { StyledCategoryHeading } from "./CategoryHeading.style";


interface StyledCategoryProps {
    heading: string;
}

export const CategoryHeading: FC<StyledCategoryProps> = (props) => {

    return (
        <StyledCategoryHeading>
            <span></span> {/* Custom line */}
            <h2>{ props.heading }</h2>
            <span></span> {/* Custom line */}
        </StyledCategoryHeading>
    )
}