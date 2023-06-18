export const TooltipsData = {
    overall: <div>
        <span className="fs-12 fw-700 line-height-18 ">Overall Score</span>
        <span className="fs-12 fw-400 line-height-18 " style={{ display: "block", textAlign: 'justify' }}>
            It's a cumulative score out of 100 derived from
            productivity, idle time & time track.
            You can modify the weightage from achievements module
            formula: overall score= productivity score + idle time score + time tracked score
        </span>
    </div>,
    productivityScore: <div>
        <span className="fs-12 fw-700 line-height-18">Productivity Score</span>
        <span className="fs-12 fw-400 line-height-18" style={{ display: "block", textAlign: 'justify' }}>
            This score is derived from the employee's productivity,
            it's total weightage can also be specified in achievements module
            formula: productivity score
            = productivity % * productivity weightage (in achievements module)
        </span>
    </div>,
    idleTimeScore: <div>
        <span className="fs-12 fw-700 line-height-18">Idle Time Score</span>
        <span className="fs-12 fw-400 line-height-18" style={{ display: "block", textAlign: 'justify' }}>
            This score is derived from the employee's idle time % ,
            it's total weightage can also be specified in achievements module
            formula: idle time score
            = (idle time % - 1) * idle time weightage (in achievements module)
        </span>
    </div>,
    timeTrackedScore: <div>
        <span className="fs-12 fw-700 line-height-18">Time Tracked Score</span>
        <span className="fs-12 fw-400 line-height-18" style={{ display: "block", textAlign: 'justify' }}>
            This score is derived from the employee's time track % out of the defined
            time in achievements module , it's total weightage can also be specified in
            achievements module
            formula: time tracked score=
            ((total tracked hours/time tracked threshold)
            *100)%* tracked time weightage (In achievements module)
        </span>
    </div>
}
