import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, summary, genres}) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie_img} />
            <div>
                <h2 className={styles.movie_title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie_year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie_genres}>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
                </div>
        </div>
    );           
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired, // coverImg는 string의 PropTypes를 가져야하고 이건 필수(required)다.
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, // genres는 string을 가진 array여야 한다.
};

export default Movie;