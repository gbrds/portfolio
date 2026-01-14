import { createContext, useContext, useState } from "react"

const ModalContext = createContext(null)

export function ModalProvider({ children }) {
  const [project, setProject] = useState(null)

  const openModal = (projectData) => setProject(projectData)
  const closeModal = () => setProject(null)

  return (
    <ModalContext.Provider value={{ project, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}