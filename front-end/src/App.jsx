import "./App.css";
import Header from "./components/common/Header";
import Loading from "./components/common/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/protected/Home";
import Search from "./pages/protected/Search";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import { Box } from "@mui/material";
import ProtectedLayout from "./pages/protected/ProtectedLayout";
function App() {
  return (
    <>
      {/* <SignUp /> */}
      <Box minHeight={"100vh"}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedLayout />}>
              <Route path="" element={<Home/>} />
              <Route path="post/:id" element={<h1>Home</h1>} />
              <Route path="search" element={<h1>Home</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
      {/* <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Search />}></Route>
          <Route path="/user" element={<h1>User</h1>}></Route>
          <Route path='*' element={<Error /> }></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
