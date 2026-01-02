import "./Categories.scss";
import classNames from "classnames";
import Section from "@/layouts/Section";

const Categories = (props) => {
  const { className } = props;

  return (
    <Section
      className={classNames(className, "categories")}
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={
        <div>
          <button>prev</button>
          <button>next</button>
        </div>
      }
      isActionsHiddenOnMobile
    >
      Categories
    </Section>
  );
};

export default Categories;
