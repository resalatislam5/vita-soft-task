import Edit from "./Edit";

function editPage(props) {
  return (
    <div>
      <Edit id={props.params.id} />
    </div>
  );
}

export default editPage;
