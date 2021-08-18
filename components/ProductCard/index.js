import Image from 'next/image';
import styled from 'styled-components';

const PriceTag = styled.div`
    color: ${props => props.sale ? "#149414" : "#6D7173"};
    text-decoration: ${props => props.old ? "line-through" : "none"};
    padding: 0.2rem;
`
const PriceBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const ProductBox = styled.div`
    dislplay: flex;
    height: 300px;
    width: 200px;
    text-align: left;
    &:hover {
        cursor: pointer;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    }
`
const ProductTitle = styled.div`
    margin: 0;
`

const Index = ({ id, title, slug, unitPrice, assets, type, appItemType, hasOffers, badge, salePrice, perksPrice }) => {
    return (
        <ProductBox key={id} >
            <Image src={assets[0].url} alt={slug} width={200} height={200} />
            <ProductTitle>{title}</ProductTitle>
            <PriceBox>
                {(perksPrice || salePrice) ? <PriceTag sale>${perksPrice ? perksPrice : salePrice}</PriceTag> : ""}
                {(perksPrice || salePrice) ? <PriceTag old>${unitPrice}</PriceTag> : <PriceTag>{unitPrice}</PriceTag>}

            </PriceBox>

        </ProductBox>
    )
}

export default Index;