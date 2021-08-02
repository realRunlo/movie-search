import styles from "./MovieList.module.css";
import Link from "next/link"
import {useState} from "react";
import {useRouter} from "next/router";
const MovieList = ({ props }) => {

    const src = "https://image.tmdb.org/t/p/w185";
    const [show,setShow] = useState(false);
    const router = useRouter();


    if(show==false){
    return (


        <div className={styles.container}>
            {props.results.map((movie) => (
                <table>
                    <tr>
                        <td>

                            <img  width="80" src={src + movie.poster_path} />


                        </td>
        
                        <td className={styles.titleS} >
                            
                            {movie.original_title}
                            
                            
                            <p className={styles.score}>Score: {movie.vote_average}</p>
                        </td>
                        

                    </tr>
                </table>
               

            ))}
           

        </div>
    
        
        
        
    );
}else{
 return(
    <div className={styles.container}>
    {props.results.map((movie) => (
        <table>
            <tr>
                <td>

                    <img width="80" src={src + movie.poster_path} />


                </td>
                
                <td className={styles.titleS} onmouseover={handleClick}>
                    
                    <div>{movie.overview}</div>
                    
                    <p className={styles.score}>Score: {movie.vote_average}</p>
                </td>

            </tr>
        </table>
       

    ))}
   

</div>
    )

}

};






export default MovieList;

