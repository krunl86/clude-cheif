import './Content.css'
import GetReceipe from '../get-receipe/GetReceipe';
import GetIngredient from '../get-ingredient/GetIngredient';
import ShowReceipe from '../set-receipe/set-receipe';
import React from 'react';
import { getRecipeFromChefClaude } from '../../utils/ai.js';
export default function Content () {
    const [ ingredientList, setIngredientList ] = React.useState( [] );
    const [ receipe, setReceipe ] = React.useState( "" );

    async function getReceipe () {
        const recipeMarkdown = await getRecipeFromChefClaude( ingredientList );
        console.log( recipeMarkdown );
        setReceipe( recipeMarkdown );
    }

    return (
        <main className="content">
            <GetIngredient ingredientList={ ingredientList } setIngredientList={ setIngredientList } />
            { ingredientList.length >= 5 && <GetReceipe onTap={ getReceipe } /> }
            { receipe && <ShowReceipe receipe={ receipe } /> }
        </main>
    );
}