import { gql } from "@apollo/client";


export const fetchProductsQuery = gql`
    query fetchProductsQuery {
        products {
            id
            title
            image_url
            price(currency: USD) 
        }
    }
`;

export const fetchCurrencyQuery = gql`
    query fetchCurrencyQuery {
        currency 
    }
`;
