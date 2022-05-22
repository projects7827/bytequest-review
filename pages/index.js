import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [state, updateState] = useState({ "data": [], "result": [], "loader": true, "page":1 , total_pages: "" });
  useEffect(() => {
    getData(state.page);
  }, [])
  ///-----Fetching Data From Api-----///
  const getData = (page) => {
    updateState({ ...state, "loader": true })
    axios({
      "method": "get",
      "url": `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=${page}&format=json`,
      "responseType": 'application/json',
    }).then((res) => {
      console.log(res.data.data);
      updateState({ ...state, "data": res.data.data.products, "total_pages": res.data.data.pagination.total_pages, "loader": false, "page": page })
    })
  }
  ///-----End-----///

  ///-----Page Change-----///
  function prevPage() {
    if (state.page !== 1) {
      getData(state.page - 1)
    }
  }
  function nextPage() {
    console.log(state.total_pages);
    console.log(state.page !== state.total_pages);
    if (state.page !== state.total_pages) {
      getData(state.page + 1)
    }
  }
  ///-----End-----///

  function nameProcessing(name) {
    let arr = [];
    if (name.length > 40) {
      for (let i = 0; i < 40; i++) {
        arr.push(name[i])
      }
      arr.push("....")
      return arr.join("")
    }
    return name;
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
    </div>
    <div className='shopping_content'>

      <div className='shopping_content__sub_categories '>
        <Image
          src="/img/category8.png"
          alt="search"
          width={100}
          height={130}
        />

        <Image
          src="/img/category1.png"
          alt="search"
          width={100}
          height={130}
        />
        <Image
          src="/img/category2.png"
          alt="search"
          width={100}
          height={130}
        />
        <Image
          src="/img/category3.png"
          alt="search"
          width={100}
          height={130}
        />
        <Image
          src="/img/category4.png"
          alt="search"
          width={100}
          height={130}
        />
        <Image
          src="/img/category5.png"
          alt="search"
          width={100}
          height={130}
        />
        <Image
          src="/img/category6.png"
          alt="search"
          width={100}
          height={130}
        />
        <Image
          src="/img/category7.png"
          alt="search"
          width={100}
          height={130}
        />

      </div>


      <div style={{ position: "relative", "width": "100%" }}>
        <div className='shopping_content__heading'>
          Bags • Backpacks
        </div>
        <div className='shopping_content__prev_next'>
          <div className='shopping_content__prev' onClick={prevPage}>Prev</div>
          <div className='shopping_content__page_no'>{state.page}</div>
          <div className='shopping_content__next' onClick={nextPage}>Next</div>
        </div>
        {state.loader === true ? <div className='shopping_content__loader'>
          Loading .....
        </div> :
          <>

            <div className='shopping_content__container'>
              {state.data.map((value, index) => {
                let name = nameProcessing(value.name);
                let price = value.price;
                return (<>
                  <div className='shopping_content__card'>
                    <div className='shopping_content__img'>
                      <Image src={value.plpimaage} width={290} height={390} />
                      <div className='shopping_content__bookmark'>
                        <Image src={"/img/bookmark2.png"} width={27} height={40} />

                      </div>
                    </div>
                    <div className='shopping_content__info'>
                      {name}
                    </div>
                    <div className='shopping_content__price_container'>
                      <div className='shopping_content__price'> ₹{price}</div>
                      <div className='shopping_content__old_price'> ₹{price}</div>
                      <div className='shopping_content__discount'>(50% off)</div>
                    </div>

                    <div className='shopping_content__add_cart'>
                      <div className='shopping_content__plus'>
                        <Image src="/img/plus.png" height={15} width={15} />
                      </div>
                      <Image src="/img/shopping-bag.png" height={40} width={32} />
                    </div>
                  </div></>)
              })}
            </div>
          </>
        }
      </div>
    </div>
  </>)
}
