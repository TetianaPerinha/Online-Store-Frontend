'use client'
import Image from 'next/image'
import getImgUrl from '@/utils/getImgUrl'
import { getUserData } from '@/services/userService'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import { UserData } from '@/types/services/UserServices'

const UserBar = () => {
  const [userData, setUserData] = useState<UserData | null>(null)
  const { token } = useAuthStore()
  const uploadImg = '/profile.png'

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const userData = await getUserData(token)

        setUserData(userData)
      }
    }

    fetchData()
      .catch((error) => {
        console.error(error)
      })

  }, [token])

  return (
    <div className='flex gap-[10px] items-center sm:bg-tertiary rounded-full px-4 py-1'>
      <div className='w-[30px] h-[30px] rounded-full'>
        <Image src={getImgUrl(userData?.avatarLink, uploadImg)} alt="User profile" width={30} height={30} />
      </div>
      <div className='text-primary font-medium'>{userData?.firstName}</div>
    </div>
  )
}

export default UserBar
