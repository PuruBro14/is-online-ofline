import IsInternetWorking from "react-is-internet-working";

function App() {

  console.log(IsInternetWorking);

  if(true){
    return <h1>Your Internet seems to be down,please check your network</h1>;
  }else{
  return (
    <div>
       <h1>Your Internet seems to be working fine</h1>
    </div>
  );
  }
}

export default App;
