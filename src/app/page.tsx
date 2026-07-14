import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data, error } = await supabase.from('notes').select('*')

  return (
    <div>
      <h1>Testing Supabase Connection</h1>
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}