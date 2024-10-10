import Layout from "../components/layout"

import WorkspaceDisplay from '../components/WorkspaceDisplay'

import rawWorkspaceData from './../../_workspaces/copilotStudio.json'

export function CloudFunctions({workspaceData}) {
    return  <WorkspaceDisplay workspaceName={workspaceData.title} resources={workspaceData.resources} notes={workspaceData.notes}  />
}

export default function CopilotStudio() {
    return <Layout>
        <CloudFunctions workspaceData={rawWorkspaceData} />
        </Layout>
}
