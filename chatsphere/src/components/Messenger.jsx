import Login from './account/Login'
import ChatDialog from './chat/ChatDialog'
import React, { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider';
import {AppBar,Toolbar,styled,Box} from '@mui/material'
import myImage from '../components/LogoName.png';
const Component= styled(Box)`
height:100vh;
background:#254159;
`;
const Header = styled(AppBar)`
    background-color: #3498db;
    height: 100px;
    box-shadow: none;
`;

const Image=styled('img')({
    height:65,
    width:300,
    marginLeft:40,
    marginTop:10
});

const ProfilePic=styled('img')({
    height:65
});

const Messenger = () => {
    const { account } = useContext(AccountContext);
    
    return (
        <Component>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar>
                        <Image src={myImage}/>
                        <img src={account.picture}/> 
                        </Toolbar>
                        <Box>
                            
                        </Box>
                    </Header>
                    <ChatDialog />
                </>
                :
                    <Login/>
            }
        </Component>
    )
}

export default Messenger;