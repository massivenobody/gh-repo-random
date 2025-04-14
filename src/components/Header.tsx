import githubLogo from '../assets/github.svg'

function Header() {
    return (
        <div className="flex justify-center items-center gap-4 mb-4">
            <img className='w-[50px] h-[50px]' src={githubLogo} alt="GitHub Logo" />
            <h1 className='text-2xl font-bold'>Get Random GitHub Repo</h1>
        </div>
    )
}

export default Header;