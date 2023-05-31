import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SampleAutocomplete from './SampleAutocomplete';
import SampleButtons from './SampleButtons';
import SamplePagination from './SamplePagination';
import SampleAccordion from './SampleAccordion';
import SampleTextFields from './SampleTextFields';
import SampleTable from './SampleTable';
import VerticalLinearStepper from './SampleStepper';
import SampleRatings from './SampleRatings';
import SampleMenu from './SampleMenu';
import SampleLoaders from './SampleLoaders';
import SampleList from './SampleList';
import SampleAlert from './SampleFeedbacks';
import SampleAvatars from './SampleAvatars';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SampleDrawer() {
  const theme = useTheme();
  const [appbarText,setAppbarText] = React.useState('Test Mode')
  const [open, setOpen] = React.useState(false);
  const [element,setElement] = React.useState(<SampleTextFields />)
const [value,setValue]= React.useState(null)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const getLayout=(value)=>{
    console.log(value)
    switch(value){
        case 0: setAppbarText('Sample Accordion'); setElement(<SampleAccordion />);break;
        case 1:setAppbarText('Sample Autocomplete'); setElement (<SampleAutocomplete />) ;break;
        case 2:setAppbarText('Sample Avatars'); setElement (<SampleAvatars />) ;break;
        case 3:setAppbarText('Sample Buttons'); setElement (<SampleButtons />)  ;break;
        case 4:setAppbarText('Sample Alerts'); setElement (<SampleAlert />) ;break;
        case 5:setAppbarText('Sample List'); setElement (<SampleList />)  ;break;
        case 6:setAppbarText('Sample Loaders'); setElement (<SampleLoaders />) ;break;
        case 7:setAppbarText('Sample Menu'); setElement (<SampleMenu />)  ;break;
        case 8:setAppbarText('Sample Pagination'); setElement (<SamplePagination />) ;break;
        case 9:setAppbarText('Sample Rating'); setElement (<SampleRatings />)  ;break;
        case 10:setAppbarText('Sample Stepper'); setElement (<VerticalLinearStepper />) ;break;
        case 11:setAppbarText('Sample Accordion'); setElement (<SampleTable /> ) ;break;
        case 12 :setAppbarText('Sample Text'); setElement (<SampleTextFields />) 
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           {appbarText}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List>
          {['Accordion', 'Autocomplete', 'Avatars', 'Buttons','Feedbacks','List',
          'Loaders','Menu','Pagination','Ratings','Stepper','Table','Text Fields'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={()=>{setValue(index);getLayout(index); handleDrawerClose()}}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  General
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <List>
          {['Accordion', 'Autocomplete', 'Avatars', 'Buttons','Feedbacks','List',
          'Loaders','Menu','Pagination','Ratings','Stepper','Table','Text Fields'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={()=>{setValue(index);getLayout(index); handleDrawerClose()}}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
              </AccordionDetails>
                </Accordion>
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       {
        element
       }
       
      </Main>
    </Box>
  );
}