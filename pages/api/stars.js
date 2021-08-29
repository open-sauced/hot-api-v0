// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from '../../lib/supabaseClient'

async function run() {
  const { data, error } = await supabase
    .from('stars')
    .select('id, forks_count, stargazers_count, open_issues_count, full_name')
    .order('full_name', { ascending: false })

  if (error || !data) {
    throw error || new Error('No data')
  }

  return data
}

export default function handler(req, res) {
  run().then(data => {
    res.status(200).json(data)
  }).catch(error => {
    res.status(500).json({ error })
  });
}
