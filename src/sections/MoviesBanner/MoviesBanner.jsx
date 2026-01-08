import "./MoviesBanner.scss";
import classNames from "classnames";

const MoviesBanner = (props) => {
  const { className } = props;
  const titleId = "movies-banner-title";

  return (
    <section className={classNames(className, "movies-banner container")} aria-labelledby={titleId}>
      <h1 className="visually-hidden" id={titleId}>
        Movies & shows
      </h1>
    </section>
  );
};

export default MoviesBanner;
