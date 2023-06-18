
import { appliedWorkSchedule } from '../../../../../../mock/applyWorkSchedule';
import './DailySchedule.scss';

const DailySchedule = (props: any) => {
    const { dailyOption, setDailyOption } = props;
    return (
        <div className='daily-schedule'>
            <div className='applied-work d-flex align-items-center'>
                {appliedWorkSchedule.map((item, i: number) => (
                    <p className='d-flex align-items-center justify-center text-center m-0 fs-14 line-height-20 cursor-pointer'
                        style={{
                            backgroundColor: dailyOption.includes(item) ? '#E76F51' : '#DBE4EF',
                            color: dailyOption.includes(item) ? '#FFFFFF' : '#3B4D60',
                            width: "24px",
                            height: "24px"
                        }}
                        key={i}
                        onClick={() => {
                            dailyOption.includes(item) ?
                                setDailyOption('') : setDailyOption(item)

                        }}>{item.charAt(0).toUpperCase()}</p>
                ))}

            </div>
        </div>
    )
}

export default DailySchedule