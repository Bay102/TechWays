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
        title='Community'
        attributes={attributeStore.educationalChoices.commnity}
      />
      <AttributeCard
        title='Learning Format'
        attributes={attributeStore.educationalChoices.learningFormat}
      />
      <AttributeCard
        title='Length of time'
        attributes={attributeStore.educationalChoices.lengthOfTime}
      />
      <AttributeCard
        title='Mentorship'
        attributes={attributeStore.educationalChoices.mentorship}
      />
      <AttributeCard
        title='School Setting'
        attributes={attributeStore.educationalChoices.shoolSetting}
      />
    </S.PreferencesContainer>
  );
});
