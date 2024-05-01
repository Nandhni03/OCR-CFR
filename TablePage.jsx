import "./index.css"
import * as React from "react"
import fakeData from "./MOCK_DATA.json"
import { useTable } from "react-table"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"



export default function TablePage() {

    // const [todos, setTodos] = useState(() => {
    //     const localValue = localStorage.getItem("ITEMS")
    //     if (localValue == null) return []

    //     return JSON.parse(localValue)
    // })

    //   useEffect(() => {
    //     localStorage.setItem("ITEMS", JSON.stringify(todos))
    //   }, [todos])

    //   function addTodo(title) {
    //     setTodos((currentTodos) => {
    //       return [
    //         ...currentTodos,
    //         { id: crypto.randomUUID(), title, completed: false },
    //       ]
    //     })
    //   }

    //   function toggleTodo(id, completed) {
    //     setTodos(currentTodos => {
    //       return currentTodos.map(todo => {
    //         if (todo.id === id) {
    //           return { ...todo, completed }
    //         }

    //         return todo
    //       })
    //     })
    //   }

    //   function deleteTodo(id) {
    //     setTodos(currentTodos => {
    //       return currentTodos.filter(todo => todo.id !== id)
    //     })
    //   }

    const data = React.useMemo(() => fakeData, [])
    const columns = React.useMemo(() => [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "Tren",
            accessor: "tren",
        },
        {
            Header: "Data",
            accessor: "data",
        },
        {
            Header: "Plecare",
            accessor: "plecare",
        },
        {
            Header: "Sosire",
            accessor: "sosire",
        },
        {
            Header: "Ora_plecare",
            accessor: "ora_plecare",
        },
        {
            Header: "Ora_sosire",
            accessor: "ora_sosire",
        },
        {
            Header: "Clasa",
            accessor: "clasa",
        },
        {
            Header: "Loc",
            accessor: "loc",
        },
        {
            Header: "Pret",
            accessor: "pret",
        },
        {
            Header: "Vagon",
            accessor: "vagon",
        },
    ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })


    return (
        <div>
            <h1 className="header">Table Page</h1>


            {/* <h2>
                <NewTodoForm onSubmit={addTodo} />
                <h1 className="header">Todo List</h1>
                <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </h2> */}

            <div className="TableApp">
                <div className="container">
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}

                                            </td>
                                        ))}

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}