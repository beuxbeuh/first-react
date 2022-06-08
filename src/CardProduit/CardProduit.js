// import './CardProduit.css';

// export default function CardProduit() {
export default function CardProduit(props) {
    return ( 
        <>
            <h1>Card Produit</h1>
            <img src='https://picsum.photos/200'></img>
            <figure>
                <figcaption>
                    <h3> titre </h3>
                    <p> description </p>
                    <h4> prix </h4>
                    <h5> avis </h5>
                </figcaption>
        </figure>
        </>
    )
}