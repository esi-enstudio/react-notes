import {FaTrashCan} from "react-icons/fa6";

function Table({ myNotes, deleteNote }) {
    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border overflow-hidden dark:border-neutral-700">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead>
                            <tr>
                                <th scope="col"
                                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Title
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Description
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">


                            { myNotes.map( ( note ) => (
                                <tr key={note.title}>
                                    <td className="p-2 whitespace-nowrap font-medium text-gray-800 dark:text-neutral-200">
                                        { note.title }
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-gray-800 dark:text-neutral-200">
                                        { note.description }
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-end font-medium">
                                        <button type="button"
                                                onClick={ () => { deleteNote( note.title ) } }
                                                className="p-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-red-500 hover:bg-red-100 focus:outline-none focus:bg-red-100 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-800/30 dark:hover:text-red-400 dark:focus:bg-red-800/30 dark:focus:text-red-400">
                                            <FaTrashCan />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ) ) }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table