const parent= document.getElementById("container");
console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement('h2',{ style: { backgroundColor: "brown", color: "white", paddingLeft: "10px" } },"Welcome to React Development using CDN");
root.render(h2);

function Profile() {
  const name = "Amit Kumar Singh";
  const rollNumber = "23";
  const branch = "Information Technology";
  const section = "c";
  const college = "ABES Engineering College";
  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "250px", borderRadius: "8px" , alignContent:"center"}}>
      <h3 style={{ textAlign: "center" }}>Student Profile</h3>
      <p><b>Name:</b> {name}</p>
      <p><b>Roll No:</b> {rollNumber}</p>
      <p><b>Branch:</b> {branch}</p>
      <p><b>Section:</b> {section}</p>
      <p><b>College:</b> {college}</p>
    </div>
  );
}
root.render(<Profile />);
