import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Layout } from "./layout";


export const Routing = () => {
  return (
    <Routes>
    <Route
      path="dashboard"
      element={

         <Layout>
           <div className="flex  items-center justify-center bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600">
        Hello, Tailwind with React & TypeScript!
      </h1>
    </div>
         </Layout>

      }
    />
    </Routes>
  )
}
