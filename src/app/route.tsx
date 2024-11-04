import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Layout } from "./layout";
import Dashboard from '../module/dashboard';


export const Routing = () => {
  return (
    <Routes>
      <Route
        path="dashboard"
        element={
          <Layout>
            <Dashboard/>
          </Layout>

        }
      />
    </Routes>
  )
}
