import './set-receipe.css';
import Markdown from 'react-markdown'

export default function ShowReceipe ( props ) {

    return ( <section className='set-receipe-container'>
        <h2>Chef Claude Recommends:</h2>
        <Markdown>{ props.receipe }</Markdown>

    </section> );
}