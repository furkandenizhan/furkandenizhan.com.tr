import { DiscordLogo } from '@phosphor-icons/react/dist/ssr'

enum status {
  online,
  idle,
  dnd
  //   offline,
}

export type LanyardResponse = {
  data: {
    discord_user: {
      id: string
      username: string
      discriminator: string
      avatar: string
    }
    discord_status: status
    active_on_discord_web: boolean
    active_on_discord_desktop: boolean
    active_on_discord_mobile: boolean
    listening_to_spotify: boolean
    activities: {
      id: string
      name: string
      type: number
      state: string
      timestamps: {
        end: number
      }
      emoji: {
        name: string
      }
      created_at: number
    }[]
    success: boolean
  }
}

export async function DiscordStatus() {
  const { data }: LanyardResponse = await fetch(
    'https://api.lanyard.rest/v1/users/274521154230812672',
    {
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
      }
    }
  ).then(data => data.json())

}
