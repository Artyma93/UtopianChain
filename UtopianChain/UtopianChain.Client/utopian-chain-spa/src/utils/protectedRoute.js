import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { loadUserFromStorage } from "../services/userService";
import { useSelector } from 'react-redux'

export function ProtectedRoute({ children, component: Component, ...rest }) {
  const user = useSelector(state => state.auth.user)

  return user
    ? (<Route {...rest} component={Component} />)
    : (<Redirect to={'/login'} />)
}
