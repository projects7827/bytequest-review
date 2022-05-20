import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [state, updateState] = useState({});
  useEffect(() => {
    axios({
      "method": "get",
      "url": "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json",
      "responseType": 'application/json',
    }).then((res) => { console.log(res) })

  }, [])

  function myLoader() {
    return (<>
      loading.....</>);
  }
  return (<>
    <div className='shopping_header'>
      <div className='shopping_header__one'>
        <div className='shopping_header__left'>
          T&nbsp;&nbsp;A&nbsp;&nbsp;N&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;&nbsp; T&nbsp;&nbsp;R&nbsp;&nbsp;I&nbsp;&nbsp;M
        </div>
        <div className='shopping_header__right'>
          <Image
            src="/img/search.png"
            alt="search"
            width={17}
            height={19}
          />
          <Image
            src="/img/user-alt.png"
            alt="user"
            width={17}
            height={19}
          />
          <Image
            src="/img/bookmark.png"
            alt="Bookmark"
            width={17}
            height={19}
          />
          <Image
            src="/img/shopping-bag.png"
            alt="shopping Bag"
            width={17}
            height={19}
          />
        </div>
      </div>
      <div className='shopping_header__categories '>
        <div>Bags</div>
        <div>Travel</div>
        <div>Accessories</div>
        <div>Gifting</div>
        <div>Jewellery</div>
      </div>
      <div className='shopping_header__sub_categories '>
        <Image
          src="/img/search.png"
          alt="search"
          width={90}
          height={90}
        />
      </div>
    </div>
  </>)
}
