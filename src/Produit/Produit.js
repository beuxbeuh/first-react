import './Produit.css';
import CardProduit from '../CardProduit/CardProduit';

const produits = [
    {
      image: 'https://c.shld.net/rpx/i/s/i/spin/10000003/prod_2305917712',
      id: 1,
      titre: 'Echo Dot',
      prix: '30€',
      description: 'Enceinte Bluetooth compacte avec Alexa | Son riche et puissant | Anthracite ',
      avis: 450
    },
    {
      image: 'https://live.staticflickr.com/1701/24066310330_b7bfcd0c0a_n.jpg',
      id: 2,
      titre: 'Fire TV',
      prix: '70€',
      description: 'Tuner TV usb',
      avis: 784120
    },
    {
      image:
        'https://www.bhphotovideo.com/images/images2500x2500/fitbit_fb507rgpk_versa_2_health_1501923.jpg',
      id: 3,
      titre: 'Fitbit Versa ',
      prix: '120€',
      description: 'Montre connecté',
      avis: 4125
    },
  ];

export default function Produit() {
    const listeProduits = produits.map((produit) => (
        <CardProduit 
            key={produit.id}
            image={produit.image}
            prix={produit.prix}
            titre={produit.titre}
            description={produit.description}
            avis={produit.avis}
            />
    ))
    return (
      <>
      <h1>Card Produit</h1>
      <div class='cardProduit'>
        {listeProduits}
      </div>
      </>
    )
}