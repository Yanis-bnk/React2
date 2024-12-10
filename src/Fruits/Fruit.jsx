export default function Fruit({fruits}){
    const afficherFruits=()=>{
        return fruits.map(
             fruit=>{
                return <li>{fruit}</li> 
               
                })
            
            
                

           
        
        
    
    }
    return <>
    
     <h1 className="yanis">liste de fruit :</h1>
      

    {afficherFruits()}
          
    </>
    }
