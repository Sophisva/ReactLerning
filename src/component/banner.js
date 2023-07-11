import React from "react";

function randInt(min, max){
    let x = (max - min)+1;
    return min + Math.floor(Math.random()* x);

    
}

export default function Banner(){
    const r = randInt(1,3);
    let banner = '';
    let url = '';

    switch (r) {
        case 1:
            banner = './banners/React.png'
            url = 'http://www.reactjs.org'
            break;
        case 2:
            banner = './banners/ReactNative.png'
            url = 'http://www.reactnative.com'
            break;
            
        case 3:
            banner = '/banners/node.png'
            url = 'http://www.nodejs.org'
            break;
    }

    const bannerClick = () => {
        window.open(url)
    }

    return (
        <div style={{margin: '20px', textAlign: 'center'}}>
            <img src={banner} onClick={bannerClick} 
                style={{cursor: 'pointer'}} alt="banner"
            />
        </div>
    )
}
