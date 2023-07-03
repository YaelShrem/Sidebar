import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

const SidebarItemButton = styled(ListItemButton)(({ theme }) => ({
  minHeight: 48,
  justifyContent: 'center',
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  borderRadius: '0.5em',
  color: 'white',
  '&:hover': {
    backgroundColor: '#20386F',
    color: '#D4E3F7',
  },
  '&[aria-pressed="true"]': {
    backgroundColor: 'white',
    color: '#0A1540',
  },
}));

const SidebarItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 0,
  marginRight: theme.spacing(3),
  justifyContent: 'center',
}));

const SidebarItemText = styled(ListItemText)({});

const SidebarItemWrapper = styled(ListItem)(() => ({
}));

interface SidebarItemProps {
  open?: boolean;
  value: string;
  icon?: React.ReactElement;
  selectedItem?: string | null;
  handleClick: (value: string) => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const { open, value, icon, selectedItem, handleClick } = props;

  return (
    <Tooltip title={open ? '' : value} placement="right">
      <SidebarItemWrapper
        key={value}
        disablePadding
        sx={{ display: 'block' }}
      >
        <SidebarItemButton
          onClick={() => handleClick(value)}
          disableRipple
          aria-pressed={selectedItem === value ? 'true' : 'false'}
        >
          <SidebarItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              color: selectedItem === value ? '#0A1540' : '#4E6CA8',
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
    </Tooltip>
  );
};
