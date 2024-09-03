import Alert from 'react-bootstrap/Alert';

function AlertExample(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    <div style ={{height:'50px'}}>
    {/* // setInterval() */}
    {props.alert && <div>
      {[
        `${props.alert.type}`,
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
           <b>{capitalize(props.alert.type)}</b> : {props.alert.msg}
        </Alert>
      ))}
    </div>}
    </div>
  );
}

export default AlertExample;