
export const Pagination = () => {
    return (
        <div className="h-16 flex justify-center items-center">
            <nav aria-label="Page navigation example">
                <ul className="list-style-none flex">
                    <li>
                        <a
                            className="flex justify-center items-center border-2 relative rounded bg-transparent px-3 py-1.5 text-sm border-gray-200 text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                            href="#"
                        >
                            <svg className="h-4 w-4 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                            </svg>
                            Previous
                        </a>
                    </li>
                    <li>
                        <a
                            className="mx-2 relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-blue-500 dark:hover:text-white"
                            href="#"
                        >1</a>
                    </li>
                    <li aria-current="page">
                        <a
                            className="mx-2 relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-blue-500 dark:hover:text-white"
                            href="#"
                        >2</a>
                    </li>
                    <li>
                        <a
                            className="mx-2 relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-blue-500 dark:hover:text-white"
                            href="#"
                        >3</a>
                    </li>
                    <li>
                        <a
                            className="mx-2 flex justify-center items-center border-2 relative rounded bg-transparent px-3 py-1.5 text-sm border-gray-200 text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                            href="#"
                        >
                            Next
                            <svg className="h-4 w-4 text-gray-500 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};