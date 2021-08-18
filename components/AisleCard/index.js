import { GroupCard } from "..";
import styled from "styled-components";
import AislePhoto from "../../public/aisle-photo.svg";
import Breakpoints from "../Breakpoints";

const AisleTitle = styled.h2`
    display: flex;
    width: 100%;
    padding: 0 1rem;
    justtify-content: flex-start;
    
`
const AisleHeadline = styled.div`
    display flex;
    flex-flow: row no-wrap;
    padding: 2rem;

    @media only screen and ${Breakpoints.tablet}{
        flex-flow: column wrap;
    }
`
const AislePic = styled(AislePhoto)`
    height: auto;
    max-width: 100%;
`
const AisleBox = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

const Index = ({ aisle }) => {
    const { id, category_id, aisle_type, title, slug, description, assets, groups } = aisle;
    return (
        <AisleBox id={id}>
            <AisleHeadline>
                <AislePic/>
                <div>
                <AisleTitle>{title}</AisleTitle>
                <div>{description}</div>
                </div>
            </AisleHeadline>


            <GroupCard groups={groups} />
        </AisleBox>
    )
}

export default Index;