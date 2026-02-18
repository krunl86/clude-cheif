import './get-receipe.css';
export default function GetReceipe ( props ) {
    return (
        <section className="get-receipe">
            <div >
                <h3 className="get-receipe__title">Ready For Receipe</h3>
                <p className="get-receipe__description">
                    Generate receipe based on the ingredients you have on hand.
                </p>

            </div>
            <button className="get-receipe__close-button" onClick={ props.onTap }>Get A Receipe</button>
        </section>
    );
}   