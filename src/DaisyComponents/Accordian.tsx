import { Interests } from "../Components/AttributeCategorys/Interests/Interests";
import { Preferences } from "../Components/AttributeCategorys/Preferences/Preferences";
import { AttributesStore } from "../Components/AttributeCategorys/AttributesStore";
import { Professional } from "../Components/AttributeCategorys/Professional/Professional";
import * as S from "../Home/home.styles";

export const Accordian = () => {
  return (
    <>
      <div className='join join-vertical w-full flex-1'>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='radio' name='my-accordion-4' defaultChecked />
          <div className='collapse-title text-xl font-medium'>Interests</div>
          <div className='collapse-content'>
            <S.AttributesContainer>
              <Interests attributeStore={AttributesStore} />
            </S.AttributesContainer>
          </div>
        </div>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='radio' name='my-accordion-4' />
          <div className='collapse-title text-xl font-medium'>Educational</div>
          <div className='collapse-content'>
            <S.AttributesContainer>
              <Preferences attributeStore={AttributesStore} />
            </S.AttributesContainer>
          </div>
        </div>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='radio' name='my-accordion-4' />
          <div className='collapse-title text-xl font-medium'>Professional</div>
          <div className='collapse-content'>
            <S.AttributesContainer>
              <Professional attributeStore={AttributesStore} />
            </S.AttributesContainer>
          </div>
        </div>
      </div>
    </>
  );
};
