import { Inter } from 'next/font/google'
import OrderGrid from "@/components/OrderGrid";
import { ChangeEvent, useEffect, useState } from "react";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [allTrx, setAllTrx] = useState<Order[]>([]);

  interface Order {
      OrderId: string;
      OrderDate: string;
      OrderAmount: number;
      TransactionFees: number;
  }

  const data: Order[] = [
      {
          "OrderId": "#281209",
          "OrderDate": "7 July, 2023",
          "OrderAmount": 1278.23,
          "TransactionFees": 250
      },
      {
          "OrderId": "#346512",
          "OrderDate": "15 September, 2023",
          "OrderAmount": 987.65,
          "TransactionFees": 180
      },
      {
          "OrderId": "#902134",
          "OrderDate": "20 March, 2023",
          "OrderAmount": 1567.89,
          "TransactionFees": 300
      },
      {
          "OrderId": "#512488",
          "OrderDate": "2 November, 2023",
          "OrderAmount": 789.12,
          "TransactionFees": 150
      },
      {
          "OrderId": "#739005",
          "OrderDate": "18 December, 2023",
          "OrderAmount": 2300.75,
          "TransactionFees": 400
      },
      {
          "OrderId": "#120045",
          "OrderDate": "9 April, 2023",
          "OrderAmount": 3200.56,
          "TransactionFees": 280
      },
      {
          "OrderId": "#875412",
          "OrderDate": "27 June, 2023",
          "OrderAmount": 1500.34,
          "TransactionFees": 320
      },
      {
          "OrderId": "#633221",
          "OrderDate": "5 October, 2023",
          "OrderAmount": 2200.98,
          "TransactionFees": 380
      },
      {
          "OrderId": "#997632",
          "OrderDate": "11 January, 2023",
          "OrderAmount": 1765.43,
          "TransactionFees": 290
      },
      {
          "OrderId": "#432167",
          "OrderDate": "14 February, 2023",
          "OrderAmount": 900.21,
          "TransactionFees": 200
      },
      {
          "OrderId": "#563421",
          "OrderDate": "23 August, 2023",
          "OrderAmount": 3000.78,
          "TransactionFees": 450
      },
      {
          "OrderId": "#874390",
          "OrderDate": "30 May, 2023",
          "OrderAmount": 1876.55,
          "TransactionFees": 310
      },
      {
          "OrderId": "#365821",
          "OrderDate": "19 December, 2023",
          "OrderAmount": 420.89,
          "TransactionFees": 100
      },
      {
          "OrderId": "#908124",
          "OrderDate": "6 June, 2023",
          "OrderAmount": 800.00,
          "TransactionFees": 180
      },
      {
          "OrderId": "#765309",
          "OrderDate": "25 July, 2023",
          "OrderAmount": 150.67,
          "TransactionFees": 50
      },
      {
          "OrderId": "#653421",
          "OrderDate": "12 April, 2023",
          "OrderAmount": 640.43,
          "TransactionFees": 120
      },
      {
          "OrderId": "#253890",
          "OrderDate": "28 March, 2023",
          "OrderAmount": 540.76,
          "TransactionFees": 110
      },
      {
          "OrderId": "#934517",
          "OrderDate": "4 September, 2023",
          "OrderAmount": 1320.99,
          "TransactionFees": 260
      },
      {
          "OrderId": "#230561",
          "OrderDate": "17 February, 2023",
          "OrderAmount": 210.34,
          "TransactionFees": 80
      },
      {
          "OrderId": "#764321",
          "OrderDate": "10 August, 2023",
          "OrderAmount": 2345.67,
          "TransactionFees": 400
      }
  ];

  useEffect(() => {
      setAllTrx(data)
  }, [])

  const handleSearch = (e: any) => {
      const searchTerm = e.target.value.toLowerCase();
      const foundOrders = data.filter(order => {
          return (
              order.OrderId.toLowerCase().includes(searchTerm) || 
              Object.values(order).some(value => typeof value === 'string' && value.toLowerCase().includes(searchTerm))
          );
      });
  
      if (foundOrders.length > 0) {
          setAllTrx(foundOrders);
      } else {
          setAllTrx(data);
      }
  }
  


  return (
      <div className="h-16">
          <div className="bg-white px-6 flex flex-row justify-between items-center h-16 w-full border-2 shadow-sm">
              <div className="w-50 flex justify-between">
                  <span className="font-medium">Payments</span>
                  <div className="ml-3 flex justify-center items-center">
                      <svg className="h-3 w-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                      <span className="text-xs">
                          How it works
                      </span>
                  </div>
              </div>

              <div className="w-2/6 flex items-center bg-gray-200 rounded-md p-2">
                  <button className="flex items-center justify-center text-gray-500 text-lg rounded-md px-2 py-1">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                          <path
                              fillRule="evenodd"
                              d="M9 3a6 6 0 014.645 9.805l5.542 5.541-1.414 1.414-5.542-5.541A6 6 0 119 3zm0 2a4 4 0 100 8 4 4 0 000-8z"
                              clipRule="evenodd"
                          />
                      </svg>
                  </button>
                  <input
                      type="text"
                      placeholder="Search features, tutorials, etc..."
                      className="outline-none px-3 py-1 w-full bg-transparent"
                  />
              </div>

              <div className="flex flex-row justify-around w-28">
                  <div className="flex justify-center items-center h-10 w-10 rounded-full bg-gray-200 relative">
                  <svg className="h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z" fill="#4D4D4D"></path></svg>
                  </div>
                  <div className="flex justify-center items-center h-10 w-10 rounded-full bg-gray-200 relative">
                      <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />                        </svg>
                  </div>
              </div>
          </div>
          <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                  <h1 className="font-semibold text-base ">Overview</h1>
                  <div className="flex justify-center items-center border-2 rounded-sm border-gray-200 p-2 mr-4 h-8 bg-white cursor-pointer text-gray-500">
                      <span>Last Month&nbsp;</span>
                      <svg className='h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                      </svg>
                  </div>
              </div>
              <div className="flex flex-row">
                  <div className="flex flex-col justify-between p-4 border-gray-100 shadow-sm rounded-md bg-white h-24 w-1/2 mr-4">
                      <div className="text-sm text-gray-600">
                          Online orders
                      </div>
                      <div className="text-2xl font-bold">
                          231
                      </div>
                  </div>
                  <div className="flex flex-col justify-between p-4 border-gray-100 shadow-sm bg-white h-24 w-1/2 rounded-md">
                      <div className="text-sm text-gray-600">
                          Amount received
                      </div>
                      <div className="text-2xl font-bold">
                          ₹23,92,312.19
                      </div>
                  </div>
              </div>
              <h1 className="font-semibold text-base my-6">Transactions | This Month</h1>
              <div className="bg-white p-4 rounded-md">
                  <div className="flex flex-row justify-between items-center mb-4">
                      <div className="h-10 w-80 flex items-center border-2 border-gray-200 rounded-md p-2">
                          <button className="flex items-center justify-center text-gray-500 text-lg rounded-md px-2 py-1">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                              >
                                  <path
                                      fillRule="evenodd"
                                      d="M9 3a6 6 0 014.645 9.805l5.542 5.541-1.414 1.414-5.542-5.541A6 6 0 119 3zm0 2a4 4 0 100 8 4 4 0 000-8z"
                                      clipRule="evenodd"
                                  />
                              </svg>
                          </button>
                          <input
                              onChange={(e) => handleSearch(e)}
                              type="text"
                              placeholder="Search by order ID..."
                              className="outline-none px-3 py-1 w-full bg-transparent"
                          />
                      </div>
                      <div className="flex h-10">
                          <div className="flex justify-center items-center border-2 rounded-md border-gray-200 p-2 mr-4  text-gray-500">
                              <span>Sort&nbsp;</span>
                              <svg className="h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                              </svg>
                              <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                              </svg>
                          </div>
                          <div className="flex justify-center items-center border-2 rounded-md border-gray-200 p-2">
                              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z" fill="#4D4D4D"></path></svg>
                          </div>
                      </div>
                  </div>
                  <OrderGrid data={allTrx} />
              </div>
          </div>
      </div>
  );
};