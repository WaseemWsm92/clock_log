import dayjs from 'dayjs'
import User1 from '../assets/images/TopUser/user1.png';
import User2 from '../assets/images/TopUser/user2.png';
import User3 from '../assets/images/TopUser/user3.png';
import User4 from '../assets/images/TopUser/user4.png';

export const topUsersMockData = [
    {
        id: '1',
        firstName: 'Daniyal',
        lastName: 'Munir',
        userImg: User1,
        strokeColor: '#2A9D8F',
        overAllScore: '87.5',
        productivityScore: '40',
        productivity: '100%',
        idleTimeScore: '19.2',
        idleTimePer: '36%',
        timeTrackedScore: '28.3',
        timeTracked: '94%',
        designation: 'Graphic Designer',
        progressTitle: 'MVP',
        totalTime:'',
        productiveTime:'',
        idleTime:'',
        date:dayjs().format('DD-MM-YYYY')
    },
    {
        id: '2',
        firstName: 'Abid',
        lastName: 'Azhar',
        userImg: User2,
        strokeColor: '#E76F51',
        overAllScore: '38',
        productivityScore: '38',
        productivity: '95%',
        idleTimeScore: '22.2',
        idleTimePer: '26%',
        timeTrackedScore: '24.9',
        timeTracked: '83%',
        designation: 'Product Manager',
        progressTitle: 'Most Productive',
        totalTime:'',
        productiveTime:'',
        idleTime:'',
        date:dayjs().format('DD-MM-YYYY')
    },
    {
        id: '3',
        firstName: 'Nouman',
        lastName: 'Khan',
        userImg: User3,
        strokeColor: '#FF4D4F',
        overAllScore: '21.3',
        productivityScore: '36',
        productivity: '90%',
        idleTimeScore: '21.3',
        idleTimePer: '29%',
        timeTrackedScore: '26.6',
        timeTracked: '89%',
        designation: 'Business Analyst',
        progressTitle: 'Most Efficient',
        totalTime:'',
        productiveTime:'',
        idleTime:'',
        date:dayjs().format('DD-MM-YYYY')
    },
    {
        id: '4',
        firstName: 'Faisal',
        lastName: 'Ali',
        userImg: User4,
        strokeColor: '#1890FF',
        overAllScore: '29.1',
        productivityScore: '33.6',
        productivity: '84%',
        idleTimeScore: '20.1',
        idleTimePer: '33%',
        timeTrackedScore: '29.1',
        timeTracked: '97%',
        designation: 'Marketing Manager',
        progressTitle: 'Most Hours Tracked',
        totalTime:'',
        productiveTime:'',
        idleTime:'',
        date:dayjs().format('DD-MM-YYYY')
    },
]

