import Image from 'next/image';


export default function Header(){

    return (
        <header className="w-full h-[80px] bg-dark flex flex-row">
            <div className="flex flex-row w-[50%] items-center">
                <Image src="/images/" alt="logo" width="80" height="80"/>
                PassVault
            </div>
            <div className="flex flex-row justify-end w-[50%] items-center gap-1">
                <Image src="/images/notification.svg" alt="notification bell" width="40" height="40"/>
                <Image src="" alt="profile picture"/>
            </div>

        </header>

    )
}