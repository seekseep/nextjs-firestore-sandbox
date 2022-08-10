import { ResourceProvider } from "@home/hooks/resources";

export default function HomeApp ({ children }) {
  return (
    <ResourceProvider>
      {children}
    </ResourceProvider>
  )
}
