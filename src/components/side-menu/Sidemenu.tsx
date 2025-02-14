
import { SidemenuItem } from './SidemenuItem'
import { sideMenuAplications, sideMenuOthers } from '@/constants'

export const Sidemenu = () => {
    return (
        <nav className="sidemenu">
            <div className="mb-4">
                <h3 className="sidemenu__logo">Ariol CRM</h3>
            </div>

            <div className="mb-4">
                <p className="text-xs font-semibold text-slate-400 mb-3">APLICACIONES</p>
                <ul className='space-y-2'>
                    {
                        sideMenuAplications.map(item => (
                            <SidemenuItem key={item.href} item={item}/>
                        ))
                    }
                </ul>
            </div>

            <div>
                <p className="text-xs font-medium mb-3">OTROS</p>
                <ul className='space-y-2'>
                    {
                        sideMenuOthers.map(item => (
                            <SidemenuItem key={item.href} item={item}/>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}
