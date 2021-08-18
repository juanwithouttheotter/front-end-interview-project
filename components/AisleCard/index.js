import { GroupCard } from "..";
import styled from "styled-components";
import AislePhoto from "../../public/aisle-photo.svg";

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
                <AislePhoto/>
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