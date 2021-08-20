import React from 'react'
import { Pagination } from 'antd';

import 'antd/dist/antd.css'; 


export const Paginacion = () => {
    return (
        <div>
            <Pagination defaultCurrent={1} total={50} />
        </div>
    )
}
