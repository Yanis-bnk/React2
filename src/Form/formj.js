export default function Formj(props){
    
    return(<> 
        <label >{props.inputLabel}</label>
        <input type="text" name={props.inputName}></input>
        <div>{props.childre}</div>
    </>)

}