import { useEffect, useState, useMemo } from "react"
import { useRouter } from "next/router"

import { APP_NAME } from "@/constants"

import HomeApp from "@home/components/HomeApp"
import RoomApp from "@room/components/RoomApp"

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter()

  const appName = useMemo(() => {
    if (pathname.match(/^\/rooms\/\[roomId\]/)) return APP_NAME.ROOM
    return APP_NAME.HOME
  }, [pathname])

  return appName === APP_NAME.HOME ? (
    <HomeApp>
      <Component {...pageProps} />
    </HomeApp>
  ) : (
    <RoomApp>
      <Component {...pageProps} />
    </RoomApp>
  )
}
