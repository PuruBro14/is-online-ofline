import useIsInternetWorking from "./useIsInternetWorking";

function App() {

  const isInternetWorking=useIsInternetWorking();

  if (!isInternetWorking) {
    return <h1>Your Internet seems to be down,please check your network</h1>;
  } else {
    return (
      <div>
        <h1>Your Internet seems to be working fine</h1>
      </div>
    );
  }
}

export default App;
