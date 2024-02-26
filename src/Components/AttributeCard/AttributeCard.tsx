import {
  Attribute,
  AttributeObject,
} from "../AttributeCategorys/AttributesStore";
import * as S from "./attributeCard.styles";

type CardProps = {
  title: string;
  attributes: AttributeObject;
};

const AttributeCard = ({ title, attributes }: CardProps) => {
  const onSelected = (attribute: Attribute) => {
    attribute.selected = !attribute.selected;
    console.log(attribute.selected);
  };
  return (
    <S.CardContainer>
      <S.CardTitle>{title}</S.CardTitle>
      {Object.values(attributes).map((attribute: Attribute, _index: number) => (
        <S.Text
          key={_index}
          onClick={() => onSelected(attribute)}
          selected={attribute.selected}
        >
          {attribute.label}
        </S.Text>
      ))}
    </S.CardContainer>
  );
};

export default AttributeCard;
