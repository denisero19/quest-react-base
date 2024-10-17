const Button = ({label}) => {
    return (
        <button onClick={() => {
            alert(`Clique em OK ${label}`);
        }}
        
        >Clique aqui
        </button>
    );    
};

export default Button