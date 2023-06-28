import React, { forwardRef, useState} from 'react';
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink, NavLinkProps } from "react-router-dom";

const SidebarItemButton = styled(ListItemButton)(({ theme }) => ({
  minHeight: 48,
  justifyContent: 'center',
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  borderRadius: "0.5em",
  color: 'white',
  "&:hover": {
    backgroundColor: "#20386F",
    color: '#D4E3F7',
  },
  '&[aria-pressed="true"]': {
    backgroundColor: 'white',
    color: '#0A1540'
},
  }));

  const SidebarItemIcon = styled(ListItemIcon)(({ theme,  }) => ({
    minWidth: 0,
    marginRight: theme.spacing(3),
    justifyContent: 'center',
  }));
  

const SidebarItemText = styled(ListItemText)({
  //opacity: 1,
  //color: 'white',
});

const SidebarItemWrapper = styled(ListItem)(() => ({
  '&.active': {
    background: 'yellow !important',
    '& .MuiListItemIcon-root': {
      color: '#fff',
    },},
}));

interface SidebarItemProps {
  open?: boolean;
  value?: string;
  icon: React.ReactElement;
}

// export interface SidebarItemComponentProps {
//   className?: string;
//   link?: string | null; // because the InferProps props allows alows null value
//   onClick?: (event: React.MouseEvent<HTMLElement>) => void;
// }

export const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const { open, value, icon } =props;
  // const { className, onClick, link, children } = props;
  const [clicked, setClicked] = useState(false);
    const handleClick = () => {
      setClicked(!clicked);
    };
    return (
    <SidebarItemWrapper key={value} 
    disablePadding
    // button 
    // component={forwardRef((props: NavLinkProps, ref: any) => (
    //   <NavLink exact {...props} innerRef={ref} />
    // ))}
    // to='/good'
    sx={{ display: "block"
     }}>
      <SidebarItemButton
        onMouseEnter={(event) => event.currentTarget.setAttribute('aria-pressed', 'false')}
        onMouseLeave={(event) => event.currentTarget.setAttribute('aria-pressed', 'false')}
        onClick={(event) => {handleClick(); event.currentTarget.setAttribute('aria-pressed', 'true')}}
        disableRipple
      >
        <SidebarItemIcon                  
                sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: clicked ? '#0A1540' : '#4E6CA8'
                  }}
                >
                  {icon}
        </SidebarItemIcon>
        <SidebarItemText
          primary={value}
          sx={{ opacity: open ? 1 : 0 }}
          className={open ? 'visible' : ''}
        />
      </SidebarItemButton>
    </SidebarItemWrapper>
  );
};
