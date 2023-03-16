import { gql, useQuery } from "@apollo/client";
import Link from "./components/Footer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import { FC } from "react";
import Router from "./routers";

const App: FC = () => <Router />;

export default App;
