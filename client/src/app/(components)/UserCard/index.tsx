import { User } from '@/app/state/api'
import Image from 'next/image'
import React from 'react'

type Props = {
  user: User
}

const UserCard = ({ user }: Props) => {
  return (
    <div className='flex items-center rounded border p-4 shadow'>
      {user.profilePictureUrl && (
        <Image
          src={`/p1.jpeg`}
          alt="Profile Picture"
          width={32}
          height={32}
          className='rounded-full'
        />
      )}
    </div>
  )
}

export default UserCard
