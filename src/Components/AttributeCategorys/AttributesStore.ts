import { action, makeAutoObservable, observable } from 'mobx'

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

  onSelected: (attribute: Attribute) => void
}

class AttributeStore implements AttributeStoreProps {
  constructor() {
    makeAutoObservable(this)
  }

  @observable
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

  @observable
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

  goals = {
    hobby: { selected: false, label: 'Hobby', value: 'hobby' },
    personalStartup: {
      selected: false,
      label: 'Personal Startup',
      value: 'personalStartup',
    },
    career: { selected: false, label: 'Career', value: 'career' },
    freelance: { selected: false, label: 'Freelance', value: 'freelance' },
    openSource: { selected: false, label: 'Open Source', value: 'openSource' },
    agency: { selected: false, label: 'Agency', value: 'agency' },
  }

  industry = {
    webDevelopment: {
      selected: false,
      label: 'Web Development',
      value: 'webDevelopment',
    },
    mobileDevelopment: {
      selected: false,
      label: 'Mobile Development',
      value: 'mobileDevelopment',
    },
    gameDevelopment: {
      selected: false,
      label: 'Game Development',
      value: 'gameDevelopment',
    },
    devOps: { selected: false, label: 'DevOps', value: 'devOps' },
    dataScience: {
      selected: false,
      label: 'Data Science',
      value: 'dataScience',
    },
    machineLearning: {
      selected: false,
      label: 'Machine Learning',
      value: 'machineLearning',
    },
    cyberSecurity: {
      selected: false,
      label: 'Cyber Security',
      value: 'cyberSecurity',
    },
    cloudComputing: {
      selected: false,
      label: 'Cloud Computing',
      value: 'cloudComputing',
    },
    blockchain: { selected: false, label: 'Blockchain', value: 'blockchain' },
    artificialIntelligence: {
      selected: false,
      label: 'Artificial Intelligence',
      value: 'artificialIntelligence',
    },
    robotics: { selected: false, label: 'Robotics', value: 'robotics' },
    augmentedReality: {
      selected: false,
      label: 'Augmented Reality',
      value: 'augmentedReality',
    },
    virtualReality: {
      selected: false,
      label: 'Virtual Reality',
      value: 'virtualReality',
    },
    internetOfThings: {
      selected: false,
      label: 'Internet of Things',
      value: 'internetOfThings',
    },
  }
}

export const AttributesStore = new AttributeStore()
