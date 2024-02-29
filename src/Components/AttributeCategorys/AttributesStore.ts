import { action, makeAutoObservable } from "mobx";

export type Attribute = {
  selected: boolean;
  label: string;
  value: string;
};

export type AttributeObject = { [key: string]: Attribute };

export type AttributeStoreProps = {
  IntriguesAndDispositionChoices: {
    intriguedBy: AttributeObject;
    personality: AttributeObject;
  };
  professionalChoices: {
    goals: AttributeObject;
    industry: AttributeObject;
    marketDifficulty: AttributeObject;
    skillLevel: AttributeObject;
  };
  educationalChoices: {
    lengthOfTime: AttributeObject;
    shoolSetting: AttributeObject;
    learningFormat: AttributeObject;
    commnity: AttributeObject;
    mentorship: AttributeObject;
  };
  onSelected: (attribute: Attribute) => void;
};

class AttributeStore implements AttributeStoreProps {
  constructor() {
    makeAutoObservable(this);
  }

  IntriguesAndDispositionChoices = {
    intriguedBy: {
      technology: { selected: false, label: "Technology", value: "technology" },
      coding: { selected: false, label: "Coding", value: "coding" },
      gaming: { selected: false, label: "Gaming", value: "gaming" },
      openSource: {
        selected: false,
        label: "Open Source",
        value: "openSource",
      },
      problemSolving: {
        selected: false,
        label: "Problem Solving",
        value: "problemSolving",
      },
      challenges: { selected: false, label: "Challenges", value: "challenges" },
      constantlyLearning: {
        selected: false,
        label: "Constantly Learning",
        value: "constantlyLearning",
      },
      howTechWorks: {
        selected: false,
        label: "How Tech Works",
        value: "howTechWorks",
      },
      algorithms: { selected: false, label: "Algorithms", value: "algorithms" },
    },
    personality: {
      logicalThinker: { selected: false, label: "Logical", value: "logical" },
      creative: { selected: false, label: "Creative", value: "creative" },
      problemSolver: {
        selected: false,
        label: "Problem Solver",
        value: "problemSolver",
      },
      analytical: { selected: false, label: "Analytical", value: "analytical" },
      detailOriented: {
        selected: false,
        label: "Detail Oriented",
        value: "detailOriented",
      },
      persistent: { selected: false, label: "Persistent", value: "persistent" },
      adaptable: { selected: false, label: "Adaptable", value: "adaptable" },
      curious: { selected: false, label: "Curious", value: "curious" },
      selfMotivated: {
        selected: false,
        label: "Self Motivated",
        value: "selfMotivated",
      },
      teamPlayer: {
        selected: false,
        label: "Team Player",
        value: "teamPlayer",
      },
      goodCommunicator: {
        selected: false,
        label: "Good Communicator",
        value: "goodCommunicator",
      },

      empathetic: { selected: false, label: "Empathetic", value: "empathetic" },
      humble: { selected: false, label: "Humble", value: "humble" },
      confident: { selected: false, label: "Confident", value: "confident" },
    },
  };
  professionalChoices = {
    goals: {
      hobby: { selected: false, label: "Hobby", value: "hobby" },
      personalStartup: {
        selected: false,
        label: "Personal Startup",
        value: "personalStartup",
      },
      career: { selected: false, label: "Career", value: "career" },
      freelance: { selected: false, label: "Freelance", value: "freelance" },
      openSource: {
        selected: false,
        label: "Open Source",
        value: "openSource",
      },
      agency: { selected: false, label: "Agency", value: "agency" },
    },
    industry: {
      webDevelopment: {
        selected: false,
        label: "Web Development",
        value: "webDevelopment",
      },
      mobileDevelopment: {
        selected: false,
        label: "Mobile Development",
        value: "mobileDevelopment",
      },
      gameDevelopment: {
        selected: false,
        label: "Game Development",
        value: "gameDevelopment",
      },
      devOps: { selected: false, label: "DevOps", value: "devOps" },
      dataScience: {
        selected: false,
        label: "Data Science",
        value: "dataScience",
      },
      machineLearning: {
        selected: false,
        label: "Machine Learning",
        value: "machineLearning",
      },
      cyberSecurity: {
        selected: false,
        label: "Cyber Security",
        value: "cyberSecurity",
      },
      cloudComputing: {
        selected: false,
        label: "Cloud Computing",
        value: "cloudComputing",
      },
      blockchain: { selected: false, label: "Blockchain", value: "blockchain" },
      artificialIntelligence: {
        selected: false,
        label: "Artificial Intelligence",
        value: "artificialIntelligence",
      },
      robotics: { selected: false, label: "Robotics", value: "robotics" },
      augmentedReality: {
        selected: false,
        label: "Augmented Reality",
        value: "augmentedReality",
      },
      virtualReality: {
        selected: false,
        label: "Virtual Reality",
        value: "virtualReality",
      },
      internetOfThings: {
        selected: false,
        label: "Internet of Things",
        value: "internetOfThings",
      },
    },
    marketDifficulty: {
      lestDifficult: { selected: false, label: "Least Difficult", value: "1" },
      difficult: { selected: false, label: "Difficult", value: "2" },
      mostDifficult: { selected: false, label: "Most Difficult", value: "3" },
    },
    skillLevel: {
      noob: { selected: false, label: "Noob", value: "1" },
      skilled: { selected: false, label: "Skilled", value: "2" },
      expert: { selected: false, label: "Expert", value: "3" },
    },
  };
  educationalChoices = {
    lengthOfTime: {
      threeToSixMonths: { selected: false, label: "3-6 Months", value: "1" },
      sixToEighteenMonths: {
        selected: false,
        label: "6-18 Months",
        value: "2",
      },
      eighteenPlusMonths: { selected: false, label: "18+ Months", value: "3" },
    },
    shoolSetting: {
      remote: { selected: false, label: "Remote", value: "remote" },
      inPerson: { selected: false, label: "In Person", value: "inPerson" },
      hybrid: { selected: false, label: "Hybrid", value: "hybrid" },
    },

    learningFormat: {
      videoTutorial: {
        selected: false,
        label: "Video Tutorial",
        value: "videoTutorial",
      },
      liveLecture: {
        selected: false,
        label: "Live Lecture",
        value: "liveLecture",
      },
      projectReviews: {
        selected: false,
        label: "Project Reviews",
        value: "projectReviews",
      },
      quizzes: { selected: false, label: "Quizzes", value: "quizzes" },
      studentCollaboration: {
        selected: false,
        label: "Student Collaboration",
        value: "studentCollaboration",
      },
      mentorship: { selected: false, label: "Mentorship", value: "mentorship" },
    },

    commnity: {
      strongStudentPresence: {
        selected: false,
        label: "Strong Student Presence",
        value: "strongStudentPresence",
      },
      p2pCollaboration: {
        selected: false,
        label: "P2P Collaboration",
        value: "p2pCollaboration",
      },
      hackathons: { selected: false, label: "Hackathons", value: "hackathons" },
      virtualClassrooms: {
        selected: false,
        label: "Virtual Classrooms",
        value: "virtualClassrooms",
      },
    },

    mentorship: {
      weeklyCheckins: {
        selected: false,
        label: "Weekly Checkins",
        value: "weeklyCheckins",
      },
      dailyCheckins: {
        selected: false,
        label: "Daily Checkins",
        value: "dailyCheckins",
      },
      monthlyCheckins: {
        selected: false,
        label: "Monthly Checkins",
        value: "monthlyCheckins",
      },
      noCheckins: {
        selected: false,
        label: "No Checkins",
        value: "noCheckins",
      },
    },
  };
  @action
  onSelected = (attribute: Attribute) => {
    attribute.selected = !attribute.selected;
  };
}

export const AttributesStore = new AttributeStore();
