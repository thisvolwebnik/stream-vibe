import "./Button.scss";
import classNames from "classnames";
import Icon from "@/components/Icon";

const Button = (props) => {
  const {
    className,
    href,
    target,
    type = "button",
    label,
    isLabelHidden = false,
    iconName,
    /*
     * "before" | "after"
     * */
    iconPosition = "before",
    /*
     * "" (default) | "transparent" | black-10
     * */
    mode = "",
    hasFill,
    extraAttrs,
  } = props;

  const isLink = href !== undefined;
  const Component = isLink ? "a" : "button";
  const linkProps = { href, target };
  const buttonProps = { type };
  const specificProps = isLink ? linkProps : buttonProps;
  const title = !isLabelHidden ? label : undefined;
  const iconComponent = iconName && <Icon className="button__icon" name={iconName} hasFill={hasFill} />;

  return (
    <Component
      className={classNames(className, "button", { [`button--${mode}`]: mode })}
      {...specificProps}
      title={title}
      aria-label={title}
      {...extraAttrs}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{title}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  );
};

export default Button;
