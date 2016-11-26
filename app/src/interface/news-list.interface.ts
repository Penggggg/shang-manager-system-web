export interface INews {
    author: string,
    time: string,
    title: string,
    id: number,
    classify: string,
    commentCount? : number,
    visitCount? : number,
    cover? : string,
    content? : string
}