import { ProductCard } from "..";
import styled from "styled-components";

const GroupBox = styled.div`
    display: flex;
    flex-flow: column wrap;
    max-width: 65%;
    text-align: center;
    order: ${props => props.sort}
`
const GroupTitle = styled.h3`
    display: flex;
    width: 100%;
    padding: 0 1rem;
    justify-content: flex-start;
`
const ProductGroup = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    
`



const Index = ({ groups }) => {
    return (groups.map((group) => {
        const { id, name, sort, products } = group;

        return (
            <GroupBox key={`key-${id}`} id={id} sort={sort}>
                <GroupTitle>{name}</GroupTitle>
                <ProductGroup>
                    <ProductCard products={products} />
                </ProductGroup>

            </GroupBox>
        );
    })
    );
}

export default Index;