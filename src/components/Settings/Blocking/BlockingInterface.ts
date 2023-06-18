
export interface IACHIVEMENTSTABLEUSERNAME {
    key: string;
    name: string
    image:string
}


export interface IACHIVEMENTSTABLEDATA {
    key: React.Key;
    userName: IACHIVEMENTSTABLEUSERNAME | IACHIVEMENTSTABLEUSERNAME[];
    domainName: string;
    team?:string
}