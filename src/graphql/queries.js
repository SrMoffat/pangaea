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

export const dynamicFetchProductsQuery = currency => {
    const arg = currency.replace(/"/g, "");
    return (
        gql`
            query fetchProductsQuery {
                products {
                    id
                    title
                    image_url
                    price(currency: ${arg}) 
                }
            }
        `
    );
};
