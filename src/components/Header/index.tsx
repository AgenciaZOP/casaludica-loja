import React, { useEffect, useState } from 'react'
import './style.scss'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton, Badge } from '@mui/material'
import { Menu } from '../Menu'
import { ReactComponent as CartIcon } from '../../images/cart.svg'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import { Cart } from '../Cart'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../Loading'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { CepModal } from '../CepModal'

export const Header = () => {
	const [openMenu, setOpenMenu] = useState(false)
    const [cepModal, setCepModal] = useState(false)

    const cart = useCart()
    const navigate = useNavigate()
    const storage = useLocalStorage()

    useEffect(() => {
        if (!storage.get("address")) {
            setCepModal(true)
        }
    }, [])

    return (
        <>
            <div className="Header-Component">
                <IconButton color="secondary" sx={{ gap: "2vw" }} onClick={() => setOpenMenu(true)}>
                    <MenuIcon sx={{ flex: 1 }} />
                </IconButton>
                <LogoIcon onClick={() => navigate("/")} />
                <Badge badgeContent={cart.products?.length || 0} color="primary">
                    <IconButton color="secondary" sx={{ gap: "2vw" }} onClick={() => cart.setOpen(true)}>
                        <CartIcon style={{ flex: 1 }} />
                    </IconButton>
                </Badge>
            </div>
            <Menu isOpen={openMenu} setOpen={setOpenMenu} />
            <Cart isOpen={cart.open} setOpen={cart.setOpen} />
            <Loading />

            <CepModal open={cepModal} setOpen={setCepModal} />
        </>
    )
}
