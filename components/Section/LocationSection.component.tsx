import { CategoryHeading } from "./MenuContent/CategoryHeading/CategoryHeading.component"
import { Section } from "./Section.style"

export const LocationSection = () => {
    return (
        <>
            <Section enableShadow={true}>
                <CategoryHeading heading="Locations" />

            </Section>
            <Section enableShadow={false}>
            <CategoryHeading heading="Reservations" />
                    
            </Section>
        </>
    )
}