export interface DataType {
    key: string;
    projectname: string;
    manager: string;
    createdDate: string;
    dueDate: string;
    actions: string;
  }
  export interface memberDataType {
    key: string;
    name: string;
    projectRole: string;
    manager: string;
    actions: string;
  }
  export interface TasksDataType {
    key: string;
    taskName: string;
    status: string;
    assignee: string;
    createdOn: string;
    actions: string;
  }
  export interface teamsType {
    key: string;
    teamName: string;
    members: string;
    manager: string;
    actions: string;
  }
  
  export const activeProjectdata: DataType[] = [
    {
      key: "1",
      projectname: "ClockLog",
      manager: "Allen john",
      createdDate: "Mon, 22 Jun 2022",
      dueDate: "Mon, 22 Jun 2022",
      actions: "",
    },
    {
      key: "2",
      projectname: "BuzzHr",
      manager: "Allen john",
      createdDate: "Mon, 22 Jun 2022",
      dueDate: "Mon, 22 Jun 2022",
      actions: "",
    },
    {
      key: "3",
      projectname: "Care Library",
      manager: "Allen john",
      createdDate: "Mon, 22 Jun 2022",
      dueDate: "Mon, 22 Jun 2022",
      actions: "",
    },
    {
      key: "4",
      projectname: "StyleSheet",
      manager: "Allen john",
      createdDate: "Mon, 22 Jun 2022",
      dueDate: "Mon, 22 Jun 2022",
      actions: "",
    },
    {
      key: "5",
      projectname: "StyleSheet",
      manager: "Allen john",
      createdDate: "Mon, 22 Jun 2022",
      dueDate: "Mon, 22 Jun 2022",
      actions: "",
    },
    {
      key: "6",
      projectname: "StyleSheet",
      manager: "Allen john",
      createdDate: "Mon, 22 Jun 2022",
      dueDate: "Mon, 22 Jun 2022",
      actions: "",
    },
  ];


//   task start here


  
  
  
 export const selectedTaskData: TasksDataType[] = [
    {
      key: "1",
      taskName: "Web & App",
      status: "Allen john",
      assignee: "Mon, 22 Jun 2022",
      createdOn: "Mon, 22 Jun 2022",
      actions: "",
    },
    {
      key: "2",
      taskName: "Screencast",
      status: "Allen john",
      assignee: "Mon, 22 Jun 2022",
      createdOn: "Mon, 22 Jun 2022",
      actions: "",
    },
    {
      key: "3",
      taskName: "Settings",
      status: "Allen john",
      assignee: "Mon, 22 Jun 2022",
      createdOn: "Mon, 22 Jun 2022",
      actions: "",
    },
    {
      key: "4",
      taskName: "Manage Team",
      status: "Allen john",
      assignee: "Mon, 22 Jun 2022",
      createdOn: "Mon, 22 Jun 2022",
      actions: "",
    },
  ];

 

 export const selectedMemberData: any = [
    {
      key: "1",
      name: "Daniyal ",
      projectRole: "Allen john",
      manager: "",
      actions: "",
    },
    {
      key: "2",
      name: "raza ",
      projectRole: "john",
      manager: "",
      actions: "",
    },
  ];

  // table data start here

  
  
  
  export const selectedTeamsData: any = [
    {
      key: "1",
      teamName: "Business Analyst",
      members: "Allen john",
      manager: "Shariq Shahzad",
      actions: "",
    },
    {
      key: "2",
      teamName: "UI Design",
      members: "john",
      manager: "Daniyal Muneer",
      actions: "",
    },
  ];
  
  