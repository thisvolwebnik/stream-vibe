import "./AccordionGroup.scss";
import classNames from "classnames";

const AccordionGroup = (props) => {
  const { className, columns = 1, children, isorderedList = true } = props;
  const itemPerColumn = Math.ceil(children.length / columns);
  const ListTag = isorderedList ? "ol" : "ul";

  return (
    <ListTag
      className={classNames(className, "accordion-group", {
        [`accordion-group--${columns}-columns`]: columns > 1,
        "accordion-group--has-counter": isorderedList,
      })}
    >
      {children.map((item, index) => (
        <li
          className={classNames("accordion-group__item", {
            "accordion-group__item--last-column-item": columns > 1 && itemPerColumn / (index + 1) === 1,
          })}
          key={index}
        >
          {item}
        </li>
      ))}
    </ListTag>
  );
};

export default AccordionGroup;
