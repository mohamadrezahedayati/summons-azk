import { Outlet } from 'react-router-dom'

const Index = () => {
  return (
    <div className='p-8'>
      <h1 className="text-4xl font-bolds">
        بیمه شخص ثالث
      </h1>
      <section className='mt-6'>
        <Outlet />
      </section>
    </div>
  )
}

export default Index;