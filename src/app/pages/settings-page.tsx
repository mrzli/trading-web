import { useAppSelector } from '@/app/hooks'

export function SettingsPage() {
  const selectedSymbol = useAppSelector((state) => state.app.selectedSymbol)

  return (
    <section className="grid gap-3">
      <h1 className="text-3xl font-semibold">Settings</h1>
      <p className="text-muted-foreground">This is the second test page.</p>
      <p className="font-medium">Current selected symbol: {selectedSymbol}</p>
    </section>
  )
}