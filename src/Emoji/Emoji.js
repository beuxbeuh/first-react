import './Emoji.css';

//déclarer la fonction fleche montrerEmoji
const montrerEmoji = event => alert(event.target.id);

// export default function Emoji() {
//     return (
//         <ul>
//             <li>
//                 <button>
//                 <span roloe="img" id="sourire">😀</span>
//                 </button>
//             </li>
//             <li>
//                 <button>
//                 <span>😀</span>
//                 </button>
//             </li>
//             <li>
//                 <button>
//                 <span>😀</span>
//                 </button>
//             </li>
//         </ul>
//     )
// };

const emojis = [
    {
        emoji: "😀",
        name: "sourire"
    },
    {
        emoji: "🤢",
        name: "nausée"
    },
    {
        emoji: "🤮",
        name: "domi"
    }
];

const planetes = [
    "Terre",
    "Saturne",
    "Pluton"
];

export default function Emoji() {
    return(
        <>
            <ul>
                {
                    emojis.map(emoji =>(
                        <li key={emoji.emoji}>
                            <button onClick={montrerEmoji}>
                                <span role="img" id={emoji.name}>{emoji.emoji}</span>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

// const montrerEmoji = event => alert(event.target.id);