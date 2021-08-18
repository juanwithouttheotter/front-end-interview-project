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
    margin: 0.5rem auto;
    height: 300px;
    width: 175px;
    text-align: left;
    &:hover {
        cursor: pointer;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    }
`
const ProductTitle = styled.div`
    margin: 0;
`

const Index = ({ products }) => {
    return (products.map((product) => {
        const {id,title, slug, unitPrice, assets, type, app_item_type, has_offers, badge, sale_price, perks_price } = product;
        const formatCurrency = (amt) => {
            return `$${amt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
        }

        return(
        <ProductBox key={`key-${id}`} id={id} >
            <Image src={assets[0].url} alt={slug} width={175} height={175} />
            <ProductTitle>{title}</ProductTitle>
            <PriceBox>
                {(perks_price || sale_price) ? <PriceTag sale>{perks_price ? formatCurrency(perks_price) : formatCurrency(sale_price)}</PriceTag> : ""}
                {(perks_price || sale_price) ? <PriceTag old>{formatCurrency(unitPrice)}</PriceTag> : <PriceTag>{formatCurrency(unitPrice)}</PriceTag>}

            </PriceBox>

        </ProductBox>
        );
    }
    )
    );
}

export default Index;