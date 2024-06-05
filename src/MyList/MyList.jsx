import PropTypes from "prop-types";

function MyList({items}){

    function handleClick(index){
         console.log(index);
    }

    return <ul>
        {items.map((item, index) =>
            <li key={index} onClick={()=>handleClick(index)}>{item}</li>)}
    </ul>
}

MyList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.number),
}

export default MyList;
