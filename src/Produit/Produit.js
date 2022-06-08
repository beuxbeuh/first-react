import './Produit.css';

const produits = [
    { name: 'Pomme', id: 1},
    { name: 'Poire', id: 2},
    { name: 'Kiwi', id: 3},
]

export default function Produit() {
    const list_produits = produits.map(produit => (
    <li key={produit.id}>
        {produit.name}
        </li>
    ));
    return (
        <div className='produit'>
            <ul>
                {list_produits}
            </ul>
        </div>
    )
}