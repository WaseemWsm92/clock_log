import ActivitiyComp from "../../../components/activityLogs/activitiyLogs";

const ActivityLog = ({user}:any) => {
  return (
    <div className="activity_log">
      <ActivitiyComp user={user} />
    </div>
  );
};

export default ActivityLog;
