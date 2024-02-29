import { observer } from "mobx-react";
import * as S from "./preferences.styles";
import { AttributeStoreProps } from "../AttributesStore";
import AttributeCard from "../../AttributeCard/AttributeCard";

type Props = {
  attributeStore: AttributeStoreProps;
};

export const Preferences = observer(({ attributeStore }: Props) => {
  return (
    <S.PreferencesContainer>
      <AttributeCard
        title='Length'
        attributes={attributeStore.educationalChoices.commnity}
      />
      <AttributeCard
        title='In-Person/Remote'
        attributes={attributeStore.educationalChoices.learningFormat}
      />
      <AttributeCard
        title='Learning Format'
        attributes={attributeStore.educationalChoices.lengthOfTime}
      />
      <AttributeCard
        title='Community'
        attributes={attributeStore.educationalChoices.mentorship}
      />
      <AttributeCard
        title='Mentorship'
        attributes={attributeStore.educationalChoices.shoolSetting}
      />
    </S.PreferencesContainer>
  );
});
