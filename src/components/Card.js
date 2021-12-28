import './Card.css'

export const Card = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        !disabled && handleChoice(card)
    }

    return (
        <div class="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front" />
                <img 
                    onClick={handleClick}
                    className="back"
                    src='./img/cover.png' 
                    alt="cover" />
            </div>
        </div>
    )
}
