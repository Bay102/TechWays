import * as S from "./professional.styles";
import AttributeCard from "../../AttributeCard/AttributeCard";
import { AttributeStoreProps } from "../AttributesStore";
import { observer } from "mobx-react";

type Props = {
  attributeStore: AttributeStoreProps;
};

export const Professional = observer(({ attributeStore }: Props) => {
  return (
    <S.ProfessionalContainer>
      <AttributeCard
        title='Paths'
        attributes={attributeStore.professionalChoices.paths}
      />
      <AttributeCard
        title='Goals'
        attributes={attributeStore.professionalChoices.goals}
      />
      <AttributeCard
        title='Industry'
        attributes={attributeStore.professionalChoices.industry}
      />
      <AttributeCard
        title='Market Difficulty'
        attributes={attributeStore.professionalChoices.marketDifficulty}
      />
      <AttributeCard
        title='Skill Level'
        attributes={attributeStore.professionalChoices.skillLevel}
      />
    </S.ProfessionalContainer>
  );
});
