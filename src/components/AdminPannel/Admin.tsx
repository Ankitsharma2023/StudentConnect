'use client'
import { useState, useEffect } from 'react'
import Fetch from './Fetch'
import { LoaderCircle } from 'lucide-react'

const AdminPanel = () => {
  const [selectedModel, setSelectedModel] = useState<string>('users')
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    Fetch(selectedModel).then((res) => {
      setData(res ?? [])
      setLoading(false)
    }).catch((e) => console.log(e))
  }, [selectedModel])

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">Admin Panel</h1>

      <div className="mb-6">
        <label htmlFor="model-select" className="block text-lg font-semibold mb-2">
          Select Model:
        </label>
        <select
          id="model-select"
          className="px-4 py-2 border rounded-lg w-full sm:w-auto"
          value={selectedModel}
          onChange={handleModelChange}
        >
          <option value="users">Users</option>
          <option value="profiles">Profiles</option>
          <option value="suggestions">Suggestions</option>
          <option value="conversation">Conversation</option>
        </select>
      </div>

      <div className="space-y-8">
        {selectedModel === 'users' && (
          <div className="bg-white shadow-md rounded-lg p-4 overflow-hidden">
            <h2 className="text-2xl mb-4">Users({data.length})</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Profile Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user) => (
                    <tr key={user.id} className="border-b">
                      <td className="px-4 py-2 flex flex-row items-center gap-2">
                        <img
                          className="w-12 h-12 rounded-full shadow-lg"
                          src={user.image}
                          alt="Profile Photo"
                          referrerPolicy="no-referrer"
                        />
                        {user.name}
                      </td>
                      <td className="px-4 py-2">{user.email}</td>
                      <td className="px-4 py-2">{user.profileCompleted ? 'Yes' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedModel === 'profiles' && (
          <div className="bg-white shadow-md rounded-lg p-4 overflow-hidden">
            <h2 className="text-2xl mb-4">Profiles({data.length})</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">USN</th>
                    <th className="px-4 py-2 text-left">Branch</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((profile) => (
                    <tr key={profile.id} className="border-b">
                      <td className="px-4 py-2">{profile.name}</td>
                      <td className="px-4 py-2">{profile.email}</td>
                      <td className="px-4 py-2">{profile.usn}</td>
                      <td className="px-4 py-2">{profile.branch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedModel === 'suggestions' && (
          <div className="bg-white shadow-md rounded-lg p-4 overflow-hidden">
            <h2 className="text-2xl mb-4">Suggestions({data.length})</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Suggestions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((suggestion) => (
                    <tr key={suggestion.id} className="border-b">
                      <td className="px-4 py-2">{suggestion.email}</td>
                      <td className="px-4 py-2">{suggestion.sug}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel
