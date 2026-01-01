import "./Socials.scss";
import classNames from "classnames";
import Button from "@/components/Button";

const Socials = (props) => {
  const { className, links = [] } = props;

  return (
    <div className={classNames(className, "socials")}>
      <ul className="socials__list">
        {links.map(({ label, href, iconName }, index) => (
          <li className="socials__item" key={index}>
            <Button
              className="socials__icon"
              mode="black-10"
              href={href}
              target="_blank"
              label={label}
              aria-label={label}
              iconName={iconName}
              hasFill
              isLabelHidden
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
