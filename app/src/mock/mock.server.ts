import { InMemoryDbService } from 'angular-in-memory-web-api';

import { INews } from '../interface/news-list.interface';

export class mockServer implements InMemoryDbService {

    createDb( ) {
        let newsList: INews[] = [
            { id: 4, author: 'hzp', time: '1479811105472', title: '阿萨德', commentCount: 321, classify: '餐饮', visitCount: 123 },
            { id: 2, author: 'hzp', time: '1479811105472', title: '新政策', commentCount: 321, classify: '餐饮', visitCount: 123 },
            { id: 3, author: 'hzp', time: '1479811105472', title: '萨达', commentCount: 321, classify: '餐饮', visitCount: 312 }
        ];
        return { newsList }
    }
}