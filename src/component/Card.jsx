
import Style from './Card.module.css';

const Card = ({title,ReleaseDate,director,duration,genre,description,posterImg,mainImg}) => {
    return(
        
        <div className={Style.container}>

            <div className={Style.details}>
                <div className={Style.firstHalf}>
                    <img src={posterImg} alt="image" />

                    <div className={Style.subDetails}>
                    <div  className={Style.subpart}>
                            <h3>{title}</h3>
                            <div className={Style.year}>
                                <p>{ReleaseDate},</p> 
                                <p>{director}</p>
                            </div>
                    </div>
                            <div className={Style.timegenre}>
                                <p style={{border: "1px solid"}}>{duration}</p>
                                <p>{genre}</p>
                            </div>
                       
                    </div>
                </div>
                <p style={{maxWidth: '350px'}}>{description}</p>
            </div>
        <img style={{height:'250px', width:"350px", objectFit:'cover'}} src={mainImg} alt="image" />
        </div>
       
    )
}

export default Card