// un componente react può semplicemente essere una funzione che ritorna un file .jsx

// const ButtonComponent = props => {
const ButtonComponent = ({ bgBtn, innerPhrase }) => {
  return (
    <button style={bgBtn}>{innerPhrase || "clicca qui"} </button>
    // <button style={props.bgBtn}{{props.innerPhrase || "clicca qui"} </button>
    // non si posso ritornare due elemneti da un componente, ma si possono racchiudere più elementi in uno - div dentro un div con dentro altri tag
    // <div>
    //     <h3>Non si può fare</h3>
    // </div>
  );
};

//per rendere disponibile questo componente al di fuori bisogna esportarlo

export default ButtonComponent;
//componente disponibile all'import in altri file
