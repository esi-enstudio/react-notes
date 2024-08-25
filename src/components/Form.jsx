import {useState} from "react";
import {IoMdAdd} from "react-icons/io";

function Form({ getNotes }) {

    const [inputValue, setInputValue] = useState({ title:'', description:'' });

    const handleInputValue = ( property, value ) => {
        setInputValue(prevState => ({
            ...prevState,
            [property]: value
        }))
    }

    const noteSubmit = (e) => {
        e.preventDefault()
        getNotes( inputValue );
        setInputValue({title:'', description: ''})
    }

    return (
        <form onSubmit={ noteSubmit }>
            <div className="flex justify-between">
                {/*Title*/}
                <div className="max-w-sm">
                    <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">Title</label>
                    <input type="text" id="input-label"
                           onChange={ (e) => { handleInputValue('title', e.target.value) } }
                           value={ inputValue.title }
                           className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                           placeholder="e.g. Water Bill..."/>
                </div>

                {/*Description*/}
                <div className="max-w-sm">
                    <label htmlFor="textarea-label"
                           className="block text-sm font-medium mb-2 dark:text-white">Description</label>
                    <textarea id="textarea-label"
                              onChange={ (e) => { handleInputValue('description', e.target.value) } }
                              value={ inputValue.description }
                              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="1" placeholder="Detail's about notes..."></textarea>
                </div>

                {/*Add Button*/}
                <div className="flex items-end">
                    {/*<button type="submit"*/}
                    {/*        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent dark:bg-gray-700 bg-blue-600 dark:hover:bg-gray-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">*/}
                    {/*    <IoMdAdd />*/}
                    {/*</button>*/}

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
