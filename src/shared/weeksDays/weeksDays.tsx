import React from 'react'
import { appliedWorkSchedule } from '../../mock/applyWorkSchedule';
import './weeksDays.scss';

interface IWeeksDaya {
    label?: string;
    weeksArray: any;
    setWeeksArray: any;
}

const WeeksDays = (props: IWeeksDaya) => {
    const { label, weeksArray, setWeeksArray } = props;
    // const [weeksArray, setWeeksArray] = useState<any>([]);
    return (
        <>
            <div className='work-appiled-schedule'>
                <h2 className='title-color fs-20 fw-600 m-0'>{label}</h2>
                <div className='applied-work d-flex align-items-center'>
                    {appliedWorkSchedule.map((item, i: number) => (
                        <p className='d-flex align-items-center justify-center text-center m-0 fs-14 line-height-20 cursor-pointer'
                            style={{
                                backgroundColor: weeksArray.includes(item) ? '#E76F51' : '#DBE4EF',
                                color: weeksArray.includes(item) ? '#FFFFFF' : '#3B4D60'
                            }}
                            key={i}
                            onClick={() => {
                                !weeksArray.includes(item) ?
                                    setWeeksArray([...weeksArray, item]) :
                                    setWeeksArray(weeksArray.filter((week: any) => week !== item))
                            }}>{item.charAt(0).toUpperCase()}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WeeksDays