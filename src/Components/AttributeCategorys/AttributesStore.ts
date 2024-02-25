import { makeAutoObservable } from 'mobx'

export type Attribute = {
  selected: boolean
  label: string
  value: string
}

export type AttributeObject = { [key: string]: Attribute }

export type AttributeStoreProps = {
  intriguedBy: {
    technology: Attribute
    coding: Attribute
    gaming: Attribute
    openSource: Attribute
    problemSolving: Attribute
    challenges: Attribute
    constantlyLearning: Attribute
    howTechWorks: Attribute
    algorithms: Attribute
  }
  personality: {
    logicalThinker: Attribute
    creative: Attribute
    problemSolver: Attribute
    analytical: Attribute
    detailOriented: Attribute
    persistent: Attribute
    adaptable: Attribute
    curious: Attribute
    selfMotivated: Attribute
    teamPlayer: Attribute
    goodCommunicator: Attribute
    empathetic: Attribute
    humble: Attribute
    confident: Attribute
  }
}

class AttributeStore implements AttributeStoreProps {
  constructor() {
    makeAutoObservable(this)
  }

  intriguedBy = {
    technology: { selected: false, label: 'Technology', value: 'technology' },
    coding: { selected: false, label: 'Coding', value: 'coding' },
    gaming: { selected: false, label: 'Gaming', value: 'gaming' },
    openSource: { selected: false, label: 'Open Source', value: 'openSource' },
    problemSolving: {
      selected: false,
      label: 'Problem Solving',
      value: 'problemSolving',
    },
    challenges: { selected: false, label: 'Challenges', value: 'challenges' },
    constantlyLearning: {
      selected: false,
      label: 'Constantly Learning',
      value: 'constantlyLearning',
    },
    howTechWorks: {
      selected: false,
      label: 'How Tech Works',
      value: 'howTechWorks',
    },
    algorithms: { selected: false, label: 'Algorithms', value: 'algorithms' },
  }

  personality = {
    logicalThinker: { selected: false, label: 'Logical', value: 'logical' },
    creative: { selected: false, label: 'Creative', value: 'creative' },
    problemSolver: {
      selected: false,
      label: 'Problem Solver',
      value: 'problemSolver',
    },
    analytical: { selected: false, label: 'Analytical', value: 'analytical' },
    detailOriented: {
      selected: false,
      label: 'Detail Oriented',
      value: 'detailOriented',
    },
    persistent: { selected: false, label: 'Persistent', value: 'persistent' },
    adaptable: { selected: false, label: 'Adaptable', value: 'adaptable' },
    curious: { selected: false, label: 'Curious', value: 'curious' },
    selfMotivated: {
      selected: false,
      label: 'Self Motivated',
      value: 'selfMotivated',
    },
    teamPlayer: { selected: false, label: 'Team Player', value: 'teamPlayer' },
    goodCommunicator: {
      selected: false,
      label: 'Good Communicator',
      value: 'goodCommunicator',
    },
    empathetic: { selected: false, label: 'Empathetic', value: 'empathetic' },
    humble: { selected: false, label: 'Humble', value: 'humble' },
    confident: { selected: false, label: 'Confident', value: 'confident' },
  }
}

export const AttributesStore = new AttributeStore()