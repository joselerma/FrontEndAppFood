import React from 'react';
import '../styles/Pagination.css'

export const Pagination = ({resultsPerPage, totalResults, paginate }) => {

    const pageNumbers=[];

  

    for(let i=1; i<= Math.ceil(totalResults/resultsPerPage); i++){
        pageNumbers.push(i);
    }


    return ( 
        <nav >
            <ul className='alinearPagination'>
            {pageNumbers.map(number=>(
                <li key={number} className='alinearLi'onClick={()=>paginate(number)}>
                    <a >{number}</a>
                </li>
            ))}
        </ul>
            
        </nav>
     );
}
 
export default Pagination;