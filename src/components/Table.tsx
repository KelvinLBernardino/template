'use client'

import React, { useState } from 'react'

import { TablePropsTypes } from '@/interface'
import { FaChevronLeft, FaChevronRight, FaSortUp } from 'react-icons/fa'

const Table: React.FC<TablePropsTypes> = (props) => {
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = props.rows.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(props.rows.length / itemsPerPage)

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  const handleSort = () => {
    // Implement your sorting logic here
    console.log('Teste')
  }

  const modifyItemsPerPage = (num: number) => {
    setItemsPerPage(num)
  }

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-row justify-between">
        <p className="mb-5 text-2xl font-bold">{props.title}</p>
        <div className="w-6/12">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Pesquisar..."
          />
        </div>
      </div>
      <div className="font-bold flex flex-row p-2">
        <p className="mr-4 cursor-pointer p-1 rounded-md hover:bg-primary hover:text-white">
          Colunas
        </p>
        <p
          className="mr-4 cursor-pointer p-1 rounded-md hover:bg-primary hover:text-white"
          onClick={() => modifyItemsPerPage(10)}
        >
          Itens por Página
        </p>
        <p className="mr-4 cursor-pointer p-1 rounded-md hover:bg-primary hover:text-white">
          Exportar
        </p>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="bg-primary text-white w-40">Ações</th>
            {props.columns.map(
              (column, index) =>
                column.hide === false && (
                  <th
                    key={index}
                    className="bg-primary px-4 py-2 text-white cursor-pointer text-center"
                    onClick={() => handleSort()}
                  >
                    <div className="flex flex-row justify-evenly">
                      <div>{''}</div>
                      <div>{column.label}</div>
                      <div>
                        <FaSortUp className="inline ml-4" />
                      </div>
                    </div>
                  </th>
                ),
            )}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr
              key={row.uuid}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}
            >
              <td className="flex flex-row border-x-white justify-evenly">
                {props.menuAction.map((element, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center my-1 p-1 rounded-md cursor-pointer hover:bg-secondary hover:text-white"
                  >
                    <span className="text-xs">{element.title}</span>
                    <element.icon className="text-lg" />
                  </div>
                ))}
              </td>
              {props.columns.map(
                (column) =>
                  column.hide === false && (
                    <td
                      key={column.key}
                      className="border-x-2 border-x-white text-center"
                    >
                      {row[column.name]}
                    </td>
                  ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <div className="flex">
          <button
            className="mx-1 px-2 py-1 border rounded-md cursor-pointer hover:bg-primary hover:text-white"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`mx-1 px-2 py-1 border rounded-md ${
                i + 1 === currentPage ? 'bg-primary text-white' : ''
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="mx-1 px-2 py-1 border rounded-md cursor-pointer hover:bg-primary hover:text-white"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Table
