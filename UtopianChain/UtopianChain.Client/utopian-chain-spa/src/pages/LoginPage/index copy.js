// import React, { Component } from "react";
// // import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";

// // import MainMiniDrawer from "../../components/containers/MainMiniDrawerContainer";
// // import AppBar from "../../components/views/AppBar";
// // import SideBar from "../../components/views/SideBar";
// import Grid from "@material-ui/core/Grid";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Box from "@material-ui/core/Box";

// // import ImageLogoView from "../../components/views/ImageLogoView";
// // import logo from "../../assets/logoSfedu1.png";
// import Toolbar from "@material-ui/core/Toolbar";
// import MainLayout from "../../layouts/MainLayout/MainLayout";
// // import CardLogin from "./CardLogin/CardLogin";
// // import CardMobile from "./CardMobile/CardMobile";
// import AppBar from "../../components/views/AppBar";
// import { Votes } from "../../Votes";

// export default class LoginPage extends Component {
//   render() {
//     return (
//       <>
//         {/* // Тут мы делим страницу по строкам */}
//         <AppBar />
//         {/* Этот компонент нужен, чтобы компоненты которые идут дальше не проваливались под AppBar */}
//         {/* <MainLayout> */}

//         <Toolbar>...toolbar content...</Toolbar>

//         <Container fixed>
//           <Typography
//             component="div"
//             // style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
//           >
//             <Grid
//               container
//               direction="row"
//               justify="flex-start"
//               alignItems="flex-start"
//               spacing={8}
//             >
//               <Grid item xs={8}>
//                 <Grid
//                   container
//                   direction="column"
//                   justify="flex-start"
//                   alignItems="stretch"
//                   spacing={5}
//                 >
//                   <Grid item></Grid>
//                   <Grid item>{/* <CardMobile /> */}</Grid>
//                 </Grid>
//               </Grid>
//               <Grid item xs={4}>
//                 <Grid
//                   container
//                   direction="column"
//                   justify="flex-start"
//                   alignItems="stretch"
//                   spacing={5}
//                 >
//                   <Grid item></Grid>
//                   <Grid item>{/* <CardLogin /> */}</Grid>
//                   <Votes />
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Grid item></Grid>
//           </Typography>
//         </Container>
//         {/* </MainLayout> */}
//       </>
//     );
//   }
// }
