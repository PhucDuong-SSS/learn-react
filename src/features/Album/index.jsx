import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: '1',
            name: 'Nhac Hoa thinh hanh',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/3/9/2/7/39276923fe8e5cbf55b7ad88920108d1.jpg',
        },
        {
            id: '2',
            name: 'Dance Viet ngay nay',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/8/0/7/2/80721f133acbefd11e1df692077eb0ec.jpg',
        },
        {
            id: '3',
            name: 'Today hit',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/6/9/4/f/694f775bdaabf68a31d5456e90383e24.jpg',
        }
    ]
    return (
        <div>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;