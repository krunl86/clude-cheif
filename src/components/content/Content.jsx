import './Content.css'
import GetReceipe from '../get-receipe/GetReceipe';
import GetIngredient from '../get-ingredient/GetIngredient';
import ShowReceipe from '../set-receipe/set-receipe';
import React from 'react';
import { getRecipeFromChefClaude } from '../../utils/ai.js';
export default function Content () {
    const [ ingredientList, setIngredientList ] = React.useState( [] );
    const [ receipe, setReceipe ] = React.useState( "" );
    const [ loading, setLoading ] = React.useState( false );
    const [ error, setError ] = React.useState( "" );

    async function getReceipe () {
        setLoading( true );
        setError( "" );
        try {
            const recipeMarkdown = await getRecipeFromChefClaude( ingredientList );
            setReceipe( recipeMarkdown );
        } catch ( err ) {
            setError( err.message || "Something went wrong. Please try again." );
        } finally {
            setLoading( false );
        }
    }

    return (
        <main className="content">
            <GetIngredient ingredientList={ ingredientList } setIngredientList={ setIngredientList } />
            { ingredientList.length >= 5 && <GetReceipe onTap={ getReceipe } loading={ loading } hasReceipe={ !!receipe } /> }
            { error && <p className="content-error">{ error }</p> }
            { receipe && <ShowReceipe receipe={ receipe } /> }
        </main>
    );
}