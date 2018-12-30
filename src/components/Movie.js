import React from 'react';
import '../style/Movie.css'
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie ({title,poster,genres,synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Columns">
                <MovieImage poster={poster} alt={title}/>
            </div>
            <div className="Movie_columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre,index)=><MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie_Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>   
        </div>
    );
}

Movie.propTypes = {
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
}

function MovieGenre({genre}){
    return(
        <span ClassName="Movie_Genre">{genre} </span>
    );
}

MovieGenre.propTypes = {
    genre:PropTypes.string.isRequired
}

function MovieImage({poster,alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie_Image" />
    )
}

MovieImage.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Movie;

// class Movie extends Component {
    
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <div>
//                 <div><MovieImage poster={this.props.poster}/></div>
//                 {this.props.title}
//             </div>
//         );
//     }
// }

// class MovieImage extends Component{
    
//     static propTypes={
//         poster:PropTypes.string.isrequired
//     }
    
//     render(){
//         return(
//             // eslint-disable-next-line
//             <img src={this.props.poster} />
//         )
//     }
// }