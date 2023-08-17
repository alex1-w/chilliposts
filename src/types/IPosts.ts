export interface IPosts {
    data: IPost[]
}

export interface IPost {
    id: number,
    title: string,
    description: string,
    image: any,
    tags: ITag[]
    created_at: string
}

export interface ITag {
    id: number,
    value?: string
    title?:string
}        