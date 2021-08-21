import PropTypes from 'prop-types'

const Filter = ({onChange, value})=>{

    return(  
        <label htmlFor=""> Find contacts by name
            <input type="text" value={value} onChange={onChange}/>
    </label>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
}

export default Filter