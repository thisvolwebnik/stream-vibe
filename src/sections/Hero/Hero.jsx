import "./Hero.scss";
import classNames from "classnames";
import Button from "@/components/Button";

const Hero = (props) => {
  const { className } = props;
  const playButtonTitle = "Play Video";
  const heroTitle = "hero-title";

  return (
    <section className={classNames(className, "hero")} aria-labelledby={heroTitle}>
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button className="hero__play-button" type="button" aria-label={playButtonTitle} title={playButtonTitle}>
            <img
              className="hero__play-button-image"
              src="/icons/play-button.svg"
              alt=""
              width="470"
              height="470"
              loading="lazy"
            />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
          <h1 className="hero__title h1" id={heroTitle}>
            The Best Streaming Experience
          </h1>
          <div className="hero__description">
            <p>
              StreamVibe is the best streaming experience for watching your favorite movies and shows on demand,
              anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest
              blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you
              can easily find the content you want to watch.
            </p>
          </div>
          <Button className="hero__button" iconName="play" hasFill label="Start Watching Now" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
