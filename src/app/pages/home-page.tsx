import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { useGetDemoTodoQuery } from '@/app/services/backend-api'
import { setSelectedSymbol } from '@/app/state/app-slice'

export function HomePage() {
  const dispatch = useAppDispatch()
  const selectedSymbol = useAppSelector((state) => state.app.selectedSymbol)
  const { data, isLoading, isError, refetch } = useGetDemoTodoQuery()

  return (
    <section className="grid gap-3">
      <h1 className="text-3xl font-semibold">Home</h1>
      <p className="text-muted-foreground">This is the first test page.</p>

      <div className="grid gap-2 rounded-md border p-3 text-left">
        <p className="text-sm text-muted-foreground">Global state (Redux)</p>
        <p className="font-medium">Selected symbol: {selectedSymbol}</p>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" onClick={() => dispatch(setSelectedSymbol('BTCUSDT'))}>
            BTCUSDT
          </Button>
          <Button size="sm" variant="secondary" onClick={() => dispatch(setSelectedSymbol('ETHUSDT'))}>
            ETHUSDT
          </Button>
        </div>
      </div>

      <div className="grid gap-2 rounded-md border p-3 text-left">
        <p className="text-sm text-muted-foreground">Backend call (RTK Query)</p>
        {isLoading && <p>Loading...</p>}
        {isError && (
          <p className="text-destructive">Request failed. Check VITE_API_BASE_URL.</p>
        )}
        {data && <p className="font-medium">Todo: {data.title}</p>}
        <div>
          <Button size="sm" variant="outline" onClick={() => refetch()}>
            Refetch
          </Button>
        </div>
      </div>
    </section>
  )
}