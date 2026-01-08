import "./Logo.scss";
import classNames from "classnames";

const Logo = (props) => {
  const { className, loading = "lazy" } = props;
  const title = "Home";

  return (
    <a className={classNames(className, "logo")} href="/" title={title} aria-label={title}>
      <img className="logo__image" src="/icons/Logo.svg" alt="Logo Stream Vibe" loading={loading} />
    </a>
  );
};

export default Logo;
