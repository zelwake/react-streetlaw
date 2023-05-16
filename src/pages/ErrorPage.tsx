import { useNavigate, useRouteError } from 'react-router-dom'

type RouteError = {
  status: number
  statusText: string
  internal: boolean
  data: string
  error: ErrorConstructor
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center gap-4 mt-28">
      <h1 className="text-2xl">Oops!</h1>
      <p>Něco se pokazilo</p>
      <p className="text-gray-400 text-lg flex flex-col items-center">
        <i>{error.status}</i>
        <i>{error.statusText}</i>
      </p>
      <button
        onClick={() => {
          navigate('/')
        }}>
        Zpět na hlavní stránku
      </button>
    </div>
  )
}
