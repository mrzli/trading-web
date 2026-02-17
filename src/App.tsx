import { Button } from '@/components/ui/button'

export function App() {
  return (
    <main className="grid min-h-screen place-content-center gap-3 text-center">
      <h1 className="m-0 text-3xl font-semibold">Trading Web</h1>
      <p className="m-0 text-muted-foreground">Minimal React app is ready.</p>
      <div className="pt-2">
        <Button>shadcn/ui works</Button>
      </div>
    </main>
  )
}
