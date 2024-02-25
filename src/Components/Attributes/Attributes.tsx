import { observer } from 'mobx-react'
import * as S from './attribute.styles'
import { AttributeContainerProps } from './AttributesStore'

type AttributesProps = {
  store: AttributeContainerProps
}

export const Attributes = observer(({ store }: AttributesProps) => {
  return <S.AttributeContainer>{store.attribute}</S.AttributeContainer>
})
