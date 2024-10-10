import Image from 'next/image'

import Layout from '../components/layout'

export default function Home() {

    return (
            <Layout>
            <div className="grid grid-flow-row grid-cols-1">
                <div className="col-span-1">
                  <h1 className="w-full items-center text-center">My Knowledgebase (mostly from Workona)</h1>
                </div>
            </div>
            <div class="grid grid-flow-row grid-cols-1">
            <ul className="list-disc">

            <li key="/cloudFunctions"><a href="/cloudFunctions">GCP Cloud Functions</a></li>
            <li key="/jsFromRustView"><a href="/jsFromRustViaDeno">JS From Rust via Deno</a></li>
            <li key="/copilotStudio"><a href="/copilotStudio">Microsoft Copilot Studio</a></li>
                </ul>
            </div>
      </Layout>
  )
}
