export type SceneMetadata = {
  display: {
    title: string
    favicon?: string
  }
  owner: string
  contact: {
    name: string
    email: string
  }
  main: string
  tags?: Array<string>
  scene: {
    base: string
    parcels: Array<string>
  }
  requiredPermissions?: string[]
}
