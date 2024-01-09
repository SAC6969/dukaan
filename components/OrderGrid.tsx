// components/OrderGrid.js
import React from 'react';
import { Pagination } from './Pagination';
interface Order {
    OrderId: string;
    OrderDate: string;
    OrderAmount: number;
    TransactionFees: number;
}

interface OrderGridProps {
    data: Order[];
}

const OrderGrid: React.FC<OrderGridProps> = ({ data }) => {
    return (
        <div className="">
            <div className="bg-gray-100 rounded-md grid grid-cols-4 gap-4 w-full justify-evenly">
                <div className="p-2 font-medium">Order ID</div>
                <div className="flex p-2 font-medium">
                    <span>Order date</span>
                    <svg className="ml-2 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </svg>
                </div>
                <div className="p-2 font-medium">Order amount</div>
                <div className="flex justify-end items-end p-2 font-medium">
                    <div className='flex justify-center items-center'>
                        <span>Transaction Fees</span>
                        <svg className="ml-2 h-4 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="p-2 grid grid-cols-4 gap-0 w-full justify-evenly">

                <div className="">
                    {data.map((order: Order, index: number) => (
                        <div className='text-custom-blue border-b p-2' key={index}>{order.OrderId}</div>
                    ))}
                </div>

                <div className="">
                    {data.map((order: Order, index: number) => (
                        <div className='border-b p-2' key={index}>{order.OrderDate}</div>
                    ))}
                </div>

                <div className="">
                    {data.map((order: Order, index: number) => (
                        <div className='border-b p-2 px-8' key={index}>₹{order.OrderAmount.toFixed(2)}</div>
                    ))}
                </div>

                <div className="">
                    {data.map((order: Order, index: number) => (
                        <div className='flex justify-end items-end border-b p-2' key={index}>₹{order.TransactionFees.toFixed(2)}</div>
                    ))}
                </div>
            </div>
            <Pagination />
        </div>

    );
};

export default OrderGrid;
