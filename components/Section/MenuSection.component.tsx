import { FC } from "react";
import { CategoryHeading } from "./MenuContent/CategoryHeading/CategoryHeading.component";
import { MenuContent } from "./MenuContent/MenuContent.component";
import { Section } from "./Section.style";

export const MenuSection: FC = () => {
    return (
        <>
            <Section enableShadow={true}>
                <CategoryHeading heading="Menu" />
                <MenuContent />
            </Section>
            <Section enableShadow={false}>
                <CategoryHeading heading="Gallery" />
            </Section>
        </>
    )
}