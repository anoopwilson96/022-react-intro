function  MyTopObject(props){
  console.log(props)
  return(
    <div className="MyTopObj">
    <h1>CLICK & MULTIPLY</h1>
    <h1 className="number5"><b>5</b><span className="power5">{props.power}</span></h1>
    </div>
  );
}
export default MyTopObject