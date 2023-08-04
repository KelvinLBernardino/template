import React, { useState } from 'react'

interface FormField {
  label: string
  name: string
  type: string
  size: number // Tamanho do campo (1 a 12)
}

const Fields: FormField[] = [
  { label: 'Nome', name: 'name', type: 'text', size: 4 },
  { label: 'Email', name: 'email', type: 'email', size: 4 },
]

const DynamicForm: React.FC = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({})

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    const { value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = () => {
    console.log(formData)
  }

  return (
    <div className="container mx-auto p-10">
      <form className="mx-auto">
        <div className="flex -mx-2">
          {Fields.map((field) => (
            <div
              key={field.name}
              className={`w-full md:w-${field.size}/12 px-2 mb-4`}
            >
              <label className="block text-secondary text-sm font-bold mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-primary leading-tight focus:outline-primary focus:shadow-outline"
                onChange={(e) => handleInputChange(e, field.name)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="bg-white text-primary font-bold py-2 px-4 mr-6 rounded border border-primary hover:bg-secondary hover:text-white focus:outline-none focus:shadow-outline"
            onClick={() => handleSubmit()}
          >
            Voltar
          </button>
          <button
            type="button"
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => console.log('aqui')}
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  )
}

export default DynamicForm
