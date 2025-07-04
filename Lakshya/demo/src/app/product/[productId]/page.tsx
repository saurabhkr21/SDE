export default async function ProductDetail({
    params,
}:
    {
        params: { productId: string };
    }
) {
    const {productId} = params;
    return (

        <h1>detail about the product:- {productId}</h1>

    )

}