import { useContext } from 'react';
import { Dialog, styled, Box } from '@mui/material';


import Menu from './menu/menu'
import EmptyChat from './EmptyChat';


const Component=styled(Box)`
    display:flex;
`;

const LeftComponent=styled(Box)`
    min-width:450px;
`;

const RightComponent=styled(Box)`
    width:73%;
    min-width:300px;
    height:100%;
    border-left:1px solid rgb(0,0,0);
`;
const dialogStyle = {
  height: '100%',
  width: '100%',
  marginTop: '170px',
  maxWidth:'100%',
  borderRadius: 0,
  boxShadow: 'none',
  overflow: 'hidden',
  backgroundColor: '#fff',
};

const ChatDialog = () => {
  return (
    <Dialog
      open={true}
      BackdropProps={{ style: { backgroundColor: 'unset' } }}
      PaperProps={{ style: dialogStyle }}
      maxWidth={'md'}
    >
      <Component>
        <LeftComponent>
            <Menu/>
        </LeftComponent>
        <RightComponent>
            <EmptyChat/>
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
