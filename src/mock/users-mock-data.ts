import User4 from '../assets/images/TopUser/user4.png';
export interface DataType {
    key: React.Key;
    username: string;
    userIcon:any;
    email:string;
    id: number;
    role: string;
    shift: string;
    location: string;
    projects: string;
    dateDelete: any;
    daysLeft:any;
    action?: any;
    image?:string
}

export const columnsData: DataType[] = [];
for (let i = 0; i < 15; i++) {
    columnsData.push({
        key: i,
        username: 'Azeem Aslam',
        userIcon: User4,
        email:'azeem.aslam@ceative.co.uk',
        id: 100 + i,
        role: 'Admin',
        shift: 'Morning',
        location: 'Lahore',
        projects: 'Clock Log',
        dateDelete: '25/08/2022',
        daysLeft: '26 Days',
    });
}