import { Route, Routes } from "react-router-dom";

import Login from "../pages/login";
import SignUp from "../pages/register/index.js";
import Home from "../pages";
import HomePro from "../pages/homePro/index.js";
import Charts from "../pages/charts";
import Volume from "../pages/charts/Volume/index.js";
import Distribution from "../pages/charts/Dostribution/index.js";
import Profit from "../pages/charts/Profit/index.js";
import Transfers from "../pages/charts/Transfers/index.js";
import Liquidity from "../pages/charts/Liquidity/index.js";
import Staking from "../pages/charts/Staking/index.js";
import Portfolio from "../pages/portfolio/index.js";
import Markets from "../pages/markets";
import WatchList from "../pages/watchlist/index.js";
import News from "../pages/news";
import HotWallet from "../pages/hotWallet";
import WalletProfiler from "../pages/walletProfiler/index.js";
import MoneyFlow from "../pages/moneyFlow";
import Account from "../pages/account";
import Multi from "../pages/multi/index.js";
import Partner from "../pages/parthner/index.js";
import PageNotFound from "../pages/notfound";
import MainLayout from "../layout/MainLayout";
import { PrivateRoute, GeneralRoute } from "./PrivateRoute";

import {
  HOME,
  HomePRO,
  LOGIN,
  REGISTER,
  CHARTS,
  CHARTSVOLUME,
  CHARTSDISTRIBUTION,
  CHARTSPROFIT,
  CHARTSTRANSFERS,
  CHARTSLIQUIDITY,
  CHARTSDEBT,
  PORTFOLIO,
  WATCHLIST,
  MARKETS,
  NEWS,
  WALLETPROFILER,
  HOTWALLET,
  MONEYFLOW,
  ACCOUNT,
  MULTI,
  PARTNER
} from "./routes";

function Routers() {
  return (
    <Routes>
      <Route
        path={LOGIN}
        element={
          <GeneralRoute layout={MainLayout}>
            <Login />
          </GeneralRoute>
        }
      />
      <Route
        path={REGISTER}
        element={
          <GeneralRoute layout={MainLayout}>
            <SignUp />
          </GeneralRoute>
        }
      />
      <Route
        path={HOME}
        element={
          <GeneralRoute layout={MainLayout}>
            <Home />
          </GeneralRoute>
        }
      />
      <Route
        path={HomePRO}
        element={
          <GeneralRoute layout={MainLayout}>
            <HomePro />
          </GeneralRoute>
        }
      />
      <Route
        path={CHARTS}
        element={
          <GeneralRoute layout={MainLayout}>
            <Charts />
          </GeneralRoute>
        }
      />
      <Route
        path={CHARTSVOLUME}
        element={
          <GeneralRoute layout={MainLayout}>
            <Volume />
          </GeneralRoute>
        }
      />
      <Route
        path={CHARTSDISTRIBUTION}
        element={
          <GeneralRoute layout={MainLayout}>
            <Distribution />
          </GeneralRoute>
        }
      />
      <Route
        path={CHARTSPROFIT}
        element={
          <GeneralRoute layout={MainLayout}>
            <Profit />
          </GeneralRoute>
        }
      />
      <Route
        path={CHARTSTRANSFERS}
        element={
          <GeneralRoute layout={MainLayout}>
            <Transfers />
          </GeneralRoute>
        }
      />
      <Route
        path={CHARTSLIQUIDITY}
        element={
          <GeneralRoute layout={MainLayout}>
            <Liquidity />
          </GeneralRoute>
        }
      />
      <Route
        path={CHARTSDEBT}
        element={
          <GeneralRoute layout={MainLayout}>
            <Staking />
          </GeneralRoute>
        }
      />
      <Route
        path={MARKETS}
        element={
          <GeneralRoute layout={MainLayout}>
            <Markets />
          </GeneralRoute>
        }
      />
      <Route
        path={NEWS}
        element={
          <GeneralRoute layout={MainLayout}>
            <News />
          </GeneralRoute>
        }
      />
      <Route
        path={MULTI}
        element={
          <GeneralRoute layout={MainLayout}>
            <Multi />
          </GeneralRoute>
        }
      />
        <Route
        path={PARTNER}
        element={
          <GeneralRoute layout={MainLayout}>
            <Partner />
          </GeneralRoute>
        }
      />
      <Route
        path={WALLETPROFILER}
        element={
          <GeneralRoute layout={MainLayout}>
            <WalletProfiler />
          </GeneralRoute>
        }
      />
      <Route
        path={HOTWALLET}
        element={
          <GeneralRoute layout={MainLayout}>
            <HotWallet />
          </GeneralRoute>
        }
      />
      <Route
        path={WALLETPROFILER}
        element={
          <GeneralRoute layout={MainLayout}>
            <WalletProfiler />
          </GeneralRoute>
        }
      />
      <Route
        path={MONEYFLOW}
        element={
          <GeneralRoute layout={MainLayout}>
            <MoneyFlow />
          </GeneralRoute>
        }
      />

      <Route
        path={PORTFOLIO}
        element={
          <GeneralRoute layout={MainLayout}>
            <Portfolio />
          </GeneralRoute>
        }
      />
      <Route
        path={WATCHLIST}
        element={
          <PrivateRoute layout={MainLayout}>
            <WatchList />
          </PrivateRoute>
        }
      />
      <Route
        path={ACCOUNT}
        element={
          <PrivateRoute layout={MainLayout}>
            <Account />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={
          <GeneralRoute layout={MainLayout}>
            <PageNotFound />
          </GeneralRoute>
        }
      />
    </Routes>
  );
}

export default Routers;
