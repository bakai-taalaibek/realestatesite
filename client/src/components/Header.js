import NavigationMenu from './NavigationMenu'


const Header = () => {
  return (
    <header className={ headerStyle }>
      <div className='max-w-[calc(870px)] mx-auto flex [&>button]:float-right pr-2 items-center'> 
        <NavigationMenu />
      </div>
    </header>
  )
}

export default Header

const headerStyle = `
  bg-white dark:bg-gray-900 
  border-b border-gray-200  dark:border-gray-500 
  p-4 `

