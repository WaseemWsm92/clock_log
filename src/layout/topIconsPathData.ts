const PathList = () => {

    const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
    console.log(role, "role");

    const selectUsersPaths = [
        "Dashboard",
        "Screencasts",
        "Reports activity-log",
        "Reports web-app-usage",
        "Reports timeline",
        "Reports customized",
        "Reports hours-tracked",
        "Reports workload-balance",
    ];
    const validPathsExport = [
        "Dashboard",
        "Reports activity-log",
        "Reports web-app-usage",
        "Reports attendance",
        "Reports timeline",
        "Reports workload-balance",
        "Reports hours-tracked",
        "Settings web-apps",
        "Reports top-users",
        "Reports comparison",
        "Users-management",
    ];
    const validPathsTimeZone = [
        "Screencasts",
        "Settings ",
        "Reports activity-log",
        `Reports ${role === "ManageUser" ? "web-app-usage" : ""}`,
    ];

    return ([selectUsersPaths, validPathsExport, validPathsTimeZone])
}
export default PathList;