import { Button } from '@/components/ui/button'

export function HomePage() {
  return (
    <section className="grid gap-3">
      <h1 className="text-3xl font-semibold">Home</h1>
      <p className="text-muted-foreground">This is the first test page.</p>
      <div>
        <Button>shadcn/ui button</Button>
      </div>
    </section>
  )
}