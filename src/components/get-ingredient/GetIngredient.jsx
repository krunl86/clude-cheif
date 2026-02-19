import './get-ingredient.css';
export default function GetIngredient ( props ) {




    function addIngredients ( formData ) {
        console.log( formData.get( "ingredient" ) );
        const ingredient = formData.get( "ingredient" );
        if ( ingredient ) {
            props.setIngredientList( prevList => [ ...prevList, ingredient ] )
        }
    }
    var items = props.ingredientList.map( ( item, index ) =>
        <li key={ index } className="item">{ item }</li> );


    return (
        <section className="get-ingredient">
            <form action={ addIngredients } className="input-section" >
                <input className="input-section-input"
                    id="message-input"
                    name="ingredient"
                    type="text"
                    placeholder="e.g orange..." />

                <button className="input-section__button">+ Add ingradient</button>
            </form>

            { props.ingredientList.length > 0 &&
                <h1 className="item-title">Ingredients On Hands</h1>
            }
            { props.ingredientList.length > 0 && props.ingredientList.length < 5 &&
                <p className="ingredient-hint">Add at least { 5 - props.ingredientList.length } more ingredient{ 5 - props.ingredientList.length > 1 ? "s" : "" } to get a recipe</p>
            }
            <ul className="items-list">
                { items }
            </ul>

        </section>
    );
}   