import './get-receipe.css';
export default function GetReceipe ( props ) {
    function buttonContent () {
        if ( props.loading ) return <span className="get-receipe__spinner"></span>;
        if ( props.hasReceipe ) return "Get New Recipe";
        return "Get A Recipe";
    }

    return (
        <section className="get-receipe">
            <div>
                <h3 className="get-receipe__title">Ready For Recipe</h3>
                <p className="get-receipe__description">
                    Generate a recipe based on the ingredients you have on hand.
                </p>
            </div>
            <button
                className="get-receipe__close-button"
                onClick={ props.onTap }
                disabled={ props.loading }
            >
                { buttonContent() }
            </button>
        </section>
    );
}   