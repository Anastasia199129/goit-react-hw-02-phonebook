

const Filter = ({onChange, value})=>{

    return(  
        <label htmlFor=""> Find contacts by name
            <input type="text" value={value} onChange={onChange}/>
    </label>
    )
}




export default Filter