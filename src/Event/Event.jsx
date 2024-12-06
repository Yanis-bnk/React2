
export default function Event() {
    // Déclaration correcte de la fonction
    const handelClick = () => {
        alert('booommm !!!!!!');
    };
    const handelClick2 = () => {
        alert('booommm !!!!!!');
    };

    return (
        <div>
            <input onChange={handelClick2}/>
            <button  onClick={handelClick}>
                  Click ici 
            </button>
        </div>
    );
}
