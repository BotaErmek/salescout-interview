// Implement a function which takes an array of Product and returns unique products sorted by price

type Product = {
    name: string;
    price: number;
};
 
function filterAndSortProducts(products: Product[]): Product[] {
    type Product = {
        name: string;
        price: number;
    };

    function filterAndSortProducts(products: Product[]): Product[] {

        const uniqueProductsMap = new Map<string, Product>();


        for (const product of products) {
            if (!uniqueProductsMap.has(product.name)) {
                uniqueProductsMap.set(product.name, product);
            }
        }


        return Array.from(uniqueProductsMap.values()).sort((a, b) => a.price - b.price);
    }

    module.exports = { filterAndSortProducts };

    return [] 
}

module.exports = { filterAndSortProducts }