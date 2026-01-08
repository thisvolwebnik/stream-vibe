import "./Collections.scss";
import classNames from "classnames";
import Tabs from "@/components/Tabs";
import collectionGroups from "@/sections/Collections/collectionGroups";
import getIdFromTitle from "@/utils/getIdFromTitle";
import Section from "@/layouts/Section";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import CategoryCard from "@/components/CategoryCard";

const Collections = (props) => {
  const { className } = props;

  return (
    <Tabs
      className={classNames(className, "collections container")}
      title="collections"
      isEnableOnlyOnMobile
      items={collectionGroups.map((collectionGroup) => ({
        title: collectionGroup.title,
        isActive: collectionGroup.isActive,
        children: (
          <div className="collections__group">
            <p className="collection__title hidden-mobile">{collectionGroup.title}</p>
            {collectionGroup.items.map((collectionItem, index) => {
              const { title, categoryItems, sliderParams } = collectionItem;
              const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`;
              const titleId = `${titleFormatted}-title`;
              const sliderNavigationId = `${titleFormatted}-slider-navigation`;

              return (
                <Section
                  className="collections__section"
                  title={title}
                  titleId={titleId}
                  actions={<SliderNavigation id={sliderNavigationId} mode="tile" isHiddenMobile />}
                  key={index}
                >
                  <Slider sliderParams={sliderParams} navigationTargetElementId={sliderNavigationId}>
                    {categoryItems.map((categoryItem, index) => (
                      <CategoryCard {...categoryItem} key={index} />
                    ))}
                  </Slider>
                </Section>
              );
            })}
          </div>
        ),
      }))}
    >
      Collections
    </Tabs>
  );
};

export default Collections;
