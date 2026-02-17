import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

function App(props){
    return (
        <h1>¡{props.saludo}, {props.nombre}!</h1>
    )
}

function withSaludo (WrappedComponent) {
    return function WrappedComponentWithSaludo(saludo){

        return function ComponenteDeVerdad (props) {
            return (
                <>
                    <WrappedComponent {...props} saludo={saludo}/>
                    <p>estamis acompañando al WrappedComponent</p>
                </>
            )
        }
    }


}

const AppWithSaludo = withSaludo(App)('wenitas');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // < App saludo="Buenas" nombre="Nath" />
    < AppWithSaludo nombre="Nath" />
);
