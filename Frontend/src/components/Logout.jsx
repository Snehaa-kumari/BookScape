import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

export default function Logout() {

    const[authUser, setAuthUser] = useAuth()

    const handleLogout = () =>{
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logout succussfully")
            window.location.reload()
        } catch (error) {
            toast.error("Error:" +error.message)
        }
    }
  return (
    <>
      <div>
        <button className="bg-red-700 px-3 py-2 cursor-pointer rounded-md" onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}
