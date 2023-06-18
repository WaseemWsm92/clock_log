interface IManageTeam {
    key: string;
    teamName: string;
    members?: string;
    projects: string;
    manager: string;
    actions: string;
  }

  interface IMemberTeam {
    key: string;
    name: string;
    projectRole?: string;
    manager: string;
    actions: string;
  }

  interface IActiveProject {
    key: string;
    name: string;
    actions: string;
  }


export const ActiveData: IManageTeam[] = [
    {
      key: '1',
      teamName: 'Business Analyst',
      // members:"",
      projects: "02",
      manager: 'Allen john',
      actions: '',
    },
    {
      key: '2',
      teamName: 'UI Design',
      // members:"",
      projects: "03",
      manager: 'Allen john',
      actions: '',
    },
    {
      key: '3',
      teamName: 'Project Management',
      projects: "01",
      manager: 'Allen john',
      actions: '',

    },
    {
      key: '4',
      teamName: 'Quality Analysis',
      // members:"",
      projects: "02",
      manager: 'Allen john',
      actions: '',
    },

    {
      key: '5',
      teamName: 'Management',
      // members:"",
      projects: "04",
      manager: 'Allen john',
      actions: '',
    },
    {
      key: '6',
      teamName: 'Accounts',
      // members:"",
      projects: "01",
      manager: 'Allen john',
      actions: '',
    },
    {
      key: '7',
      teamName: 'HR Department',
      // members:"",
      projects: "03",
      manager: 'Allen john',
      actions: '',
    },
    {
      key: '8',
      teamName: 'Developers',
      // members:"",
      projects: "02",
      manager: 'Allen john',
      actions: '',
    },
    {
      key: '9',
      teamName: 'Developers',
      // members:"",
      projects: "02",
      manager: 'Allen john',
      actions: '',
    },
  ];



  export const Memberdata: IMemberTeam[] = [
    {
      key: '1',
      name: 'Daniyal Muneer',
      // members:"",
      projectRole: "Manager",
      manager: '',
      actions: '',
    },
    {
      key: '2',
      name: 'M Asif',
      // members:"",
      projectRole: "Manager",
      manager: '',
      actions: '',
    },
    {
      key: '3',
      name: 'M Ahmed',
      projectRole: "User",
      manager: '',
      actions: '',
  
    },
    {
      key: '4',
      name: 'Khyzer',
      // members:"",
      projectRole: "Manager",
      manager: '',
      actions: '',
    },
  
    {
      key: '5',
      name: 'Kiran',
      // members:"",
      projectRole: "User",
      manager: '',
      actions: '',
    },
    {
      key: '6',
      name: 'Adnan',
      // members:"",
      projectRole: "Manager",
      manager: '',
      actions: '',
    },
    {
      key: '7',
      name: 'Arslan',
      // members:"",
      projectRole: "Manager",
      manager: '',
      actions: '',
    },
    {
      key: '8',
      name: 'Arslan',
      // members:"",
      projectRole: "Manager",
      manager: '',
      actions: '',
    },
  ];



  
  export const checkBoxMemberData = [
    {
      id: 1,
      label: "Daniyal",
      value: "daniyal"
    },
    {
      id: 2,
      label: "Taimoor",
      value: "taimoor"
    },
    {
      id: 3,
      label: "Kiran",
      value: "kiran"
    },
    {
      id: 4,
      label: "M Asif",
      value: "mAsif"
    },
    {
      id: 5,
      label: "Ahmad",
      value: "ahmad"
    },
    {
      id: 6,
      label: "Khan Afridi",
      value: "khanAfrid"
    },
    {
      id: 7,
      label: "Ali",
      value: "ali"
    },
    {
      id: 8,
      label: "Arslan",
      value: "arslan"
    },
    {
      id: 9,
      label: "Daniyal",
      value: "daniyal"
    },
    {
      id: 10,
      label: "Umer",
      value: "umer"
    },
    {
      id: 11,
      label: "Haroon",
      value: "haroon"
    },
    {
      id: 12,
      label: "Ali",
      value: "ali"
    },
    {
      id: 13,
      label: "Adnan",
      value: "adnan"
    },
    {
      id: 14,
      label: "Saqib",
      value: "saqib"
    },
    {
      id: 15,
      label: "Tariq",
      value: "tariq"
    },
    {
      id: 16,
      label: "Usama",
      value: "tsama"
    },

  ];

  export const  ActiveProject: IActiveProject[] = [
    {
      key: '1',
      name: 'ClockLog',
      actions: '',
    },
    {
      key: '2',
      name: 'BuzzHr',
      actions: '',
    },
    {
      key: '3',
      name: 'StyleSheet',
      actions: '',
  
    },
    {
      key: '4',
      name: 'CareLibrary',
      actions: '',
    },
  
    {
      key: '5',
      name: 'Fooster App',
        actions: '',
    },
    {
      key: '6',
      name: 'BuzzHr',
      actions: '',
    },
    {
      key: '7',
      name: 'ClockLog',
      actions: '',
    },
    {
      key: '8',
      name: 'ClockLog',
      actions: '',
    },
  ];