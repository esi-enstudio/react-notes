import {useRef} from "react";
import {IoMdAdd} from "react-icons/io";
function Form({ getNotes }) {

    const noteTitle = useRef();
    const noteDescription = useRef();

    const noteSubmit = (e) => {
        e.preventDefault()

        const title = noteTitle.current.value;
        const description = noteDescription.current.value;
        noteTitle.current.value = '';
        noteDescription.current.value = '';
        getNotes({title: title, description: description});
    }

    return (
        <form onSubmit={ noteSubmit }>
            <div className="flex justify-between">
                {/*Title*/}
                <div className="max-w-sm">
                    <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">Title</label>
                    <input type="text"
                           id="input-label"
                           ref={noteTitle}
                           className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                           placeholder="e.g. Water Bill..."/>
                </div>

                {/*Description*/}
                <div className="max-w-sm">
                    <label htmlFor="textarea-label"
                           className="block text-sm font-medium mb-2 dark:text-white">Description</label>
                    <textarea id="textarea-label"
                              ref={noteDescription}
                              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="1" placeholder="Detail's about notes..."></textarea>
                </div>

                {/*Add Button*/}
                <div className="flex items-end">
                    <button type="submit"
                            className="flex shrink-0 justify-center items-center gap-2 w-[80px] h-[46px] text-2xl font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        <IoMdAdd />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form
