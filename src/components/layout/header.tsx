import Image from 'next/image'

export default function Header() {
  return (
    <header className='h-[72px] w-full flex p-2'>
      <div className='flex'>
        <Image src='/logo.png' width={50} height={50} alt='logo' />
        <p className='text-2xl font-bold my-auto ml-2'>DotItemManagement</p>
      </div>

      {/* nav menu */}
    </header>
  )
}
