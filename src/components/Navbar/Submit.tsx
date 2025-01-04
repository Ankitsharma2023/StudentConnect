'use client'
import { Delete, LogOut, } from 'lucide-react'
import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button className='flex flex-row p-2 px-4 gap-2 w-full font-medium text-gray-700 group-hover:text-purple-700 transition-colors duration-300' type="submit" disabled={pending}><LogOut className=' text-purple-600 transition-transform duration-300 group-hover:scale-110'/>{pending?'Logging you out':'Logout'}</button>
  )
}
export function DeleteButton() {
  const { pending } = useFormStatus()
  return (
    <button className='flex flex-row p-2 px-4 gap-2 w-full font-medium text-gray-700 group-hover:text-purple-700 transition-colors duration-300' type="submit" disabled={pending}><Delete className=' text-purple-600 transition-transform duration-300 group-hover:scale-110'/>{pending?'Deleting your account':'Delete Account'}</button>
  )
}
