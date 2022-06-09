import './CardProduit.css';

// export default function CardProduit() {
export default function CardProduit(props) {
    return ( 
        <>
            <div class='card'>
                <h1>Card Produit</h1>
                <img src={props.image} alt=''></img>
                <figure>
                    <figcaption>
                        <h3>{props.titre}</h3>
                        <p>{props.description}</p>
                        <h4>{props.prix}</h4>
                        <h5>{props.avis}</h5>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}