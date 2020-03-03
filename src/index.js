import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function RecipeHeader(props){
    return (
        
    )
}

class IngredientsArea extends React.Component{
    render(){
        const ingredients = this.props.ingredients;
        const ingredientsList = ingredients.map((ingredient, ingredientNum) => {
                return (
                    <li key={ingredientNum}>
                        {ingredient}
                    </li>
                );
            });
            console.log(ingredientsList);
        return (
            <section id="ingredients">
                <h3>Ingredients</h3>
                <ul> </ul>
            </section>
        )
    }
}

class RecipeNotes extends React.Component{
    render(){
        
    }
}

class StepsArea extends React.Component{
    render(){
        const steps = this.props.steps;
        const recipeSteps = steps.map();
        return (
            <section id="steps">
                <h3>Steps</h3>
                <div>
                    <ol> </ol>
                    
                </div>
            </section>
        )
    }
}

class RecipeArea extends React.Component{
    render(){
        return (
            <main>
                
            </main>
        )
    }
}
class RecipeTemplate extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div id="templateHome">

            </div>
        )
    }
}

ReactDOM.render(
    <RecipeTemplate />,
    document.getElementById('root')
);