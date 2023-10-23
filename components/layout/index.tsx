import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen max-w-screen-lg mx-auto'>{children}</div>
  )
}

export default Layout